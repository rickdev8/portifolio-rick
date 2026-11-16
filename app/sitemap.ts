import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rickdev8.vercel.app'
  return [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    ...projects.map(project => ({ url: `${baseUrl}/projetos/${project.slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: project.featured ? 0.9 : 0.7 })),
  ]
}
