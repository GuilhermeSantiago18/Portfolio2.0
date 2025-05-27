import { useState } from 'react';
import axios from 'axios';
import { useThemeStore } from '../../stores/useThemeStore';
import { TypingResponse } from './typingResponse';
import { useTranslation } from 'react-i18next';
import { ActionButton } from '../Buttons/ActionButton';

const api = import.meta.env.VITE_BACKEND_URL;

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { primaryColor } = useThemeStore();

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);
    try {
        console.log("api", api)
      const res = await axios.post(`${api}/api/chat`, { message });
      setResponse(res.data.response);
      setMessage('');
    } catch (err) {
      setResponse(t('chatOpenAI.error'));  
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 min-h-[50vh]">
      <div className="flex w-full max-w-2xl justify-end gap-2">
        <input
         id='guilherme-ai'
          type="text"
          style={{
            backgroundColor: primaryColor,
            borderColor: primaryColor,
          }}
          className="p-2 w-full max-w h-10 rounded-md border focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('chatOpenAI.placeholder')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !loading) handleSend();
          }}
          disabled={loading}
        />
        <ActionButton onClick={handleSend} loading={loading}>
          {!loading && t('send')}
        </ActionButton>
      </div>
      {response && (
        <div className="w-full max-w-2xl mt-4 text-center">
          <TypingResponse text={response} />
        </div>
      )}
    </div>
  );
};

export default ChatInput;
