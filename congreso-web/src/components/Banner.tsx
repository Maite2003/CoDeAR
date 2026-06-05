'use client';

import React from 'react';

export default function Banner() {
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-left bg-no-repeat opacity-75 mix-blend-luminosity scale-100 pointer-events-none"
        style={{ backgroundImage: 'url("/codear-background.png")' }}
      />
      
      <div className="absolute inset-0 bg-radial from-transparent to-neutral-950/50 pointer-events-none" />
      <div className="relative z-10 w-full px-6 sm:px-12 max-w-5xl mx-auto text-center space-y-5">
        <span className="inline-block bg-neutral-950/60 backdrop-blur-sm text-[#D74E2A] text-[10px] sm:text-xs font-black tracking-[0.2em] px-3 py-1 rounded-full uppercase border border-neutral-800/40">
          // EL ARTE DE LA DESTILACIÓN
        </span>
        <h3 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase leading-[1.1] max-w-4xl mx-auto">
          "Donde la precisión técnica de la ingeniería se encuentra con la pasión artesanal del productor."
        </h3>
        <div className="w-12 h-[2px] bg-[#D74E2A] mx-auto mt-6" />
      </div>
    </>
  );
}