import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/compare`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/scenarios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/sources`, changeFrequency: "monthly", priority: 0.4 },
  ];
}
