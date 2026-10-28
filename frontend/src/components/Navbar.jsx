import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll detection for glass intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
            aria-label="SATYANSHU.DEV Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-indigo-600 p-0.5 shadow-neon-accent group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              <div className="w-full h-full bg-[#080B14] rounded-[10px] flex items-center justify-center">
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-6 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
                SATYANSHU<span className="text-cyan-400">.DEV</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 -mt-1 hidden sm:block">
                MERN DEVELOPER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-xl text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-cyan-300 font-semibold bg-indigo-950/60 shadow-sm border border-cyan-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="flex items-center gap-1.5">
                    {isActive && <Sparkles className="w-3 h-3 text-cyan-400 inline" />}
                    {item.name}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Theme Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2.5 rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-indigo-500/20 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`
                }
              >
                <span>{item.name}</span>
                <span className="text-xs font-mono text-slate-500 font-normal">
                  {item.path === '/' ? '/home' : item.path}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

