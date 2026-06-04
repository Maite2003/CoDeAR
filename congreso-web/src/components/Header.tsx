'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * Header Component for CODEAR 2026.
 */
export default function Header() {
  const [isEditionOpen, setIsEditionOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A] backdrop-blur-md border-b border-[#222222] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo Identity */}
        <Link href="/" className="text-xl font-black tracking-tighter text-white hover:text-[#D74E2A] transition-colors">
          CODEAR<span className="text-[#D74E2A]">.</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden xl:flex items-center space-x-6 xl:space-x-8 text-xs font-semibold uppercase tracking-widest text-[#999999]">
          <Link href="/" className="hover:text-white transition-colors text-white">
            Inicio
          </Link>

          {/* Dropdown: 6ta Edición */}
          <div 
            className="relative"
            onMouseEnter={() => setIsEditionOpen(true)}
            onMouseLeave={() => setIsEditionOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-white transition-colors focus:outline-none py-2">
              <span>6ª Edición</span>
              <span className={`text-[10px] transition-transform duration-200 ${isEditionOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            {isEditionOpen && (
              <div className="absolute left-0 w-48 bg-[#121212] border border-[#222222] rounded-sm pt-2 pb-2 shadow-xl animate-in fade-in slide-in-from-top-1 duration-200">
                <Link href="#speakers" className="block px-4 py-2.5 text-[11px] hover:bg-[#1A1A1A] hover:text-[#D74E2A] transition-colors">Oradores</Link>
                <Link href="#sponsors" className="block px-4 py-2.5 text-[11px] hover:bg-[#1A1A1A] hover:text-[#D74E2A] transition-colors">Sponsors</Link>
                <Link href="#expo" className="block px-4 py-2.5 text-[11px] hover:bg-[#1A1A1A] hover:text-[#D74E2A] transition-colors">Expo Stands</Link>
                <Link href="#cronograma" className="block px-4 py-2.5 text-[11px] hover:bg-[#1A1A1A] hover:text-[#D74E2A] transition-colors">Cronograma</Link>
              </div>
            )}
          </div>

          {/* High-Conversion Link: Workshops & Catas */}
          <Link href="/workshops" className="hover:text-[#D74E2A] transition-colors text-white font-bold border-b border-[#D74E2A]/40 pb-0.5">
            Workshops & Catas
          </Link>

          <Link href="/historia" className="hover:text-white transition-colors">
            Historia
          </Link>

          {/* Dropdown: Galería */}
          <div 
            className="relative"
            onMouseEnter={() => setIsGalleryOpen(true)}
            onMouseLeave={() => setIsGalleryOpen(false)}
          >
            <button className="flex items-center space-x-1 hover:text-white transition-colors focus:outline-none py-2">
              <span>Galería</span>
              <span className={`text-[10px] transition-transform duration-200 ${isGalleryOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            
            {isGalleryOpen && (
              <div className="absolute left-0 w-40 bg-[#121212] border border-[#222222] rounded-sm pt-2 pb-2 shadow-xl animate-in fade-in slide-in-from-top-1 duration-200">
                <Link href="/galeria/2023" className="block px-4 py-2.5 text-[11px] hover:bg-[#1A1A1A] hover:text-[#D74E2A] transition-colors">Edición 2023</Link>
                <Link href="/galeria/2022" className="block px-4 py-2.5 text-[11px] hover:bg-[#1A1A1A] hover:text-[#D74E2A] transition-colors">Edición 2022</Link>
                <Link href="/galeria/2021" className="block px-4 py-2.5 text-[11px] hover:bg-[#1A1A1A] hover:text-[#D74E2A] transition-colors">Edición 2021</Link>
              </div>
            )}
          </div>

          <Link href="/novedades" className="hover:text-white transition-colors">
            Novedades
          </Link>
        </nav>

        {/* CTA Commercial Button */}
        <div className="hidden xl:block">
          <a 
            href="https://www.congresodestiladoresargentinos.com.ar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#D74E2A] text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm hover:bg-[#b83f20] transition-colors shadow-lg shadow-[#D74E2A]/10"
          >
            Tickets
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="xl:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-[#0A0A0A] border-t border-[#222222] px-6 py-8 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-6 text-sm font-bold uppercase tracking-widest text-[#999999]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white">Inicio</Link>
            <div className="border-b border-[#222222] pb-2 text-xs text-[#D74E2A]">6ª Edición (Módulos)</div>
            <Link href="#speakers" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-xs">Oradores</Link>
            <Link href="#sponsors" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-xs">Sponsors</Link>
            <Link href="/workshops" onClick={() => setIsMobileMenuOpen(false)} className="text-white border-l-2 border-[#D74E2A] pl-2">Workshops & Catas</Link>
            <Link href="/historia" onClick={() => setIsMobileMenuOpen(false)}>Historia</Link>
            <div className="border-b border-[#222222] pb-2 text-xs text-[#D74E2A]">Galerías Históricas</div>
            <Link href="/galeria/2023" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-xs">2023</Link>
            <Link href="/galeria/2022" onClick={() => setIsMobileMenuOpen(false)} className="pl-4 text-xs">2022</Link>
            <Link href="/novedades" onClick={() => setIsMobileMenuOpen(false)}>Novedades</Link>
            
            <a 
              href="https://www.congresodestiladoresargentinos.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#D74E2A] text-black text-center text-xs font-bold py-3 uppercase tracking-widest rounded-sm"
            >
              Conseguí tu entrada
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}