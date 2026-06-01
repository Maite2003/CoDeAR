import React from 'react';
import Hero from "@/components/Hero";

/**
 * Core Application Route Page Component (Server Component by default).
 * Houses environment-level parameters and renders structural layouts.
 */
export default function Page() {
  const REGISTRATION_URL = "https://www.entradaweb.com.ar/evento/0caee9cb/step/1";
  const WHATSAPP_URL1 = "https://wa.me/5492234226056?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";
  const WHATSAPP_URL2 = "https://wa.me/5492616924201?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-20 overflow-x-hidden selection:bg-[#D74E2A] selection:text-black">
      {/* Primary Conversion Section */}
      <Hero 
        registrationUrl={REGISTRATION_URL} 
        whatsappUrl1={WHATSAPP_URL1} 
        whatsappUrl2={WHATSAPP_URL2}
      />

      {/* Placeholder Sections for the Upcoming Phase 1 Modules */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 py-20">
        
        {/* Stats Component Target Section */}
        <section id="stats" className="scroll-mt-24">
          {/* Next up: Stats Component implementation */}
        </section>

        {/* Speakers Component Target Section */}
        <section id="speakers" className="scroll-mt-24">
          {/* Next up: Dynamic Sanity Speakers Grid */}
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