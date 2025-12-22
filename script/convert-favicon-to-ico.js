import sharp from 'sharp';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function convertFaviconToIco() {
  const faviconPath = path.resolve(__dirname, '../client/public/favicon.png');
  const outputPath = path.resolve(__dirname, '../client/public/favicon.ico');

  try {
    console.log('🔄 Converting favicon.png to favicon.ico...');
    
    // Read the PNG file
    const inputBuffer = await readFile(faviconPath);
    
    // Get image metadata
    const metadata = await sharp(inputBuffer).metadata();
    console.log(`📐 Original size: ${metadata.width}x${metadata.height}`);
    
    // Create ICO file with multiple sizes (16x16, 32x32, 48x48)
    // Note: Sharp doesn't directly support ICO, so we'll create a PNG
    // and then use a workaround. For now, we'll create optimized PNGs
    // and copy as ICO (browsers will accept PNG as ICO)
    
    // Actually, let's use sharp to create a proper ICO by creating multiple sizes
    // and combining them. But since sharp doesn't support ICO directly,
    // we'll create a 32x32 PNG and save it as .ico (browsers accept this)
    
    const icoBuffer = await sharp(inputBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    await writeFile(outputPath, icoBuffer);
    console.log('✅ Successfully created favicon.ico');
    console.log(`📁 Saved to: ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Error converting favicon:', error.message);
    process.exit(1);
  }
}

convertFaviconToIco();

