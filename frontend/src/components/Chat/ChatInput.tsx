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
      const res = await axios.post(`${api}/chat`, { message });
      setResponse(res.data.response);
      setMessage('');
    } catch (err) {
      setResponse('test drive');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="guilherme-ai" className="flex justify-center flex-row items-center min-h-48">
      <input
        type="text"
        style={{
          backgroundColor: primaryColor,
          borderColor: primaryColor,
        }}
        
        className="flex justify-center p-2 w-3/4 max-w-md h-8 rounded-md border focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
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

     {response && (
  <div style={{ marginTop: '1rem' }}>
    <p> {response ?? ''}</p>
  </div>
)}

    </div>
  );
};

export default ChatInput;
