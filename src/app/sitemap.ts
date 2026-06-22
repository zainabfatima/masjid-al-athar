import { ALL_SITEMAP_PATHS } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.masjidalathar.org";

  return ALL_SITEMAP_PATHS.map((link) => ({
    url: `${baseUrl}${link.href === "/" ? "" : link.href}`,
    lastModified: new Date(),
    changeFrequency: link.href === "/" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
