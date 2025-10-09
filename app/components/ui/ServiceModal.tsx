'use client';

import React, { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function ServiceModal({ isOpen, onClose, title, subtitle, children }: ServiceModalProps) {
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
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6 py-8 md:px-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[1076px] max-h-full overflow-y-auto bg-white rounded-[40px] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative px-8 pt-8 pb-6 md:px-12 md:pt-12 md:pb-8">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 md:top-8 md:right-8 w-9 h-9 flex items-center justify-center text-[#0095DA] hover:text-[#0095DA]/70 transition-colors"
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

                {/* Title and Subtitle */}
                <div>
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
              </div>

              {/* Content */}
              <div className="px-8 pb-8 md:px-12 md:pb-12">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
