import { seoConfig } from "@/config/seo";

export function createMetadata(
  title?: string,
  description?: string
) {
  return {
    title:
      title || seoConfig.title,

    description:
      description || seoConfig.description,

    openGraph: {
      title:
        title || seoConfig.title,

      description:
        description || seoConfig.description,

      images: [
        seoConfig.ogImage
      ]
    }
  };
}