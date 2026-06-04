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
      name: 'topic',
      title: 'Charla',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto de Perfil',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Prioridad de Visualización (Orden)',
      type: 'number',
      description: 'Se asigna 10 por defecto. Colocá un número menor (ej: 1, 2) para priorizarlo arriba.',
      initialValue: 10,
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});