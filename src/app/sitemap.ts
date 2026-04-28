import type { MetadataRoute } from "next";
import { siteUrl } from "@/constants/site";

export const dynamic = "force-static";

/** trailingSlash に合わせ、末尾 `/` の URL をサイトマップに載せる */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
