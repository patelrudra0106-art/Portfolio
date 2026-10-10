'use client';

import { useRef, useEffect, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet = ({ 
  children, 
  padding = 150, 
  strength = 3, 
  activeTransition = "transform 0.3s ease-out", 
  inactiveTransition = "transform 0.6s ease-in-out",
  className 
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const distance = Math.sqrt(x * x + y * y);
      
      if (distance < padding) {
        element.style.transition = activeTransition;
        element.style.transform = `translate3d(${x / strength}px, ${y / strength}px, 0)`;
        element.style.willChange = 'transform';
      }
    };

    const handleMouseLeave = () => {
      element.style.transition = inactiveTransition;
      element.style.transform = 'translate3d(0, 0, 0)';
    };

    const handleMouseEnter = () => {
      element.style.willChange = 'transform';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
