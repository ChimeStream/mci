export type Language = 'en' | 'es' | 'ru' | 'ar';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'es', 'ru', 'ar'];
export const DEFAULT_LANGUAGE: Language = 'en';

export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const browserLang = navigator.language || (navigator as any).userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();

  // Map common language codes to supported languages
  const languageMap: Record<string, Language> = {
    en: 'en',
    es: 'es',
    ru: 'ru',
    ar: 'ar',
  };

  return languageMap[langCode] || DEFAULT_LANGUAGE;
}

export function isRTL(language: Language): boolean {
  return language === 'ar';
}
