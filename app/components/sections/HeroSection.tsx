'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MCILogo } from '@/app/components/ui/MCILogo';
import { colors, layout } from '@/app/styles/design-tokens';

/**
 * Hero Section Component
 * Full-screen hero with animated title rotation and VR person scroll animation
 */
export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const accumulatedDelta = useRef(0);
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = ['connected', 'limitless', 'seamless', 'intelligent', 'dynamic'];

  // Title rotation animation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  // VR person scroll animation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY;

      if (currentScroll < 50) {
        if (scrollProgress < 1 || e.deltaY < 0) {
          e.preventDefault();

          accumulatedDelta.current += e.deltaY;
          accumulatedDelta.current = Math.max(0, accumulatedDelta.current);

          const newProgress = Math.max(0, Math.min(1, accumulatedDelta.current / 3200));
          setScrollProgress(newProgress);

          if (newProgress >= 1 && e.deltaY > 0 && !isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }, 100);
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
  }, [scrollProgress, isAnimating]);

  // Animation values
  const backgroundBlur = scrollProgress * 20;
  const textLogoBlur = scrollProgress * 10;

  const navbarHeight = typeof window !== 'undefined' ? window.innerHeight * 0.15 : 150;
  const vrPersonStartY = typeof window !== 'undefined' ? window.innerHeight - navbarHeight : 700;
  const vrPersonY = vrPersonStartY - (scrollProgress * vrPersonStartY);
  const vrPersonOpacity = Math.min(1, scrollProgress * 3);
  const vrPersonScale = 0.85 + scrollProgress * 0.15;

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="relative w-full min-h-[1500px] md:h-screen md:overflow-hidden"
      style={{ backgroundColor: colors.primary.darkNavy }}
    >
      {/* Background Image with blur */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
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
      </div>

      {/* Logo - Blurs when VR person appears */}
      <motion.div
        className="absolute top-[56px] left-1/2 -translate-x-1/2 z-20"
        style={{ filter: `blur(${textLogoBlur}px)` }}
      >
        <MCILogo />
      </motion.div>

      {/* Main Heading - Behind VR person (z-30) */}
      <motion.div
        className="absolute top-[275px] md:top-[416px] left-[27px] md:left-1/2 md:-translate-x-1/2 w-[331px] md:w-[728px] z-30"
        style={{ filter: `blur(${textLogoBlur}px)` }}
      >
        {/* Mobile: 4 lines - WELCOME / TO / [WORD] / WORLD */}
        <h1
          className="m-0 p-0 text-left text-[58px] font-black flex flex-col md:hidden"
          style={{
            fontFamily: 'Lato, sans-serif',
            lineHeight: 'normal',
            width: '100%',
            color: colors.neutral.white,
          }}
        >
          <span>WELCOME</span>
          <span>TO</span>
          <RotatingWord titles={titles} titleNumber={titleNumber} position="left" />
          <span>WORLD</span>
        </h1>

        {/* Desktop: 2 lines - WELCOME TO / [WORD] WORLD */}
        <h1
          className="hidden md:flex m-0 p-0 text-center text-5xl lg:text-[80px] font-black flex-col items-center"
          style={{
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.2',
            width: '100%',
            color: colors.neutral.white,
          }}
        >
          <span>WELCOME TO</span>
          <span className="flex items-center justify-center gap-4">
            <RotatingWord titles={titles} titleNumber={titleNumber} position="center" />
            <span>WORLD</span>
          </span>
        </h1>
      </motion.div>

      {/* VR Person - Desktop - Foreground (z-50) */}
      <motion.div
        className="hidden md:flex absolute inset-0 items-center justify-center z-50"
        style={{
          y: vrPersonY,
          opacity: vrPersonOpacity,
          scale: vrPersonScale,
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src="/f1ab9b55fdbd9a3c728da5ea4065cc355e28208f.png"
            alt="Person wearing VR headset"
            width={600}
            height={800}
            className="w-auto h-[60vh] sm:h-[70vh] md:h-[80vh] max-h-[500px] sm:max-h-[600px] md:max-h-[800px] object-contain"
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

      {/* VR Person - Mobile Static */}
      <div className="md:hidden absolute top-[845px] left-[19.19px] w-[435.912px] h-[558px] z-10">
        <Image
          src="/f1ab9b55fdbd9a3c728da5ea4065cc355e28208f.png"
          alt="Person wearing VR headset"
          fill
          className="object-contain"
          priority
        />
      </div>
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
  const containerStyle = position === 'center'
    ? { minWidth: '500px', height: '1.2em' }
    : { height: '1.2em' };

  const wordStyle = position === 'center'
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
