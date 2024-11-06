import { MetadataRoute } from 'next'
import { siteConfig } from './config/metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/recruitment',
    '/shopping',
    '/construction',
    '/spares',
    '/contact'
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return routes
} 