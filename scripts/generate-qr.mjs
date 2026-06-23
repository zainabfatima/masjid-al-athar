import QRCode from "qrcode";
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "..", "public", "images", "wix");

/** Locally generated Zelle QR codes (Wix CDN provides the main donation QRs) */
const donations = [
  {
    filename: "qr-children-activities.png",
    value: "6788516300",
    label: "Children Activities",
  },
  {
    filename: "qr-community-events.png",
    value: "6788516300",
    label: "Community Events",
  },
];

await mkdir(outputDir, { recursive: true });

for (const donation of donations) {
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
  console.log(`Generated ${donation.filename} for ${donation.label}`);
}

console.log("Zelle QR codes generated.");
