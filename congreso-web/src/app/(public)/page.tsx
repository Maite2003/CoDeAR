import React from 'react';
import Hero from "@/components/Hero";
import Stats from '@/components/Stats';
import Speakers from '@/components/Speakers';
import { getAllSpeakers } from '@/services/sanityService';

/**
 * Core Application Route Page Component.
 * Houses environment-level parameters and renders structural layouts.
 */
export default async function Page() {
  const REGISTRATION_URL = "https://www.entradaweb.com.ar/evento/0caee9cb/step/1";
  const WHATSAPP_URL1 = "https://wa.me/5492234226056?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";
  const WHATSAPP_URL2 = "https://wa.me/5492616924201?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";

  const speakersData = await getAllSpeakers();

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-20 overflow-x-hidden selection:bg-[#D74E2A] selection:text-black">
      <Hero 
        registrationUrl={REGISTRATION_URL} 
        whatsappUrl1={WHATSAPP_URL1} 
        whatsappUrl2={WHATSAPP_URL2}
      />

      <div className="max-w-7xl mx-auto px-6 space-y-4">
        
        {/* Stats Component Section */}
        <section id="stats" className="bg-[#0A0A0A] text-white py-6 md:py-10 border-b border-neutral-900 relative overflow-hidden w-full">
          <Stats />
        </section>

        {/* Speakers Component Target Section */}
        <section id="speakers" className="bg-[#0A0A0A] text-white py-6 md:py-10 border-b border-neutral-900/60 w-full relative z-30">
          <Speakers speakers={speakersData} /> {/* Use the fetched speakers data */}
        </section>

        {/* Expo/Stands Component Target Section */}
        <section id="expo" className="scroll-mt-24">
          {/* Next up: Expo map and stand highlights */}
        </section>

        {/* Sponsors Component Target Section */}
        <section id="sponsors" className="scroll-mt-24">
          {/* Next up: Tiered Corporate Logos */}
        </section>

      </div>

    </main>
  );
}