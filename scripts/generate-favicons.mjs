import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SIZES = [16, 32, 48, 64, 96, 128, 192, 256, 512];
const SOURCE_SVG = resolve(process.cwd(), 'src/assets/Brand-Logo.svg');
const OUTPUT_DIR = resolve(process.cwd(), 'public');

async function generateFavicons() {
  try {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Copy original SVG
    fs.copyFileSync(SOURCE_SVG, resolve(OUTPUT_DIR, 'favicon.svg'));

    // Generate PNG favicons
    for (const size of SIZES) {
      await sharp(SOURCE_SVG)
        .resize(size, size)
        .png()
        .toFile(resolve(OUTPUT_DIR, `favicon-${size}x${size}.png`));
    }

    // Generate favicon.ico (includes 16x16, 32x32, and 48x48)
    const iceSizes = [16, 32, 48];
    const iceBuffers = await Promise.all(
      iceSizes.map(size =>
        sharp(SOURCE_SVG)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );

    await sharp(iceBuffers[0])
      .toFile(resolve(OUTPUT_DIR, 'favicon.ico'));

    console.log('✅ Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons(); 