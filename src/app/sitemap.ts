import type { MetadataRoute } from "next";
import { questions } from "@/data/questions";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/compare`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/scenarios`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/questions`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/my-case`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/sources`, changeFrequency: "monthly", priority: 0.4 },
  ];

  const questionRoutes: MetadataRoute.Sitemap = questions.map((q) => ({
    url: `${SITE_URL}/${q.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...questionRoutes];
}
