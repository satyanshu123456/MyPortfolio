import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Sparkles, Terminal } from 'lucide-react';
import SocialLinks from './SocialLinks';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#080B14]/90 backdrop-blur-md pt-12 pb-8 mt-20 relative overflow-hidden">
      {/* Decorative top ambient glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-indigo-600 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#080B14] rounded-[6px] flex items-center justify-center">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
              <span className="font-heading font-bold text-xl tracking-wider text-slate-100">
                SATYANSHU<span className="text-cyan-400">.DEV</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Turning Ideas Into Interactive Digital Experiences. Built with the modern MERN stack and creative web technologies.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Bhopal, Madhya Pradesh, India</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-cyan-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition-colors">About</Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyan-300 transition-colors">Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-cyan-300 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-cyan-300 transition-colors">Experience</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-3">
              Connect
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Feel free to reach out for collaborations or project discussions.
            </p>
            <SocialLinks size="sm" />
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Satyanshu Gautam. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>& MERN Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

