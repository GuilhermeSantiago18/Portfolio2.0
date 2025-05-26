import { useLanguageStore } from '../stores/useLanguageStore';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
      className="rounded px-2 py-1"
    >
      <option value="pt">🇧🇷 Português</option>
      <option value="en">🇺🇸 English</option>
    </select>
  );
};
