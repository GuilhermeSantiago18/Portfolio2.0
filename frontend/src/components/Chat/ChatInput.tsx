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

  const themeType = useThemeStore(state => state.theme);
  const theme = themeFactory(themeType);

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
    <div>
      <input
        type="text"
        style={{
          background: theme.inputBackground,
          color: theme.text,
          border: `1px solid ${theme.borderColor}`,
          padding: '0.5rem',
          width: '100%',
          marginBottom: '1rem'
        }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={t('placeholder')}
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
