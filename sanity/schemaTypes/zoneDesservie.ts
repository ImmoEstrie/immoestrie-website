import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'zoneDesservie',
  title: 'Zone desservie',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      description: 'Ex: Sherbrooke',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Détails',
      type: 'string',
      description: 'Ex: (tous les quartiers) — optionnel',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'details' },
  },
})
