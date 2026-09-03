import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from './siteSettings'
import hero from './hero'
import service from './service'
import faq from './faq'
import zoneDesservie from './zoneDesservie'
import navigationLink from './navigationLink'
import pourquoiNous from './pourquoiNous'
import testimonial from './testimonial'
import legalPage from './legalPage'
import portailClient from './portailClient'
import { seo } from './objects/seo'

export const schemaTypes: SchemaTypeDefinition[] = [
  seo,
  siteSettings,
  hero,
  portailClient,
  service,
  faq,
  zoneDesservie,
  navigationLink,
  pourquoiNous,
  testimonial,
  legalPage,
]
