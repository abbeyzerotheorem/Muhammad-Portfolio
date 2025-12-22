'use client';
import { useRef, useEffect } from 'react';
import type { ReactNode } from 'react';

interface ParallaxLayerProps {
  children: ReactNode;
  speed: number;
  className?: string;
}

export const ParallaxLayer = ({ children, speed, className }: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (ref.current) {
          const offsetY = window.scrollY * speed;
          ref.current.style.transform = `translateY(${offsetY}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
