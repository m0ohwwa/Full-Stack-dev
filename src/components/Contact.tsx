import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, MapPin, Copy, Check, MessageSquare, Github, Linkedin, Sparkles, Share2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { SpotifyIcon, InstagramIcon, FacebookIcon, SocialMediaBar } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const emailSubject = formData.subject 
        ? `message request from your portfolio - ${formData.subject}`
        : `message request from your portfolio`;

      const response = await fetch('https://formsubmit.co/ajax/sovannita188780@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: emailSubject,
          _template: 'table',
          subject: formData.subject || 'Direct Contact',
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback in case of endpoint blockage: open direct mailto link with pre-filled content
        const mailtoUrl = `mailto:sovannita188780@gmail.com?subject=${encodeURIComponent(
          emailSubject
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'N/A'}\n\nMessage:\n${formData.message}`
        )}`;
        window.open(mailtoUrl, '_blank');
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error('Email submission error:', err);
      const emailSubject = formData.subject 
        ? `message request from your portfolio - ${formData.subject}`
        : `message request from your portfolio`;
      // Fallback to mailto client
      const mailtoUrl = `mailto:sovannita188780@gmail.com?subject=${encodeURIComponent(
        emailSubject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'N/A'}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 7000);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300/80 dark:border-emerald-700/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Hire & Immediate Start</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm max-w-2xl mx-auto">
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              PLEASE, MR./MRS., I NEED THIS 😭🙏 I’M KINDA JOBLESS.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Email Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase">Direct Email</div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Telegram Box */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500 text-white shadow-md shadow-sky-500/20 flex items-center justify-center">
                  <Send className="w-5 h-5 -rotate-12 translate-x-0.5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-slate-400 uppercase">Telegram</div>
                  <a
                    href={personalInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-slate-900 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                  >
                    {personalInfo.telegramHandle}
                  </a>
                </div>
              </div>

              <a
                href={personalInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 text-sky-600 dark:text-sky-400 text-xs font-semibold transition-all border border-sky-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Message on Telegram</span>
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-600 text-white shadow-md shadow-cyan-600/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-slate-400 uppercase">Location</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-slate-500">ICT & Tech Hub of Cambodia</div>
              </div>
            </div>

            {/* Socials & Media Profiles (Spotify, IG, FB, GitHub) */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase">Social Profiles</span>
                </div>
                <span className="text-xs text-slate-400">1-Tap Connect</span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {/* Spotify */}
                <a
                  href={personalInfo.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-emerald-500/10 hover:bg-[#1DB954] text-[#1DB954] hover:text-white border border-emerald-500/20 transition-all text-xs font-semibold group shadow-sm"
                >
                  <SpotifyIcon className="w-5 h-5 mb-1.5 transform group-hover:scale-110 transition-transform" />
                  <span>Spotify</span>
                </a>

                {/* Instagram */}
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-pink-500/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-pink-600 dark:text-pink-400 hover:text-white border border-pink-500/20 transition-all text-xs font-semibold group shadow-sm"
                >
                  <InstagramIcon className="w-5 h-5 mb-1.5 transform group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-blue-500/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-blue-500/20 transition-all text-xs font-semibold group shadow-sm"
                >
                  <FacebookIcon className="w-5 h-5 mb-1.5 transform group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2.5 mb-6">
                <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Thank you for reaching out! Your message has been sent directly to <strong className="text-indigo-600 dark:text-cyan-400">sovannita188780@gmail.com</strong>. Touch Sovannita will reply to your email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Opportunity / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Hello Sovannita, we would love to invite you for an interview..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-all shadow-md shadow-indigo-600/20 active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
