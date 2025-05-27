import { useLanguageStore } from '../stores/useLanguageStore';

interface LanguageSwitcherProps {
  colorLanguage?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ colorLanguage }) => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
      className="rounded px-2 py-1  hover:bg-gray-800 cursor-pointer
"
    >
      <option className="text-black" style={{ color: colorLanguage }} value="pt">
        🇧🇷 Português
      </option>
      <option  className="text-black"style={{ color: colorLanguage }} value="en">
        🇺🇸 English
      </option>
    </select>
  );
};
