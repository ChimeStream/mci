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
      id="footer"
      className="relative w-full h-[323px] flex flex-col items-center justify-center bg-white"
      style={{
        fontFamily: 'Lato, sans-serif',
      }}
    >
      {/* MCI Logo */}
      <div className="relative w-[70px] h-[28px] mb-[18px]">
        <Image
          src="/6eac54c9da6549546babb7b1ad69a02d21e26c65.svg"
          alt="MCI"
          width={70}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Copyright Text */}
      <p
        className="text-[10px] leading-[12px] text-center"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 300,
          color: '#808080',
        }}
      >
        Copyright © 2025 MCI. All rights reserved.
      </p>
    </footer>
  );
}
