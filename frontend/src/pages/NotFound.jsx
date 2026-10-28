import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-[70vh] flex items-center justify-center max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-rose-500/20 max-w-lg w-full relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6">
              <AlertTriangle className="w-8 h-8 animate-bounce" />
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-cyan-400 mb-2">
              404
            </h1>

            <h2 className="font-heading text-2xl font-bold text-white mb-3">
              Route Not Found
            </h2>

            <p className="text-sm text-slate-300 mb-8 leading-relaxed">
              The coordinate or page you requested does not exist in the SATYANSHU.DEV cyberspace. It may have been relocated or entered incorrectly.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-neon-accent"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white border border-slate-700 bg-slate-800/60 hover:bg-slate-700/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;

