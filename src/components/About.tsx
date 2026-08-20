import React from 'react';
import { motion } from 'motion/react';
import { User, Target, Code2, MapPin, Mail, Send, Languages, Globe2 } from 'lucide-react';
import { personalInfo, spokenLanguages } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 relative bg-slate-100/50 dark:bg-slate-900/40 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bio & Career Objective */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Bio Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">About Me</h3>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                I'm <strong className="text-slate-900 dark:text-white font-semibold">{personalInfo.name}</strong>, a passionate Full-Stack Developer based in Phnom Penh, Cambodia. I enjoy building modern web and mobile applications that solve real-world problems.
              </p>
              <p>
                My experience spans frontend responsive UI design, backend RESTful API architecture in <strong className="text-indigo-600 dark:text-cyan-400">Spring Boot and Flask</strong>, relational database management in MySQL and PostgreSQL, and cross-platform mobile development using <strong className="text-indigo-600 dark:text-cyan-400">Flutter and Dart</strong>.
              </p>
              <p>
                I love transforming ideas into reliable, user-friendly software by writing clean, scalable, and maintainable code.
              </p>
            </div>

            {/* Quick Details footer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Mail className="w-4 h-4 text-cyan-500 shrink-0" />
                <span className="truncate">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <Send className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{personalInfo.telegramHandle}</span>
              </div>
            </div>
          </div>

          {/* Languages Spoken Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Language Proficiency</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Bilingual communication skills</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50">
                2 Languages
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {spokenLanguages.map((lang) => (
                <div
                  key={lang.language}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-cyan-500" />
                      <span className="font-bold text-slate-900 dark:text-white text-sm">
                        {lang.language}
                      </span>
                      {lang.nativeName && (
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          ({lang.nativeName})
                        </span>
                      )}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold font-mono bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-cyan-400 border border-indigo-100 dark:border-slate-700">
                      {lang.proficiency}
                    </span>
                  </div>

                  <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                      style={{ width: `${lang.levelScore}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    <span>{lang.levelText}</span>
                    <span>{lang.levelScore}%</span>
                  </div>

                  {lang.notes && (
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed pt-1 border-t border-slate-200/50 dark:border-slate-700/40">
                      {lang.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Career Objective Spotlight */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden border border-indigo-500/20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Career Objective</h3>
              <span className="ml-auto px-2.5 py-0.5 rounded-full text-[10px] font-bold font-mono bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                ACTIVE OPPORTUNITY
              </span>
            </div>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              "{personalInfo.careerObjective}"
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
