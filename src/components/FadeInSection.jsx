import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * FadeInSection component
 * Wraps content sections with a subtle IntersectionObserver fade-in animation.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Inner section elements
 * @param {string} [props.className=''] - Additional CSS classes
 * @param {'up'|'none'|'left'|'right'} [props.direction='up'] - Direction of subtle motion offset
 * @param {number} [props.delay=0] - Delay in milliseconds before fade begins
 * @param {number} [props.threshold=0.08] - IntersectionObserver visibility threshold
 * @param {string} [props.rootMargin='0px 0px -40px 0px'] - IntersectionObserver root margin
 * @param {string|React.ComponentType} [props.as='section'] - HTML element tag or component
 */
export default function FadeInSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
  as: Component = 'section',
  style = {},
  ...rest
}) {
  const { ref, isRevealed } = useScrollReveal({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const directionClass = direction !== 'none' ? `fade-${direction}` : 'fade-none';
  const stateClass = isRevealed ? 'is-visible' : 'is-hidden';

  const combinedStyle = {
    ...style,
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <Component
      ref={ref}
      className={`fade-in-section ${directionClass} ${stateClass} ${className}`.trim()}
      style={combinedStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
