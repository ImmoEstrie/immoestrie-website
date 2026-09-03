import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'navigationLink',
  title: 'Lien de navigation',
  type: 'document',
  groups: [
    { name: 'content', title: 'Contenu', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'label',
      title: 'Libellé',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      description: 'Ex: #services, /politique-confidentialite ou https://...',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Ouvrir dans un nouvel onglet',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Navbar', value: 'navbar' },
          { title: 'Footer - Navigation', value: 'footer-navigation' },
          { title: 'Footer - Légal', value: 'footer-legal' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      validation: (Rule) => Rule.required().integer().min(0),
      initialValue: 0,
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'url' },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
  orderings: [
    {
      title: 'Ordre croissant',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
