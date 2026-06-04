'use client';

import React from 'react';
import { ExpoData } from '@/services/sanityService';

interface ExpoProps {
  providers: ExpoData[];
}

export default function Expo({ providers }: ExpoProps) {
  const safeProviders = Array.isArray(providers) ? providers : [];

  return (
    <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-16 space-y-3 text-center md:text-left">
        <p className="text-[10px] sm:text-xs font-black text-[#D74E2A] tracking-[0.3em] uppercase block">
          // COMMERCIAL AREA
        </p>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-neutral-950 uppercase leading-none">
          EXPO <span className="text-neutral-500 font-medium">PROVIDERS</span>
        </h2>
        <div className="w-12 h-[2px] bg-[#D74E2A] mx-auto md:mx-0 mt-4" />
      </div>

      {safeProviders.length === 0 ? (
        <div className="text-center font-bold tracking-widest text-[10px] py-16 text-neutral-400 uppercase">
          No expo providers published yet.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
          {safeProviders.map((provider) => {
            const CardWrapper = provider.websiteUrl ? 'a' : 'div';

            return (
              <CardWrapper
                key={provider._id}
                href={provider.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center h-28 md:h-32 transition-all duration-300 group ${
                  provider.websiteUrl ? 'cursor-pointer' : ''
                }`}
              >
                <img
                  src={provider.logoUrl}
                  alt={provider.name}
                  className="w-full h-full object-contain transition-all duration-300 lg:group-hover:scale-105 filter drop-shadow-xs"
                  loading="lazy"
                />
              </CardWrapper>
            );
          })}
        </div>
      )}
    </div>
  );
}