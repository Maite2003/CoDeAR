import React from 'react';
import Hero from "@/components/Hero";

/**
 * Core Application Route Page Component (Server Component by default).
 * Houses environment-level parameters and renders structural layouts.
 */
export default function Page() {
  // External Redirect URLs configured for conversion funnels
  const REGISTRATION_URL = "https://www.entradaweb.com.ar/evento/0caee9cb/step/1";
  const WHATSAPP_URL = "https://wa.me/5492234226056?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Primary Conversion Section */}
      <Hero 
        registrationUrl={REGISTRATION_URL} 
        whatsappUrl={WHATSAPP_URL} 
      />
      
      {/* Additional sections (Speakers, Sponsors, Galleries) will inject here seamlessly */}
    </main>
  );
}