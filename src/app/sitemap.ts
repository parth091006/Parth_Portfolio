import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    "https://parth-portfolio-69ek.vercel.app";

  return [
    {
      url: baseUrl,
      priority: 1
    },

    {
      url: `${baseUrl}/projects`,
      priority: 0.9
    },

    {
      url: `${baseUrl}/research`,
      priority: 0.9
    },

    {
      url: `${baseUrl}/contact`,
      priority: 0.8
    },

    {
      url: `${baseUrl}/blog`,
      priority: 0.8
    },

    {
      url: `${baseUrl}/gallery`,
      priority: 0.7
    }
  ];
}