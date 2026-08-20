import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Mail, MapPin, Globe, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { personalInfo, skills, projects, experience, educationList, certificates, spokenLanguages } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Actions Bar */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-slate-900 dark:text-white">
                Curriculum Vitae Preview
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-cyan-300">
                PDF/Print
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-8 sm:p-10 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 font-sans print:p-0 print:bg-white print:text-slate-900">
            
            {/* Header */}
            <div className="border-b pb-6 border-slate-200 dark:border-slate-800">
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
                {personalInfo.name}
              </h1>
              <div className="text-base font-semibold text-indigo-600 dark:text-cyan-400 mb-3">
                {personalInfo.role}
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{personalInfo.location}</span>
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                </span>
              </div>
            </div>

            {/* Career Objective */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                {personalInfo.careerObjective}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div><strong>Languages:</strong> Java, JavaScript, Python, PHP, Dart, C, C++, C#</div>
                <div><strong>Frontend:</strong> HTML5, CSS3, Bootstrap, Tailwind CSS, Angular</div>
                <div><strong>Backend:</strong> Spring Boot, Flask, Django, Laravel, ASP.NET</div>
                <div><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</div>
                <div><strong>Mobile:</strong> Flutter, Dart, Android Development (Java)</div>
                <div><strong>Tools & Cloud:</strong> Git, GitHub, VS Code, Postman, Firebase, Linux</div>
              </div>
            </div>

            {/* Work & Practical Experience */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-3">
                Work & Practical Experience
              </h2>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div key={exp.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">
                        {exp.role} <span className="font-normal text-slate-500">| {exp.company}</span>
                      </span>
                      <span className="text-[10px] font-mono text-indigo-600 dark:text-cyan-400">{exp.period}</span>
                    </div>
                    <ul className="space-y-0.5 text-[11px] text-slate-600 dark:text-slate-400 mb-1.5">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>• {r}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-slate-200/60 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-3">
                Key Projects
              </h2>
              <div className="space-y-3">
                {projects.map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">{p.title}</span>
                      <span className="text-[10px] font-mono text-indigo-600 dark:text-cyan-400">{p.techStack.slice(0, 3).join(', ')}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mb-1">{p.description}</p>
                    <div className="text-[11px] text-slate-500 font-medium">Problem solved: {p.problemSolved}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                Education
              </h2>
              <div className="space-y-3">
                {educationList.map((edu) => (
                  <div key={edu.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                    <div className="flex items-start justify-between text-xs mb-1">
                      <div>
                        <strong className="text-slate-900 dark:text-white">{edu.institution}</strong> — {edu.type === 'university' ? `${edu.degree} in ${edu.major}` : edu.degree}
                      </div>
                      <div className="font-mono text-slate-500 text-[11px] ml-2 shrink-0">{edu.graduationYear}</div>
                    </div>
                    <ul className="space-y-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                      {edu.highlights.map((h, i) => (
                        <li key={i}>• {h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                Certifications & Verified Credentials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {certificates.map((c) => (
                  <div key={c.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800">
                    <div className="font-bold text-slate-900 dark:text-white text-[11px]">{c.title}</div>
                    <div className="text-[10px] text-indigo-600 dark:text-cyan-400 font-medium">{c.issuer} ({c.issueDate})</div>
                    {c.credentialId && <div className="text-[9px] font-mono text-slate-400 mt-0.5">ID: {c.credentialId}</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Spoken Languages */}
            <div>
              <h2 className="text-xs font-mono font-bold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
                Language Proficiency
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {spokenLanguages.map((lang) => (
                  <div key={lang.language} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white text-[11px]">{lang.language}</span>
                      {lang.nativeName && <span className="text-[10px] text-slate-500 dark:text-slate-400 ml-1">({lang.nativeName})</span>}
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-cyan-400 font-semibold">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
