import { useEffect, useState } from 'react';

type TypingProps = {
  text: string;
  speed?: number;
};

export const TypingResponse = ({ text, speed = 25 }: TypingProps) => {
  const [displayedText, setDisplayedText] = useState('');

 useEffect(() => {
  let currentIndex = 0;
  setDisplayedText('');

  const interval = setInterval(() => {
    if (currentIndex < text.length) {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;
    } else {
      clearInterval(interval);
    }
  }, speed);

  return () => clearInterval(interval);
}, [text, speed]);



  return <p className="whitespace-pre-line leading-relaxed">{displayedText}</p>;
};
