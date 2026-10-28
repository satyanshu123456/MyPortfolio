import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef();

  useEffect(() => {
    // Check if the device is touch-based or prefers reduced motion
    const hasTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = Boolean(
        target &&
          (target.closest('a') ||
            target.closest('button') ||
            target.closest('input') ||
            target.closest('textarea') ||
            target.closest('select') ||
            target.closest('[role="button"]') ||
            target.closest('.interactive-hover'))
      );
      setIsHovered(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  // Smooth lerp for outer ring
  useEffect(() => {
    if (isTouchDevice) return;

    const animateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      requestRef.current = requestAnimationFrame(animateTrailing);
    };

    requestRef.current = requestAnimationFrame(animateTrailing);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Inner Glowing Dot */}
      <div
        className="fixed top-0 left-0 rounded-full bg-cyan-400 pointer-events-none transition-transform duration-75"
        style={{
          width: '8px',
          height: '8px',
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          boxShadow: '0 0 12px #22D3EE, 0 0 20px #6366F1',
        }}
      />
      {/* Outer Follower Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-cyan-400/60 pointer-events-none transition-all duration-150 ${
          isHovered
            ? 'w-12 h-12 bg-cyan-400/10 border-indigo-400 scale-125'
            : 'w-8 h-8 scale-100'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (isHovered ? 24 : 16)}px, ${
            trailingPos.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      />
    </div>
  );
};

export default CustomCursor;

