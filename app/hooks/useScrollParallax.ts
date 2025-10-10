'use client';

import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef, RefObject } from 'react';

interface ParallaxOptions {
  offset?: number;
  speed?: number;
  enableScale?: boolean;
  enableRotate?: boolean;
}

export function useScrollParallax(
  options: ParallaxOptions = {}
): {
  ref: RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale?: MotionValue<number>;
  rotate?: MotionValue<number>;
} {
  const { offset = 100, speed = 0.5, enableScale = false, enableRotate = false } = options;
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Y-axis parallax movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset, -offset * speed]
  );

  // Fade in/out based on scroll position
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Optional scale effect
  const scale = enableScale
    ? useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.8, 1, 0.8]
      )
    : undefined;

  // Optional rotation effect
  const rotate = enableRotate
    ? useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [-5, 0, 5]
      )
    : undefined;

  return { ref, y, opacity, scale, rotate };
}

/**
 * Parallax hook for background elements
 * Moves slower than foreground content for depth effect
 */
export function useBackgroundParallax(speed: number = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);

  return { ref, y };
}

/**
 * Parallax hook for multiple layers
 * Returns transforms for foreground, middle, and background layers
 */
export function useLayeredParallax() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const middleY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -350]);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return {
    ref,
    backgroundY,
    middleY,
    foregroundY,
    opacity,
  };
}
