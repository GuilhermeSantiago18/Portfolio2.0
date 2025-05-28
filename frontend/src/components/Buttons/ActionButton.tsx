import React from 'react';
import { Loader } from '../Loader';

interface ActionButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  loading?: boolean;
  href?: string;
  title?: string;
  className?: string;
  icon?: React.ReactNode;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
  loading = false,
  href,
  title,
  className = 'px-3 py-1 rounded hover:bg-gray-500 dark:hover:bg-gray-700 cursor-pointer',
  icon,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className="w-34 md:w-20 rounded-xl cursor-pointer hover:scale-105 transition mb-2"
      >
        <img src='/assets/web.svg' width={200} height={500}></img>{icon || children}
      </a>
    );
  }

  return (
    <button
      disabled={loading}
      onClick={onClick}
      title={title}
      className={className}
    >
      {loading && <Loader size={12} color="currentColor" />}
      {!loading && (icon || children)}
    </button>
  );
};
