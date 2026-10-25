import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/config";
import { plugins } from "@/lib/plugins";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...plugins.map((plugin) => ({
      url: `${baseUrl}/plugins/${plugin.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
