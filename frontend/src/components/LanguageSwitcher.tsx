import { useLanguageStore } from '../stores/useLanguageStore';

interface LanguageSwitcherProps {
  colorLanguage?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
      className="p-1 hover:bg-gray-500 dark:hover:bg-gray-700 cursor-pointer rounded
"
    >
      <option value="pt">
        🇧🇷 Português
      </option>
      <option value="en">
        🇺🇸 English
      </option>
    </select>
  );
};
