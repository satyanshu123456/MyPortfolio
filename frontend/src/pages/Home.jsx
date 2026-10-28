import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Code2,
  Database,
  Layout,
  Sparkles,
  Send,
  MapPin,
  GraduationCap,
  Box,
  User,
  ShieldCheck,
} from 'lucide-react';
import HeroScene from '../scenes/HeroScene';
import SocialLinks from '../components/SocialLinks';
import PageTransition from '../components/PageTransition';

export const Home = () => {
  const [heroMode, setHeroMode] = useState('3d'); // '3d' | 'photo'

  return (
    <PageTransition>
      <div className="relative overflow-hidden">
        {/* Ambient Top Glow Orbs */}
        <div className="absolute top-12 left-1/4 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-24 right-1/4 translate-x-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-[128px] pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative min-h-[calc(100vh-140px)] flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Left Column: Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 z-10 space-y-6"
            >
              {/* Profile Badge & Status Pill */}
              <div className="flex items-center gap-4">
                <div className="relative group shrink-0">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />
                  <img
                    src="/profile.jpg"
                    alt="Satyanshu Gautam"
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-cyan-400 shadow-neon-accent"
                  />
                  <span
                    className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-[#080B14] rounded-full"
                    title="Active & Ready to Build"
                  />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span>Available for Opportunities</span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Bhopal, Madhya Pradesh, India</span>
                  </p>
                </div>
              </div>

              {/* Headings */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base font-mono text-cyan-400 tracking-wide">
                  Hi, I'm Satyanshu Gautam
                </p>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  <span className="text-gradient">MERN Stack</span> Developer
                </h1>
                <p className="text-lg sm:text-xl font-heading font-medium text-slate-200 pt-1">
                  "Turning Ideas Into Interactive Digital Experiences."
                </p>
              </div>

              {/* Supporting Text */}
              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                I build modern, responsive web applications and enjoy turning creative ideas into practical digital experiences.
              </p>

              {/* Call-to-Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-900 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-neon-accent hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400 font-heading font-bold"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 border border-slate-700 hover:border-cyan-400/50 bg-slate-900/60 hover:bg-slate-800/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-indigo-400 font-heading font-bold"
                >
                  <Send className="w-4 h-4 text-cyan-400 transition-transform group-hover:rotate-12" />
                  <span>Contact Me</span>
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Connect With Me
                </p>
                <SocialLinks size="md" />
              </div>
            </motion.div>

            {/* Right Column: Interactive 3D / Real Portrait Switcher Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[540px] w-full relative flex items-center justify-center"
            >
              {/* Outer decorative cyber frame */}
              <div className="absolute inset-0 rounded-3xl border border-indigo-500/20 bg-slate-950/40 backdrop-blur-sm pointer-events-none" />

              {/* Top View Switcher Tabs */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setHeroMode('3d')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                    heroMode === '3d'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-semibold shadow-neon-accent'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Box className="w-3.5 h-3.5" />
                  <span>3D Core</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHeroMode('photo')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                    heroMode === 'photo'
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-semibold shadow-neon-accent'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Developer</span>
                </button>
              </div>

              {/* View Container */}
              <AnimatePresence mode="wait">
                {heroMode === '3d' ? (
                  <motion.div
                    key="3d-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative z-0"
                  >
                    <HeroScene />
                  </motion.div>
                ) : (
                  <motion.div
                    key="photo-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative z-10"
                  >
                    {/* Glowing Ambient Behind Photo */}
                    <div className="absolute w-56 h-56 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-500/30 to-purple-500/20 blur-3xl pointer-events-none" />

                    {/* Framed Portrait */}
                    <div className="relative group mb-5">
                      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse" />
                      <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-3xl overflow-hidden border-2 border-cyan-400/80 shadow-2xl bg-slate-900">
                        <img
                          src="/profile.jpg"
                          alt="Satyanshu Gautam"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-emerald-500/50 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Available</span>
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white mb-0.5">
                      Satyanshu Gautam
                    </h3>
                    <p className="text-xs font-mono text-cyan-400 mb-3">
                      MERN Stack Developer
                    </p>

                    {/* Floating Tech Stack Pills */}
                    <div className="flex flex-wrap justify-center gap-1.5 max-w-xs">
                      {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind'].map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Overlay Status Badge */}
              <div className="absolute bottom-4 right-4 z-10 glass-panel px-3 py-1.5 rounded-lg border border-cyan-500/20 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>{heroMode === '3d' ? '3D WEBGL CORE' : 'SATYANSHU GAUTAM'}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DEVELOPER SPOTLIGHT CARD ON FRONT PAGE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden">
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Photo Showcase */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-cyan-400 shadow-neon-accent bg-slate-900">
                    <img
                      src="/profile.jpg"
                      alt="Satyanshu Gautam"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Summary Details */}
              <div className="md:col-span-8 space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Developer Spotlight</span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  Meet Satyanshu Gautam
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  B.Tech Computer Science Engineering (AIML) student at{' '}
                  <strong className="text-white">
                    Lakshmi Narain College of Technology Excellence, Bhopal
                  </strong>{' '}
                  (Graduating 2026). Dedicated to building full-stack web applications with React, Node.js, Express, and MongoDB.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-heading font-bold text-xs sm:text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-neon-accent"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-200 border border-slate-700 bg-slate-900/60 hover:bg-slate-800 transition-colors"
                  >
                    <span>Get in Touch</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS / CORE FOCUS SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
              Core Foundations
            </span>
            <h2 className="font-heading text-3xl font-bold text-white mt-3 mb-4">
              What I Focus On
            </h2>
            <p className="text-sm text-slate-300">
              Passionate about building clean, performant, and responsive full-stack applications with modern tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-400/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 text-cyan-400">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Modern Frontend UI
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Crafting responsive, accessible web interfaces using React.js and Tailwind CSS with smooth interactions.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-indigo-400/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-5 text-indigo-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                RESTful Backend APIs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Developing reliable server-side endpoints with Node.js and Express, incorporating input validation and security.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-purple-400/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-5 text-purple-400">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Document Data Modeling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Structuring clean MongoDB database collections and Mongoose models for reliable persistence.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-indigo-500/30 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Ready to collaborate or discuss a project?
              </h3>
              <p className="text-sm text-slate-300 max-w-lg">
                I'm actively looking for opportunities to grow as a developer and contribute to impactful software engineering.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-neon-accent shrink-0"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
