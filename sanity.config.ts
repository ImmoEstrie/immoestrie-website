import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: "Gestion Immobilière de l'Estrie",
  projectId: 'xrjv7wfy',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            // ── Contenu Global (singletons) ──
            S.listItem()
              .title('Paramètres du site')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Section Hero')
              .id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('Portail Client')
              .id('portailClient')
              .child(S.document().schemaType('portailClient').documentId('portailClient')),
            S.divider(),
            // ── Services ──
            S.documentTypeListItem('service').title('Services'),
            // ── FAQ ──
            S.documentTypeListItem('faq').title('FAQ'),
            // ── Pourquoi nous ──
            S.documentTypeListItem('pourquoiNous').title('Pourquoi nous choisir'),
            // ── Témoignages ──
            S.documentTypeListItem('testimonial').title('Témoignages'),
            S.divider(),
            // ── Navigation ──
            S.documentTypeListItem('navigationLink').title('Liens de navigation'),
            S.documentTypeListItem('zoneDesservie').title('Zones desservies'),
            S.divider(),
            // ── Pages Légales ──
            S.documentTypeListItem('legalPage').title('Pages légales'),
            // Fallback : tout autre type non listé
            ...S.documentTypeListItems().filter(
              (item) =>
                ![
                  'siteSettings',
                  'hero',
                  'portailClient',
                  'service',
                  'faq',
                  'pourquoiNous',
                  'testimonial',
                  'navigationLink',
                  'zoneDesservie',
                  'legalPage',
                ].includes(item.getId() as string)
            ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
