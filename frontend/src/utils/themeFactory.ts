import { THEME_DARK, THEME_LIGHT, type ThemeType } from '../constants/theme';
import { lightTheme, darkTheme } from '../styles/themes/themeStyle';

export const themeFactory = (type: ThemeType) => {
  switch (type) {
    case THEME_LIGHT:
      return lightTheme;
    case THEME_DARK:
      return darkTheme;
    default:
      return lightTheme;
  }
};
