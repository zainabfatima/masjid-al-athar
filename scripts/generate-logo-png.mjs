import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const brandDir = path.join(__dirname, "..", "public", "images", "brand");

const exports = [
  { svg: "masjid-al-athar-logo.svg", png: "masjid-al-athar-logo.png", width: 840 },
  { svg: "masjid-al-athar-logo.svg", png: "masjid-al-athar-logo-download.png", width: 1680 },
  { svg: "masjid-al-athar-icon.svg", png: "masjid-al-athar-icon.png", width: 256 },
  { svg: "masjid-al-athar-icon.svg", png: "masjid-al-athar-icon-192.png", width: 192 },
  { svg: "masjid-al-athar-icon.svg", png: "masjid-al-athar-icon-32.png", width: 32 },
];

await mkdir(brandDir, { recursive: true });

for (const item of exports) {
  const svgPath = path.join(brandDir, item.svg);
  const pngPath = path.join(brandDir, item.png);
  const svg = await readFile(svgPath);
  await sharp(svg).resize(item.width).png().toFile(pngPath);
  console.log(`OK ${item.png}`);
}
