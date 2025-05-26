import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../../stores/useLanguageStore';
import { useThemeStore } from '../../stores/useThemeStore';

export const Header = () => {
  const { t } = useTranslation();
  const { setLanguage, language } = useLanguageStore();
   const { toggleTheme } = useThemeStore();

  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-semibold">{t('chat_title')}</h1>

      <div className="flex gap-3 items-center">
        <button onClick={toggleTheme} className="px-3 py-1 border rounded">
          {t('change_theme')}
        </button>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'pt' | 'en')}
          className="border px-2 py-1 rounded"
        >
          <option value="pt">🇧🇷 PT</option>
          <option value="en">🇺🇸 EN</option>
        </select>
      </div>
    </header>
  );
};
