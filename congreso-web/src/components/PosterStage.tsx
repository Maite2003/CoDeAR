import Image from 'next/image';
import type { ReactNode } from 'react';

type Poster = {
  src: string;
  alt: string;
};

export default function PosterStage({
  title,
  images = [],
  children,
}: {
  title: string;
  images?: Poster[];
  children?: ReactNode;
}) {
  return (
    <section className="relative min-h-[calc(100svh-4rem)]">
      <div className="pointer-events-none fixed inset-0" aria-hidden="true">
        <Image
          src="/fallback-web_CODEAR.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative mx-auto flex w-full flex-col gap-4 py-4 lg:max-w-[880px] lg:gap-12 lg:py-14">
        <h1 className="sr-only">{title}</h1>
        {children ? <div className="px-4">{children}</div> : null}
        {images.map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} className="w-full mix-blend-screen" />
        ))}
      </div>
    </section>
  );
}
