import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Code2,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Globe,
  Lock,
  Zap,
  ArrowUpRight,
} from 'lucide-react';

export const ProjectCard = ({ project, index = 0 }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    // Disable 3D tilt on coarse pointers (touchscreens)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -6;
    const rotY = ((x - centerX) / centerX) * 6;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full flex flex-col"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="h-full rounded-2xl glass-card border border-slate-800 hover:border-cyan-400/60 shadow-xl relative group flex flex-col justify-between overflow-hidden transition-all duration-300"
      >
        {/* Ambient Top Glow Accent */}
        <div
          className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: project.accentColor || '#6366F1' }}
        />

        {/* 1. MOCKUP WINDOW HEADER (Mac/IDE Window Aesthetic) */}
        <div className="px-5 py-3 border-b border-slate-800/80 bg-slate-950/50 flex items-center justify-between gap-2 select-none">
          {/* macOS window control dots */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Centered Mockup URL Bar */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400 truncate max-w-[200px] sm:max-w-[240px]">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">{project.windowSlug}</span>
          </div>

          {/* Tier Level Chip */}
          <span
            className="text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded border shrink-0"
            style={{
              borderColor: `${project.accentColor}50`,
              color: project.accentColor || '#22D3EE',
              backgroundColor: `${project.accentColor}15`,
            }}
          >
            Tier {project.tierLevel}
          </span>
        </div>

        {/* MAIN BODY CONTENT */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
          <div>
            {/* Category Pill & Live Status Badge */}
            <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40">
                {project.category}
              </span>

              {project.isLive ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {project.status}
                </span>
              ) : project.isWorking ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <Clock className="w-3.5 h-3.5 animate-pulse" />
                  {project.status}
                </span>
              )}
            </div>

            {/* Project Title & Tagline */}
            <div className="mb-4">
              <h3 className="font-heading text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                <span>{project.name}</span>
                {project.liveUrl && (
                  <ArrowUpRight className="w-5 h-5 text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                )}
              </h3>
              <p className="text-xs text-indigo-300 font-mono font-medium mt-1">
                {project.tagline}
              </p>
            </div>

            {/* VALUE PROPOSITION BOX (Highlighting Business & Engineering Value) */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 mb-5 relative overflow-hidden group-hover:border-slate-700/80 transition-colors">
              <div className="flex items-start gap-2.5">
                <Zap
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: project.accentColor || '#22D3EE' }}
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold block">
                    Core Technical & Practical Value
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {project.valueProposition}
                  </p>
                </div>
              </div>
            </div>

            {/* VALUE METRICS MICRO-GRID (3-column key stats) */}
            {project.valueMetrics && (
              <div className="grid grid-cols-3 gap-2 mb-6">
                {project.valueMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/70 text-center flex flex-col justify-center"
                  >
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tight block truncate">
                      {metric.label}
                    </span>
                    <span className="text-xs font-semibold text-slate-200 truncate mt-0.5">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Core Capabilities / Features */}
            {project.features && (
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  {project.isLive
                    ? 'Engineered Capabilities'
                    : project.isWorking
                    ? 'Active Capabilities'
                    : 'Planned Architecture'}
                </h4>
                <ul className="space-y-1.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* LOWER SECTION: Technologies + Footer Action */}
          <div className="space-y-5 pt-2">
            {/* Tech Stack Badges */}
            <div>
              <h4 className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                {project.isLive ? 'Platform & Technologies:' : 'Proposed Technologies:'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.proposedTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-200 border border-slate-700/60 font-mono hover:border-cyan-400/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="pt-4 border-t border-slate-800/80">
              {project.liveUrl ? (
                <div className="space-y-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-heading font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-neon-accent hover:shadow-cyan-400/50 transition-all duration-300 group/btn"
                  >
                    <Globe className="w-4 h-4 text-slate-950 group-hover/btn:rotate-12 transition-transform" />
                    <span>Launch Live Application</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                  <p className="text-[11px] font-mono text-center text-slate-400 flex items-center justify-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                    <span>Hosted on Google AI Studio • Direct Web Access</span>
                  </p>
                </div>
              ) : project.isWorking ? (
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/50 px-3.5 py-2.5 rounded-xl border border-emerald-500/40 w-full justify-center shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Active Working Mode • Verified Frontend & API Core</span>
                  </div>
                  <p className="text-[11px] font-mono text-center text-slate-400">
                    Local implementation operational • Deployment in staging
                  </p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-300 bg-amber-950/40 px-3.5 py-2.5 rounded-xl border border-amber-500/30 w-full justify-center">
                    <Clock className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                    <span>Engineering Roadmap • WebSocket Design Phase</span>
                  </div>
                  <p className="text-[11px] font-mono text-center text-slate-400">
                    Architecture schema drafted • Scheduled for Phase 2 sprint
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
