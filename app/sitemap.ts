import { MetadataRoute } from "next";

const BASE_URL = "https://poonammakeupartist.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date("2026-05-17"),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog/bridal-makeup-secrets`,
      lastModified: new Date("2025-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/pre-wedding-skincare`,
      lastModified: new Date("2025-02-28"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/choose-your-makeup-artist`,
      lastModified: new Date("2025-01-20"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/bridal-makeup-trends-2025`,
      lastModified: new Date("2025-01-05"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];
}
