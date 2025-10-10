'use client';

import { useLanguage } from '@/app/hooks/useLanguage';
import { useEffect } from 'react';

/**
 * RTL Wrapper Component
 * Dynamically sets the dir attribute on the HTML element based on the current language
 */
export function RTLWrapper({ children }: { children: React.ReactNode }) {
  const { isRTL } = useLanguage();

  useEffect(() => {
    // Update the dir attribute on the html element
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return <>{children}</>;
}
