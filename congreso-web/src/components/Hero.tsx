'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

/**
 * Interface defining the strict types for the Hero component props.
 */
interface HeroProps {
  registrationUrl: string;
  whatsappUrl1: string;
  whatsappUrl2: string;
}

/**
 * Hero Section component representing the primary launch landing area.
 */
export default function Hero({ registrationUrl, whatsappUrl1, whatsappUrl2 }: HeroProps) {
  return (
    <>
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/codear-background.png"
          alt="CODEAR 2026 Brand Background Asset"
          fill
          priority
          quality={95}
          className="object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,#0A0A0A_95%] opacity-40" />
      </div>

      <div className="absolute inset-0 bg-codear-noise pointer-events-none z-10" />

      {/* Main Structural Content Grid Wrapper */}
      <div className="w-full max-w-4xl mx-auto text-center relative z-20 space-y-8 flex flex-col justify-center items-center px-2 pt-8 lg:pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4"
        >
          <p className="text-xs md:text-sm font-black tracking-[0.3em] text-neutral-300 uppercase">
            CONGRESO DE DESTILADORES DE ARGENTINA
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-none uppercase m-0 p-0 select-none break-words">
            CODEAR <span className="block text-neutral-100">2026</span>
          </h1>

          {/* Event Context Metadata Meta Badge */}
          <div className="inline-flex flex-col items-center pt-2">
            <p className="text-sm md:text-base font-black tracking-widest text-[#D74E2A] uppercase">
              6ª EDICIÓN
            </p>
            <p className="text-sm md:text-md font-black tracking-wider text-neutral-200 mt-1 uppercase">
              10 Y 11 DE OCTUBRE <span className="text-neutral-500">|</span> ISERÁ DISTILLERY <span className="text-neutral-500">|</span> MENDOZA - ARGENTINA
            </p>
          </div>
        </motion.div>

        {/* CTA Interaction Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col xl:flex-row gap-3.5 w-full max-w-xs sm:max-w-md xl:max-w-4xl justify-center items-center mx-auto px-2 pt-2"
        >
          {/* Primary button */}
          <a 
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#D74E2A] text-white text-xs font-black tracking-widest px-12 py-4 rounded-xl hover:bg-[#b83f20] active:scale-98 transition-all duration-200 shadow-xl uppercase text-center min-w-[240px]"
          >
            CONSEGUÍ TU ENTRADA
          </a>

          {/* Secondary buttons */}
          <a 
            href={whatsappUrl1}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-neutral-800 bg-neutral-900/40 backdrop-blur-md text-neutral-200 text-xs font-black tracking-widest px-12 py-4 rounded-xl hover:bg-neutral-800/60 hover:text-white hover:border-neutral-700 active:scale-98 transition-all duration-200 uppercase text-center min-w-[240px]"
          >
            BROCHURE - LaChapitaMDP
          </a>
          <a 
            href={whatsappUrl2}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-neutral-800 bg-neutral-900/40 backdrop-blur-md text-neutral-200 text-xs font-black tracking-widest px-12 py-4 rounded-xl hover:bg-neutral-800/60 hover:text-white hover:border-neutral-700 active:scale-98 transition-all duration-200 uppercase text-center min-w-[240px]"
          >
            BROCHURE - Caro Hoyos
          </a>
        </motion.div>
      </div>
      </>
  );
}