'use client';

import React, { useRef } from 'react';
import { SponsorData } from '@/services/sanityService';

interface SponsorsProps {
  sponsors: SponsorData[];
}

export default function Sponsors({ sponsors }: SponsorsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const safeSponsors = Array.isArray(sponsors) ? sponsors : [];

  const orderedSponsors = [
    ...safeSponsors.filter(s => s.tier?.toLowerCase().trim() === 'diamond'),
    ...safeSponsors.filter(s => s.tier?.toLowerCase().trim() === 'gold'),
    ...safeSponsors.filter(s => s.tier?.toLowerCase().trim() === 'platinum'),
    ...safeSponsors.filter(s => {
      const t = s.tier?.toLowerCase().trim();
      return t !== 'diamond' && t !== 'gold' && t !== 'platinum';
    })
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const getTierTag = (tier?: string) => {
    const t = tier?.toLowerCase().trim();
    if (t === 'diamond') return { label: 'DIAMOND', styles: 'bg-cyan-50 text-cyan-700 border-cyan-200' };
    if (t === 'gold') return { label: 'GOLD', styles: 'bg-amber-50 text-amber-700 border-amber-200' };
    if (t === 'platinum') return { label: 'PLATINUM', styles: 'bg-gray-100 text-gray-700 border-gray-200' };
    return { label: 'PLATINUM', styles: 'bg-neutral-100 text-neutral-600 border-neutral-200' };
  };

  return (
    <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 max-w-6xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-[10px] sm:text-xs font-black text-[#D74E2A] tracking-[0.3em] uppercase block">
              // ALIANZAS CORPORATIVAS
            </p>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-neutral-900 uppercase leading-none">
              NOS ACOMPAÑAN <span className="text-neutral-400 font-medium">SPONSORS</span>
            </h2>
            <div className="w-12 h-[2px] bg-[#D74E2A] mx-auto md:mx-0 mt-4" />
          </div>

          {orderedSponsors.length > 0 && (
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 hover:border-[#D74E2A] hover:text-[#D74E2A] transition-all active:scale-95 shadow-sm"
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 hover:border-[#D74E2A] hover:text-[#D74E2A] transition-all active:scale-95 shadow-sm"
                aria-label="Siguiente"
              >
                →
              </button>
            </div>
          )}
        </div>

        {orderedSponsors.length === 0 ? (
          <div className="text-center font-bold tracking-widest text-[10px] py-16 text-neutral-400 border border-dashed border-neutral-300 uppercase rounded-xl">
            No se encontraron sponsors publicados.
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {orderedSponsors.map((sponsor) => {
              const tag = getTierTag(sponsor.tier);
              const CardWrapper = sponsor.websiteUrl ? 'a' : 'div';

              return (
                <div 
                  key={sponsor._id} 
                  className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start"
                >
                  <div className="relative pt-3 h-full">
                    
                    <span className={`absolute top-0 left-6 z-10 text-[9px] font-black tracking-widest px-2.5 py-1 border rounded-md uppercase shadow-2xs ${tag.styles}`}>
                      {tag.label}
                    </span>

                    <CardWrapper
                      href={sponsor.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-10 h-48 bg-white border border-neutral-200/80 rounded-2xl transition-all duration-300 group ${
                        sponsor.websiteUrl ? 'hover:border-[#D74E2A]/40 hover:shadow-md cursor-pointer' : ''
                      }`}
                    >
                      <img
                        src={sponsor.logoUrl}
                        alt={sponsor.name}
                        className="w-[85%] h-[90%] object-contain transition-transform duration-300 lg:group-hover:scale-105"
                        loading="lazy"
                      />
                    </CardWrapper>

                  </div>
                </div>
              );
            })}
          </div>
        )}
    </div>
  );
}