import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const WEBSITE_URL = 'https://gpstotech.netlify.app';

// Add all your website routes here
const routes = [
  '/',
  '/auth/login',
  '/auth/signup',
  '/privacy-policy',
  '/terms-of-service'
];

function generateSitemap() {
  try {
    const publicDir = resolve(process.cwd(), 'public');
    
    // Ensure public directory exists
    if (!existsSync(publicDir)) {
      mkdirSync(publicDir, { recursive: true });
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
    <url>
      <loc>${WEBSITE_URL}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

    writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemap.trim());
    console.log('✅ Sitemap generated successfully!');
  } catch (error) {
    console.error('Warning: Failed to generate sitemap:', error);
    // Don't throw the error, just log it
    process.exit(0);
  }
}

generateSitemap(); 