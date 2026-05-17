import { MetadataRoute } from "next";
import { posts } from "@/lib/blogData";

const BASE_URL = "https://poonammakeupartist.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...blogRoutes,
  ];
}
