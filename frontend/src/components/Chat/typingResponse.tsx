import { useEffect, useState } from 'react';

type TypingProps = {
  text: string;
  speed?: number;
};

export const TypingResponse = ({ text, speed = 25 }: TypingProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let isCancelled = false;

    const typeText = async () => {
      setDisplayedText('');
      for (let i = 0; i < text.length; i++) {
        if (isCancelled) return;
        setDisplayedText((prev) => prev + text[i]);
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    if (text) typeText();

    return () => {
      isCancelled = true;
    };
  }, [text, speed]);

  return (
    <p className="whitespace-pre-line leading-relaxed mt-4 w-full max-w-md text-left">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
};
