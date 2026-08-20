import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Upload, Link as LinkIcon, RotateCcw, Check, Camera, Image as ImageIcon, ShieldCheck, LogOut } from 'lucide-react';
import { useAvatar } from '../context/AvatarContext';

export const EditPhotoModal: React.FC = () => {
  const { avatarUrl, isDefaultAvatar, updateAvatar, resetAvatar, isEditModalOpen, closeEditModal, logoutOwner } = useAvatar();

  const [activeTab, setActiveTab] = useState<'upload' | 'url'>('upload');
  const [tempImage, setTempImage] = useState<string>(avatarUrl);
  const [urlInput, setUrlInput] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditModalOpen) {
      setTempImage(avatarUrl);
      setUrlInput('');
      setErrorMsg(null);
      setSuccessMsg(null);
    }
  }, [isEditModalOpen, avatarUrl]);

  if (!isEditModalOpen) return null;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (PNG, JPG, WEBP, GIF)');
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      setErrorMsg('Image size should be less than 8MB');
      return;
    }

    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setTempImage(result);
        setSuccessMsg('Image loaded! Click "Save Picture" to apply.');
      }
    };
    reader.onerror = () => {
      setErrorMsg('Failed to read image file');
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setErrorMsg('Please enter a valid image URL');
      return;
    }

    try {
      new URL(urlInput);
      setTempImage(urlInput.trim());
      setErrorMsg(null);
      setSuccessMsg('URL loaded! Click "Save Picture" to apply.');
    } catch {
      setErrorMsg('Invalid URL format. Please include http:// or https://');
    }
  };

  const handleSave = () => {
    updateAvatar(tempImage);
    closeEditModal();
  };

  const handleReset = () => {
    resetAvatar();
    closeEditModal();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden text-slate-900 dark:text-slate-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-cyan-400">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg leading-tight">Edit Profile Picture</h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                    <ShieldCheck className="w-3 h-3" />
                    Owner Verified
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Update your headshot or avatar</p>
              </div>
            </div>
            <button
              onClick={closeEditModal}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 space-y-6">
            {/* Live Preview Area */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 relative">
              {isDefaultAvatar && (
                <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 text-[10px] font-bold border border-indigo-500/20 flex items-center gap-1">
                  <span>Default Photo Active</span>
                </div>
              )}

              {/* Card Preview */}
              <div className="flex flex-col items-center gap-2">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-md">
                  <div className="w-full h-full rounded-[14px] overflow-hidden bg-slate-900">
                    <img
                      src={tempImage}
                      alt="Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center"
                      onError={() => setErrorMsg('Failed to load preview from selected source')}
                    />
                  </div>
                </div>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Hero Card Preview</span>
              </div>

              {/* Circle Avatar Preview */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-md">
                  <img
                    src={tempImage}
                    alt="Navbar Preview"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full bg-slate-900"
                  />
                </div>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Navbar Icon Preview</span>
              </div>
            </div>

            {/* Notification Messages */}
            {errorMsg && (
              <div className="p-3 text-xs rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 flex items-center gap-2">
                <X className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
            {successMsg && (
              <div className="p-3 text-xs rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            {/* Input Method Tabs */}
            <div>
              <div className="flex border-b border-slate-200 dark:border-slate-800 mb-4">
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'upload'
                      ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-400'
                      : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload File</span>
                </button>
                <button
                  onClick={() => setActiveTab('url')}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'url'
                      ? 'border-indigo-600 text-indigo-600 dark:border-cyan-400 dark:text-cyan-400'
                      : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>Image URL</span>
                </button>
              </div>

              {/* Upload Tab */}
              {activeTab === 'upload' && (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`cursor-pointer p-8 rounded-2xl border-2 border-dashed text-center transition-all ${
                    isDragging
                      ? 'border-indigo-500 bg-indigo-500/10 dark:border-cyan-400 dark:bg-cyan-400/10'
                      : 'border-slate-300 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 bg-slate-50/50 dark:bg-slate-900/40'
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-cyan-400">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">
                    Click to browse or drag & drop image
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Supports PNG, JPG, WEBP, or GIF (max 8MB)
                  </p>
                </div>
              )}

              {/* URL Tab */}
              {activeTab === 'url' && (
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Image Address (URL)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://example.com/my-photo.jpg"
                      className="flex-1 px-3.5 py-2.5 rounded-xl text-sm bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-400"
                    />
                    <button
                      onClick={handleApplyUrl}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                    >
                      Preview
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Paste a direct image link from Imgur, GitHub, or any public web server.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <div className="flex items-center gap-2">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors"
                title="Reset to default profile picture"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Default Photo</span>
              </button>
              <button
                onClick={() => {
                  logoutOwner();
                }}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-amber-600 dark:text-amber-400 hover:bg-amber-500/10 rounded-lg transition-colors"
                title="Lock Owner Mode and return to public visitor view"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Lock Owner Mode</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 shadow-md shadow-indigo-500/20 transition-all"
              >
                <Check className="w-4 h-4" />
                <span>Save Picture</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
