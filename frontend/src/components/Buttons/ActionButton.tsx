import React from 'react';
import { Loader } from '../Loader';

interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  loading?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children, loading = false }) => (
  <button
    disabled={loading}
    onClick={onClick}
    className="px-3 py-1 rounded hover:bg-gray-500 dark:hover:bg-gray-700 cursor-pointer"
  >
    {loading && <Loader size={12} color="currentColor" />}
    {children}
  </button>
);
