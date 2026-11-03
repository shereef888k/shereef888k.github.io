import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const hi = sharp('profile.jpeg');
const { width, height } = await hi.metadata();
console.log('Source image dimensions:', width, height);

// Build responsive WebP portraits
for (const w of [1100, 720, 420]) {
  await sharp('profile.jpeg')
    .resize({ width: w })
    .webp({ quality: 88 })
    .toFile(`${OUT}/portrait-${w}.webp`);
}

// Social share image (1200x630) on dark cinematic backdrop
const portrait = await sharp('profile.jpeg')
  .resize({ height: 580, width: 480, fit: 'cover', position: 'top' })
  .png()
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: '#07070a'
  }
})
  .composite([
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="g" cx="75%" cy="50%" r="45%">
            <stop offset="0%" stop-color="#e5132b" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#e5132b" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#g)"/>
      </svg>`)
    },
    { input: portrait, top: 25, left: 680 },
    {
      input: Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <text x="72" y="280" font-family="Impact, sans-serif" font-size="110" fill="#f4f1ec" letter-spacing="4">SHEREEF</text>
        <text x="78" y="336" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="24" fill="#ff3d5a" letter-spacing="16">THE SERIES</text>
        <text x="78" y="410" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">AI/ML • FULL-STACK • ROBOTICS &amp; IOT</text>
        <text x="78" y="450" font-family="Helvetica, Arial, sans-serif" font-size="16" fill="#6d6c75">Yenepoya University • BCA AI &amp; ML Graduate</text>
      </svg>`)
    }
  ])
  .jpeg({ quality: 86 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('Images and assets generated successfully!');

