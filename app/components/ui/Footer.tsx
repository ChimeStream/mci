'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Footer Component
 * Displays the MCI logo and copyright text at the bottom of the page
 */
export function Footer() {
  return (
    <footer
      className="relative w-full h-[323px] flex flex-col items-center justify-center bg-white"
      style={{
        fontFamily: 'Lato, sans-serif',
      }}
    >
      {/* MCI Logo */}
      <div className="relative w-[70px] h-[28px] mb-4">
        <Image
          src="/6eac54c9da6549546babb7b1ad69a02d21e26c65.svg"
          alt="MCI"
          fill
          className="object-contain"
        />
      </div>

      {/* Copyright Text */}
      <p
        className="text-[10px] text-[#808080] leading-normal text-center"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 300,
        }}
      >
        Copyright © 2025 MCI. All rights reserved.
      </p>
    </footer>
  );
}
