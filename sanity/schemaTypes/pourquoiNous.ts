import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pourquoiNous',
  title: 'Pourquoi nous choisir',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'points',
      title: 'Points forts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
              description: 'Nom Material Symbols (ex: shield, location_city)',
            }),
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})
