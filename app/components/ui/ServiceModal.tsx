'use client';

import React, { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: ReactNode;
  showPlayButton?: boolean;
  onPlayClick?: () => void;
}

export function ServiceModal({ isOpen, onClose, title, subtitle, children, showPlayButton = false, onPlayClick }: ServiceModalProps) {
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
                        onClick={onPlayClick}
                        className="w-12 h-12 flex items-center justify-center text-[#0095DA] hover:text-[#0095DA]/70 transition-colors"
                        aria-label="Play video"
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
                          <path d="M20 15 L35 25 L20 35 Z" fill="currentColor" stroke="none" />
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
                className="flex-1 overflow-y-auto px-8 py-8 md:px-12 md:py-12 custom-scrollbar"
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
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
