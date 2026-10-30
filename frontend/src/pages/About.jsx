import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Compass,
  ArrowRight,
  Code2,
  ExternalLink,
  Target,
  Sparkles,
  Award,
  BookOpen,
  School,
  CheckCircle2,
  FileText,
  Download,
  ShieldCheck,
  Trophy,
} from 'lucide-react';
import BackToHome from '../components/BackToHome';
import SocialLinks from '../components/SocialLinks';
import PageTransition from '../components/PageTransition';
import { developerInfo } from '../data/socialLinks';

export const About = () => {
  const { education, certifications = [] } = developerInfo;

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
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 mb-14 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Avatar with Real Portrait */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-3xl p-1 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-purple-600 shadow-neon-accent mb-4 group">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                  <img
                    src="/profile.jpg"
                    alt="Satyanshu Gautam"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span
                  className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 border-2 border-[#080B14] rounded-full"
                  title="Active & Ready to Build"
                />
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
                As a computer science engineering student specializing in Artificial Intelligence and Machine Learning, I channel my enthusiasm into mastering full-stack web engineering with the MERN stack (MongoDB, Express, React, and Node.js). I prioritize writing clear, maintainable code and solving real-world challenges through accessible software.
              </p>

              {/* Profiles & Socials */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white transition-all shadow-neon-accent"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="/Satyanshu_Gautam_Resume.pdf"
                  download="Satyanshu_Gautam_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-500/20 border border-cyan-500/40 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Download PDF</span>
                </a>

                <SocialLinks size="md" />

                <a
                  href="https://github.com/satyanshu123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>

                <a
                  href="https://www.linkedin.com/in/satyanshu-gautam-33a149254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RESUME & CREDENTIALS SPOTLIGHT SECTION */}
        <section className="mb-14">
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-neon-accent relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Document Mockup Preview Box */}
              <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                {/* Mockup Top Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60">
                    PDF • 1 Page • 128 KB
                  </span>
                </div>

                <div className="space-y-2 py-2">
                  <div className="flex items-center gap-2 text-white font-heading font-bold text-lg">
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <span>Satyanshu Gautam</span>
                  </div>
                  <p className="text-xs font-mono text-cyan-300">
                    MERN Stack Developer • Graduating 2026
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed pt-1">
                    Verified curriculum vitae featuring full-stack engineering milestones, production projects (Cravings, Mingo ChatApp), and industry certifications.
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 mt-2 border-t border-slate-800/80 flex flex-wrap gap-2.5">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-heading font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white transition-all shadow-neon-accent"
                  >
                    <span>View Resume</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="/Satyanshu_Gautam_Resume.pdf"
                    download="Satyanshu_Gautam_Resume.pdf"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Download</span>
                  </a>
                </div>
              </div>

              {/* Verified Certifications & Hackathons from Resume */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Awards & Certified Accreditations
                  </span>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors flex items-start gap-3.5"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border mt-0.5"
                        style={{
                          backgroundColor: `${cert.accentColor}15`,
                          borderColor: `${cert.accentColor}40`,
                          color: cert.accentColor,
                        }}
                      >
                        <Award className="w-5 h-5" />
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h4 className="font-heading font-bold text-sm text-white">
                            {cert.title}
                          </h4>
                          <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                            {cert.year}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-indigo-300">
                          {cert.issuer}
                        </p>
                        <p className="text-xs text-slate-300 leading-relaxed pt-0.5">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATIONAL BACKGROUND SECTION */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold px-2.5 py-1 rounded bg-cyan-950/60 border border-cyan-800/40">
              Academic Journey
            </span>
            <h2 className="font-heading text-3xl font-bold text-white mt-3 mb-2">
              Educational Background
            </h2>
            <p className="text-sm text-slate-300">
              A structured record of my academic qualifications, formal degrees, and institutional milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* FEATURED: Graduation Degree (B.Tech CSE - AIML) */}
            <div className="lg:col-span-12 glass-card rounded-3xl p-6 sm:p-8 border border-indigo-500/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-500/15 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-neon-accent">
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold px-2.5 py-0.5 rounded-md bg-cyan-950/80 border border-cyan-800/60">
                        Undergraduate Degree
                      </span>
                      <span className="text-xs font-mono text-indigo-300 px-2.5 py-0.5 rounded-md bg-indigo-950/60 border border-indigo-800/40">
                        {education.graduation.batch}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                      {education.graduation.degree}
                    </h3>

                    <p className="text-base text-slate-200 font-medium">
                      {education.graduation.university}
                    </p>

                    <p className="text-sm text-slate-400 flex items-center gap-1.5">
                      <School className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{education.graduation.college}</span>
                    </p>

                    <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{education.graduation.location}</span>
                    </p>
                  </div>
                </div>

                {/* Score Pill / CGPA Highlight */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-2 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
                  <div className="px-5 py-3 rounded-2xl bg-slate-900/90 border border-cyan-400/50 shadow-neon-accent text-center md:text-right">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Academic Score
                    </span>
                    <span className="font-heading font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                      CGPA {education.graduation.cgpa}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 font-semibold">
                    {education.graduation.status}
                  </span>
                </div>
              </div>

              {/* Core Coursework & Academic Focus Tags */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <span className="text-xs font-mono text-slate-400 block mb-2 font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  Key Academic Curriculum:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Artificial Intelligence (AI)',
                    'Machine Learning (ML)',
                    'Data Structures & Algorithms (DSA)',
                    'Database Management Systems (DBMS)',
                    'Object-Oriented Programming (OOP)',
                    'Computer Networks',
                    'Web Technologies',
                  ].map((subject) => (
                    <span
                      key={subject}
                      className="text-xs px-3 py-1 rounded-lg bg-slate-900/80 text-slate-300 border border-slate-800 font-mono"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* SECONDARY CARD: 12th Grade (Senior Secondary) */}
            <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between group hover:border-cyan-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="px-3 py-1 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-center">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Score
                    </span>
                    <span className="font-heading font-bold text-lg text-indigo-300">
                      {education.seniorSecondary.percentage}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
                  Senior Secondary Education
                </span>

                <h3 className="font-heading text-xl font-bold text-white mb-1.5">
                  {education.seniorSecondary.standard}
                </h3>

                <p className="text-sm text-slate-200 font-medium mb-1">
                  {education.seniorSecondary.school}
                </p>

                <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{education.seniorSecondary.location}</span>
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Rigorous foundation in advanced secondary education with focused coursework in Mathematics, Physics, and Chemistry.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Completed with 70.2% Academic Distinction</span>
              </div>
            </div>

            {/* SECONDARY CARD: 10th Grade (Secondary School) */}
            <div className="lg:col-span-6 glass-card rounded-3xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between group hover:border-cyan-400/40 transition-all">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <School className="w-6 h-6" />
                  </div>
                  <div className="px-3.5 py-1 rounded-xl bg-cyan-950/60 border border-cyan-400/50 text-center shadow-neon-accent">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Score
                    </span>
                    <span className="font-heading font-extrabold text-lg text-cyan-300">
                      {education.secondary.percentage}
                    </span>
                  </div>
                </div>

                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                  Secondary School Education
                </span>

                <h3 className="font-heading text-xl font-bold text-white mb-1.5">
                  {education.secondary.standard}
                </h3>

                <p className="text-sm text-slate-200 font-medium mb-1">
                  {education.secondary.school}
                </p>

                <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{education.secondary.location}</span>
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Foundational secondary curriculum covering Core Mathematics, Science, Social Studies, and Languages, achieving exceptional academic standing.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Achieved 87.75% High Distinction Grade</span>
              </div>
            </div>
          </div>
        </section>

        {/* CAREER GOALS & ASPIRATIONS SECTION */}
        <section className="mb-14">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Career Goals & Aspirations
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Professional Vision & Technical Growth
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
                <div className="space-y-2">
                  <Compass className="w-6 h-6 text-cyan-400" />
                  <h4 className="font-heading text-base font-bold text-white">
                    Full-Stack MERN Engineering
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Advancing continuously in React, Node.js, Express, and MongoDB to engineer performant, resilient end-to-end web applications.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
                <div className="space-y-2">
                  <Code2 className="w-6 h-6 text-indigo-400" />
                  <h4 className="font-heading text-base font-bold text-white">
                    Collaborative Software Craft
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Eager to join high-impact developer teams where I can learn industry best practices from senior engineers and write maintainable code.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
                <div className="space-y-2">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <h4 className="font-heading text-base font-bold text-white">
                    Modern UX & Scalable Systems
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Combining intuitive user interfaces with robust backend architectures that solve real-world problems for end users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
