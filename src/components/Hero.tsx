import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, Download, Mail, Github, Linkedin, Sparkles, Code, Terminal, Cpu, Camera } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useAvatar } from '../context/AvatarContext';
import { SpotifyIcon, InstagramIcon, FacebookIcon } from './SocialIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { avatarUrl, isDefaultAvatar, tryOpenEditModal, isOwner } = useAvatar();
  const roles = [
    'Full-Stack Developer',
    'Mobile Engineer (Flutter)',
    'Backend Engineer (Spring Boot & Flask)',
    'Database & API Specialist'
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-500/10 dark:bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/80 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-bold">Available for Hire</span>
              <span className="text-emerald-300 dark:text-emerald-700">•</span>
              <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-4">
              Turning Ideas Into Software <br />
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent">
                Web & Mobile Apps
              </span>
            </h1>

            {/* Role Dynamic Switcher */}
            <div className="h-9 mb-6 flex items-center font-mono text-lg sm:text-xl font-semibold text-indigo-600 dark:text-cyan-400">
              <span className="mr-2 text-slate-400">&gt;</span>
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {roles[roleIndex]}
              </motion.span>
              <span className="inline-block w-2 h-5 ml-1 bg-indigo-600 dark:bg-cyan-400 animate-pulse" />
            </div>

            {/* Open to Work Opportunity Highlight Card */}
            <div className="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/60 mb-6 text-sm text-indigo-950 dark:text-indigo-200 flex items-start gap-3 shadow-sm">
              <Sparkles className="w-5 h-5 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white">Active Job Search: </span>
                <span>I am currently open to Junior Full-Stack Developer opportunities, collaborations, and project discussions.</span>
              </div>
            </div>

            {/* Summary Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Hello! I'm <strong className="text-slate-900 dark:text-white">{personalInfo.name}</strong>, a passionate software developer from Cambodia. I transform complex ideas into clean, reliable, and user-friendly software using Spring Boot, Flutter, Python, and React.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700/90 border border-slate-200 dark:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                <span>Resume CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all w-full sm:w-auto"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links & Quick Badge Stats */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors font-medium p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>

              {/* Spotify */}
              <a
                href={personalInfo.spotify}
                target="_blank"
                rel="noopener noreferrer"
                title="Spotify"
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-[#1DB954] dark:hover:text-[#1DB954] transition-colors font-medium p-1.5 rounded-lg hover:bg-emerald-500/10"
              >
                <SpotifyIcon className="w-4 h-4 text-[#1DB954]" />
                <span className="hidden sm:inline">Spotify</span>
              </a>

              {/* Instagram */}
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors font-medium p-1.5 rounded-lg hover:bg-pink-500/10"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span className="hidden sm:inline">Instagram</span>
              </a>

              {/* Facebook */}
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-[#1877F2] dark:hover:text-[#1877F2] transition-colors font-medium p-1.5 rounded-lg hover:bg-blue-500/10"
              >
                <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                <span className="hidden sm:inline">Facebook</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Avatar & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Glowing Orb Backdrop */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 p-1 shadow-2xl shadow-indigo-500/20">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative group">
                  <img
                    src={avatarUrl}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Hover Overlay for Photo Edit */}
                  <button
                    onClick={tryOpenEditModal}
                    className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white font-medium cursor-pointer"
                  >
                    <div className="p-3 rounded-full bg-indigo-600/90 text-white shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform">
                      <Camera className="w-6 h-6" />
                    </div>
                    <span className="text-xs bg-slate-900/80 px-3.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                      {isOwner ? 'Edit Picture (Owner Mode)' : 'Edit Picture'}
                    </span>
                  </button>

                  {/* Top Right Floating Camera Button */}
                  <button
                    onClick={tryOpenEditModal}
                    className="absolute top-3 right-3 p-2.5 rounded-full bg-slate-900/80 hover:bg-indigo-600 text-white border border-white/20 shadow-lg backdrop-blur-md transition-all z-10 group/btn"
                    title="Edit Profile Picture"
                  >
                    <Camera className="w-4 h-4" />
                  </button>

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-bold text-sm">Touch Sovannita</div>
                        <div className="text-[11px] text-cyan-300 font-mono">SETEC Institute (MIS 2026)</div>
                      </div>
                      <div className="px-2 py-1 bg-indigo-500/30 border border-indigo-400/30 rounded text-[10px] font-mono text-indigo-300">
                        Full-Stack
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
