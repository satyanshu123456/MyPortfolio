import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Info, ArrowRight, Sparkles } from 'lucide-react';
import BackToHome from '../components/BackToHome';
import ProjectCard from '../components/ProjectCard';
import PageTransition from '../components/PageTransition';
import { projects } from '../data/projects';

export const Projects = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <BackToHome />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
            Portfolio Work
          </span>
        </div>

        {/* Title & Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Planned Full-Stack Implementations</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Detailed architectures and concepts for applications currently under active planning and roadmap development.
          </p>
        </div>

        {/* Honest Transparency Notice Banner */}
        <div className="glass-panel rounded-2xl p-4 sm:p-5 border border-amber-500/30 bg-amber-950/20 mb-12 flex items-start gap-3.5 max-w-3xl mx-auto">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 space-y-1">
            <p className="font-semibold text-amber-300">
              Project Development Roadmap Notice
            </p>
            <p className="leading-relaxed">
              These applications represent my planned MERN stack project roadmap. As a fresher developer, I am committed to transparency: these concepts are currently in preparation, so live demos and repository links will be activated once development milestones are finalized.
            </p>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* FUTURE ROADMAP / COLLABORATION BANNER */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4">
            <Rocket className="w-6 h-6" />
          </div>
          <h3 className="font-heading text-2xl font-bold text-white mb-2">
            Interested in building together?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6 leading-relaxed">
            I am eager to contribute to real-world codebases, learn software best practices, and work with collaborative developer teams.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-neon-accent"
            >
              <span>Reach Out via Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

