import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Target selectors for all primary CTA buttons across DefiMart
 */
const PRIMARY_CTA_SELECTORS = [
  '.btn-primary',
  '.header-app-btn',
  '.store-action-btn',
  '.drawer-cta-btn',
  '.magnetic-btn',
  '[data-magnetic="true"]',
].join(', ');

/**
 * useMagneticButtons Hook
 * 
 * Implements a high-end, physical 'magnetic' button effect on all primary CTA buttons
 * where the button smoothly glides towards the cursor when hovered.
 * 
 * Features:
 * - Smooth spring physics with linear interpolation (lerp) via requestAnimationFrame.
 * - Gentle recovery animation on mouse exit.
 * - Device-aware: only activates on pointer devices with hover capability ((hover: hover) and (pointer: fine)).
 * - Accessibility-first: respects prefers-reduced-motion.
 * - MutationObserver & route-aware: works seamlessly across dynamic tabs and page transitions.
 */
export default function useMagneticButtons(options = {}) {
  const location = useLocation();
  const {
    maxDisplacementX = 8,
    maxDisplacementY = 6,
    strength = 0.24,
    returnDuration = 420,
  } = options;

  useEffect(() => {
    // Only enable on desktop pointer devices that support hover
    if (typeof window === 'undefined') return;
    const hoverMediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!hoverMediaQuery.matches || motionMediaQuery.matches) {
      return;
    }

    const attachedElements = new Set();
    const cleanupCallbacks = [];

    const attachToButton = (btn) => {
      if (attachedElements.has(btn)) return;
      attachedElements.add(btn);

      let rafId = null;
      let isHovering = false;
      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let resetTimer = null;

      const animate = () => {
        if (!isHovering) return;

        // Buttery lerp interpolation towards cursor position
        currentX += (targetX - currentX) * 0.32;
        currentY += (targetY - currentY) * 0.32;

        btn.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

        if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
          rafId = requestAnimationFrame(animate);
        } else {
          rafId = null;
        }
      };

      const handleMouseEnter = () => {
        if (resetTimer) {
          clearTimeout(resetTimer);
          resetTimer = null;
        }
        isHovering = true;
        btn.classList.add('is-magnetic-hovered');
        btn.style.transition = 'none';
      };

      const handleMouseMove = (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rawDeltaX = e.clientX - centerX;
        const rawDeltaY = e.clientY - centerY;

        // Scale by strength and clamp to maximum displacement
        targetX = Math.max(-maxDisplacementX, Math.min(maxDisplacementX, rawDeltaX * strength));
        targetY = Math.max(-maxDisplacementY, Math.min(maxDisplacementY, rawDeltaY * (strength * 1.1)));

        if (!rafId) {
          rafId = requestAnimationFrame(animate);
        }
      };

      const handleMouseLeave = () => {
        isHovering = false;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }

        targetX = 0;
        targetY = 0;
        currentX = 0;
        currentY = 0;

        btn.classList.remove('is-magnetic-hovered');
        btn.style.transition = `transform ${returnDuration}ms cubic-bezier(0.22, 1, 0.36, 1)`;
        btn.style.transform = 'translate3d(0px, 0px, 0px)';

        resetTimer = setTimeout(() => {
          if (!isHovering) {
            btn.style.transition = '';
            btn.style.transform = '';
          }
        }, returnDuration);
      };

      btn.addEventListener('mouseenter', handleMouseEnter);
      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);

      cleanupCallbacks.push(() => {
        btn.removeEventListener('mouseenter', handleMouseEnter);
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseleave', handleMouseLeave);
        if (rafId) cancelAnimationFrame(rafId);
        if (resetTimer) clearTimeout(resetTimer);
        btn.style.transform = '';
        btn.style.transition = '';
        btn.classList.remove('is-magnetic-hovered');
      });
    };

    const scanAndAttach = () => {
      const buttons = document.querySelectorAll(PRIMARY_CTA_SELECTORS);
      buttons.forEach(attachToButton);
    };

    // Initial scan on mount and route change
    scanAndAttach();

    // Observe DOM additions for dynamic components (like tabs and modals)
    const observer = new MutationObserver(() => {
      scanAndAttach();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      cleanupCallbacks.forEach((cleanup) => cleanup());
      attachedElements.clear();
    };
  }, [location.pathname, maxDisplacementX, maxDisplacementY, strength, returnDuration]);
}
