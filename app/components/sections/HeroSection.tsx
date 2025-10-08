'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MCILogo } from '@/app/components/ui/MCILogo';

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const accumulatedDelta = useRef(0);
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = ['connected', 'limitless', 'seamless', 'intelligent', 'dynamic'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY;

      // If we're at the top of the page, intercept scroll for VR animation
      if (currentScroll < 50) {
        // Only intercept if we haven't completed the animation OR if scrolling up
        if (scrollProgress < 1 || e.deltaY < 0) {
          e.preventDefault();

          // Accumulate scroll delta (can be negative for scroll up)
          accumulatedDelta.current += e.deltaY;
          accumulatedDelta.current = Math.max(0, accumulatedDelta.current); // Don't go below 0

          // Map accumulated scroll to progress (0 to 1)
          const newProgress = Math.max(0, Math.min(1, accumulatedDelta.current / 1600));
          setScrollProgress(newProgress);

          // If animation is complete and scrolling down, transition to About
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
      }
      // If we're scrolled down but scroll back to top, reset animation
      else if (currentScroll === 0 && e.deltaY < 0) {
        accumulatedDelta.current = 0;
        setScrollProgress(0);
        setIsAnimating(false);
      }
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Reset animation state when scrolling back to hero section (top area)
      if (currentScroll < 100) {
        // We're back in the hero section area
        if (isAnimating || scrollProgress >= 1) {
          // Reset if we had completed the animation
          accumulatedDelta.current = 0;
          setScrollProgress(0);
          setIsAnimating(false);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollProgress, isAnimating]);

  // Calculate animation values based on scrollProgress
  const backgroundBlur = scrollProgress * 20;
  const textLogoBlur = scrollProgress * 10; // Blur text and logo when VR person appears

  // VR person slides up from navbar area (starts at ~80vh below navbar, ends centered)
  // Navbar is at bottom of screen, so VR person starts just above it and slides to center
  const navbarHeight = typeof window !== 'undefined' ? window.innerHeight * 0.15 : 150; // approx navbar position
  const vrPersonStartY = typeof window !== 'undefined' ? window.innerHeight - navbarHeight : 700;
  const vrPersonEndY = 0; // centered
  const vrPersonY = vrPersonStartY - (scrollProgress * vrPersonStartY);
  const vrPersonOpacity = Math.min(1, scrollProgress * 3);
  const vrPersonScale = 0.85 + scrollProgress * 0.15;

  return (
    <section
      ref={sectionRef}
      id="welcome"
      className="relative w-full h-screen overflow-hidden bg-[#0a1628]"
    >
      {/* Background Image with blur */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            filter: `blur(${backgroundBlur}px)`,
          }}
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

      {/* Logo - Complete MCI Logo with all components - Blurs when VR person appears */}
      <motion.div
        className="absolute top-[56px] left-1/2 -translate-x-1/2 z-20"
        style={{
          filter: `blur(${textLogoBlur}px)`,
        }}
      >
        <MCILogo />
      </motion.div>

      {/* Main Heading - Responsive - Blurs when VR person appears */}
      <motion.div
        className="absolute top-[50%] -translate-y-1/2 md:top-[416px] md:translate-y-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[728px] px-4 md:px-0 z-10 flex items-center justify-center"
        style={{
          filter: `blur(${textLogoBlur}px)`,
        }}
      >
        <h1
          className="m-0 p-0 text-white text-center text-xl sm:text-3xl md:text-5xl lg:text-[80px] font-black flex flex-col items-center"
          style={{
            fontFamily: 'Lato, sans-serif',
            lineHeight: '1.2',
            width: '100%'
          }}
        >
          <span>WELCOME TO</span>
          <span className="flex items-center justify-center gap-4">
            <span className="relative overflow-hidden inline-block" style={{ minWidth: '500px', height: '1.2em' }}>
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute left-1/2 -translate-x-1/2 top-0 whitespace-nowrap"
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
            <span>WORLD</span>
          </span>
        </h1>
      </motion.div>

      {/* VR Person slides UP from navbar area as additional overlay layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-50"
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl -z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}
