import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook using IntersectionObserver to trigger a subtle fade-in animation
 * when an element scrolls into view.
 * 
 * Features:
 * - Detects viewport intersection with customizable threshold and rootMargin.
 * - Automatically unobserves once revealed for maximum performance.
 * - Respects prefers-reduced-motion for accessibility.
 * - Graceful fallback if IntersectionObserver is unsupported.
 */
export function useScrollReveal({
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  disabled = false,
} = {}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setIsRevealed(true);
      return;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    // Respect prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsRevealed(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, triggerOnce, disabled]);

  return { ref: elementRef, isRevealed };
}

export default useScrollReveal;
