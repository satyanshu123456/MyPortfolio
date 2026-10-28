import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const BackToHome = ({ className = '' }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700/60 bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 backdrop-blur-md transition-all duration-300 group ${className}`}
      aria-label="Navigate back to Home"
    >
      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1 text-cyan-400" />
      <span>Back to Home</span>
      <Home className="w-3.5 h-3.5 opacity-60 ml-0.5" />
    </Link>
  );
};

export default BackToHome;

