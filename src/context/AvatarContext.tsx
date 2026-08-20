import React, { createContext, useContext, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

interface AvatarContextType {
  avatarUrl: string;
  isDefaultAvatar: boolean;
  updateAvatar: (newUrl: string) => void;
  resetAvatar: () => void;
  isEditModalOpen: boolean;
  openEditModal: () => void;
  closeEditModal: () => void;
  isOwner: boolean;
  toggleOwnerMode: (pin?: string) => boolean;
  isPinModalOpen: boolean;
  openPinModal: () => void;
  closePinModal: () => void;
  tryOpenEditModal: () => void;
  logoutOwner: () => void;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export const OWNER_PIN = '198908';

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avatarUrl, setAvatarUrl] = useState<string>(() => {
    const saved = localStorage.getItem('user_profile_avatar');
    return saved || personalInfo.avatarUrl;
  });

  const [isOwner, setIsOwner] = useState<boolean>(() => {
    return localStorage.getItem('portfolio_is_owner') === 'true';
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState<boolean>(false);

  const updateAvatar = (newUrl: string) => {
    setAvatarUrl(newUrl);
    try {
      localStorage.setItem('user_profile_avatar', newUrl);
    } catch (e) {
      console.warn('LocalStorage limit reached for large image base64 data', e);
    }
  };

  const resetAvatar = () => {
    setAvatarUrl(personalInfo.avatarUrl);
    localStorage.removeItem('user_profile_avatar');
  };

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const openPinModal = () => setIsPinModalOpen(true);
  const closePinModal = () => setIsPinModalOpen(false);

  const toggleOwnerMode = (pin?: string): boolean => {
    if (isOwner) {
      setIsOwner(false);
      localStorage.setItem('portfolio_is_owner', 'false');
      return true;
    }

    if (pin === OWNER_PIN) {
      setIsOwner(true);
      localStorage.setItem('portfolio_is_owner', 'true');
      setIsPinModalOpen(false);
      setIsEditModalOpen(true);
      return true;
    }

    return false;
  };

  const logoutOwner = () => {
    setIsOwner(false);
    localStorage.setItem('portfolio_is_owner', 'false');
    setIsEditModalOpen(false);
  };

  const tryOpenEditModal = () => {
    if (isOwner) {
      setIsEditModalOpen(true);
    } else {
      setIsPinModalOpen(true);
    }
  };

  const isDefaultAvatar = avatarUrl === personalInfo.avatarUrl;

  return (
    <AvatarContext.Provider
      value={{
        avatarUrl,
        isDefaultAvatar,
        updateAvatar,
        resetAvatar,
        isEditModalOpen,
        openEditModal,
        closeEditModal,
        isOwner,
        toggleOwnerMode,
        isPinModalOpen,
        openPinModal,
        closePinModal,
        tryOpenEditModal,
        logoutOwner,
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
};
