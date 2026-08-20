import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wrench, Code2, Layout, Server, Database, Smartphone, Cloud, GitBranch, Search, Sparkles, Languages, Globe2 } from 'lucide-react';
import { skills, spokenLanguages } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Wrench },
    { id: 'languages', label: 'Languages', icon: Code2 },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'tools', label: 'Tools', icon: Wrench },
    { id: 'version_control', label: 'Version Control', icon: GitBranch },
  ];

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            A versatile range of technologies across programming languages, backend frameworks, mobile SDKs, and database management.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${skill.badgeColor || 'bg-indigo-500'}`} />
                      <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`h-full rounded-full ${
                        skill.level >= 85
                          ? 'bg-gradient-to-r from-indigo-500 to-cyan-400'
                          : skill.level >= 75
                          ? 'bg-gradient-to-r from-indigo-500 to-indigo-400'
                          : 'bg-slate-400 dark:bg-slate-600'
                      }`}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-2 text-[10px] text-slate-400 font-mono">
                    <span className="uppercase">{skill.category.replace('_', ' ')}</span>
                    <span>
                      {skill.level >= 85 ? 'Proficient' : skill.level >= 75 ? 'Intermediate' : 'Learning'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
            No skills match "{searchQuery}". Try searching for Java, Flutter, Python, or MySQL.
          </div>
        )}

        {/* Spoken Languages Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Spoken Languages & Communication
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Multilingual collaboration capabilities for engineering teams
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800/60">
              {spokenLanguages.length} Languages
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {spokenLanguages.map((lang) => (
              <div
                key={lang.language}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                    <span className="font-bold text-slate-900 dark:text-white text-sm">
                      {lang.language}
                    </span>
                    {lang.nativeName && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        ({lang.nativeName})
                      </span>
                    )}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold font-mono bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50">
                    {lang.proficiency}
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
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

      </div>
    </section>
  );
};
