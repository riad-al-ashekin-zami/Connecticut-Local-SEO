import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, type Plugin} from 'vite';
import {generateSitemapXml} from './src/utils/sitemapGenerator';

function dynamicSitemapPlugin(): Plugin {
  return {
    name: 'dynamic-sitemap-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sitemap.xml') {
          const xml = generateSitemapXml('https://localseoct.com');
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(xml);
          return;
        }
        next();
      });
    },
    buildStart() {
      const publicDir = path.resolve(__dirname, 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      const xml = generateSitemapXml('https://localseoct.com');
      fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8');
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), dynamicSitemapPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
