import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://shubh-consultancy-admin.vercel.app', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://shubh-consultancy-admin.vercel.app/admin/dashboard', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://shubh-consultancy-admin.vercel.app/admin/services', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://shubh-consultancy-admin.vercel.app/admin/tasks', lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: 'https://shubh-consultancy-admin.vercel.app/admin/clients', lastModified: new Date(), changeFrequency: 'daily', priority: 0.7 },
    { url: 'https://shubh-consultancy-admin.vercel.app/admin/reports', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]
}
