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
    <section 
      id="intro" 
      className="min-h-screen text-white py-20 px-6 border-b-2 border-neutral-950 flex items-center justify-center bg-[#0A0A0A] overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/fallback-web_CODEAR.jpg"
          alt="CODEAR 2026 Brand Background Asset"
          fill
          priority
          quality={95}
          className="object-cover bg-left"
        />
        
      </div>

      {/* Main Structural Content Grid Wrapper */}
      <div className="max-w-4xl mx-auto text-center relative z-20 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4"
        >

          <img 
            src="/Logo-bajada2_CODEAR.svg" 
            alt="CoDeAR 2026 - Congreso de Destiladores de Argentina" 
            className="w-[90%] sm:w-[65%] md:w-full md:max-w-[650px] h-auto mx-auto" 
          />
        </motion.div>

        {/* CTA Interaction Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 w-full max-w-xs sm:max-w-xl lg:max-w-4xl justify-center items-center mx-auto px-2 pt-2"
        >
          {/* Primary button */}
          <a 
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-codec rounded-none w-full sm:w-auto bg-[#D74E2A] text-white text-xs tracking-widest px-12 py-4 hover:bg-[#b83f20] active:scale-98 transition-all duration-200 shadow-xl uppercase text-center min-w-[240px]"
          >
            CONSEGUÍ TU ENTRADA
          </a>

          {/* Secondary buttons */}
          <a 
            href={whatsappUrl1}
            target="_blank"
            rel="noopener noreferrer"
            className="font-codec rounded-none w-full sm:w-auto border-2 border-neutral-800 bg-neutral-900/40 backdrop-blur-md text-neutral-200 text-xs tracking-widest px-12 py-4 hover:bg-neutral-800/60 hover:text-white hover:border-neutral-700 active:scale-98 transition-all duration-200 uppercase text-center min-w-[240px]"
          >
            BROCHURE - LaChapitaMDP
          </a>
          <a 
            href={whatsappUrl2}
            target="_blank"
            rel="noopener noreferrer"
            className="font-codec rounded-none w-full sm:w-auto border-2 border-neutral-800 bg-neutral-900/40 backdrop-blur-md text-neutral-200 text-xs tracking-widest px-12 py-4 hover:bg-neutral-800/60 hover:text-white hover:border-neutral-700 active:scale-98 transition-all duration-200 uppercase text-center min-w-[240px]"
          >
            BROCHURE - Caro Hoyos
          </a>
        </motion.div>
      </div>
    </section>
  );
}