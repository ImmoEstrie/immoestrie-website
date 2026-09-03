import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'legalPage',
  title: 'Page légale',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Dernière mise à jour',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
  },
})
