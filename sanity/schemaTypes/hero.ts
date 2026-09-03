import { defineField, defineType } from 'sanity'

/**
 * Document singleton — Section Hero / Accueil
 * Restreindre à un seul document via structureTool
 */
export default defineType({
  name: 'hero',
  title: 'Section Hero',
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
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'Texte du bouton CTA',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Lien du bouton CTA',
      type: 'string',
      description: 'Ex: #contact ou /contact ou https://...',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'subtitle' },
  },
})
