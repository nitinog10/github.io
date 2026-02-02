import { useState, useEffect, RefObject } from 'react';

export const useScrollProgress = (elementRef?: RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on element position
        const start = windowHeight;
        const end = -elementHeight;
        const current = elementTop;
        const progressValue = 1 - (current - end) / (start - end);
        
        setProgress(Math.max(0, Math.min(1, progressValue)));
      } else {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progressValue = scrollTop / docHeight;
        
        setProgress(Math.max(0, Math.min(1, progressValue)));
        setScrollY(scrollTop);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [elementRef]);

  return { progress, scrollY };
};

export default useScrollProgress;
