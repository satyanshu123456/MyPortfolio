import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  FolderGit2,
  Layers,
  ShieldCheck,
  Code2,
} from 'lucide-react';
import { skillLogoComponents } from './SkillLogos';

export const SkillSlideModal = ({
  isOpen,
  onClose,
  skills = [],
  currentIndex = 0,
  onNavigate,
}) => {
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // Handle keyboard navigation (ArrowLeft, ArrowRight, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, skills.length]);

  if (!isOpen || skills.length === 0) return null;

  const currentSkill = skills[currentIndex] || skills[0];
  const LogoComponent = skillLogoComponents[currentSkill.name] || Code2;

  const handleNext = () => {
    setDirection(1);
    const nextIndex = (currentIndex + 1) % skills.length;
    onNavigate(nextIndex);
  };

  const handlePrev = () => {
    setDirection(-1);
    const prevIndex = (currentIndex - 1 + skills.length) % skills.length;
    onNavigate(prevIndex);
  };

  const handleJump = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    onNavigate(index);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay with blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-3xl glass-panel border border-slate-700/80 shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]"
        >
          {/* Top Dynamic Ambient Glow themed by Skill Brand Color */}
          <div
            className="absolute -top-28 -right-28 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none transition-all duration-500"
            style={{ backgroundColor: currentSkill.color || '#22D3EE' }}
          />

          {/* 1. MODAL TOP BAR (Window controls & header) */}
          <div className="px-5 py-3.5 border-b border-slate-800/80 bg-slate-950/70 flex items-center justify-between gap-3 shrink-0">
            {/* macOS Style Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                SKILL SPECS SLIDE {currentIndex + 1} OF {skills.length}
              </span>
            </div>

            {/* Slide Navigation Counter */}
            <div className="flex items-center gap-2">
              <span
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-full font-semibold border"
                style={{
                  borderColor: `${currentSkill.color}50`,
                  color: currentSkill.color || '#22D3EE',
                  backgroundColor: `${currentSkill.color}15`,
                }}
              >
                {currentSkill.category}
              </span>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors ml-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Close skill slide modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. SLIDE BODY WITH SMOOTH ANIMATION */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentSkill.name}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Hero Header: Official SVG Logo + Name + Proficiency */}
                <div className="flex items-start sm:items-center gap-5 flex-col sm:flex-row pb-6 border-b border-slate-800/80">
                  {/* Glowing SVG Logo Container */}
                  <div
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center p-4 shadow-xl shrink-0 border relative group overflow-hidden"
                    style={{
                      backgroundColor: `${currentSkill.color}15`,
                      borderColor: `${currentSkill.color}40`,
                      boxShadow: `0 10px 30px -10px ${currentSkill.color}40`,
                    }}
                  >
                    <div
                      className="absolute inset-0 blur-xl opacity-40 pointer-events-none"
                      style={{ backgroundColor: currentSkill.color }}
                    />
                    <LogoComponent className="w-12 h-12 sm:w-14 sm:h-14 relative z-10 transition-transform group-hover:scale-110 duration-300" />
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                        {currentSkill.name}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        {currentSkill.proficiency}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                      {currentSkill.fullName || currentSkill.name}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                      {currentSkill.description}
                    </p>
                  </div>
                </div>

                {/* Technical Overview */}
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Technical Architecture Overview</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentSkill.fullOverview}
                  </p>
                </div>

                {/* Core Capabilities & Competencies */}
                <div className="space-y-2.5">
                  <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Core Architectural Capabilities</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentSkill.coreCapabilities?.map((capability, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-2.5"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: currentSkill.color || '#22D3EE' }}
                        />
                        <span className="text-xs text-slate-300 leading-snug">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Portfolio Application */}
                <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-300 uppercase tracking-wider">
                    <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Practical Portfolio Application</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {currentSkill.portfolioUsage}
                  </p>
                </div>

                {/* Ecosystem & Tooling Tags */}
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Associated Ecosystem & Tools:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentSkill.ecosystem?.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/80 font-mono"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 3. SLIDE FOOTER NAVIGATION (Prev / Dots Thumbnails / Next) */}
          <div className="px-5 py-4 border-t border-slate-800/80 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all w-full sm:w-auto justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Skill</span>
            </button>

            {/* Quick Jump Mini Logo Strip / Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full py-1 px-2">
              {skills.map((skill, idx) => {
                const isActive = idx === currentIndex;
                const MiniLogo = skillLogoComponents[skill.name] || Code2;
                return (
                  <button
                    key={skill.name}
                    onClick={() => handleJump(idx)}
                    title={skill.name}
                    className={`relative w-8 h-8 rounded-lg flex items-center justify-center p-1.5 transition-all shrink-0 border ${
                      isActive
                        ? 'border-cyan-400 scale-110 shadow-neon-accent bg-slate-800'
                        : 'border-slate-800 bg-slate-950/80 hover:border-slate-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <MiniLogo className="w-4 h-4" />
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: skill.color || '#22D3EE' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-neon-accent w-full sm:w-auto justify-center"
            >
              <span>Next Skill</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SkillSlideModal;

