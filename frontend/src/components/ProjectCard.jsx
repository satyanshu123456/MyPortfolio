import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProjectCard = ({ project, index = 0 }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    // Check if device supports hover / fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        perspective: 1000,
      }}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="h-full rounded-2xl p-6 sm:p-7 glass-card flex flex-col justify-between border border-slate-800 hover:border-cyan-400/50 shadow-lg relative group overflow-hidden"
      >
        {/* Top Glow Ambient Accent */}
        <div
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: project.accentColor || '#6366F1' }}
        />

        <div>
          {/* Header row: Category & Coming Soon Badge */}
          <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30">
              <Clock className="w-3.5 h-3.5 animate-pulse" />
              {project.status}
            </span>
          </div>

          {/* Project Name & Tagline */}
          <h3 className="font-heading text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
            {project.name}
          </h3>
          <p className="text-xs text-indigo-300 mb-4 font-mono font-medium">
            {project.tagline}
          </p>

          {/* Project Description */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Planned Features */}
          {project.features && (
            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Key Planned Features
              </h4>
              <ul className="space-y-1.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {/* Proposed Tech Stack Badges */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              Proposed Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.proposedTechnologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700/60 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action / Honest Status Footer */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900/60 px-3.5 py-2 rounded-xl border border-slate-800 w-full justify-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>{project.statusBadge || 'Development Planned'}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

