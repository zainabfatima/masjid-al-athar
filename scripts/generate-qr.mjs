import QRCode from "qrcode";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "..", "public", "images", "wix");

/** All Zelle QR codes — must match src/lib/donations.ts */
const ZELLE_QR_CODES = [
  {
    filename: "qr-masjid-operations.png",
    value: "6789033121",
    label: "Masjid Operations / New Masjid Construction",
  },
  {
    filename: "qr-sadaqah.png",
    value: "masjidalathar@gmail.com",
    label: "Sadaqah",
  },
  {
    filename: "qr-zakat.png",
    value: "masjidalatharzakath@gmail.com",
    label: "Zakat-ul-Maal",
  },
  {
    filename: "qr-children-activities.png",
    value: "6788516300",
    label: "Children Activities",
  },
  {
    filename: "qr-community-events.png",
    value: "masjidalathar@gmail.com",
    label: "Community Events",
  },
];

await mkdir(outputDir, { recursive: true });

for (const donation of ZELLE_QR_CODES) {
  const buffer = await QRCode.toBuffer(donation.value, {
    type: "png",
    width: 400,
    margin: 2,
    color: {
      dark: "#0d9488",
      light: "#ffffff",
    },
    errorCorrectionLevel: "H",
  });

  await writeFile(path.join(outputDir, donation.filename), buffer);
  console.log(`Generated ${donation.filename} → ${donation.value} (${donation.label})`);
}

console.log("Zelle QR codes generated.");
