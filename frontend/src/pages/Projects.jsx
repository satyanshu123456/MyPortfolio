import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket,
  Info,
  ArrowRight,
  Sparkles,
  Bot,
  Layers,
  Activity,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import BackToHome from '../components/BackToHome';
import ProjectCard from '../components/ProjectCard';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';

export const Projects = () => {
  const [selectedTier, setSelectedTier] = useState('all'); // 'all' | 1 | 2 | 3

  const filterOptions = [
    { id: 'all', label: 'All Value Tiers', count: projects.length },
    {
      id: 1,
      label: 'Tier 1: Production AI Systems',
      count: projects.filter((p) => p.tierLevel === 1).length,
      badge: 'Live',
    },
    {
      id: 2,
      label: 'Tier 2: Full-Stack MERN',
      count: projects.filter((p) => p.tierLevel === 2).length,
      badge: 'Working Mode',
    },
    {
      id: 3,
      label: 'Tier 3: Real-Time Roadmap',
      count: projects.filter((p) => p.tierLevel === 3).length,
      badge: 'Coming Soon',
    },
  ];

  const filteredProjects =
    selectedTier === 'all'
      ? projects
      : projects.filter((p) => p.tierLevel === selectedTier);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <BackToHome />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
            Portfolio Work & Architecture
          </span>
        </div>

        {/* Title & Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Value-Driven Software Engineering</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Categorized strictly by architectural depth, execution readiness, and real-world utility—from live AI systems to full-stack platforms.
          </p>
        </div>

        {/* =========================================================================
            VALUE HIERARCHY DASHBOARD (Explaining the Value & Impact of each tier)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Tier 1 Card */}
          <div
            onClick={() => setSelectedTier(1)}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedTier === 1
                ? 'bg-cyan-950/40 border-cyan-400 shadow-neon-accent'
                : 'glass-card border-slate-800/90 hover:border-cyan-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                2 Live Apps
              </span>
            </div>
            <h3 className="font-heading text-base font-bold text-white mb-1">
              Tier 1 • Production AI Systems
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Live web tools engineered on <strong className="text-cyan-300">Google AI Studio</strong> & Gemini API solving document translation and format transformation.
            </p>
          </div>

          {/* Tier 2 Card */}
          <div
            onClick={() => setSelectedTier(2)}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedTier === 2
                ? 'bg-emerald-950/40 border-emerald-400 shadow-neon-accent'
                : 'glass-card border-slate-800/90 hover:border-emerald-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Working Mode
              </span>
            </div>
            <h3 className="font-heading text-base font-bold text-white mb-1">
              Tier 2 • Full-Stack MERN Platform
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Active food delivery application (<strong className="text-emerald-300">Cravings</strong>) with dynamic cart state, menu filtering, and full responsive checkout.
            </p>
          </div>

          {/* Tier 3 Card */}
          <div
            onClick={() => setSelectedTier(3)}
            className={`p-5 rounded-2xl border cursor-pointer transition-all ${
              selectedTier === 3
                ? 'bg-purple-950/40 border-purple-400 shadow-neon-accent'
                : 'glass-card border-slate-800/90 hover:border-purple-500/40'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Activity className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                Roadmap
              </span>
            </div>
            <h3 className="font-heading text-base font-bold text-white mb-1">
              Tier 3 • Real-Time Architecture
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Bi-directional messaging system (<strong className="text-purple-300">Mingo ChatApp</strong>) designed with WebSocket protocol and MongoDB chat clustering.
            </p>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE VALUE FILTER TABS
            ========================================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterOptions.map((opt) => {
            const isActive = selectedTier === opt.id;
            return (
              <button
                key={String(opt.id)}
                onClick={() => setSelectedTier(opt.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-medium transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-cyan-400 text-slate-950 font-bold border-cyan-400 shadow-neon-accent'
                    : 'bg-slate-900/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                    isActive
                      ? 'bg-slate-950/30 text-slate-950'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            PROJECTS GRID (Responsive 2 or 3 Columns)
            ========================================================================= */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FUTURE ROADMAP / COLLABORATION BANNER */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4">
            <Rocket className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-white mb-2">
            Interested in building high-value software together?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
            Whether it's deploying AI models into responsive web tools or architecting production MERN backends, I am ready to contribute.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-neon-accent"
            >
              <span>Connect on Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
