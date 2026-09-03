import { defineField, defineType } from 'sanity'

/**
 * Document singleton — Infos du portail Plexflow
 * Restreindre à un seul document via structureTool
 */
export default defineType({
  name: 'portailClient',
  title: 'Portail Client',
  type: 'document',
  fields: [
    defineField({
      name: 'buttonText',
      title: 'Texte du bouton',
      type: 'string',
      description: 'Ex: Accéder au portail Plexflow',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
    }),
  ],
  preview: {
    select: { title: 'buttonText', subtitle: 'url' },
  },
})
