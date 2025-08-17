import React from 'react';

interface ScrollToProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
  scrollAlign?: 'start' | 'center' | 'end' | 'nearest';
  offset?: number;
  durationMs?: number;
}

const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

const ScrollTo: React.FC<ScrollToProps> = ({ targetId, children, className, scrollAlign = 'start', offset = 80, durationMs = 700 }) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    let targetY: number;
    switch (scrollAlign) {
      case 'center':
        targetY = rect.top + window.scrollY - viewportHeight / 2 + rect.height / 2;
        break;
      case 'end':
        targetY = rect.bottom + window.scrollY - viewportHeight;
        break;
      case 'nearest':
      case 'start':
      default:
        targetY = rect.top + window.scrollY;
        break;
    }

    targetY = Math.max(0, targetY - offset);

    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <div onClick={handleClick} className={className} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}>
      {children}
    </div>
  );
};

export default ScrollTo;
