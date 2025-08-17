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
  className = 'px-3 py-1 rounded hover cursor-pointer hover:scale-105 transition w-28',
  icon,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={className || "rounded-xl cursor-pointer hover:scale-105 transition mb-2 inline-flex items-center justify-center"}
      >
        <img src='/assets/web.svg' width={120} height={600} />{icon || children}
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
