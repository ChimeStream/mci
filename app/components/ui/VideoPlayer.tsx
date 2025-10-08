'use client';

import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  srcDesktop: string;
  srcMobile: string;
  className?: string;
}

export function VideoPlayer({ srcDesktop, srcMobile, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (hasError) {
    return (
      <div className={`w-full h-full bg-gradient-to-b from-[#001F3F] to-[#0a1628] ${className}`} />
    );
  }

  return (
    <video
      ref={videoRef}
      src={isMobile ? srcMobile : srcDesktop}
      autoPlay
      loop
      muted
      playsInline
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
