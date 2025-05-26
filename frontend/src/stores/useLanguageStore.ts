import { create } from 'zustand';
import i18n from '../i18n';

type LanguageState = {
  language: 'pt' | 'en';
  setLanguage: (lang: 'pt' | 'en') => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: localStorage.getItem('lang') as 'pt' | 'en' || 'pt',

  setLanguage: (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    set({ language: lang });
  },
}));
