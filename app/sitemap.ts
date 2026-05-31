import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

/** Genera /sitemap.xml. Una sola página por ahora (la landing). */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
