import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('satyanshu-theme');
      if (savedTheme) return savedTheme;
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('satyanshu-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative p-2.5 rounded-xl border border-indigo-500/30 bg-slate-900/60 light:bg-slate-100 hover:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-slate-300 light:text-slate-700 transition-all duration-300 hover:scale-105"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-amber-300 animate-spin-slow transition-transform hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 transition-transform hover:-rotate-12" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;

