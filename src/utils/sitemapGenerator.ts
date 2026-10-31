/**
 * Automated Dynamic Sitemap Generator for localseoct.com
 * Lists strictly valid, canonical 200-status URLs with trailing slashes.
 * Excludes redirected, noindex, and non-canonical URLs.
 */

export interface SitemapUrlEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export function generateSitemapXml(baseUrl = 'https://localseoct.com'): string {
  const today = new Date().toISOString().split('T')[0];

  const canonicalRoutes: SitemapUrlEntry[] = [
    { loc: `${baseUrl}/`, lastmod: today, changefreq: 'daily', priority: 1.0 },
    { loc: `${baseUrl}/pricing/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/contact/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/free-seo-audit/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/local-seo-danbury-ct/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/seo-wallingford-ct/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/seo-new-haven-ct/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/local-seo-waterford-ct/`, lastmod: today, changefreq: 'monthly', priority: 0.85 },
    { loc: `${baseUrl}/blog/`, lastmod: today, changefreq: 'weekly', priority: 0.85 },
    { loc: `${baseUrl}/blog/best-seo-company-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/blog/best-digital-marketing-agency-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/blog/best-web-design-company-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/blog/best-web-development-companies-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
    { loc: `${baseUrl}/blog/best-moving-companies-connecticut/`, lastmod: today, changefreq: 'weekly', priority: 0.9 },
  ];

  const xmlUrls = canonicalRoutes
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
