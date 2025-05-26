import ChatInput from '../components/Chat/ChatInput';
import ThemeToggle from '../components/Chat/ThemeToggle';

const Home = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Chat com OpenAI</h1>
      <ThemeToggle />
      <ChatInput />
    </div>
  );
};

export default Home;
