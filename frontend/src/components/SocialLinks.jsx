import React from 'react';
import { Github, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const iconMap = {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
};

export const SocialLinks = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2.5',
    lg: 'w-12 h-12 p-3',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map((item) => {
        const IconComponent = iconMap[item.icon] || Mail;
        return (
          <a
            key={item.name}
            href={item.url}
            target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
            rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            aria-label={item.label}
            className={`${sizeClasses[size] || sizeClasses.md} flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-slate-800/80 hover:shadow-neon-accent hover:-translate-y-0.5 transition-all duration-300`}
            title={item.name}
          >
            <IconComponent className={iconSizes[size] || iconSizes.md} />
            <span className="sr-only">{item.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;

