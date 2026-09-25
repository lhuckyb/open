import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollProgress
 * A subtle, horizontal progress bar at the very top of the screen
 * that tracks scroll depth to provide feedback on page length.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();
  const rafId = useRef(null);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight || 0;

      const maxScroll = scrollHeight - clientHeight;
      if (maxScroll <= 4) {
        setProgress(0);
      } else {
        const current = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
        setProgress(current);
      }
    };

    const handleScroll = () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(calculateProgress);
    };

    // Calculate immediately and also after brief timeouts to account for layout shifts / dynamic assets
    calculateProgress();
    const t1 = setTimeout(calculateProgress, 100);
    const t2 = setTimeout(calculateProgress, 400);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  const percentage = Math.round(progress * 100);

  return (
    <div 
      className={`scroll-progress-container ${progress > 0 ? 'is-active' : 'is-idle'}`}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div 
        className="scroll-progress-bar"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
