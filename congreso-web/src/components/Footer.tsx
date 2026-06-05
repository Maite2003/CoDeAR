'use client';

import React from 'react';

interface FooterProps {
  registrationUrl: string;
  whatsappUrl: string;
}

export default function Footer({ registrationUrl, whatsappUrl }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-neutral-950 border-t border-neutral-900 text-neutral-400 py-12 px-6 sm:px-12 z-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Branding / Logo Area */}
        <div className="text-center md:text-left space-y-2">
          <h4 className="text-white font-black tracking-tighter text-xl uppercase">
            CODEAR <span className="text-[#D74E2A]">2026</span>
          </h4>
          <p className="text-xs text-neutral-500 tracking-wide uppercase">
            6ª Edición — Congreso de Destiladores de Argentina
          </p>
        </div>

        {/* Quick Links / Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-bold uppercase tracking-wider">
          <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
          <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="text-[#D74E2A] hover:text-[#f35f38] transition-colors">Entradas</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Soporte WhatsApp</a>
        </div>

        {/* Socials / Contact */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-1 text-xs min-w-[150px]">
          <span className="text-neutral-500">Argentina</span>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-neutral-300 hover:text-[#D74E2A] transition-colors font-medium mt-1"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            ¿Dudas? Escribinos
          </a>
        </div>

      </div>

      {/* Bottom Bar / Copyright */}
      <div className="max-w-6xl mx-auto border-t border-neutral-900/60 mt-10 pt-6 text-center text-[10px] text-neutral-600 uppercase tracking-widest">
        © {currentYear} CoDeAR. Todos los derechos reservados.
      </div>
    </footer>
  );
}