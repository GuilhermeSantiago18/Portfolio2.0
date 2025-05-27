import React from 'react';

interface IconButtonProps {
  onClick: () => void;
  title?: string;
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ onClick, title, icon }) => (
  <button
    onClick={onClick}
    className="p-2 rounded-full hover:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
    title={title}
  >
    {icon}
  </button>
);
