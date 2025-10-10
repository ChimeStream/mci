'use client';

import { useEffect, useState, useRef } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('welcome');
  const isNavigatingRef = useRef(false);
  const navigationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Don't update from scroll observer if we're in the middle of a navigation click
      if (isNavigatingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    // Handle hash changes from navigation clicks
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };

    // Handle clicks on navigation links
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]');
      if (link) {
        const href = link.getAttribute('href');
        if (href) {
          const sectionId = href.replace('#', '');

          // Immediately update active section
          setActiveSection(sectionId);

          // Block IntersectionObserver updates during navigation
          isNavigatingRef.current = true;

          // Clear any existing timeout
          if (navigationTimeoutRef.current) {
            clearTimeout(navigationTimeoutRef.current);
          }

          // Re-enable IntersectionObserver after smooth scroll completes
          // Typical smooth scroll takes ~1000ms, we wait a bit longer to be safe
          navigationTimeoutRef.current = setTimeout(() => {
            isNavigatingRef.current = false;
          }, 1500);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleNavClick);

    // Set initial active section
    handleHashChange();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleNavClick);
      if (navigationTimeoutRef.current) {
        clearTimeout(navigationTimeoutRef.current);
      }
    };
  }, []);

  return activeSection;
}
