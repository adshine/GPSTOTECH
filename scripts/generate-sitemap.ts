import { writeFileSync } from 'fs';
import { resolve } from 'path';

const WEBSITE_URL = 'https://gpstotech.com';

// Add all your website routes here
const routes = [
  '/',
  '/about',
  '/privacy-policy',
  '/terms-of-service',
  '/contact',
  // Add more routes as needed
];

function generateSitemap() {
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

  writeFileSync(resolve(process.cwd(), 'public/sitemap.xml'), sitemap.trim());
  console.log('✅ Sitemap generated successfully!');
}

generateSitemap(); 