'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config'; 

/**
 * Embedded Sanity Studio dynamic catch-all route component.
 * Renders the full admin panel single-page application safely under the /studio route.
 */
export default function StudioPage() {
  return <NextStudio config={config} />;
}