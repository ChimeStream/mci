'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MCILogo } from '@/app/components/ui/MCILogo';
import { useLanguage } from '@/app/hooks/useLanguage';
import { colors, responsive } from '@/app/styles/design-tokens';

/**
 * Hero Section Component
 * Full-screen hero with animated title rotation and static VR person
 */
export function HeroSection() {
  const { t, language } = useLanguage();
  const [titleNumber, setTitleNumber] = useState(0);

  // Get translated rotating words
  const titles = [
    t.hero?.rotatingWords?.word1 || 'connected',
    t.hero?.rotatingWords?.word2 || 'limitless',
    t.hero?.rotatingWords?.word3 || 'seamless',
    t.hero?.rotatingWords?.word4 || 'intelligent',
    t.hero?.rotatingWords?.word5 || 'dynamic',
  ];

  // Title rotation animation
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  return (
    <section
      id="welcome"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pb-0 pt-24 md:px-10 md:pb-0 md:pt-32 lg:px-16 snap-start snap-always"
      style={{ backgroundColor: colors.primary.darkNavy }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Image
          src="/15b444842f513a65288885724ebd0f768ee77221.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#031138]/40 to-[#031138]/80" />
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 top-12 z-30 -translate-x-1/2 sm:top-16 md:top-12">
        <MCILogo />
      </div>

      {/* Content Container */}
      <div className="relative z-20 flex w-full h-full items-center justify-between max-w-[1200px] mx-auto gap-8">
        {/* Left side: Text - Desktop & Mobile */}
        <div className="flex flex-col justify-center w-full md:w-auto md:flex-shrink-0">
          {/* Mobile Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex w-full flex-col items-start md:hidden"
          >
            <h1
              className="flex flex-col text-white font-black w-full"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: 'clamp(3rem, 10vw, 4.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textAlign: language === 'ar' ? 'right' : 'left',
              }}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              {(t.hero?.welcomeTo || 'WELCOME TO').split(' ').map((word: string, i: number) => (
                <span key={i}>{word}</span>
              ))}
              <RotatingWord titles={titles} titleNumber={titleNumber} position={language === 'ar' ? 'right' : 'left'} />
              <span>{t.hero?.world || 'WORLD'}</span>
            </h1>
          </motion.div>

          {/* Desktop Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex w-full flex-col"
          >
            <h1
              className="flex flex-col text-white font-black"
              style={{
                fontFamily: 'Lato, sans-serif',
                fontSize: 'clamp(3.5rem, 5vw, 6rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textAlign: language === 'ar' ? 'right' : 'left',
              }}
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            >
              {(t.hero?.welcomeTo || 'WELCOME TO').split(' ').map((word: string, i: number) => (
                <span key={i}>{word}</span>
              ))}
              <RotatingWord titles={titles} titleNumber={titleNumber} position={language === 'ar' ? 'right' : 'left'} />
              <span>{t.hero?.world || 'WORLD'}</span>
            </h1>
          </motion.div>
        </div>

        {/* Right side: VR Person - Desktop Only - Aligned to bottom */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:flex justify-end items-end relative flex-shrink-0 absolute bottom-0 right-0 h-full"
        >
          <div className="relative flex items-end justify-center h-full">
            {/* Glow effect behind VR person */}
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
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl -z-10"
              style={{ backgroundColor: `${colors.accent.cyan}30` }}
            />

            {/* VR Person Image - Bottom aligned, larger */}
            <Image
              src="/f1ab9b55fdbd9a3c728da5ea4065cc355e28208f.png"
              alt="Person wearing VR headset"
              width={700}
              height={933}
              className="w-auto h-full object-contain object-bottom"
              style={{
                filter: 'drop-shadow(0 42px 90px rgba(0, 12, 45, 0.65))',
              }}
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Mobile VR Person - Below text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mt-8 w-full flex justify-center md:hidden z-20"
      >
        <div className="relative flex items-center justify-center max-w-[400px]">
          {/* Glow effect behind VR person */}
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
    </section>
  );
}

/**
 * Rotating Word Animation Component with Dynamic Width
 */
interface RotatingWordProps {
  titles: string[];
  titleNumber: number;
  position: 'left' | 'center' | 'right';
}

function RotatingWord({ titles, titleNumber, position }: RotatingWordProps) {
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const measureRef = useRef<HTMLSpanElement>(null);

  // Measure the widest word and set container width
  useEffect(() => {
    if (!measureRef.current) return;

    // Create temporary elements to measure each word
    const tempContainer = document.createElement('span');
    tempContainer.style.position = 'absolute';
    tempContainer.style.visibility = 'hidden';
    tempContainer.style.whiteSpace = 'nowrap';
    tempContainer.style.fontFamily = 'Lato, sans-serif';
    tempContainer.style.fontWeight = '900'; // font-black
    tempContainer.style.fontSize = position === 'center'
      ? responsive.fontSize.heroDesktop
      : 'clamp(3rem, 10vw, 4.5rem)';
    tempContainer.style.letterSpacing = position === 'center' ? '-0.015em' : '-0.02em';

    document.body.appendChild(tempContainer);

    let maxWidth = 0;
    titles.forEach(title => {
      tempContainer.textContent = title.toUpperCase();
      const width = tempContainer.getBoundingClientRect().width;
      if (width > maxWidth) {
        maxWidth = width;
      }
    });

    document.body.removeChild(tempContainer);

    // Add small padding for safety
    setContainerWidth(maxWidth + 8);
  }, [titles, position]);

  const containerStyle =
    position === 'center'
      ? {
          width: containerWidth ? `${containerWidth}px` : 'auto',
          minWidth: containerWidth ? `${containerWidth}px` : 'clamp(300px, 50vw, 500px)',
          height: '1.2em'
        }
      : {
          width: containerWidth ? `${containerWidth}px` : 'auto',
          minWidth: containerWidth ? `${containerWidth}px` : 'auto',
          height: '1.2em'
        };

  const wordStyle =
    position === 'center'
      ? 'absolute left-1/2 -translate-x-1/2 top-0 whitespace-nowrap'
      : position === 'right'
      ? 'absolute right-0 top-0 whitespace-nowrap'
      : 'absolute left-0 top-0 whitespace-nowrap';

  return (
    <span ref={measureRef} className="relative overflow-visible inline-block" style={containerStyle}>
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
