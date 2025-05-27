import { THEME_LIGHT } from '../constants/theme';
import { useThemeStore } from '../stores/useThemeStore';
import { getThemeFromColor } from './themeGenerator';

export const themeFactory = (_themeType?: string) => {
  const { theme, primaryColor } = useThemeStore.getState();
  const themes = getThemeFromColor(primaryColor);
  return theme === THEME_LIGHT ? themes.light : themes.dark;
};
