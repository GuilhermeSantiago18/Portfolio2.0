import { useState } from 'react';
import axios from 'axios';
import { useThemeStore } from '../../stores/useThemeStore';
import { themeFactory } from '../../utils/themeFactory';
import { TypingResponse } from './typingResponse';
import { useTranslation } from 'react-i18next';

const api = import.meta.env.VITE_BACKEND_URL;


const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
    const { t } = useTranslation();

  const {primaryColor} = useThemeStore();


  const handleSend = async () => {
    if (!message.trim()) return;
    try {
      const res = await axios.post(`${api}/chat`, { message });
      setResponse(res.data.response);
    } catch (err) {
      setResponse('Erro ao conectar com o servidor.');
    }
  };

  return (

    <div id='guilherme-ai' className='flex justify-center flex-col items-center'>
          <h1>Guilherme AI</h1>
       <input
    type="text"
    style={{
      backgroundColor: primaryColor,
      borderColor: primaryColor,
    }}
    className="flex justify-center w-3/4 max-w-md h-12 rounded-md border focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    placeholder={t('chatOpenAI.placeholder')}
  />
      <button onClick={handleSend}>{t('send')}</button>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Guilherme AI:</strong>
          <p>{response && <TypingResponse text={response} />}</p>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
