import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Maximize2,
  Code2,
} from 'lucide-react';
import BackToHome from '../components/BackToHome';
import PageTransition from '../components/PageTransition';
import SkillSlideModal from '../components/SkillSlideModal';
import { skillCategories, allSkillsList } from '../data/skills';
import { skillLogoComponents } from '../components/SkillLogos';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  const openSkillSlide = (skillName) => {
    const idx = allSkillsList.findIndex((s) => s.name === skillName);
    setCurrentSlideIndex(idx >= 0 ? idx : 0);
    setIsModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <BackToHome />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
            Technical Stack & Ecosystem
          </span>
        </div>

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Technical Portfolio Specs</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            Core technologies, libraries, and developer tools actively utilized in engineering responsive frontends, REST APIs, and document database architectures.
          </p>

          {/* Interactive Slide Tour Launcher */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => {
                setCurrentSlideIndex(0);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-neon-accent hover:shadow-cyan-400/40 transition-all duration-300 group"
            >
              <Maximize2 className="w-4 h-4 text-slate-950 group-hover:scale-110 transition-transform" />
              <span>Launch Interactive Skill Slide Tour ({allSkillsList.length} Skills)</span>
            </button>
          </div>

          {/* QUICK LOGO MARQUEE STRIP (Click any official logo to pop up its slide) */}
          <div className="glass-panel rounded-2xl p-3 border border-slate-800/90 max-w-2xl mx-auto mb-8 shadow-sm">
            <p className="text-[11px] font-mono text-slate-400 mb-2.5 uppercase tracking-wider text-center">
              Click any official logo to open its technical slide specs
            </p>
            <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
              {allSkillsList.map((skill) => {
                const LogoComp = skillLogoComponents[skill.name] || Code2;
                return (
                  <button
                    key={skill.name}
                    onClick={() => openSkillSlide(skill.name)}
                    title={`Open slide for ${skill.name}`}
                    className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400/60 p-2 flex items-center justify-center transition-all hover:scale-115 hover:shadow-neon-accent group"
                  >
                    <LogoComp className="w-full h-full transition-transform group-hover:scale-110" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                activeCategory === 'all'
                  ? 'bg-cyan-400 text-slate-950 font-bold border border-cyan-400 shadow-neon-accent'
                  : 'bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              All Skills ({allSkillsList.length})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-cyan-400 text-slate-950 font-bold border border-cyan-400 shadow-neon-accent'
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
                  const LogoComp = skillLogoComponents[skill.name] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -5, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => openSkillSlide(skill.name)}
                      className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-400/60 flex flex-col justify-between group transition-all cursor-pointer relative overflow-hidden"
                    >
                      {/* Ambient corner glow */}
                      <div
                        className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-10 group-hover:opacity-30 pointer-events-none transition-opacity"
                        style={{ backgroundColor: skill.color || '#22D3EE' }}
                      />

                      <div>
                        {/* Top row: Official SVG Logo + Category Pill */}
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center p-2.5 border transition-all duration-300 group-hover:scale-110 shadow-sm"
                            style={{
                              backgroundColor: `${skill.color}15`,
                              borderColor: `${skill.color}40`,
                            }}
                          >
                            <LogoComp className="w-full h-full" />
                          </div>

                          <span className="text-[11px] font-mono text-slate-400 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                            <span>Inspect Specs</span>
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                          </span>
                        </div>

                        {/* Skill Name & Description */}
                        <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center justify-between">
                          <span>{skill.name}</span>
                        </h3>
                        <p className="text-xs text-slate-300 leading-relaxed mb-4">
                          {skill.description}
                        </p>
                      </div>

                      {/* Card Footer: Competency & Interactive Slide Prompt */}
                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-slate-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{skill.proficiency || 'Core Competency'}</span>
                        </span>
                        <span className="text-cyan-400/90 font-semibold group-hover:underline">
                          Open Slide ↗
                        </span>
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
              Ready to explore these skills in real projects?
            </h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Check out live applications and full-stack implementations architected with this exact technology stack.
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

        {/* SLIDE POP-UP MODAL */}
        <SkillSlideModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          skills={allSkillsList}
          currentIndex={currentSlideIndex}
          onNavigate={(newIndex) => setCurrentSlideIndex(newIndex)}
        />
      </div>
    </PageTransition>
  );
};

export default Skills;
