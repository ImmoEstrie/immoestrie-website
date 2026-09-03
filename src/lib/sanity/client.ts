import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'xrjv7wfy',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  perspective: 'published',
})

export async function sanityFetch<T>({ query, params = {} }: { query: string; params?: Record<string, unknown> }): Promise<T> {
  return client.fetch<T>(query, params, { next: { revalidate: 60 } })
}
