import React from 'react';

interface CardProps {
  title: string;
  description: string;
  backgroundColor: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, backgroundColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor }}
      className="dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-200 max-w-full break-words min-h-45 cursor-pointer"
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={e => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          onClick();
        }
      }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
