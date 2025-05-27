import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";
import { useThemeStore } from "../../stores/useThemeStore";

const ThemeToggle = () => {
  const theme = useThemeStore(state => state.theme);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  return (
    <button onClick={toggleTheme}>
      Mudar para {theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT} Theme
    </button>
  );
};

export default ThemeToggle;
