import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },

    sitemap:
      "https://parth-portfolio.vercel.app/sitemap.xml"
  };
}