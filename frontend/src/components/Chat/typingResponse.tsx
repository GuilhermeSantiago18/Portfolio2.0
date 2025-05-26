import { useEffect, useState } from 'react';

type TypingProps = {
  text: string;
  speed?: number;
};

export const TypingResponse = ({ text, speed = 25 }: TypingProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="whitespace-pre-line leading-relaxed">{displayedText}</p>;
};
