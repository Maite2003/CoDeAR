import React from 'react';
import Hero from "@/components/Hero";
import Stats from '@/components/Stats';
import Speakers from '@/components/Speakers';
import { getAllSpeakers, getAllSponsors } from '@/services/sanityService';
import Sponsors from '@/components/Sponsors';
import Banner from '@/components/Banner';
import Expos from '@/components/Expos';

/**
 * Core Application Route Page Component.
 * Houses environment-level parameters and renders structural layouts.
 */
export default async function Page() {
  const REGISTRATION_URL = "https://www.entradaweb.com.ar/evento/0caee9cb/step/1";
  const WHATSAPP_URL1 = "https://wa.me/5492234226056?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";
  const WHATSAPP_URL2 = "https://wa.me/5492616924201?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";

  const [speakers, sponsors] = await Promise.all([
    getAllSpeakers(),
    getAllSponsors()
  ]);

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
          <Speakers speakers={speakers} /> {/* Use the fetched speakers data */}
        </section>

        {/* Sponsors Component Target Section */}
        <section id="sponsors" className="bg-[#F5F5F3] text-neutral-900 py-6 md:py-10 w-full relative z-30 border-t border-neutral-200">
          <Sponsors sponsors={sponsors} /> {/* Use the fetched sponsors data */}
        </section>

          
        <section id="banner" className="relative w-full xl:w-screen xl:left-1/2 xl:right-1/2 xl:-ml-[50vw] xl:-mr-[50vw] h-[380px] sm:h-[450px] flex items-center justify-center overflow-hidden bg-neutral-950 z-20">
          <Banner />
        </section>

        {/* Expo/Stands Component Target Section */}
        <section id="expo" className="scroll-mt-24">
          
        </section>

      </div>

    </main>
  );
}