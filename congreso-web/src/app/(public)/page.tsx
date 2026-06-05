import React from 'react';
import Hero from "@/components/Hero";
import Stats from '@/components/Stats';
import Speakers from '@/components/Speakers';
import { getAllExpoStands, getAllSpeakers, getAllSponsors } from '@/services/sanityService';
import Sponsors from '@/components/Sponsors';
import Banner from '@/components/Banner';
import Expos from '@/components/Expos';

/**
 * Core Application Route Page Component.
 * Houses environment-level parameters and renders structural layouts.
 */
export default async function Page() {
  const REGISTRATION_URL = process.env.REGISTRATION_URL || '#';
  const WHATSAPP_URL1 = process.env.WHATSAPP_URL1 || "https://wa.me/5492234226056?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";
  const WHATSAPP_URL2 = process.env.WHATSAPP_URL2 || "https://wa.me/5492616924201?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";

  const [speakers, sponsors, stands] = await Promise.all([
    getAllSpeakers(),
    getAllSponsors(),
    getAllExpoStands()
  ]);

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-20 overflow-x-hidden selection:bg-[#D74E2A] selection:text-black">
      <section 
        id="intro" 
        className="relative text-white py-20 md:py-28 lg:py-16 px-4 sm:px-6 border-b border-[#1A1A1A] flex flex-col items-center justify-center min-h-[85vh] lg:min-h-[calc(100vh-5rem)] bg-[#0A0A0A] overflow-hidden w-full"
      > 
        <Hero 
          registrationUrl={REGISTRATION_URL} 
          whatsappUrl1={WHATSAPP_URL1} 
          whatsappUrl2={WHATSAPP_URL2}
        />
      </section> 

      <div className="max-w-7xl mx-auto px-6 space-y-4">
        
        {/* Stats Component Section */}
        <section id="stats" className="bg-[#0A0A0A] text-white py-15 md:py-20 border-b border-neutral-900 relative overflow-hidden w-full">
          <Stats />
        </section>

        {/* Speakers Component Target Section */}
        <section id="speakers" className="bg-[#0A0A0A] text-white py-15 md:py-20 w-full relative z-30">
          <Speakers speakers={speakers} /> {/* Use the fetched speakers data */}
        </section>

        {/* Sponsors Component Target Section */}
        <section id="sponsors" className="bg-[#F2EFE9] text-neutral-900 py-15 md:py-20 w-full relative z-30 xl:w-screen xl:left-1/2 xl:right-1/2 xl:-ml-[50vw] xl:-mr-[50vw]">
          <Sponsors sponsors={sponsors} /> {/* Use the fetched sponsors data */}
        </section>

          
        <section id="banner" className="relative w-full xl:w-screen xl:left-1/2 xl:right-1/2 xl:-ml-[50vw] xl:-mr-[50vw] h-screen flex items-center justify-center overflow-hidden z-20">
          <Banner />
        </section>

        {/* Expo/Stands Component Target Section */}
        <section id="expo" className="bg-[#F2EFE9] text-neutral-900 py-15 md:py-20 w-full relative z-30 xl:w-screen xl:left-1/2 xl:right-1/2 xl:-ml-[50vw] xl:-mr-[50vw]">
          <Expos providers={stands} /> {/* Use the fetched expo stands data */}
        </section>

      </div>

    </main>
  );
}