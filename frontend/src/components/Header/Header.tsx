import { useState } from 'react';
import { ChromePicker, type ColorResult } from 'react-color';
import { useThemeStore } from '../../stores/useThemeStore';
import { Moon, Sun } from 'lucide-react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { THEME_DARK } from '../../constants/theme';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme, setCustomTheme } = useThemeStore();

  const [showPicker, setShowPicker] = useState(false);
  const [tempColor, setTempColor] = useState('#4f46e5');

  const handleColorChange = (color: ColorResult) => {
    setTempColor(color.hex);
  };

  const confirmColor = () => {
    setCustomTheme(theme, tempColor);
    setShowPicker(false);
    toggleTheme()
  };

  return (
    <header className="flex flex-row justify-around md:flex-col md:items-end p-4 mr-10 md:mr-8 rounded-2xl relative z-50 min-w-screen">
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          title={t('change_theme')}
        >
          {theme === THEME_DARK ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          onClick={() => setShowPicker(true)}
          // style={{backgroundColor: primaryColor}}
          className="px-3 py-1 rounded text-black  hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          🎨 {t('header.customize')}
        </button>

        <LanguageSwitcher />
      </div>

      {showPicker && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg">
          <ChromePicker color={tempColor} onChange={handleColorChange} disableAlpha />
          <button
            onClick={confirmColor}
            className="mt-2 w-full bg-green-500 text-white py-1 rounded hover:bg-green-600"
          >
            {t('header.confirm_color')}
          </button>
        </div>
      )}
    </header>
  );
};
