import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://psycherealm.com';
  
  // Define all static routes
  const routes = [
    '',
    '/about',
    '/privacy',
    '/terms',
    '/disclosure',
    '/faqs',
    '/contact',
    '/accessibility',
    '/help',
    '/legal',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 