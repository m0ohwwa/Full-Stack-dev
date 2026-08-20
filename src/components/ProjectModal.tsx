import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Play, Copy, Check, Server, Layers, Phone, Send, Bot, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'api_sandbox'>('overview');
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [isRequesting, setIsRequesting] = useState(false);
  const [apiResponse, setApiResponse] = useState<object | null>(null);
  const [copied, setCopied] = useState(false);

  const handleTestApi = () => {
    if (!project.apiEndpoints || project.apiEndpoints.length === 0) return;
    setIsRequesting(true);
    setApiResponse(null);
    setTimeout(() => {
      setApiResponse(project.apiEndpoints![selectedEndpointIndex].sampleResponse);
      setIsRequesting(false);
    }, 450);
  };

  const handleCopyJson = () => {
    if (!apiResponse) return;
    navigator.clipboard.writeText(JSON.stringify(apiResponse, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
          className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase ${
                project.category === 'bot'
                  ? 'bg-cyan-100 dark:bg-cyan-900/60 text-cyan-700 dark:text-cyan-300'
                  : 'bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-cyan-300'
              }`}>
                {project.category === 'bot' ? 'Telegram Bot & AI' : project.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Header Tabs */}
          <div className="flex items-center gap-2 px-6 pt-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-colors border-b-2 ${
                activeTab === 'overview'
                  ? 'border-indigo-600 dark:border-cyan-400 text-indigo-600 dark:text-cyan-400 bg-white dark:bg-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Overview & Features
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-colors border-b-2 ${
                activeTab === 'architecture'
                  ? 'border-indigo-600 dark:border-cyan-400 text-indigo-600 dark:text-cyan-400 bg-white dark:bg-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Architecture & Tech Stack
            </button>

            {project.apiEndpoints && project.apiEndpoints.length > 0 && (
              <button
                onClick={() => setActiveTab('api_sandbox')}
                className={`px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-colors border-b-2 flex items-center gap-1.5 ${
                  activeTab === 'api_sandbox'
                    ? 'border-indigo-600 dark:border-cyan-400 text-indigo-600 dark:text-cyan-400 bg-white dark:bg-slate-900'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Interactive API Tester</span>
              </button>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {project.image && (
                  <div className="w-full h-56 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Quick Access for Bot/Live project */}
                {(project.botUrl || project.liveDemoUrl) && (
                  <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-300">
                        <Send className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {project.botUsername ? `Telegram Bot: ${project.botUsername}` : 'Live Project Links'}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          {project.liveDemoUrl ? `Website: ${project.liveDemoUrl}` : 'Direct access available'}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      {project.botUrl && (
                        <a
                          href={project.botUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-all shadow-sm flex-1 sm:flex-initial"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Chat with Bot</span>
                        </a>
                      )}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-semibold transition-all flex-1 sm:flex-initial"
                        >
                          <Globe className="w-3.5 h-3.5" />
                          <span>Visit Web App</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Project Summary</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
                  <h5 className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-1">Problem Solved</h5>
                  <p className="text-xs text-amber-700 dark:text-amber-200 leading-relaxed">
                    {project.problemSolved}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Engineering & Architectural Design</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.architectureNotes || 'Architected following modular clean code principles.'}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Technologies Employed</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-mono font-medium border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'api_sandbox' && project.apiEndpoints && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Live REST Endpoint Simulator
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Test the backend API endpoints directly in this interactive sandbox. Select an endpoint below and simulate a client request.
                  </p>
                </div>

                {/* Endpoint selector */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase">
                    Select Endpoint:
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {project.apiEndpoints.map((ep, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSelectedEndpointIndex(idx);
                          setApiResponse(null);
                        }}
                        className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                          selectedEndpointIndex === idx
                            ? 'border-indigo-600 dark:border-cyan-400 bg-indigo-50/50 dark:bg-slate-800'
                            : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 font-mono text-xs">
                          <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                            ep.method === 'GET' ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                          }`}>
                            {ep.method}
                          </span>
                          <span className="font-semibold text-slate-900 dark:text-white">{ep.path}</span>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">{ep.description}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Request trigger */}
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-500 font-mono">
                    Host: <span className="text-slate-900 dark:text-slate-200">
                      {project.category === 'bot' ? 'https://voiceconvert.ai.studio' : 'https://api.sovannita.dev'}
                    </span>
                  </div>
                  <button
                    onClick={handleTestApi}
                    disabled={isRequesting}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isRequesting ? 'Executing Request...' : 'Send Test Request'}</span>
                  </button>
                </div>

                {/* Response payload viewer */}
                {apiResponse && (
                  <div className="rounded-xl bg-slate-950 text-slate-100 p-4 font-mono text-xs overflow-x-auto relative border border-slate-800">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                      <span>HTTP/1.1 200 OK</span>
                      <button
                        onClick={handleCopyJson}
                        className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied' : 'Copy JSON'}</span>
                      </button>
                    </div>
                    <pre className="text-cyan-300">
                      {JSON.stringify(apiResponse, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Footer Links */}
          <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500 dark:text-slate-400">
              Developer: Touch Sovannita
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {project.botUrl && (
                <a
                  href={project.botUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-bold transition-colors shadow-md shadow-cyan-600/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Open Telegram Bot ({project.botUsername || '@sreysartpsbot'})</span>
                </a>
              )}
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-md shadow-indigo-600/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{project.category === 'bot' ? 'Visit voiceconvert.ai.studio' : 'Live Demo'}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
