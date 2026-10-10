import type { Metadata } from 'next';
import PosterStage from '@/components/PosterStage';
import ScheduleCarousel from '@/components/ScheduleCarousel';

export const metadata: Metadata = {
  title: 'Cronograma | CoDeAR 2026',
  description: 'Cronograma de charlas y workshops del sábado 10 y domingo 11 de octubre.',
};

export default function CronogramaPage() {
  const scheduleUrl = process.env.CRONOGRAMA_PDF_URL || '/pdfs/cronograma.pdf';

  return (
    <main>
      <PosterStage title="Cronograma">
        <div className="flex justify-center">
          <a
            href={scheduleUrl}
            download="CoDeAR-2026-cronograma.pdf"
            className="font-codec inline-block bg-[#D74E2A] px-10 py-4 text-center text-xs tracking-[0.16em] text-white uppercase transition-colors hover:bg-[#b83f20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D74E2A]"
          >
            Descargar cronograma
          </a>
        </div>
        <ScheduleCarousel />
      </PosterStage>
    </main>
  );
}
