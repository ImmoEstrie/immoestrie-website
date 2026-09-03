import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Témoignage',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'clientName',
      title: 'Nom du client',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Note (1-5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).integer(),
      initialValue: 5,
    }),
  ],
  preview: {
    select: { title: 'clientName', subtitle: 'content' },
  },
})
