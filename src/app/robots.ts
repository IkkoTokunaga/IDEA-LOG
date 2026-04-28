import type { MetadataRoute } from "next";
import { siteUrl } from "@/constants/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
