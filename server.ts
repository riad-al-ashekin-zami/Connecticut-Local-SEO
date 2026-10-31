import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProd = process.env.NODE_ENV === 'production';

// 1. Exact Server-Side 301 Redirects for State-Level Duplicate Keyword Pages -> Homepage
const STATE_DUPLICATES = [
  '/seo-agency-connecticut',
  '/seo-agency-connecticut/',
  '/seo-company-connecticut',
  '/seo-company-connecticut/',
  '/seo-consultant-connecticut',
  '/seo-consultant-connecticut/',
  '/seo-services-connecticut',
  '/seo-services-connecticut/',
];

// 2. Legacy Non-Blog Article URLs -> Canonical /blog/ URLs (301)
const LEGACY_ARTICLES: Record<string, string> = {
  '/best-seo-company-connecticut': 'https://localseoct.com/blog/best-seo-company-connecticut/',
  '/best-seo-company-connecticut/': 'https://localseoct.com/blog/best-seo-company-connecticut/',
  '/best-digital-marketing-agency-connecticut': 'https://localseoct.com/blog/best-digital-marketing-agency-connecticut/',
  '/best-digital-marketing-agency-connecticut/': 'https://localseoct.com/blog/best-digital-marketing-agency-connecticut/',
  '/best-web-design-company-connecticut': 'https://localseoct.com/blog/best-web-design-company-connecticut/',
  '/best-web-design-company-connecticut/': 'https://localseoct.com/blog/best-web-design-company-connecticut/',
  '/best-web-development-companies-connecticut': 'https://localseoct.com/blog/best-web-development-companies-connecticut/',
  '/best-web-development-companies-connecticut/': 'https://localseoct.com/blog/best-web-development-companies-connecticut/',
  '/best-moving-companies-connecticut': 'https://localseoct.com/blog/best-moving-companies-connecticut/',
  '/best-moving-companies-connecticut/': 'https://localseoct.com/blog/best-moving-companies-connecticut/',
};

// Redirect middleware: Real server-side HTTP 301
app.use((req, res, next) => {
  const reqPath = req.path;

  // Direct 301 for duplicate state-level pages to homepage
  if (STATE_DUPLICATES.includes(reqPath)) {
    res.setHeader('Location', 'https://localseoct.com/');
    return res.status(301).end();
  }

  // Direct 301 for legacy non-blog article URLs
  if (LEGACY_ARTICLES[reqPath]) {
    res.setHeader('Location', LEGACY_ARTICLES[reqPath]);
    return res.status(301).end();
  }

  // Trailing slash enforcement for non-trailing slash routes (excluding static assets with file extensions)
  if (!reqPath.endsWith('/') && !path.extname(reqPath)) {
    const targetUrl = `https://localseoct.com${reqPath}/`;
    res.setHeader('Location', targetUrl);
    return res.status(301).end();
  }

  next();
});

async function startServer() {
  // Always serve static assets from public and dist if present
  app.use(express.static(path.resolve(__dirname, 'public')));
  app.use(express.static(path.resolve(__dirname, 'dist'), { index: false }));

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom',
    });

    // Check if dist folder has prerendered HTML file for the requested route
    app.use((req, res, next) => {
      // If client requests an HTML route (or curl without extension)
      if (req.method === 'GET' && !path.extname(req.path)) {
        const cleanPath = req.path.replace(/^\/+|\/+$/g, '');
        const targetHtml = cleanPath === ''
          ? path.join(__dirname, 'dist', 'index.html')
          : path.join(__dirname, 'dist', cleanPath, 'index.html');

        if (fs.existsSync(targetHtml)) {
          const html = fs.readFileSync(targetHtml, 'utf-8');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.status(200).send(html);
        }
      }
      next();
    });

    app.use(vite.middlewares);

    // Fallback HTML handler
    app.use('*', async (req, res, next) => {
      try {
        const url = req.originalUrl;
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production: serve prerendered static files
    app.use(express.static(path.resolve(__dirname, 'dist'), { index: false }));

    app.use((req, res, next) => {
      if (req.method === 'GET' && !path.extname(req.path)) {
        const cleanPath = req.path.replace(/^\/+|\/+$/g, '');
        const targetHtml = cleanPath === ''
          ? path.join(__dirname, 'dist', 'index.html')
          : path.join(__dirname, 'dist', cleanPath, 'index.html');

        if (fs.existsSync(targetHtml)) {
          const html = fs.readFileSync(targetHtml, 'utf-8');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.status(200).send(html);
        }
      }
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
