import type { Metadata } from 'next';
import PosterStage from '@/components/PosterStage';

export const metadata: Metadata = {
  title: 'Mapa | CoDeAR 2026',
  description: 'Mapa del predio del Congreso de Destiladores de Argentina 2026.',
};

export default function MapaPage() {
  return (
    <main>
      <PosterStage
        title="Mapa del predio"
        images={[
          {
            src: '/secciones/mapa.png',
            alt: 'Mapa del predio: galería y sala de exposición, sala de charlas, cava, acreditaciones, plaza, gastronomía, ingresos y estacionamiento.',
          },
        ]}
      />
    </main>
  );
}
