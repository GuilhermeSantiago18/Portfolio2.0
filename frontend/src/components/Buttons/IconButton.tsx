// src/components/Buttons/IconButton.tsx
import React from 'react';

interface IconButtonProps {
  onClick?: () => void;
  title?: string;
  icon: React.ReactNode;
  href?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick, title, icon, href }) => {
  const className = "p-2 rounded-full hover:bg-gray-500 dark:hover:bg-gray-700 cursor-pointer";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={className}
      >
        {icon}
      </a>
    );
  }

  return (
    <button onClick={onClick} title={title} className={className}>
      {icon}
    </button>
  );
};
