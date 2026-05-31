import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";

/** Genera /robots.txt. Permite indexar todo y apunta al sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
