import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/products',
    '/gallery',
    '/contact',
    '/faq',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
