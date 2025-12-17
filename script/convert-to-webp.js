import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertToWebP() {
  console.log('🔍 Finding all images to convert...\n');

  // Find all JPG, JPEG, and PNG images in attached_assets folder
  const imagePatterns = [
    'attached_assets/**/*.jpg',
    'attached_assets/**/*.jpeg',
    'attached_assets/**/*.png'
  ];

  let allImages = [];
  for (const pattern of imagePatterns) {
    const images = await glob(pattern);
    allImages = [...allImages, ...images];
  }

  console.log(`📸 Found ${allImages.length} images to convert\n`);

  let converted = 0;
  let skipped = 0;
  let errors = 0;

  for (const imagePath of allImages) {
    try {
      // Generate WebP output path
      const parsedPath = path.parse(imagePath);
      const outputPath = path.join(parsedPath.dir, parsedPath.name + '.webp');

      // Convert to WebP with 80% quality
      await sharp(imagePath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const stats = await sharp(imagePath).metadata();
      const originalSize = (await import('fs')).statSync(imagePath).size;
      const webpSize = (await import('fs')).statSync(outputPath).size;
      const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

      console.log(`✅ ${path.basename(imagePath)} → ${path.basename(outputPath)}`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(1)} KB | WebP: ${(webpSize / 1024).toFixed(1)} KB | Saved: ${savings}%\n`);

      converted++;
    } catch (error) {
      console.error(`❌ Error converting ${imagePath}:`, error.message);
      errors++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 CONVERSION SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully converted: ${converted}`);
  console.log(`⚠️  Errors: ${errors}`);
  console.log(`📁 Total images processed: ${allImages.length}`);
  console.log('='.repeat(60) + '\n');
}

convertToWebP().catch(console.error);
