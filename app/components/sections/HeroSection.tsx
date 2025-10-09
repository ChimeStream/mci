'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MCILogo } from '@/app/components/ui/MCILogo';
import { colors, responsive } from '@/app/styles/design-tokens';

/**
 * Hero Section Component
 * Full-screen hero with animated title rotation and VR person scroll animation
 */
export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [enableScrollAnimation, setEnableScrollAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const accumulatedDelta = useRef(0);
  const [titleNumber, setTitleNumber] = useState(0);
  const [showMobileVRPerson, setShowMobileVRPerson] = useState(false);

  const titles = ['connected', 'limitless', 'seamless', 'intelligent', 'dynamic'];

  // Mobile VR Person fade-in trigger and scroll detection
  useEffect(() => {
    let hasInitiallyShown = false;

    const timer = setTimeout(() => {
      setShowMobileVRPerson(true);
      hasInitiallyShown = true;
    }, 1500); // Fade in after 1.5 seconds

    // Reset mobile VR person visibility when scrolling away
    const handleScroll = () => {
      // Only handle scroll after initial animation has completed
      if (!hasInitiallyShown) return;

      const currentScroll = window.scrollY;
      // If we've scrolled past the hero section, hide the mobile VR person
      if (currentScroll > 100) {
        setShowMobileVRPerson(false);
      } else if (currentScroll < 50) {
        // When back near the top, show it again
        setShowMobileVRPerson(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Title rotation animation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  // VR person scroll animation
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const mediaQuery = window.matchMedia('(pointer: fine) and (hover: hover)');
    const update = (event: MediaQueryListEvent | MediaQueryList) => {
      setEnableScrollAnimation(event.matches);
    };

    update(mediaQuery);
    mediaQuery.addEventListener('change', update);

    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  // VR person scroll animation
  useEffect(() => {
    if (!enableScrollAnimation) {
      setScrollProgress(0);
      setIsAnimating(false);
      accumulatedDelta.current = 0;
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        if (scrollProgress < 1 || e.deltaY < 0) {
          e.preventDefault();

          accumulatedDelta.current += e.deltaY;
          accumulatedDelta.current = Math.max(0, accumulatedDelta.current);

          const newProgress = Math.max(0, Math.min(1, accumulatedDelta.current / 1800));
          setScrollProgress(newProgress);

          if (newProgress >= 1 && e.deltaY > 0 && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 800);
          }
        }
      } else if (currentScroll === 0 && e.deltaY < 0) {
        accumulatedDelta.current = 0;
        setScrollProgress(0);
        setIsAnimating(false);
      }
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < 100 && (isAnimating || scrollProgress >= 1)) {
        accumulatedDelta.current = 0;
        setScrollProgress(0);
        setIsAnimating(false);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress, isAnimating, enableScrollAnimation]);

  // Animation values
  // Desktop: blur based on scroll progress
  // Mobile: blur when VR person appears
  const backgroundBlur = enableScrollAnimation
    ? scrollProgress * 20
    : (showMobileVRPerson ? 8 : 0); // Mobile blur
  const textLogoBlur = enableScrollAnimation
    ? scrollProgress * 10
    : (showMobileVRPerson ? 4 : 0); // Mobile blur

  const navbarHeight = typeof window !== 'undefined' ? window.innerHeight * 0.15 : 150;
  const vrPersonStartY = typeof window !== 'undefined' ? window.innerHeight - navbarHeight : 700;
  const vrPersonY = vrPersonStartY - (scrollProgress * vrPersonStartY);
  const vrPersonOpacity = enableScrollAnimation ? Math.min(1, scrollProgress * 3) : 1;
  const vrPersonScale = enableScrollAnimation ? 0.85 + scrollProgress * 0.15 : 1;

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40 lg:px-16 snap-start snap-always"
      style={{ backgroundColor: colors.primary.darkNavy }}
    >
      {/* Background Image with blur */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <motion.div
          className="absolute inset-0 h-full w-full"
          style={{ filter: `blur(${backgroundBlur}px)` }}
        >
          <Image
            src="/15b444842f513a65288885724ebd0f768ee77221.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#031138]/40 to-[#031138]/80" />
      </div>

      {/* Logo - Blurs when VR person appears */}
      <motion.div
        className="absolute left-1/2 top-12 z-30 -translate-x-1/2 sm:top-16 md:top-12"
        style={{ filter: `blur(${textLogoBlur}px)` }}
      >
        <MCILogo />
      </motion.div>

      <div className="relative z-30 flex w-full max-w-[960px] flex-col items-center">
        {/* Mobile Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ filter: `blur(${textLogoBlur}px)` }}
          className="flex w-full flex-col items-start text-left md:hidden"
        >
          <h1
            className="flex flex-col text-white font-black"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontSize: 'clamp(3.5rem, 12vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            <span>WELCOME</span>
            <span>TO</span>
            <RotatingWord titles={titles} titleNumber={titleNumber} position="left" />
            <span>WORLD</span>
          </h1>
        </motion.div>

        {/* Mobile VR Person - Only visible on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: showMobileVRPerson ? 1 : 0,
            y: showMobileVRPerson ? 0 : 50,
          }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-8 w-full max-w-[320px] md:hidden"
        >
          <div className="relative flex w-full items-center justify-center">
            {/* Glow effect behind VR person */}
            <motion.div
              animate={{
                opacity: showMobileVRPerson ? [0.3, 0.6, 0.3] : 0,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl -z-10"
              style={{ backgroundColor: `${colors.accent.cyan}30` }}
            />

            {/* VR Person Image */}
            <Image
              src="/f1ab9b55fdbd9a3c728da5ea4065cc355e28208f.png"
              alt="Person wearing VR headset"
              width={400}
              height={533}
              className="w-full h-auto object-contain"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0, 12, 45, 0.5))',
              }}
              priority
            />
          </div>
        </motion.div>

        {/* Desktop: Centered text */}
        <div className="hidden w-full flex-col items-center text-center md:flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ filter: `blur(${textLogoBlur}px)` }}
            className="flex w-full flex-col gap-6"
          >
            <h1
              className="flex flex-col items-center text-center font-black text-white"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: responsive.fontSize.heroDesktop,
                lineHeight: 1.1,
                letterSpacing: '-0.015em',
              }}
            >
              <span>WELCOME TO</span>
              <span className="mt-2 flex flex-wrap items-center justify-center gap-4">
                <RotatingWord titles={titles} titleNumber={titleNumber} position="center" />
                <span>WORLD</span>
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Mobile VR illustration - Hidden, only shows on desktop scroll */}
      </div>

      {/* VR Person - Desktop - Foreground (below Navigation) */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-35 hidden justify-center md:flex"
        style={{
          y: vrPersonY,
          opacity: vrPersonOpacity,
          scale: vrPersonScale,
        }}
      >
        <div className="relative flex w-full items-center justify-center">
          <div className="pointer-events-none absolute inset-x-0 bottom-[-8%] z-0 mx-auto h-[420px] w-[420px] rounded-full bg-gradient-to-t from-[#031138]/70 via-[#001a3f]/45 to-transparent blur-[120px]" />
          <Image
            src="/f1ab9b55fdbd9a3c728da5ea4065cc355e28208f.png"
            alt="Person wearing VR headset"
            width={600}
            height={800}
            className="h-[60vh] w-auto object-contain md:h-[70vh] lg:h-[75vh] xl:h-[80vh] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px]"
            style={{
              filter: 'drop-shadow(0 42px 90px rgba(0, 12, 45, 0.65))',
            }}
            priority
          />

          {/* Glow effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl -z-10"
            style={{ backgroundColor: `${colors.accent.cyan}30` }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/**
 * Rotating Word Animation Component
 */
interface RotatingWordProps {
  titles: string[];
  titleNumber: number;
  position: 'left' | 'center';
}

function RotatingWord({ titles, titleNumber, position }: RotatingWordProps) {
  const containerStyle =
    position === 'center'
      ? { minWidth: 'clamp(300px, 50vw, 500px)', height: '1.2em' }
      : { height: '1.2em' };

  const wordStyle =
    position === 'center'
      ? 'absolute left-1/2 -translate-x-1/2 top-0 whitespace-nowrap'
      : 'absolute left-0 top-0 whitespace-nowrap';

  return (
    <span className="relative overflow-visible inline-block" style={containerStyle}>
      {titles.map((title, index) => (
        <motion.span
          key={index}
          className={wordStyle}
          initial={{ opacity: 0, y: -100 }}
          transition={{ type: 'spring', stiffness: 50 }}
          animate={
            titleNumber === index
              ? { y: 0, opacity: 1 }
              : { y: titleNumber > index ? -150 : 150, opacity: 0 }
          }
        >
          {title.toUpperCase()}
        </motion.span>
      ))}
    </span>
  );
}
