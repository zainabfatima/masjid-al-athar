/**
 * Downloads curated mosque & Islamic community photos from Pexels/Unsplash.
 * Run: npm run download-images
 */
import { mkdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..", "public", "images");

function pexels(id, w = 1920) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

function unsplash(id, w = 1920) {
  return `https://images.unsplash.com/${id}?w=${w}&q=80`;
}

const IMAGES = [
  // Heroes
  { path: "hero/home.jpg", url: pexels(372326) },
  { path: "hero/about.jpg", url: pexels(30890556) },
  { path: "hero/masjid.jpg", url: unsplash("photo-1564769625905-50e93615e769") },
  { path: "hero/donations.jpg", url: pexels(6417113) },
  { path: "hero/building-project.jpg", url: pexels(590020) },
  { path: "hero/saturday-school.jpg", url: pexels(7249593) },
  // Feature cards
  { path: "features/community-events.jpg", url: pexels(31275879, 800) },
  { path: "features/islamic-studies.jpg", url: unsplash("photo-1609599006353-e629aaabfeae", 800) },
  { path: "features/family-counsel.jpg", url: pexels(34496697, 800) },
  { path: "features/about-us.jpg", url: pexels(6417113, 800) },
  { path: "features/volunteer.jpg", url: pexels(8129902, 800) },
  { path: "features/donation.jpg", url: pexels(372326, 800) },
  { path: "features/visit-us.jpg", url: pexels(802555, 800) },
  // Content sections
  { path: "content/mosque-prayer.jpg", url: pexels(31275879, 1200) },
  { path: "content/mosque-exterior.jpg", url: pexels(372326, 1200) },
  { path: "content/quran-study.jpg", url: pexels(30890556, 1200) },
  { path: "content/mosque-interior.jpg", url: pexels(8691968, 1200) },
  { path: "content/mosque-dome.jpg", url: pexels(6417113, 1200) },
  { path: "content/ramadan-iftar.jpg", url: pexels(3992940, 1200) },
  { path: "content/community-gathering.jpg", url: unsplash("photo-1564769625905-50e93615e769", 1200) },
  { path: "content/charity-giving.jpg", url: pexels(590053, 1200) },
  { path: "content/islamic-calligraphy.jpg", url: pexels(4049990, 1200) },
  { path: "content/mosque-night.jpg", url: pexels(802555, 1200) },
  { path: "content/youth-education.jpg", url: pexels(34496697, 1200) },
  // Programs
  { path: "programs/hifz.jpg", url: unsplash("photo-1609599006353-e629aaabfeae", 800) },
  { path: "programs/saturday-school.jpg", url: pexels(34496697, 800) },
  { path: "programs/noorani-qaida.jpg", url: pexels(30890556, 800) },
  { path: "programs/bjj.jpg", url: unsplash("photo-1555597673-b21d5c935865", 800) },
  { path: "programs/building.jpg", url: pexels(733851, 1200) },
];

for (const img of IMAGES) {
  const dest = path.join(root, img.path);
  await mkdir(path.dirname(dest), { recursive: true });
  const res = await fetch(img.url);
  if (!res.ok) {
    console.error(`Failed: ${img.path} (${res.status})`);
    continue;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buffer);
  console.log(`Saved ${img.path} (${(buffer.length / 1024).toFixed(0)} KB)`);
}

console.log("Done.");
