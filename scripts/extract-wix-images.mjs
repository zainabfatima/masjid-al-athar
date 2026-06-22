import { writeFile } from "fs/promises";

const pages = [
  "https://www.masjidalathar.org/",
  "https://www.masjidalathar.org/about",
  "https://www.masjidalathar.org/about-us",
  "https://www.masjidalathar.org/masjid",
  "https://www.masjidalathar.org/donations",
  "https://www.masjidalathar.org/donations-1",
  "https://www.masjidalathar.org/programs",
  "https://www.masjidalathar.org/activities",
  "https://www.masjidalathar.org/saturday-school",
  "https://www.masjidalathar.org/contact",
  "https://www.masjidalathar.org/paypal-masjid-al-athar-new-home",
];

const all = new Set();
for (const page of pages) {
  const res = await fetch(page);
  const html = await res.text();
  const matches = html.matchAll(/static\.wixstatic\.com\/media\/([a-z0-9_~.-]+)/gi);
  for (const m of matches) all.add(m[1].split("/")[0].split("?")[0]);
  console.log(page, "->", all.size, "total unique");
}

await writeFile("scripts/wix-media-ids.json", JSON.stringify([...all], null, 2));
console.log("Saved", all.size, "ids to scripts/wix-media-ids.json");
