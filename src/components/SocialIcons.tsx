import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const SpotifyIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.496 17.306c-.215.353-.675.465-1.028.249-2.825-1.727-6.38-2.119-10.57-1.162-.403.092-.808-.162-.9-.565-.092-.403.162-.808.565-.9 4.593-1.049 8.529-.607 11.684 1.348.353.215.465.675.249 1.028zm1.468-3.262c-.27.441-.849.58-1.29.31-3.235-1.988-8.167-2.564-11.993-1.401-.497.151-1.028-.135-1.179-.632-.151-.497.135-1.028.632-1.179 4.375-1.328 9.814-.687 13.52 1.593.441.27.58.849.31 1.29zm.126-3.41c-3.879-2.304-10.279-2.516-13.99-1.388-.595.181-1.229-.16-1.41-.755-.181-.595.16-1.229.755-1.41 4.264-1.295 11.324-1.046 15.794 1.608.536.318.711 1.015.393 1.551-.318.536-1.015.711-1.551.394z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const SocialMediaBar: React.FC<{ size?: 'sm' | 'md' | 'lg'; className?: string }> = ({
  size = 'md',
  className = ''
}) => {
  const iconSizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';
  const paddingClass = size === 'sm' ? 'p-2' : size === 'lg' ? 'p-3' : 'p-2.5';

  return (
    <div className={`flex items-center gap-2 flex-wrap ${className}`}>
      {/* Spotify */}
      <a
        href={personalInfo.spotify}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Spotify Profile"
        title="Spotify Profile"
        className={`${paddingClass} rounded-xl bg-emerald-500/10 hover:bg-[#1DB954] text-[#1DB954] hover:text-white border border-emerald-500/20 transition-all transform hover:scale-110 active:scale-95 shadow-sm group`}
      >
        <SpotifyIcon className={iconSizeClass} />
      </a>

      {/* Instagram */}
      <a
        href={personalInfo.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Instagram Profile"
        title="Instagram Profile"
        className={`${paddingClass} rounded-xl bg-pink-500/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-pink-600 dark:text-pink-400 hover:text-white border border-pink-500/20 transition-all transform hover:scale-110 active:scale-95 shadow-sm group`}
      >
        <InstagramIcon className={iconSizeClass} />
      </a>

      {/* Facebook */}
      <a
        href={personalInfo.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Facebook Profile"
        title="Facebook Profile"
        className={`${paddingClass} rounded-xl bg-blue-500/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-blue-500/20 transition-all transform hover:scale-110 active:scale-95 shadow-sm group`}
      >
        <FacebookIcon className={iconSizeClass} />
      </a>
    </div>
  );
};
