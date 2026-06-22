import QRCode from "qrcode";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "..", "public", "images", "qr");

const donations = [
  {
    filename: "qr-masjid-operations.png",
    value: "6789033121",
    label: "Masjid Operations",
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
];

await mkdir(outputDir, { recursive: true });

for (const donation of donations) {
  const buffer = await QRCode.toBuffer(donation.value, {
    type: "png",
    width: 400,
    margin: 2,
    color: {
      dark: "#0b5e4a",
      light: "#ffffff",
    },
    errorCorrectionLevel: "H",
  });

  await writeFile(path.join(outputDir, donation.filename), buffer);
  console.log(`Generated ${donation.filename} for ${donation.label}`);
}

console.log("All QR codes generated successfully.");
