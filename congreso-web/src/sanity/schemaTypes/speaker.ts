import { defineField, defineType } from 'sanity';

export const speaker = defineType({
  name: 'speaker',
  title: 'Oradores',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre Completo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Charla',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto de Perfil',
      type: 'image',
      options: { hotspot: true }, // Permite recortar la imagen visualmente desde el panel
      validation: (Rule) => Rule.required(),
    }),
  ],
});