import type { Metadata } from 'next';
import PosterStage from '@/components/PosterStage';

export const metadata: Metadata = {
  title: 'Organizan | CoDeAR 2026',
  description: 'Quiénes organizan CoDeAR 2026.',
};

export default function OrganizanPage() {
  return (
    <main>
      <PosterStage
        title="Organizan"
        images={[
          {
            src: '/secciones/organizan.png',
            alt: 'Organizan: Caro Hoyos Master Distiller, Fratelli, La Chapita mdp e Iserá Distillery.',
          },
        ]}
      />
    </main>
  );
}
