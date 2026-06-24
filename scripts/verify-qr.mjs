import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { PNG } from "pngjs";
import jsQR from "jsqr";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const qrDir = path.join(__dirname, "..", "public", "images", "wix");

const EXPECTED = [
  { file: "qr-masjid-operations.png", value: "6789033121", label: "Masjid Operations" },
  { file: "qr-sadaqah.png", value: "masjidalathar@gmail.com", label: "Sadaqah" },
  { file: "qr-zakat.png", value: "masjidalatharzakath@gmail.com", label: "Zakat-ul-Maal" },
  { file: "qr-children-activities.png", value: "6788516300", label: "Children Activities" },
  { file: "qr-community-events.png", value: "masjidalathar@gmail.com", label: "Community Events" },
];

function decodeQr(filePath) {
  const buf = readFileSync(filePath);
  const png = PNG.sync.read(buf);
  const code = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
  return code?.data ?? null;
}

let failed = 0;

for (const { file, value, label } of EXPECTED) {
  const filePath = path.join(qrDir, file);
  const decoded = decodeQr(filePath);
  const ok = decoded === value;
  if (!ok) failed++;
  console.log(`${ok ? "✓" : "✗"} ${label} (${file})`);
  console.log(`    expected: ${value}`);
  console.log(`    decoded:  ${decoded ?? "DECODE FAILED"}`);
}

if (failed > 0) {
  console.error(`\n${failed} QR code(s) failed verification.`);
  process.exit(1);
}

console.log(`\nAll ${EXPECTED.length} Zelle QR codes verified.`);
