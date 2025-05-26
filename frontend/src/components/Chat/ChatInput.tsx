import { useState } from 'react';
import axios from 'axios';
import { useThemeStore } from '../../stores/useThemeStore';
import { themeFactory } from '../../utils/themeFactory';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const themeType = useThemeStore(state => state.theme);
  const theme = themeFactory(themeType);

  const handleSend = async () => {
    if (!message.trim()) return;
    try {
      const res = await axios.post(process.env.BACKEND_URL, { message });
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
        placeholder="Digite sua mensagem..."
      />
      <button onClick={handleSend}>Enviar</button>

      {response && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Resposta:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
