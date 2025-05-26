import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../../stores/useThemeStore';
import { Moon, Sun, Globe } from 'lucide-react';
import { LanguageSwitcher } from '../LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();


  return (
    <header className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-semibold">{t('chat_title')}</h1>

      <div className="flex gap-4 items-center">
        {/* Botão de troca de tema */}
        <button
          onClick={toggleTheme}
          title={t('change_theme')}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
