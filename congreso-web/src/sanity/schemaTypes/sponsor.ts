import { defineField, defineType } from 'sanity';

export const sponsor = defineType({
  name: 'sponsor',
  title: 'Sponsors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Empresa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tier',
      title: 'Nivel de Patrocinio',
      type: 'string',
      options: {
        list: [
          { title: 'Diamond', value: 'Diamond' },
          { title: 'Platinum', value: 'Platinum' },
          { title: 'Gold', value: 'Gold' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Enlace del Sitio Web',
      type: 'url',
      description: 'URL de redirección comercial al hacer click en el logo.',
    }),
    defineField({
      name: 'description',
      title: 'Descripción (Opcional)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
});