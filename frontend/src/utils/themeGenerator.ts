import chroma from 'chroma-js';

const MIN_CONTRAST = 4.5;

const getReadableText = (bg: string) => {
  const whiteContrast = chroma.contrast(bg, 'white');
  const blackContrast = chroma.contrast(bg, 'black');

  return whiteContrast >= blackContrast ? '#ffffff' : '#000000';
};

const adjustBackgroundForContrast = (base: string, textColor: string) => {
  let bg = chroma(base);
  let contrast = chroma.contrast(bg, textColor);
  let tries = 0;

  while (contrast < MIN_CONTRAST && tries < 10) {
    bg = textColor === '#ffffff' ? bg.darken(0.5) : bg.brighten(0.5);
    contrast = chroma.contrast(bg, textColor);
    tries++;
  }

  return bg.hex();
};

export const getThemeFromColor = (baseColor: string) => {
  const tempTextColor = getReadableText(baseColor);

  const lightBackground = adjustBackgroundForContrast(
    chroma(baseColor).brighten(3).hex(),
    tempTextColor
  );

  const darkBackground = adjustBackgroundForContrast(
    chroma(baseColor).darken(3).hex(),
    tempTextColor
  );

  const lightText = getReadableText(lightBackground);
  const darkText = getReadableText(darkBackground);

  return {
    light: {
      background: lightBackground,
      text: lightText,
    },
    dark: {
      background: darkBackground,
      text: darkText,
    },
  };
};
