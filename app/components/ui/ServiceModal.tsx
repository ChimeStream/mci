'use client';

import React, { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { useAudioManager } from '@/app/hooks/useAudioManager';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: ReactNode;
  showPlayButton?: boolean;
  serviceKey?: string;
}

export function ServiceModal({ isOpen, onClose, title, subtitle, children, showPlayButton = false, serviceKey }: ServiceModalProps) {
  const { language } = useLanguage();
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const { currentlyPlaying, setCurrentlyPlaying } = useAudioManager();
  const AUDIO_ID = `service-modal-${serviceKey}`;

  // Map language code to sound folder name
  const getLanguageFolder = (lang: string) => {
    const folderMap: { [key: string]: string } = {
      'en': 'en',
      'es': 'sp', // Spanish folder is named 'sp'
      'ru': 'ru',
      'ar': 'ar',
    };
    return folderMap[lang] || 'en';
  };

  // Map service keys to audio file names with language-specific handling
  const getAudioFileName = (key: string, lang: string) => {
    // Handle English with different file naming
    if (lang === 'en') {
      const englishMap: { [key: string]: string } = {
        '5g': '5.5G', // Missing .mp3 extension
        'platforms': 'Platforms.mp3',
        'b2b': 'B2B & B2G.mp3',
        'fintech': 'Fintech.mp3',
        'kids': 'Kids.mp3',
        'sim': 'Sim Card.mp3',
      };
      return englishMap[key] || null;
    }

    // Handle Arabic with typo in Fintech
    if (lang === 'ar') {
      const arabicMap: { [key: string]: string } = {
        '5g': '5.5G.mp3',
        'platforms': 'Platforms.mp3',
        'b2b': 'B2B & B2G.mp3', // Fallback to English if missing
        'fintech': 'Fintesh.mp3', // Typo in actual file
        'kids': 'Kids.mp3',
        'sim': 'Sim Card.mp3', // Fallback to English if missing
      };
      return arabicMap[key] || null;
    }

    // Handle Russian (missing some files)
    if (lang === 'ru') {
      const russianMap: { [key: string]: string } = {
        '5g': '5.5G.mp3',
        'platforms': 'Platforms.mp3',
        'b2b': 'B2B & B2G.mp3', // Fallback to English if missing
        'fintech': 'Fintech.mp3',
        'kids': 'Kids.mp3',
        'sim': 'Sim Card.mp3', // Fallback to English if missing
      };
      return russianMap[key] || null;
    }

    // Default for Spanish and other languages
    const fileNameMap: { [key: string]: string } = {
      '5g': '5.5G.mp3',
      'platforms': 'Platforms.mp3',
      'b2b': 'B2B & B2G.mp3',
      'fintech': 'Fintech.mp3',
      'kids': 'Kids.mp3',
      'sim': 'Sim Card.mp3',
    };
    return fileNameMap[key] || null;
  };

  // Get language-specific audio path with fallback
  const getAudioPath = () => {
    if (!serviceKey) return null;
    const fileName = getAudioFileName(serviceKey, language);
    if (!fileName) return null;

    // For missing files in specific languages, fallback to English
    const missingFiles = {
      ru: ['b2b', 'sim'],
      ar: ['b2b', 'sim'],
    };

    if (missingFiles[language as keyof typeof missingFiles]?.includes(serviceKey)) {
      const englishFileName = getAudioFileName(serviceKey, 'en');
      return `/sound/en/${englishFileName}`;
    }

    const folder = getLanguageFolder(language);
    return `/sound/${folder}/${fileName}`;
  };

  // Stop this audio if another one starts playing
  useEffect(() => {
    if (currentlyPlaying && currentlyPlaying !== AUDIO_ID && isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }, [currentlyPlaying, isPlaying, AUDIO_ID]);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setCurrentlyPlaying(null);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setCurrentlyPlaying(AUDIO_ID);
      }
    }
  };

  // Stop audio when modal closes
  useEffect(() => {
    if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      if (currentlyPlaying === AUDIO_ID) {
        setCurrentlyPlaying(null);
      }
    }
  }, [isOpen, AUDIO_ID, currentlyPlaying, setCurrentlyPlaying]);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div
            className="fixed inset-0 z-[51] flex items-center justify-center px-6 py-8 md:px-12 md:py-16"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[1076px] max-h-full bg-white rounded-[40px] shadow-2xl flex flex-col"
              style={{ maxHeight: 'calc(100vh - 8rem)' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fixed Header */}
              <div className="flex-shrink-0 px-8 pt-8 pb-6 md:px-12 md:pt-12 md:pb-8 border-b border-gray-200">
                {/* Header Row with Title and Buttons */}
                <div className="flex items-start justify-between gap-6">
                  {/* Title and Subtitle */}
                  <div className="flex-1">
                    <h2
                      className="text-[#0095DA] font-black mb-2"
                      style={{
                        fontFamily: 'var(--font-cairo), sans-serif',
                        fontSize: 'clamp(32px, 5vw, 48px)',
                        lineHeight: 1.2,
                      }}
                    >
                      {title}
                    </h2>
                    <p
                      className="text-[#0095DA] font-normal"
                      style={{
                        fontFamily: 'Lato, sans-serif',
                        fontSize: 'clamp(16px, 2vw, 20px)',
                        lineHeight: 1.4,
                      }}
                    >
                      {subtitle}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    {/* Play Button (optional) */}
                    {showPlayButton && (
                      <button
                        onClick={handlePlayAudio}
                        className="w-12 h-12 flex items-center justify-center text-[#0095DA] hover:text-[#0095DA]/70 transition-colors"
                        aria-label={isPlaying ? "Pause audio" : "Play audio"}
                      >
                        <svg
                          width="50"
                          height="50"
                          viewBox="0 0 50 50"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <circle cx="25" cy="25" r="23" />
                          {isPlaying ? (
                            <>
                              <rect x="18" y="15" width="4" height="20" fill="currentColor" />
                              <rect x="28" y="15" width="4" height="20" fill="currentColor" />
                            </>
                          ) : (
                            <path d="M20 15 L35 25 L20 35 Z" fill="currentColor" stroke="none" />
                          )}
                        </svg>
                      </button>
                    )}

                    {/* Close Button */}
                    <button
                      onClick={onClose}
                      className="w-9 h-9 flex items-center justify-center text-[#0095DA] hover:text-[#0095DA]/70 transition-colors"
                      aria-label="Close modal"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Scrollable Content */}
              <div
                className="flex-1 overflow-y-auto px-8 py-10 md:px-16 md:py-14 custom-scrollbar"
                style={{
                  scrollbarWidth: 'thin',
                  scrollbarColor: '#0095DA #f1f1f1',
                }}
              >
                {children}
              </div>

              {/* Custom Scrollbar Styles */}
              <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                  width: 8px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                  background: #f1f1f1;
                  border-radius: 0 40px 40px 0;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #0095DA;
                  border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #007AB8;
                }
              `}</style>

              {/* Hidden Audio Element */}
              {showPlayButton && getAudioPath() && (
                <audio
                  ref={audioRef}
                  src={getAudioPath() || undefined}
                  onEnded={() => setIsPlaying(false)}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                />
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
