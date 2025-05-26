import React from 'react';

interface ScrollToProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollTo: React.FC<ScrollToProps> = ({ targetId, children, className }) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div onClick={handleClick} className={className} role="button">
      {children}
    </div>
  );
};

export default ScrollTo;
