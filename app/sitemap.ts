import type { MetadataRoute } from "next";
import { locations, site } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/carta`, lastModified: now, priority: 0.9 },
    { url: `${site.url}/locales`, lastModified: now, priority: 0.7 },
    ...locations.map((l) => ({ url: `${site.url}/locales/${l.slug}`, lastModified: now, priority: 0.9 })),
  ];
}
