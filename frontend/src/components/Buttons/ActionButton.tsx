import React from 'react';

interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
  >
    {children}
  </button>
);
