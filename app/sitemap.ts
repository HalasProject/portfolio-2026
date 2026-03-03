import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.salah.cloud";
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
