import { create } from 'zustand';
import { PRIMARY_COLOR, THEME_DARK, THEME_LIGHT } from '../constants/theme';

interface ThemeState {
  theme: 'light' | 'dark';
  primaryColor: string;
  toggleTheme: () => void;
  setPrimaryColor: (color: string) => void;
  setCustomTheme: (theme: 'light' | 'dark', primaryColor: string) => void; 
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: THEME_LIGHT,
  primaryColor: PRIMARY_COLOR,
  toggleTheme: () => {
    const newTheme = get().theme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    set({ theme: newTheme });
  },
  setPrimaryColor: (color) => {
    set({ primaryColor: color });
  },
  setCustomTheme: (theme, primaryColor) => {
    set({ theme, primaryColor });
  },
}));