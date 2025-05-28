// src/components/ui/StoreBadge.tsx
import React from 'react';

interface StoreBadgeProps {
  href: string;
  src: string;
  alt: string;
  className?: string;
}

const StoreBadge: React.FC<StoreBadgeProps> = ({ href, src, alt, className }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} className={`hover:scale-105 transition ${className || ''}`} />
  </a>
);

export default StoreBadge;
