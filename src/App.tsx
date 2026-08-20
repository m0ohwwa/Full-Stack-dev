import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { EditPhotoModal } from './components/EditPhotoModal';
import { OwnerPinModal } from './components/OwnerPinModal';
import { AvatarProvider } from './context/AvatarContext';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return true; // Default to dark theme
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle dark mode class on html and body element
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll section observer for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AvatarProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        {/* Navigation Header */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onOpenResume={() => setResumeOpen(true)}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Hero Section (#home) */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* About Section (#about) */}
        <About />

        {/* Dedicated Education Section (#education) */}
        <Education />

        {/* Projects Showcase Section (#projects) */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Dedicated Experience & Credentials Section (#experience) */}
        <Experience />

        {/* Skills Matrix Section (#skills) */}
        <Skills />

        {/* Contact Section (#contact) */}
        <Contact />

        {/* Project Details & API Simulator Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        {/* Printable Resume CV Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        {/* Interactive Profile Picture Edit Modal */}
        <EditPhotoModal />

        {/* Owner Authentication PIN Modal */}
        <OwnerPinModal />
      </div>
    </AvatarProvider>
  );
}
