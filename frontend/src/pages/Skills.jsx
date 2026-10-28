import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code,
  Palette,
  FileCode2,
  Atom,
  Wind,
  Server,
  Cpu,
  Database,
  GitBranch,
  Github,
  Terminal,
  Send,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import BackToHome from '../components/BackToHome';
import PageTransition from '../components/PageTransition';
import { skillCategories } from '../data/skills';

// Map icon string names to Lucide icon components
const iconMap = {
  Code,
  Palette,
  FileCode2,
  Atom,
  Wind,
  Server,
  Cpu,
  Database,
  GitBranch,
  Github,
  Terminal,
  Send,
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <BackToHome />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
            Technical Stack
          </span>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Technologies, libraries, and developer tools I actively use to develop responsive frontend interfaces, RESTful APIs, and document database solutions.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-neon-accent'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              All Skills ({skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 shadow-neon-accent'
                    : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat.title} ({cat.skills.length})
              </button>
            ))}
          </div>
        </div>

        {/* SKILLS CATEGORIES DISPLAY */}
        <div className="space-y-12 mb-16">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-white">
                    {category.title}
                  </h2>
                  <p className="text-xs text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.skills.map((skill) => {
                  const IconComp = iconMap[skill.icon] || Code;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-cyan-400/50 flex flex-col justify-between group transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:text-cyan-300 transition-all">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
                            {category.title.split(' ')[0]}
                          </span>
                        </div>

                        <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Core Competency</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM NOTE & CTA */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-heading text-xl font-bold text-white">
              Looking for practical project applications?
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Explore the planned full-stack project concepts designed with this technology stack.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-neon-accent shrink-0"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;

