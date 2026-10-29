import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import DeveloperAvatar from './DeveloperAvatar';
import FloatingObjects from './FloatingObjects';

// Check if WebGL is supported in the current browser/device
const checkWebGLSupport = () => {
  if (typeof window === 'undefined') return true;
  try {
    const canvas = document.createElement('canvas');
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch {
    return false;
  }
};

// 2D Cybernetic Fallback for devices without WebGL or reduced-motion
const FallbackHeroArt = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden pointer-events-none">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
        {/* Outer glowing pulsing aura */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl animate-pulse-slow" />

        {/* Orbiting concentric rings */}
        <div className="absolute w-full h-full rounded-full border border-cyan-500/30 animate-spin-slow" />
        <div className="absolute w-3/4 h-3/4 rounded-full border border-indigo-500/40 border-dashed" />
        <div className="absolute w-1/2 h-1/2 rounded-full border border-purple-500/50" />

        {/* Center Stylized Developer Emblem */}
        <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-cyan-400 to-indigo-600 shadow-neon-accent">
          <img
            src="/logo.png"
            alt="SATYANSHU.DEV Emblem"
            className="w-full h-full rounded-full object-cover bg-slate-900 border border-amber-400/50"
          />
        </div>
      </div>
    </div>
  );
};

export const HeroScene = () => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setHasWebGL(checkWebGLSupport());
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (!hasWebGL || prefersReducedMotion) {
    return <FallbackHeroArt />;
  }

  return (
    <div className="w-full h-full relative pointer-events-none select-none">
      <Suspense fallback={<FallbackHeroArt />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 1.5]} // Capped at 1.5 for performance
          className="pointer-events-none"
        >
          {/* Neon Futuristic Ambient & Point Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#ffffff" />
          <pointLight position={[-6, 4, 3]} intensity={2.5} color="#22D3EE" />
          <pointLight position={[6, -4, 3]} intensity={2.5} color="#6366F1" />
          <pointLight position={[0, 6, -4]} intensity={1.5} color="#A855F7" />

          {/* 3D Developer Avatar Centerpiece */}
          <DeveloperAvatar position={[0, -0.2, 0]} />

          {/* Floating Geometric and Cyber Particle Elements */}
          <FloatingObjects />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HeroScene;

