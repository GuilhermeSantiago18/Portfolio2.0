import { THEME_LIGHT } from '../constants/theme';
import { useThemeStore } from '../stores/useThemeStore';
import { getThemeFromColor } from './themeGenerator';

export const themeFactory = (themeType?: string) => {
  const { theme, primaryColor } = useThemeStore.getState();
  const currentTheme = themeType || theme;
  const themes = getThemeFromColor(primaryColor);
  return currentTheme === THEME_LIGHT ? themes.light : themes.dark;
};