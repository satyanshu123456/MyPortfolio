import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Compass,
  ArrowRight,
  Code2,
  Terminal,
  ExternalLink,
  Target,
  Sparkles,
} from 'lucide-react';
import BackToHome from '../components/BackToHome';
import SocialLinks from '../components/SocialLinks';
import PageTransition from '../components/PageTransition';
import { developerInfo } from '../data/socialLinks';

export const About = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <BackToHome />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
            About Me
          </span>
        </div>

        {/* PROFILE HERO CARD */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 mb-12 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Avatar / Brand Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-neon-accent mb-4 group">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                  <img
                    src="/profile.jpg"
                    alt="Satyanshu Gautam"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 border-2 border-[#080B14] rounded-full" title="Active & Ready to Build" />
              </div>

              <h2 className="font-heading text-2xl font-bold text-white">
                {developerInfo.fullName}
              </h2>
              <p className="text-sm text-cyan-400 font-mono mb-2">
                {developerInfo.role}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{developerInfo.location}</span>
              </div>
            </div>

            {/* Biography & Story */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Aspiring Full-Stack Software Engineer</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Designing & Developing Digital Solutions
              </h1>

              <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans border-l-4 border-cyan-400 pl-4 py-1 italic bg-cyan-950/10 rounded-r-xl">
                "{developerInfo.bio}"
              </blockquote>

              <p className="text-sm text-slate-300 leading-relaxed">
                As a computer science student specializing in Artificial Intelligence and Machine Learning, I channel my enthusiasm into mastering full-stack web engineering with the MERN stack (MongoDB, Express, React, and Node.js). I prioritize writing clear, maintainable code and solving real-world challenges through accessible software.
              </p>

              {/* Profiles & Socials */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <SocialLinks size="md" />
                <a
                  href="https://github.com/satyanshu123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <span>View GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/satyanshu-gautam-33a149254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <span>View LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION & CAREER GOALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Education Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Formal Education
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Academic Background
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono text-cyan-400 font-semibold block mb-1">
                    DEGREE
                  </span>
                  <h4 className="font-heading text-lg font-bold text-white mb-1">
                    {developerInfo.education.degree}
                  </h4>
                  <p className="text-sm text-slate-300 mb-2">
                    {developerInfo.education.college}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Graduation Year: {developerInfo.education.graduationYear}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <span className="text-xs font-mono text-indigo-400 font-semibold block mb-1">
                    ACADEMIC FOCUS
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Core computer science subjects including Data Structures, Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP), and Web Technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Goals & Focus Card */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Career Goals & Interests
                  </h3>
                  <p className="text-xs font-mono text-slate-400">
                    Professional Aspirations
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <Compass className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Full-Stack MERN Engineering</h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Continuously advancing in React, Node.js, Express, and MongoDB to engineer end-to-end web applications.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <Code2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Collaborative Software Development</h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Seeking opportunities to join productive software engineering teams where I can learn from senior engineers and contribute meaningful code.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80">
                  <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Clean Architecture & User Experience</h5>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Creating high-performance digital experiences that combine robust backend architecture with intuitive UI design.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-1">
              Interested in reviewing my technical skills?
            </h3>
            <p className="text-sm text-slate-300">
              Check out my current frontend, backend, database, and tooling stack.
            </p>
          </div>
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-neon-accent shrink-0"
          >
            <span>Explore Skills</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;

