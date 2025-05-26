// stores/useThemeStore.ts
import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  primaryColor: string;
  toggleTheme: () => void;
  setPrimaryColor: (color: string) => void;
  setCustomTheme: (theme: 'light' | 'dark', primaryColor: string) => void; 
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'light',
  primaryColor: '#f72585',
  toggleTheme: () => {
    const newTheme = get().theme === 'light' ? 'dark' : 'light';
    set({ theme: newTheme });
  },
  setPrimaryColor: (color) => {
    set({ primaryColor: color });
  },
  setCustomTheme: (theme, primaryColor) => {
    set({ theme, primaryColor });
  },
}));