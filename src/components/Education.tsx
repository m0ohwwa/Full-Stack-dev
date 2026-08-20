import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Check, 
  Copy,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { educationList, certificates } from '../data/portfolioData';

export const Education: React.FC = () => {
  const [copiedCertId, setCopiedCertId] = useState<string | null>(null);

  const handleCopyCredential = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCertId(id);
    setTimeout(() => setCopiedCertId(null), 2000);
  };

  return (
    <section id="education" className="py-20 relative bg-slate-50 dark:bg-slate-950 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Education Header */}
        <div className="flex items-center justify-between gap-3.5">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-600/25">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Education
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Formal academic degrees & higher education qualifications
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
            {educationList.length} Degrees Recorded
          </span>
        </div>

        {/* Degrees Cards List */}
        <div className="space-y-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 sm:p-9 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-md shadow-slate-200/50 dark:shadow-none space-y-6 relative overflow-hidden"
            >
              {/* Top row: Degree Tag & Graduation Year */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 mb-3">
                    {edu.type === 'high_school' ? (
                      <>
                        <Building2 className="w-3.5 h-3.5" />
                        <span>Secondary National Degree</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>Formal University Degree</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {edu.institution}
                  </h3>
                  <div className="text-base sm:text-lg font-bold text-cyan-600 dark:text-cyan-400 mt-1">
                    {edu.type === 'university' ? `${edu.degree} in ${edu.major}` : edu.degree}
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-xl font-mono text-sm font-bold border bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20">
                  {edu.graduationYear}
                </span>
              </div>

              {/* Status Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">Status:</span> {edu.status}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{edu.type === 'high_school' ? 'ACADEMIC FOUNDATIONS:' : 'ACADEMIC FOCUS AREAS:'}</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Coursework / Subjects */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2.5">
                    {edu.type === 'high_school' ? 'Core Subjects & Strengths:' : 'Key Coursework:'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-50 dark:bg-cyan-950/40 text-cyan-800 dark:text-cyan-300 border border-cyan-200/60 dark:border-cyan-800/50"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certificates & Credentials Section in Education */}
        <div id="certificates" className="space-y-6 pt-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-amber-500 text-white shadow-lg shadow-amber-500/25">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Certificates & Credentials
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Verified course certifications & credentials
                </p>
              </div>
            </div>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold font-mono bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50">
              {certificates.length} Verified
            </span>
          </div>

          <div className="space-y-4">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-amber-400/50 dark:hover:border-amber-500/40 transition-all group"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        {cert.title}
                      </h4>
                      <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                        <span className="font-semibold text-indigo-600 dark:text-cyan-400">{cert.issuer}</span>
                        <span>•</span>
                        <span className="font-mono">{cert.issueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {cert.description && (
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 pl-0 sm:pl-11">
                    {cert.description}
                  </p>
                )}

                <div className="pl-0 sm:pl-11 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.credentialId && (
                    <button
                      onClick={() => handleCopyCredential(cert.id, cert.credentialId!)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-cyan-300 transition-colors ml-auto px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800"
                      title="Copy Credential ID"
                    >
                      {copiedCertId === cert.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500 font-bold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>ID: {cert.credentialId}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
