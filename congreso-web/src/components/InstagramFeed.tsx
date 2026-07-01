'use client';

import React from 'react';
import BeholdWidget from '@behold/react';

export default function InstagramFeed({ beholdFeedId, instagramUrl }: { beholdFeedId: string; instagramUrl: string }) {
  return (
    <section id="feed" className="py-16 px-6 bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-codec text-xl uppercase tracking-[0.2em] text-neutral-200 font-semibold">
            Seguinos en Instagram
          </h2>
          <p className="text-xs tracking-wider text-neutral-400 uppercase">
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
              @co.de.ar
            </a>
          </p>
        </div>
        <div className="w-full max-w-5xl mx-auto bg-neutral-900/20 rounded-md p-4 context-layout">
          {beholdFeedId ? (
            <BeholdWidget feedId={beholdFeedId} />
          ) : (
            <p className="text-center text-sm text-neutral-500">
              Proximamente podrás ver nuestro feed de Instagram aquí. ¡Mantente atento!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}