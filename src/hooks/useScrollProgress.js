import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook to track scroll progress from 0 to 1 with throttling
 * @param {number} throttleMs - Throttle delay in milliseconds (default: 16ms ~60fps)
 * @returns {number} Scroll progress (0-1)
 */
export function useScrollProgress(throttleMs = 16) {
  const [progress, setProgress] = useState(0);
  const lastUpdateTime = useRef(0);
  const rafId = useRef(null);

  const calculateProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const trackLength = documentHeight - windowHeight;
    const scrollProgress = trackLength > 0 ? scrollTop / trackLength : 0;
    
    return Math.min(Math.max(scrollProgress, 0), 1);
  }, []);

  const handleScroll = useCallback(() => {
    const now = Date.now();
    
    // Cancel any pending RAF
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }

    // Throttle updates
    if (now - lastUpdateTime.current >= throttleMs) {
      setProgress(calculateProgress());
      lastUpdateTime.current = now;
    } else {
      // Schedule update for next frame
      rafId.current = requestAnimationFrame(() => {
        setProgress(calculateProgress());
        lastUpdateTime.current = Date.now();
      });
    }
  }, [throttleMs, calculateProgress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [handleScroll]);

  return progress;
}
