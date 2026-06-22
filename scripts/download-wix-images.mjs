import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "images", "wix");

/** Full Wix media IDs with extensions */
const NAMED = {
  // Branding
  "logo.png": "9cc235_739deb212155477b9d64ea946280bb75~mv2.png",
  // Homepage slider
  "slider-welcome.png": "dd25c3_6db49782338d4dd2b92fb8a3b75d4fc5~mv2.png",
  "slider-community.jpg": "9cc235_9bd39437684e4d0cafcfdc9fce5ea5ec~mv2.jpg",
  "slider-announcement.png": "9cc235_e129fae82ceb48858bc7bed2b0c73461~mv2.png",
  "slider-donations.png": "dd25c3_bf43859346a2488a976b213453f8bd60~mv2.png",
  "slider-mosque.jpg": "9cc235_ed0663ea50b243cf8a13cb9cf0555619~mv2.jpg",
  // Masjid photos
  "masjid-exterior-2021.jpg": "9cc235_2166feaad79b40e3acaf91b506f9c427~mv2.jpg",
  "masjid-interior.jpg": "9cc235_ca0b8b348cd2420ca5bae29c83dece95~mv2.jpg",
  "masjid-mosque.jpg": "9cc235_ed0663ea50b243cf8a13cb9cf0555619~mv2.jpg",
  "masjid-potluck.png": "9cc235_c0f8e519f4504e7fba72f32355002ef5~mv2.png",
  "masjid-eid.jpeg": "9cc235_aee7e0699a9c4aa8902fc16f8753755f~mv2.jpeg",
  "masjid-donation.png": "9cc235_da9396d05cca426ebc35c4eef498cfd6~mv2.png",
  // Saturday school
  "saturday-school.jpg": "9cc235_1658073d373446a98a252f578be51481~mv2.jpg",
  "assalamu-alikum.png": "9cc235_253147a336924fb9992d6b9868639f21~mv2.png",
  // Activities
  "activities-1.jpg": "9cc235_4a271c7bd59446cf85fd0253f115c957~mv2.jpg",
  "activities-2.jpg": "9cc235_ae8ef3a850e04bab905979e48098dc3e~mv2.jpg",
  // Programs
  "program-qaida.png": "dd25c3_7563e40da65b41d38acac76c6843e7fe~mv2.png",
  "program-hifz.png": "dd25c3_6853e93c4e2b439e8e27786d6115ae67~mv2.png",
  "program-studies.png": "dd25c3_607fcd88a1e0470a9d498ef5469147a7~mv2.png",
  "program-sirah.png": "dd25c3_ad3ef8381e4c4fcc8c98053d26d55eb4~mv2.png",
  // Donation QR codes (from live site)
  "qr-masjid-operations.png": "9cc235_aff362e2fb7c42ca9f89059a128c44f3~mv2.png",
  "qr-zakat.png": "9cc235_3bb2d124920e407c8361e8b21479cd7e~mv2.png",
  "qr-sadaqah.png": "9cc235_34d543e191bc4ee99bf209151c50f110~mv2.png",
  "qr-paypal.png": "9cc235_b9ef8e6568e9475681766b99cce18ef2~mv2.png",
  // Payment logos
  "paypal-logo.png": "9cc235_94f43c4230784961924f3efd60bc8e33~mv2.png",
  "cashapp-logo.png": "9cc235_3ffd29f68e374101b16a00cf6e399e4a~mv2.png",
  // Feature card icons
  "icon-events.png": "dd25c3_fc9f006639db4b5f940273294b1f94c1~mv2.png",
  "icon-quran.png": "dd25c3_4a44b084c6ce439e8950d395c3eb7460~mv2.png",
  "icon-family.png": "dd25c3_dc1b4339177042d7979d1916ad3fa209~mv2.png",
  "icon-mosque.png": "dd25c3_a3529a888cbe42f1b0b1c0f26266d8d7~mv2.png",
  "icon-volunteer.png": "dd25c3_db7a48862a304f11ba05f41f5576d931~mv2.png",
  "icon-donation.png": "dd25c3_8aa9a8647eab42689ab419ae137df07d~mv2.png",
  "icon-visit.png": "dd25c3_10119146721f4f2caa228e33ef5c31d2~mv2.png",
  "icon-prayer.png": "dd25c3_edecd3ef576743c8aa7b6deb37201561~mv2.png",
  // Decorative
  "islamic-pattern.png": "dd25c3_59bb89f5c3eb48edb56bafdbeab2a910~mv2.png",
  "islamic-decor.png": "dd25c3_bf43859346a2488a976b213453f8bd60~mv2.png",
};

function wixUrl(mediaId) {
  return `https://static.wixstatic.com/media/${mediaId}/v1/fit/w_2500,h_2500,al_c/${mediaId}`;
}

async function downloadFile(filename, mediaId) {
  const dest = path.join(outDir, filename);
  const res = await fetch(wixUrl(mediaId));
  if (!res.ok) {
    console.error(`FAIL ${filename}: ${res.status}`);
    return false;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`OK ${filename} (${(buf.length / 1024).toFixed(0)} KB)`);
  return true;
}

await mkdir(outDir, { recursive: true });
await mkdir(path.join(outDir, "archive"), { recursive: true });

for (const [filename, mediaId] of Object.entries(NAMED)) {
  await downloadFile(filename, mediaId);
}

// Download remaining extracted IDs into archive/
const ids = JSON.parse(
  await readFile(path.join(__dirname, "wix-media-ids.json"), "utf8")
);

for (const rawId of ids) {
  const mediaId = rawId.includes("~mv2") ? rawId : `${rawId}~mv2.png`;
  const safeName = mediaId.replace(/[~.]/g, "_");
  const dest = path.join(outDir, "archive", safeName);
  try {
    const res = await fetch(wixUrl(mediaId));
    if (res.ok) {
      await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    }
  } catch {
    // try jpg for bare ids
    const alt = rawId.includes("~mv2") ? rawId : `${rawId}~mv2.jpg`;
    const res2 = await fetch(wixUrl(alt));
    if (res2.ok) {
      await writeFile(dest.replace(".png", ".jpg"), Buffer.from(await res2.arrayBuffer()));
    }
  }
}

console.log("Wix image download complete.");
