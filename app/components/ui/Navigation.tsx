'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/hooks/useLanguage';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { Language } from '@/app/utils/language-detector';
import Image from 'next/image';

const languageLabels: Record<Language, string> = {
  en: 'English',
  es: 'Spanish',
  ru: 'Russian',
  ar: 'Arabic',
};

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const activeSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // Sections with light backgrounds need dark text
  const isLightBackground = activeSection === 'immersive' || activeSection === 'footer';

  const navItems = [
    { key: 'welcome', href: '#welcome', label: 'Welcome' },
    { key: 'about', href: '#about', label: 'About' },
    { key: 'journey', href: '#journey', label: 'Journey' },
    { key: 'services', href: '#services', label: 'Services' },
  ];

  return (
    <>
      {/* Navigation - Matching Figma exactly with absolute positioning */}
      <div className="fixed left-1/2 -translate-x-1/2 z-40 w-[370px] max-w-[calc(100vw-2rem)] h-[84px]" style={{ top: 'calc(100vh - 135px)' }}>
        <div className="relative w-full h-full overflow-visible rounded-[42px] backdrop-blur-[60px] bg-white/[0.08] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          style={{
            backdropFilter: 'blur(60px) saturate(180%)',
            WebkitBackdropFilter: 'blur(60px) saturate(180%)',
          }}
        >

          {/* Navigation Items - Responsive positioning */}
          <a
            href={navItems[0].href}
            className={`absolute left-[20px] md:left-[30px] top-[34px] font-inter font-bold text-[11px] md:text-[12px] leading-normal transition-colors ${
              isLightBackground
                ? 'text-[#051C3D] hover:text-[#051C3D]'
                : 'text-white hover:text-white'
            }`}
          >
            {t.nav?.[navItems[0].key] || navItems[0].label}
          </a>

          <a
            href={navItems[1].href}
            className={`absolute left-[85px] md:left-[106px] top-[34px] font-inter font-normal text-[11px] md:text-[12px] leading-normal transition-colors ${
              isLightBackground
                ? 'text-[#051C3D]/75 hover:text-[#051C3D]'
                : 'text-white/75 hover:text-white'
            }`}
          >
            {t.nav?.[navItems[1].key] || navItems[1].label}
          </a>

          <a
            href={navItems[2].href}
            className={`absolute left-[135px] md:left-[164px] top-[34px] font-inter font-normal text-[11px] md:text-[12px] leading-normal transition-colors ${
              isLightBackground
                ? 'text-[#051C3D]/75 hover:text-[#051C3D]'
                : 'text-white/75 hover:text-white'
            }`}
          >
            {t.nav?.[navItems[2].key] || navItems[2].label}
          </a>

          <a
            href={navItems[3].href}
            className={`absolute left-[195px] md:left-[232px] top-[34px] font-inter font-normal text-[11px] md:text-[12px] leading-normal transition-colors ${
              isLightBackground
                ? 'text-[#051C3D]/75 hover:text-[#051C3D]'
                : 'text-white/75 hover:text-white'
            }`}
          >
            {t.nav?.[navItems[3].key] || navItems[3].label}
          </a>

          {/* Language Switcher - Exact Figma position on desktop, right-aligned on mobile */}
          <div className="absolute right-[13px] md:left-[303px] md:right-auto top-[13px] w-[57px] h-[58px]">
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="relative w-full h-full"
              aria-label="Change language"
            >
              <div className="absolute inset-0 overflow-hidden hover:bg-white/[0.12] transition-all duration-200 rounded-full backdrop-blur-[60px] bg-white/[0.08] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                style={{
                  backdropFilter: 'blur(60px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(60px) saturate(180%)',
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src="/a6418c247489ae4093402da9807b220411f0b962.png"
                    alt="Language"
                    width={20}
                    height={12}
                    className="object-contain"
                  />
                </div>
              </div>
            </button>

            {/* Language Dropdown with smooth animation */}
            <AnimatePresence>
              {isLanguageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full mb-2 right-0 w-[140px] overflow-hidden shadow-xl"
                >
                  <div className="w-full backdrop-blur-[60px] bg-white/[0.08] border border-white/30 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
                    style={{
                      backdropFilter: 'blur(60px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(60px) saturate(180%)',
                    }}
                  >
                    {Object.entries(languageLabels).map(([lang, label]) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang as Language);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 font-inter text-[12px] text-left hover:bg-white/[0.15] transition-all duration-150 flex items-center gap-2 ${
                          language === lang ? 'text-white font-bold bg-white/[0.1]' : 'text-white/75 font-normal'
                        }`}
                      >
                        <span className="text-base">
                          {lang === 'en' ? '🇬🇧' : lang === 'es' ? '🇪🇸' : lang === 'ru' ? '🇷🇺' : '🇸🇦'}
                        </span>
                        {label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Active indicator line under "Welcome" - Responsive positioning */}
          <div className="absolute left-[40px] md:left-[51px] top-[55px] w-[14.5px] h-[2px]">
            <Image
              src="/0e0d007e3bf3288f4877466340642650eabf6157.svg"
              alt=""
              width={14.5}
              height={2}
            />
          </div>
        </div>
      </div>

    </>
  );
}
