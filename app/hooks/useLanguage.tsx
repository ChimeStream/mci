'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, detectBrowserLanguage, isRTL, DEFAULT_LANGUAGE } from '@/app/utils/language-detector';

interface Translations {
  [key: string]: any;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<Translations>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect language on mount
    const detectedLang = detectBrowserLanguage();
    setLanguageState(detectedLang);
  }, []);

  useEffect(() => {
    // Load all namespace translations when language changes
    const loadTranslations = async () => {
      try {
        const namespaces = ['common', 'hero', 'about', 'journey', 'services'];
        const translationPromises = namespaces.map(namespace =>
          fetch(`/locales/${language}/${namespace}.json`).then(res => res.json())
        );

        const [common, hero, about, journey, services] = await Promise.all(translationPromises);

        // Merge all namespaces into a single translations object
        setTranslations({
          nav: common.nav,
          footer: common.footer,
          hero,
          about: about.about,
          vision: about.vision,
          mission: about.mission,
          immersive: about.immersive,
          journey,
          services,
        });
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
      }
    };

    loadTranslations();
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations,
        isRTL: isRTL(language),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
