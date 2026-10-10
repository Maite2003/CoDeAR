'use client';

import PosterCarousel from '@/components/PosterCarousel';

const DAYS = [
  {
    label: 'Día 1',
    detail: 'Sábado 10',
    src: '/secciones/dia-1.png',
    alt: 'Cronograma del sábado 10 de octubre. Sala principal y cava workshops, desde las acreditaciones hasta el cierre del día 1.',
  },
  {
    label: 'Día 2',
    detail: 'Domingo 11',
    src: '/secciones/dia-2.png',
    alt: 'Cronograma del domingo 11 de octubre. Sala principal y cava workshops, desde las acreditaciones hasta el cierre oficial.',
  },
] as const;

export default function ScheduleCarousel() {
  return (
    <div className="-mx-4 mt-6">
      <PosterCarousel
        id="cronograma-dia"
        ariaLabel="Elegí el día del cronograma"
        previousLabel="Ver el día anterior"
        nextLabel="Ver el día siguiente"
        slides={DAYS}
      />
    </div>
  );
}
