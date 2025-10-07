'use client';

import React from 'react';
import Image from 'next/image';
import { MCILogo } from '@/app/components/ui/MCILogo';

export function HeroSection() {
  return (
    <section
      id="welcome"
      className="relative w-full min-h-screen overflow-hidden bg-[#0a1628]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/15b444842f513a65288885724ebd0f768ee77221.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Logo - Complete MCI Logo with all components */}
      <div className="absolute top-[56px] left-1/2 -translate-x-1/2 z-20">
        <MCILogo />
      </div>

      {/* Main Heading - Exact Figma CSS specifications */}
      <div className="absolute top-[416px] left-1/2 -translate-x-1/2 w-[728px] h-[192px] z-10 flex items-center justify-center">
        <h1
          className="m-0 p-0 text-white text-center"
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: '80px',
            fontStyle: 'normal',
            fontWeight: 900,
            lineHeight: 'normal',
            width: '100%'
          }}
        >
          WELCOME TO THE SAMPLE MESSAGE!
        </h1>
      </div>
    </section>
  );
}
