'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, type KeyboardEvent, type TouchEvent } from 'react';

export type PosterSlide = {
  src: string;
  alt: string;
  label?: string;
  detail?: string;
};

export default function PosterCarousel({
  id,
  ariaLabel,
  slides,
  previousLabel,
  nextLabel,
}: {
  id: string;
  ariaLabel: string;
  slides: readonly PosterSlide[];
  previousLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const slide = slides[index];

  function select(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  function onTabsKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const next = event.key === 'ArrowRight' ? index + 1 : index - 1;
    const normalized = (next + slides.length) % slides.length;
    setIndex(normalized);
    document.getElementById(`${id}-tab-${normalized}`)?.focus();
  }

  function onTouchStart(event: TouchEvent<HTMLDivElement>) {
    setTouchStart(event.changedTouches[0].clientX);
  }

  function onTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStart == null) return;
    const delta = event.changedTouches[0].clientX - touchStart;
    if (delta > 48) select(index - 1);
    if (delta < -48) select(index + 1);
    setTouchStart(null);
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-center gap-1 px-1 sm:gap-3">
        <button
          type="button"
          onClick={() => select(index - 1)}
          aria-label={previousLabel}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D74E2A]"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>

        <div role="tablist" aria-label={ariaLabel} className="flex" onKeyDown={onTabsKeyDown}>
          {slides.map((item, itemIndex) => {
            const selected = itemIndex === index;
            return (
              <button
                key={item.src}
                type="button"
                role="tab"
                id={`${id}-tab-${itemIndex}`}
                aria-selected={selected}
                aria-controls={`${id}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(itemIndex)}
                className={`font-codec border-b-2 px-3 py-3 text-center text-xs tracking-[0.16em] uppercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D74E2A] sm:px-5 ${
                  item.label ? 'min-w-[7.5rem] sm:min-w-36' : 'min-w-12'
                } ${
                  selected
                    ? 'border-[#D74E2A] text-white'
                    : 'border-transparent text-white/50 hover:text-white'
                }`}
              >
                <span className="block">{item.label ?? itemIndex + 1}</span>
                {item.detail ? (
                  <span className={`mt-1 block text-[10px] tracking-[0.14em] ${selected ? 'text-[#D74E2A]' : 'text-white/40'}`}>
                    {item.detail}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => select(index + 1)}
          aria-label={nextLabel}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D74E2A]"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div
        id={`${id}-panel`}
        role="tabpanel"
        aria-labelledby={`${id}-tab-${index}`}
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <p className="sr-only" aria-live="polite">
          {slide.label ? `${slide.label}${slide.detail ? `, ${slide.detail}` : ''}` : `${index + 1} de ${slides.length}`}
        </p>
        <img src={slide.src} alt={slide.alt} className="w-full mix-blend-screen" />
      </div>
    </div>
  );
}
