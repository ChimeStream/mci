'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  const languageSwitcherRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageSwitcherRef.current && !languageSwitcherRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  // Sections with light backgrounds need dark text
  const isLightBackground = activeSection === 'immersive' || activeSection === 'footer';

  const navItems = [
    { key: 'welcome', href: '#welcome', label: 'Welcome' },
    { key: 'about', href: '#about', label: 'About' },
    { key: 'journey', href: '#journey', label: 'Journey' },
    { key: 'services', href: '#services', label: 'Services' },
  ];

  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  // Update underline position when active section changes
  useEffect(() => {
    const updateUnderlinePosition = () => {
      const activeIndex = navItems.findIndex(item => item.key === activeSection);
      if (activeIndex !== -1 && navItemRefs.current[activeIndex] && containerRef.current) {
        const activeElement = navItemRefs.current[activeIndex];
        if (activeElement) {
          const navBarRect = containerRef.current.getBoundingClientRect();
          const elementRect = activeElement.getBoundingClientRect();

          // Calculate position relative to the navigation bar container
          const elementLeft = elementRect.left - navBarRect.left;
          const elementCenter = elementLeft + (elementRect.width / 2);

          setUnderlineStyle({
            left: elementCenter - 7.25, // Center the 14.5px underline
            width: 14.5,
          });
        }
      }
    };

    // Small delay to ensure DOM is fully rendered and fonts are loaded
    const timer = setTimeout(updateUnderlinePosition, 50);

    // Also update on window resize to maintain centering
    window.addEventListener('resize', updateUnderlinePosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateUnderlinePosition);
    };
  }, [activeSection, language, navItems]);

  return (
    <>
      {/* Navigation - Matching Figma exactly with absolute positioning */}
      <div className="fixed left-1/2 -translate-x-1/2 z-40 w-[370px] max-w-[calc(100vw-2rem)] h-[84px]" style={{ top: 'calc(100vh - 135px)' }}>
        <div ref={containerRef} className="relative w-full h-full overflow-visible rounded-[42px] backdrop-blur-[60px] bg-white/[0.08] border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          style={{
            backdropFilter: 'blur(60px) saturate(180%)',
            WebkitBackdropFilter: 'blur(60px) saturate(180%)',
          }}
        >

          {/* Navigation Items - Flexbox layout with proper spacing */}
          <div
            className="absolute left-[20px] md:left-[30px] top-[34px] right-[75px] flex items-center justify-between"
            dir={language === 'ar' ? 'rtl' : 'ltr'}
          >
            {navItems.map((item, index) => (
              <a
                key={item.key}
                ref={(el) => { navItemRefs.current[index] = el; }}
                href={item.href}
                className={`font-inter text-[11px] md:text-[12px] leading-normal transition-colors whitespace-nowrap ${
                  activeSection === item.key
                    ? isLightBackground
                      ? 'text-[#051C3D] font-bold'
                      : 'text-white font-bold'
                    : isLightBackground
                    ? 'text-[#051C3D]/75 hover:text-[#051C3D] font-normal'
                    : 'text-white/75 hover:text-white font-normal'
                }`}
              >
                {t.nav?.[item.key] || item.label}
              </a>
            ))}
          </div>

          {/* Language Switcher - Exact Figma position on desktop, right-aligned on mobile */}
          <div ref={languageSwitcherRef} className="absolute right-[13px] md:left-[303px] md:right-auto top-[13px] w-[57px] h-[58px]">
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
                <div className="w-full h-full flex items-center justify-center text-xl">
                  {language === 'en' ? '🇬🇧' : language === 'es' ? '🇪🇸' : language === 'ru' ? '🇷🇺' : '🇸🇦'}
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

          {/* Active indicator line - Dynamic positioning */}
          <motion.div
            className="absolute top-[55px] h-[2px]"
            animate={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <Image
              src="/0e0d007e3bf3288f4877466340642650eabf6157.svg"
              alt=""
              width={14.5}
              height={2}
            />
          </motion.div>
        </div>
      </div>

    </>
  );
}
