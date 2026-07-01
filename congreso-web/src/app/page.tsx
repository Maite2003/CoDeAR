import React from 'react';
import Hero from "@/components/Hero";

/**
 * Core Application Route Page Component (Server Component by default).
 * Houses environment-level parameters and renders structural layouts.
 */
export default function Page() {
  const REGISTRATION_URL = process.env.REGISTRATION_URL || '#';
  const WHATSAPP_URL1 = process.env.WHATSAPP_URL1 || "https://wa.me/5492234226056?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";
  const WORKSHOP_URL = process.env.WORKSHOP_URL || "https://forms.gle/q8J6Wi8gkZtQjAGo7";
  
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Primary Conversion Section */}
      <Hero 
        registrationUrl={REGISTRATION_URL} 
        whatsappUrl1={WHATSAPP_URL1}
        workshopUrl={WORKSHOP_URL}
      />
      
      {/* Additional sections (Speakers, Sponsors, Galleries) */}
    </main>
  );
}