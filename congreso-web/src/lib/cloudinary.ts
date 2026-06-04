import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});


export async function getGalleryImages(yearTag: string): Promise<string[]> {
  try {
    const result = await cloudinary.search
      .expression(`tags:${yearTag}`)
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute();

    return result.resources.map((resource: any) => resource.secure_url);
  } catch (error) {
    console.error(`Error al buscar imágenes en Cloudinary para el tag ${yearTag}:`, error);
    return []; 
  }
}