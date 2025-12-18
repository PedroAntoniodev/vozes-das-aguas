import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = 'src/assets/images';
const outputDir = 'public/images';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir);

for (const file of files) {
  const inputPath = path.join(inputDir, file);

  if (!/\.(png|jpg|jpeg)$/i.test(file)) continue;

  const outputPath = path.join(
    outputDir,
    file.replace(/\.(png|jpg|jpeg)$/i, '.webp'),
  );

  await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);

  console.log(`✔ Convertido: ${file}`);
}
