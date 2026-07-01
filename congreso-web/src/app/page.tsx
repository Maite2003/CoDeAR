import React from 'react';
import Hero from "@/components/Hero";
import InstagramFeed from '@/components/InstagramFeed';

/**
 * Core Application Route Page Component (Server Component by default).
 * Houses environment-level parameters and renders structural layouts.
 */
export default function Page() {
  const REGISTRATION_URL = process.env.REGISTRATION_URL || '#';
  const WHATSAPP_URL1 = process.env.WHATSAPP_URL1 || "https://wa.me/5492234226056?text=Hola!%20Me%20interesa%20recibir%20el%20Brochure%20Comercial%20de%20CODEAR%202026.";
  const WORKSHOP_URL = process.env.WORKSHOP_URL || "https://forms.gle/q8J6Wi8gkZtQjAGo7";
  const BEHOLD_FEED_ID = process.env.NEXT_PUBLIC_BEHOLD_FEED_ID || "";
  const INSTAGRAM_URL = process.env.INSTAGRAM_URL || "https://www.instagram.com/co.de.ar";
  
  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Primary Conversion Section */}
      <Hero 
        registrationUrl={REGISTRATION_URL} 
        whatsappUrl1={WHATSAPP_URL1}
        workshopUrl={WORKSHOP_URL}
      />
      
      {/* Additional sections (Speakers, Sponsors, Galleries) */}
      <InstagramFeed beholdFeedId={BEHOLD_FEED_ID} instagramUrl={INSTAGRAM_URL} />
    </main>
  );
}