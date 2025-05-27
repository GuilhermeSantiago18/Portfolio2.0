import { useState } from 'react';
import { ChromePicker, type ColorResult } from 'react-color';
import { useThemeStore } from '../../stores/useThemeStore';
import { Moon, Sun } from 'lucide-react';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { THEME_DARK } from '../../constants/theme';
import { useTranslation } from 'react-i18next';
import { IconButton } from '../Buttons/IconButton';
import { ActionButton } from '../Buttons/ActionButton';

export const Header = () => {
  const { t } = useTranslation();
  const { theme, toggleTheme, setCustomTheme, primaryColor } = useThemeStore();

  const [showPicker, setShowPicker] = useState(false);
  const [tempColor, setTempColor] = useState('#4f46e5');

  const handleColorChange = (color: ColorResult) => {
    setTempColor(color.hex);
  };

  const confirmColor = () => {
    setCustomTheme(theme, tempColor);
    setShowPicker(false);
    toggleTheme();
  };

  return (
    <header className="flex flex-row justify-around md:flex-col md:items-end p-4 mr-2 md:mr-4 rounded-2xl relative z-50">
      <div className="flex items-center gap-2">
        <IconButton
          onClick={toggleTheme}
          title={t('change_theme')}
          icon={theme === THEME_DARK ? <Sun size={20} /> : <Moon size={20} />}
        />

        <ActionButton onClick={() => setShowPicker(true)}>
          🎨 {t('header.customize')}
        </ActionButton>

        <LanguageSwitcher colorLanguage={primaryColor} />
      </div>

      {showPicker && (
        <div className="absolute top-full mt-2 right-0 bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg">
          <ChromePicker color={tempColor} onChange={handleColorChange} disableAlpha />
          <button
            onClick={confirmColor}
            className="mt-2 w-full bg-green-500 text-white py-1 rounded hover:bg-green-600 cursor-pointer"
          >
            {t('header.confirm_color')}
          </button>
        </div>
      )}
    </header>
  );
};
