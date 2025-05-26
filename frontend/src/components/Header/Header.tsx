import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../../stores/useThemeStore';
import { Moon, Sun } from 'lucide-react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { THEME_DARK } from '../../constants/theme';

export const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="flex flex-col items-end rounded-2xl p-4">
      <div className="flex ">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200"
          title={t('change_theme')}
        >
          {theme === THEME_DARK ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <LanguageSwitcher />
      </div>
    </header>
  );
};
