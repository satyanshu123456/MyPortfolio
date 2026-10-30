import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  BookOpen,
  Sparkles,
  ArrowRight,
  Briefcase,
  CheckCircle,
  Award,
  FileText,
} from 'lucide-react';
import BackToHome from '../components/BackToHome';
import PageTransition from '../components/PageTransition';

const timelineMilestones = [
  {
    id: 'portfolio',
    year: '2024 - Present',
    title: 'Personal Portfolio & Project Architecture',
    subtitle: 'SATYANSHU.DEV Portfolio System',
    type: 'Project Engineering',
    icon: Sparkles,
    accentColor: '#22D3EE',
    description:
      'Designing and engineering my personal portfolio with modern 3D graphics, responsive React components, Framer Motion animations, Express.js backend, and MongoDB document persistence.',
    highlights: [
      'Multi-page single page architecture with React Router DOM',
      '3D procedural WebGL visualization via React Three Fiber',
      'Production-ready contact API with rate limiting and MongoDB integration',
      'Dark/Light theme persistence and strict accessibility compliance',
    ],
  },
  {
    id: 'mern-journey',
    year: 'Continuous',
    title: 'MERN Stack Learning & Deep Dive',
    subtitle: 'Frontend & Backend Software Engineering',
    type: 'Self-Directed Learning',
    icon: Code2,
    accentColor: '#6366F1',
    description:
      'Intensive hands-on practice in JavaScript ES6+, React.js component design, Node.js server architecture, Express middleware, and MongoDB schema design with Mongoose.',
    highlights: [
      'Built interactive frontend user interfaces with React and Tailwind CSS',
      'Constructed RESTful API endpoints and backend services',
      'Tested and debugged APIs with Postman',
      'Practiced Git branch workflows and version control management',
    ],
  },
  {
    id: 'coding-practice',
    year: 'Ongoing',
    title: 'Problem Solving & Coding Practice',
    subtitle: 'Algorithmic Foundations & Core CS',
    type: 'Skill Development',
    icon: BookOpen,
    accentColor: '#A855F7',
    description:
      'Consistent practice solving programming problems, strengthening understanding of algorithms, time-complexity analysis, data structures, and asynchronous JavaScript patterns.',
    highlights: [
      'Deepening knowledge of asynchronous JavaScript (Promises, async/await, event loop)',
      'Understanding of clean code principles and modular software architecture',
      'Web standards, semantic HTML, and responsive design techniques',
    ],
  },
  {
    id: 'education',
    year: '2022 - 2026',
    title: 'B.Tech in Computer Science Engineering (AIML)',
    subtitle: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) & LNCT Excellence, Bhopal',
    type: 'Undergraduate Degree',
    icon: GraduationCap,
    accentColor: '#10B981',
    description:
      'Completed Bachelor of Technology with specialization in Artificial Intelligence and Machine Learning (CGPA: 6.71). Built rigorous theoretical and practical foundations in computing.',
    highlights: [
      'Graduation CGPA: 6.71 (Class of 2026)',
      'Data Structures & Algorithms (DSA)',
      'Database Management Systems (DBMS) & SQL/NoSQL',
      'Artificial Intelligence & Machine Learning foundations',
    ],
  },
  {
    id: 'certifications',
    year: '2026',
    title: 'Industry Certifications & Hackathon Accreditations',
    subtitle: 'Cisco Networking Academy, NSDC Skill India & RICR/SAGE University',
    type: 'Accredited Credentials',
    icon: Award,
    accentColor: '#06B6D4',
    description:
      'Completed industry-grade skilling in cybersecurity, full-stack web engineering, and competitive prototype development.',
    highlights: [
      'CyberOps Associate (Cisco Networking Academy & NIIT Foundation): Security monitoring & incident response',
      'Web Design & Development (NSDC & Skill India Digital Hub): Core web architecture & responsive design',
      'HackInMotion Hackathon (RICR & SAGE University): Prototype under Career & Job Tech track',
    ],
  },
  {
    id: 'schooling',
    year: 'Secondary & Higher Sec.',
    title: '10th & 12th Grade Academic Foundation',
    subtitle: 'Govt. Excellence Venkat No. 1, Satna, MP',
    type: 'School Education',
    icon: Award,
    accentColor: '#F59E0B',
    description:
      'Completed secondary and higher secondary schooling with excellence. Secured 87.75% in 10th Grade and 70.2% in 12th Grade (Science Stream).',
    highlights: [
      '10th Grade: 87.75% High Academic Distinction',
      '12th Grade: 70.2% Science Stream Completion',
      'Consistent analytical and quantitative academic performance',
    ],
  },
];

export const Experience = () => {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation & Header */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <BackToHome />
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
            Journey & Background
          </span>
        </div>

        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Experience & <span className="text-gradient">Timeline</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            A transparent overview of my educational milestones, MERN stack learning journey, and developer practice as a fresher software engineer.
          </p>
        </div>

        {/* Professional Fresher Commitment Statement */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-indigo-500/30 max-w-4xl mx-auto mb-16 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-heading text-xl font-bold text-white">
                Fresher Status & Career Ambition
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                As a fresher developer without formal corporate employment history, I channel my energy into dedicated self-study, building functional projects, and mastering software fundamentals. I am actively seeking an entry-level or junior developer role where I can contribute to meaningful codebases, collaborate with experienced engineers, and continuously elevate my technical abilities.
              </p>
            </div>
          </div>
        </div>

        {/* TIMELINE SECTION */}
        <div className="max-w-4xl mx-auto relative mb-16">
          {/* Vertical Timeline Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600/30 hidden sm:block" />

          <div className="space-y-12">
            {timelineMilestones.map((milestone, index) => {
              const IconComp = milestone.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#080B14] border-2 border-cyan-400 items-center justify-center text-cyan-400 z-10 shadow-neon-accent">
                    <IconComp className="w-4 h-4" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-cyan-400/40 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                          {milestone.year}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {milestone.type}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-xs font-mono text-indigo-300 mb-3">
                        {milestone.subtitle}
                      </p>

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                        {milestone.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="glass-panel rounded-3xl p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left max-w-4xl mx-auto">
          <div>
            <h3 className="font-heading text-xl font-bold text-white mb-1">
              Have an opening or project opportunity?
            </h3>
            <p className="text-sm text-slate-300">
              I'd love to discuss how I can bring value to your engineering team.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 shrink-0">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-xs sm:text-sm text-cyan-300 border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-500/20 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume (PDF)</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-bold text-sm text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-neon-accent"
            >
              <span>Contact Satyanshu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Experience;

