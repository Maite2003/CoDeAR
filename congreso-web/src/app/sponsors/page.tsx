import type { Metadata } from 'next';
import PosterCarousel from '@/components/PosterCarousel';
import PosterStage from '@/components/PosterStage';

export const metadata: Metadata = {
  title: 'Sponsors | CoDeAR 2026',
  description: 'Sponsors e instituciones que acompañan a CoDeAR 2026.',
};

const SPONSORS = [
  {
    src: '/secciones/sponsors-1.png',
    alt: 'Sponsors: Tinto Labels Argentina, Bajda s.r.l., Cibart y Lallemand.',
  },
  {
    src: '/secciones/sponsors-2.png',
    alt: 'Sponsors: Testa Inox, Durox, Fermentis by Lesaffre, Ecoembal y AEB Spirits.',
  },
] as const;

const INSTITUCIONES = [
  {
    src: '/secciones/instituciones-1.png',
    alt: 'Instituciones: CADEA, Asociación Argentina de Sommeliers, Wine Institute, Desti Cor y AMBA.',
  },
  {
    src: '/secciones/instituciones-2.png',
    alt: 'Instituciones: Universidad Maza, Don Bosco Rodeo del Medio y Facultad de Ciencias Agrarias.',
  },
  {
    src: '/secciones/instituciones-3.png',
    alt: 'Instituciones: ProMendoza, Sabor a Mendoza, Cámara de Comercio Internacional de Mendoza, Mendoza y Hola Maipú.',
  },
] as const;

export default function SponsorsPage() {
  return (
    <main>
      <PosterStage title="Sponsors e instituciones">
        <div className="flex flex-col gap-14 py-2 sm:gap-20">
          <section aria-labelledby="sponsors-heading" className="px-3 sm:px-6">
            <h2
              id="sponsors-heading"
              className="mb-2 text-center font-codec text-xs tracking-[0.22em] text-white uppercase"
            >
              Sponsors
            </h2>
            <PosterCarousel
              id="sponsors"
              ariaLabel="Fotos de sponsors"
              previousLabel="Ver los sponsors anteriores"
              nextLabel="Ver los sponsors siguientes"
              slides={SPONSORS}
            />
          </section>

          <section aria-labelledby="instituciones-heading">
            <h2
              id="instituciones-heading"
              className="mb-2 text-center font-codec text-xs tracking-[0.22em] text-white uppercase"
            >
              Instituciones
            </h2>
            <PosterCarousel
              id="instituciones"
              ariaLabel="Fotos de instituciones"
              previousLabel="Ver las instituciones anteriores"
              nextLabel="Ver las instituciones siguientes"
              slides={INSTITUCIONES}
            />
          </section>
        </div>
      </PosterStage>
    </main>
  );
}
