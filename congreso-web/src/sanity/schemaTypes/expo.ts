import { defineField, defineType } from 'sanity';

export const expo = defineType({
  name: 'expo',
  title: 'Expo Stands',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo de la Empresa',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Pagina web',
      type: 'url',
      description: 'Enlace opcional al sitio web oficial del proveedor',
    }),
    defineField({
      name: 'order',
      title: 'Orden de Visualización',
      type: 'number',
      description: 'Usado para ordenar los logos manualmente en la cuadrícula',
    }),
  ],
});