import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.irf.com.mx",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}