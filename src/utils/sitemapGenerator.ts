/**
 * Automated Dynamic Sitemap Generator for localseoct.com
 * Automatically builds the XML with real-time lastmod dates, priorities, and change frequencies.
 */

export interface SitemapUrlEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemapXml(baseUrl = 'https://localseoct.com'): string {
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes: SitemapUrlEntry[] = [
    { loc: `${baseUrl}/`, lastmod: today, changefreq: 'daily', priority: 1.0 },
    { loc: `${baseUrl}/seo-services-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/seo-company-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/seo-agency-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/seo-consultant-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/contact/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/local-seo-danbury-ct/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/seo-wallingford-ct/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/seo-new-haven-ct/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/local-seo-waterford-ct/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
  ];

  // Dynamic Connecticut Market Hub Silos
  const ctHubs = [
    'wallingford-ct-local-seo',
    'new-haven-ct-local-seo',
    'hartford-ct-local-seo',
    'stamford-ct-local-seo',
    'greenwich-ct-local-seo',
    'norwalk-ct-local-seo',
    'bridgeport-ct-local-seo',
    'danbury-ct-local-seo',
    'waterbury-ct-local-seo',
  ];

  const hubRoutes: SitemapUrlEntry[] = ctHubs.map((slug) => ({
    loc: `${baseUrl}/${slug}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Contractor Industry Silos
  const contractorVerticals = [
    'contractor-seo-connecticut',
    'hvac-seo-connecticut',
    'plumbing-local-seo-ct',
    'electrician-local-seo-ct',
    'roofing-contractor-seo-ct',
    'appliance-repair-seo-ct',
    'tree-service-seo-ct',
  ];

  const industryRoutes: SitemapUrlEntry[] = contractorVerticals.map((slug) => ({
    loc: `${baseUrl}/${slug}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: 0.8,
  }));

  const allUrls = [...staticRoutes, ...hubRoutes, ...industryRoutes];

  const xmlUrls = allUrls
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority?.toFixed(2)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlUrls}
</urlset>`;
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '\'':
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}
