import React, { useRef, useState, useEffect } from 'react';

/**
 * MagneticButton Component
 * 
 * An optional standalone wrapper that imparts a magnetic cursor-follow effect
 * to any button or link.
 */
export default function MagneticButton({
  children,
  as: Component = 'button',
  className = '',
  strength = 0.25,
  maxDisplacementX = 8,
  maxDisplacementY = 6,
  ...props
}) {
  const btnRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    if (typeof window === 'undefined') return;
    const hoverMedia = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!hoverMedia.matches || motionMedia.matches) return;

    let rafId = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.32;
      currentY += (targetY - currentY) * 0.32;

      btn.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

      if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = null;
      }
    };

    const onMouseEnter = () => {
      setIsHovered(true);
      btn.style.transition = 'none';
    };

    const onMouseMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      targetX = Math.max(-maxDisplacementX, Math.min(maxDisplacementX, dx * strength));
      targetY = Math.max(-maxDisplacementY, Math.min(maxDisplacementY, dy * (strength * 1.1)));

      if (!rafId) {
        rafId = requestAnimationFrame(animate);
      }
    };

    const onMouseLeave = () => {
      setIsHovered(false);
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      targetX = 0;
      targetY = 0;
      currentX = 0;
      currentY = 0;

      btn.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)';
      btn.style.transform = 'translate3d(0px, 0px, 0px)';

      setTimeout(() => {
        btn.style.transition = '';
        btn.style.transform = '';
      }, 400);
    };

    btn.addEventListener('mouseenter', onMouseEnter);
    btn.addEventListener('mousemove', onMouseMove);
    btn.addEventListener('mouseleave', onMouseLeave);

    return () => {
      btn.removeEventListener('mouseenter', onMouseEnter);
      btn.removeEventListener('mousemove', onMouseMove);
      btn.removeEventListener('mouseleave', onMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [strength, maxDisplacementX, maxDisplacementY]);

  return (
    <Component
      ref={btnRef}
      className={`magnetic-btn ${isHovered ? 'is-magnetic-hovered' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
