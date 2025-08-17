import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { TypingResponse } from './typingResponse';
import { useTranslation } from 'react-i18next';
import { ActionButton } from '../Buttons/ActionButton';

const api = import.meta.env.VITE_BACKEND_URL;

const ChatInput = () => {
  const [message, setMessage] = useState('');
  // response text is rendered via history using TypingResponse
  const [history, setHistory] = useState<{role: 'user'|'assistant', content: string}[]>([]);
  const listRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleSend = async () => {
    if (!message.trim()) return;

    setLoading(true);
    // push user message immediately for better UX
    setHistory(prev => [...prev, { role: 'user', content: message }]);
    try {
        console.log("api", api)
      const res = await axios.post(`${api}/api/chat`, { message });
      setHistory(prev => [...prev, { role: 'assistant', content: res.data.response }]);
      setMessage('');
    } catch (err) {
      if (err) {
        setHistory(prev => [...prev, { role: 'assistant', content: t('chatOpenAI.error') }]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [history, loading]);

  return (
    <div className="flex flex-col items-center w-full px-4 min-h-[60vh]">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-black dark:bg-gray-950">
          <div className="text-sm font-semibold">Guilherme AI</div>
          <div className="text-xs opacity-70">{t('chat_title')}</div>
        </div>
        <div ref={listRef} className="h-[38vh] overflow-y-auto p-4 space-y-3 bg-white dark:bg-gray-900">
          {history.length === 0 && (
            <div className="text-sm opacity-70">{t('chatOpenAI.placeholder')}</div>
          )}
          {history.map((msg, idx) => {
            const isLast = idx === history.length - 1;
            const isAssistant = msg.role === 'assistant';
            return (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm ${msg.role === 'user' ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-50 rounded-br-sm' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm'}`}>
                  {isAssistant && isLast ? (
                    <TypingResponse text={msg.content} speed={16} />
                  ) : (
                    <span className="whitespace-pre-line">{msg.content}</span>
                  )}
                </div>
              </div>
            );
          })}
          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] px-4 py-2 rounded-2xl text-sm bg-gray-100 dark:bg-gray-800 dark:text-gray-100 shadow-sm rounded-bl-sm">
                <TypingResponse text="..." speed={50} />
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 p-3 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
          <input
          id='guilherme-ai'
          type="text"
          className="px-4 w-full h-11 rounded-full border bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border-gray-300 dark:border-gray-700 caret-gray-900 dark:caret-gray-100 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('chatOpenAI.placeholder')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !loading) handleSend();
          }}
          disabled={loading}
        />
        <ActionButton onClick={handleSend} loading={loading} title={t('chatOpenAI.send')} className="px-4 py-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90">
          {!loading && t('chatOpenAI.send')}
        </ActionButton>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
