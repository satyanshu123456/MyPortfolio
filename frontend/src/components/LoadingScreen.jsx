import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onLoaded, minDuration = 1000 }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          const elapsed = Date.now() - startTime;
          const remaining = Math.max(0, minDuration - elapsed);
          setTimeout(() => {
            setIsDone(true);
            if (onLoaded) onLoaded();
          }, remaining);
          return 100;
        }
        // Organic progress curve
        const step = Math.max(1, Math.floor((100 - prev) * 0.15) + Math.floor(Math.random() * 8));
        return Math.min(100, prev + step);
      });
    }, 60);

    // Safeguard timeout to guarantee loader never locks the screen
    const safetyTimeout = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setIsDone(true);
      if (onLoaded) onLoaded();
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(safetyTimeout);
    };
  }, [minDuration, onLoaded]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080B14] text-white selection:bg-none"
        >
          {/* Cybernetic background grid effect */}
          <div className="absolute inset-0 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6 text-center">
            {/* Glowing Logo Emblem */}
            <div className="relative mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                className="absolute -inset-2 rounded-full bg-gradient-to-tr from-amber-400 via-cyan-400 to-indigo-500 blur-md opacity-75"
              />
              <img
                src="/logo.png"
                alt="SATYANSHU.DEV Emblem"
                className="relative w-24 h-24 rounded-full object-cover border-2 border-amber-400/80 shadow-neon-accent bg-slate-900"
              />
            </div>

            {/* Brand Title */}
            <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-wider mb-2">
              <span className="text-white">SATYANSHU</span>
              <span className="text-cyan-400">.DEV</span>
            </h1>
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-8 font-mono">
              MERN Stack Developer Portfolio
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2 p-0.5 overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>

            {/* Progress Counter & State */}
            <div className="w-full flex justify-between items-center mt-3 text-xs font-mono text-slate-400">
              <span className="text-cyan-400 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                Initializing Interface
              </span>
              <span>{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

