import { client } from "@/sanity/lib/client";

/**
 * Interface representing the structured payload for a Speaker document.
 */
export interface SpeakerData {
  _id: string;
  name: string;
  topic: string;
  order: number;
  imageUrl: string;
}

/**
 * Interface representing the structured payload for a Sponsor document.
 */
export interface SponsorData {
  _id: string;
  name: string;
  websiteUrl?: string;
  tier: 'diamond' | 'gold' | 'silver';
  logoUrl: string;
}

export interface ExpoData {
  _id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string;
}

/**
 * Fetches all published speakers from Sanity, ordered by their custom display priority.
 * Uses GROQ to resolve image assets directly into clean CDN URLs.
 * 
 * @returns Promise<SpeakerData[]> Array of fetched and structured speakers.
 */
export async function getAllSpeakers(): Promise<SpeakerData[]> {
  const query = `*[_type == "speaker"] | order(order asc) {
    _id,
    name,
    topic,
    order,
    "imageUrl": image.asset->url
  }`;

  try {
    return await client.fetch<SpeakerData[]>(query, {}, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error('Failed to fetch speakers from Sanity:', error);
    return [];
  }
}

/**
 * Fetches all published corporate sponsors from Sanity.
 * Automatically converts raw asset data into streamlined delivery URLs.
 * 
 * @returns Promise<SponsorData[]> Array of fetched and structured sponsors.
 */
export async function getAllSponsors(): Promise<SponsorData[]> {
  const query = `*[_type == "sponsor"] {
    _id,
    name,
    websiteUrl,
    tier,
    "logoUrl": logo.asset->url
  }`;

  try {
    return await client.fetch<SponsorData[]>(query, {}, { next: { revalidate: 3600 } });
  } catch (error) {
    console.error('Failed to fetch sponsors from Sanity:', error);
    return [];
  }
}

export async function getAllExpoStands(): Promise<ExpoData[]> {
  const query = `*[_type == "expo"] | order(order asc) {
    _id,
    name,
    "logoUrl": logo.asset->url,
    websiteUrl
  }`;

  try {
    const data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
    return data || [];
  } catch (error) {
    console.error('Error fetching expo providers from Sanity:', error);
    return [];
  }
}