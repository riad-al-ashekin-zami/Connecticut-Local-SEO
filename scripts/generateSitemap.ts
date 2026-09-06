import fs from 'fs';
import path from 'path';
import { generateSitemapXml } from '../src/utils/sitemapGenerator';

const publicDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sitemapContent = generateSitemapXml('https://localseoct.com');
const outputPath = path.join(publicDir, 'sitemap.xml');
fs.writeFileSync(outputPath, sitemapContent, 'utf-8');

console.log(`[Sitemap] Dynamically generated ${outputPath} with current timestamp.`);
