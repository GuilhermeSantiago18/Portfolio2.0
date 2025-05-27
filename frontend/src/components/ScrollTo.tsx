import React from 'react';

interface ScrollToProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  scrollAlign?: 'start' | 'center' | 'end' | 'nearest';
}

const ScrollTo: React.FC<ScrollToProps> = ({ targetId, children, className, scrollAlign = 'start'}) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({  behavior: 'smooth', block: scrollAlign });
    }
  };

  return (
    <div onClick={handleClick} className={className} role="button">
      {children}
    </div>
  );
};

export default ScrollTo;
