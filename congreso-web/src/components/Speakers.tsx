'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpeakerData } from '@/services/sanityService';

interface SpeakersProps {
  speakers: SpeakerData[];
}

/**
 * Speakers Component.
 */
export default function Speakers({ speakers }: SpeakersProps) {
  return (
      <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="mb-16 space-y-3 text-center md:text-left">
          <p className="text-[10px] sm:text-xs font-black text-[#D74E2A] tracking-[0.3em] uppercase block">
            // EXPERTOS CONFIRMADOS
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-white uppercase leading-none">
            ORADORES <span className="text-neutral-500 font-medium">6ª EDICIÓN</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#D74E2A] mx-auto md:mx-0 mt-4" />
        </div>

        {/* Render pipeline based on Sanity response */}
        {speakers.length === 0 ? (
          <div className="text-center font-bold tracking-widest text-[10px] py-24 text-neutral-600 border border-dashed border-neutral-900 uppercase rounded-sm">
            No se encontraron oradores.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {speakers.map((speaker, idx) => (
              <motion.div 
                key={speaker._id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: Math.min(idx * 0.06, 0.3) }}
                className="flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-3">
                  {/* Photo Frame Container */}
                  <div className="aspect-[4/5] bg-neutral-950 border border-neutral-900 overflow-hidden relative rounded-xl transition-all duration-500 group-hover:border-[#D74E2A]/50 group-hover:shadow-lg group-hover:shadow-[#D74E2A]/5">
                    <img 
                      src={speaker.imageUrl} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover transition-all duration-700 ease-out grayscale-0 brightness-100 lg:grayscale lg:contrast-125 lg:brightness-90 lg:group-hover:grayscale-0 lg:group-hover:brightness-100 lg:group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Speaker Labels */}
                  <div className="space-y-1 pt-1 px-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-black tracking-tight text-white uppercase group-hover:text-[#D74E2A] transition-colors duration-300 leading-tight">
                      {speaker.name}
                    </h3>
                  </div>
                </div>

                {/* Topic */}
                {speaker.topic && (
                  <p className="text-[10px] sm:text-[11px] font-bold text-neutral-500 border-l border-neutral-800 group-hover:border-[#D74E2A] pl-2.5 mt-3 uppercase leading-relaxed transition-colors duration-300">
                    {speaker.topic}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
  );
}