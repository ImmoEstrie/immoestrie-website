import { defineField, defineType } from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Titre SEO', type: 'string', description: '50-60 caractères, sinon fallback sur title' }),
    defineField({ name: 'description', title: 'Description SEO', type: 'text', rows: 3, description: '150-160 caractères pour Google' }),
    defineField({ name: 'ogImage', title: 'Image Open Graph', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'noIndex', title: 'Ne pas indexer', type: 'boolean', initialValue: false, description: 'Cocher pour robots noindex' }),
  ],
})
