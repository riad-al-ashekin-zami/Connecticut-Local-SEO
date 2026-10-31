import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from '../src/AppRoutes';

interface RouteMeta {
  path: string;
  title: string;
  description: string;
  canonical: string;
}

const CANONICAL_ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Connecticut Local SEO | Top Local SEO Company CT',
    description: "Dominate the Google Map 3-Pack with Connecticut's top local SEO company. Generate high-intent calls & leads statewide. Call +1 860-967-0660 for your free audit.",
    canonical: 'https://localseoct.com/',
  },
  {
    path: '/pricing/',
    title: 'Pricing & Packages | Connecticut Local SEO',
    description: 'View our performance-driven local SEO pricing plans. Honest, transparent month-to-month SEO services for Connecticut businesses.',
    canonical: 'https://localseoct.com/pricing/',
  },
  {
    path: '/contact/',
    title: 'Contact Us | Connecticut Local SEO Experts | info@localseoct.com',
    description: 'Contact Connecticut Local SEO at info@localseoct.com or call 860-967-0660. Verified Wallingford HQ serving all 8 CT counties with 100% white-hat local search optimization.',
    canonical: 'https://localseoct.com/contact/',
  },
  {
    path: '/free-seo-audit/',
    title: 'Get Your Free SEO Audit | Local SEO CT',
    description: 'Request a free, comprehensive SEO audit for your Connecticut business. No obligation, just actionable insights to grow your traffic.',
    canonical: 'https://localseoct.com/free-seo-audit/',
  },
  {
    path: '/local-seo-danbury-ct/',
    title: 'Local SEO Company in Danbury, CT | Top 3-Pack Rankings',
    description: 'Dominate local search in Danbury, CT. We help Danbury businesses & contractors rank #1 in the Google Map Pack and drive high-intent customer calls.',
    canonical: 'https://localseoct.com/local-seo-danbury-ct/',
  },
  {
    path: '/seo-wallingford-ct/',
    title: 'Local SEO Company in Wallingford, CT | Map Pack Optimization',
    description: 'Dominating local search in Wallingford, CT. Our headquarters specializes in aggressive Map Pack ranking, citation cleanup, and inbound call generation.',
    canonical: 'https://localseoct.com/seo-wallingford-ct/',
  },
  {
    path: '/seo-new-haven-ct/',
    title: 'Local SEO Company in New Haven, CT | Search Marketing',
    description: 'Expert local SEO services in New Haven, CT. We help New Haven contractors, lawyers, and healthcare providers capture top-3 Google Map Pack rankings.',
    canonical: 'https://localseoct.com/seo-new-haven-ct/',
  },
  {
    path: '/local-seo-waterford-ct/',
    title: 'Local SEO Company in Waterford, CT | Shoreline Search Experts',
    description: 'Dominate shoreline local search in Waterford, CT. We optimize Google Business Profiles and local citations to capture top-3 rankings in New London County.',
    canonical: 'https://localseoct.com/local-seo-waterford-ct/',
  },
  {
    path: '/blog/',
    title: 'Local SEO Guides, Agency Comparisons & Insights | Connecticut Local SEO',
    description: 'Actionable local SEO guides, Connecticut agency comparisons, Google Business Profile tips, and regional ranking strategies for Connecticut businesses.',
    canonical: 'https://localseoct.com/blog/',
  },
  {
    path: '/blog/best-seo-company-connecticut/',
    title: 'Best SEO Company in Connecticut: 7 Agencies Compared',
    description: 'Find the best SEO company in Connecticut for your business. Compare Local SEO CT and six other agencies for local SEO, web design, and AI search.',
    canonical: 'https://localseoct.com/blog/best-seo-company-connecticut/',
  },
  {
    path: '/blog/best-digital-marketing-agency-connecticut/',
    title: 'Best Digital Marketing Agency in Connecticut: 7 Picks',
    description: 'Compare seven Connecticut digital marketing agencies, starting with Local SEO CT. Explore services, business fit, reviews, and questions to ask.',
    canonical: 'https://localseoct.com/blog/best-digital-marketing-agency-connecticut/',
  },
  {
    path: '/blog/best-web-design-company-connecticut/',
    title: 'Best Web Design Company in Connecticut: 7 Options',
    description: 'Compare Connecticut web design companies for small-business, custom, WordPress, and e-commerce websites. Explore services and questions to ask.',
    canonical: 'https://localseoct.com/blog/best-web-design-company-connecticut/',
  },
  {
    path: '/blog/best-web-development-companies-connecticut/',
    title: 'Best Web Development Companies in Connecticut: 7 Options',
    description: 'Compare web development companies in Connecticut for custom websites, B2B projects, WordPress, and e-commerce. Explore services and hiring questions.',
    canonical: 'https://localseoct.com/blog/best-web-development-companies-connecticut/',
  },
  {
    path: '/blog/best-moving-companies-connecticut/',
    title: 'Best Moving Companies in Connecticut: 7 Options',
    description: 'Compare Connecticut moving companies for local, apartment, interstate, and business moves. Explore packing, storage, estimates, and booking checks.',
    canonical: 'https://localseoct.com/blog/best-moving-companies-connecticut/',
  },
];

export function prerenderAll() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const rawTemplate = fs.readFileSync(templatePath, 'utf-8');

  console.log(`Prerendering ${CANONICAL_ROUTES.length} routes...`);

  for (const item of CANONICAL_ROUTES) {
    const renderedApp = renderToString(
      React.createElement(
        HelmetProvider,
        null,
        React.createElement(
          StaticRouter,
          { location: item.path },
          React.createElement(AppRoutes)
        )
      )
    );

    // Replace <title>
    let html = rawTemplate.replace(
      /<title>.*?<\/title>/i,
      `<title>${item.title}</title>`
    );

    // Replace <meta name="title" ...>
    html = html.replace(
      /<meta\s+name=["']title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="title" content="${item.title}" />`
    );

    // Replace <meta name="description" ...>
    html = html.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${item.description}" />`
    );

    // Replace canonical
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${item.canonical}" />`
    );

    // Replace og:title
    html = html.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${item.title}" />`
    );

    // Replace og:description
    html = html.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${item.description}" />`
    );

    // Replace og:url
    html = html.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${item.canonical}" />`
    );

    // Inject prerendered body inside <div id="root">
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedApp}</div>`
    );

    // Determine output file path
    const cleanPath = item.path.replace(/^\/+|\/+$/g, '');
    const outDir = cleanPath === '' ? distDir : path.join(distDir, cleanPath);
    const outFile = path.join(outDir, 'index.html');

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(outFile, html, 'utf-8');
    console.log(`[prerender] Rendered: ${item.path} -> ${outFile}`);
  }

  // Ensure public/_redirects is copied to dist/_redirects
  const publicRedirects = path.resolve(process.cwd(), 'public/_redirects');
  if (fs.existsSync(publicRedirects)) {
    fs.copyFileSync(publicRedirects, path.join(distDir, '_redirects'));
    console.log('[prerender] Copied public/_redirects to dist/_redirects');
  }

  console.log('Prerendering completed successfully.');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  prerenderAll();
}
