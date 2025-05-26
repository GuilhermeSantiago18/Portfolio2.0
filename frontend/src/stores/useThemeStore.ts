import {create} from 'zustand';
import { THEME_LIGHT, THEME_DARK, type ThemeType } from '../constants/theme';

interface ThemeState {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: THEME_LIGHT,
  setTheme: (theme: ThemeType) => set({ theme }),
  toggleTheme: () => {
    const currentTheme = get().theme;
    set({ theme: currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT });
  }
}));
