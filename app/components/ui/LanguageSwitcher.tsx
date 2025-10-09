'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/hooks/useLanguage';
import { Language } from '@/app/utils/language-detector';
import Image from 'next/image';

const languageLabels: Record<Language, string> = {
  en: 'English',
  es: 'Spanish',
  ru: 'Russian',
  ar: 'Arabic',
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    // Add a small delay to prevent immediate trigger
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="ml-4 relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[57px] h-[58px] relative"
      >
        <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-[45px] border border-white/40 rounded-full overflow-hidden hover:bg-white/[0.05] transition-colors">
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

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute bottom-full mb-2 right-0 w-[120px] bg-white/[0.05] backdrop-blur-[45px] border border-white/40 rounded-2xl overflow-hidden">
          {Object.entries(languageLabels).map(([lang, label]) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang as Language);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 font-inter text-[12px] text-left hover:bg-white/[0.1] transition-colors ${
                language === lang ? 'text-white font-bold' : 'text-white/75 font-normal'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
