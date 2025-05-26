import { THEME_DARK, THEME_LIGHT } from "../../constants/theme";


export interface Theme {
  type: typeof THEME_LIGHT | typeof THEME_DARK;
  background: string;
  text: string;
  inputBackground: string;
  borderColor: string;
}

export const lightTheme = {
  type: THEME_LIGHT,
  background: '#f5f5f5',
  text: '#111',
  inputBackground: '#fff',
  borderColor: '#ccc',
};



export const darkTheme = {
  type: THEME_DARK,
  background: '#121212',
  text: '#fff',
  inputBackground: '#1e1e1e',
  borderColor: '#333',
};
