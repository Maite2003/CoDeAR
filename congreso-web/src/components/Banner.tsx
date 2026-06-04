'use client';

import React from 'react';

export default function Banner() {
  return (
    <>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 mix-blend-luminosity scale-100 pointer-events-none"
        style={{ backgroundImage: 'url("/codear-background.png")' }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-transparent to-neutral-950" />

      <div className="relative z-10 w-full px-6 sm:px-12 max-w-5xl mx-auto text-center space-y-5">
        <p className="text-[10px] sm:text-xs font-black text-[#D74E2A] tracking-[0.4em] uppercase">
          // EL ARTE DE LA DESTILACIÓN
        </p>
        <h3 className="text-3xl sm:text-5xl font-black tracking-tighter text-white uppercase leading-[1.1] max-w-4xl mx-auto">
          "Donde la precisión técnica de la ingeniería se encuentra con la pasión artesanal del productor."
        </h3>
        <div className="w-12 h-[2px] bg-[#D74E2A] mx-auto mt-6" />
      </div>
    </>
  );
}