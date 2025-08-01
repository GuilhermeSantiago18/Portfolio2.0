import { useThemeStore } from './stores/useThemeStore';
import { themeFactory } from './utils/themeFactory';
import Home from './screens/Home';
import { Header } from './components/Header/Header';
import ChatInput from './components/Chat/ChatInput';
import Footer from './components/Footer/Footer';

function App() {
  const themeType = useThemeStore(state => state.theme);
  const theme = themeFactory(themeType);

  return (
    <div style={{ background: theme.background, color: theme.text}}>
      <Header />
      <Home />
      <ChatInput />
      <Footer />
    </div>
  );
}

export default App;
