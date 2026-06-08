import { Metadata } from "next";
import { siteConfig } from "./site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.author
    }
  ],

  creator: siteConfig.author,

  openGraph: {
    type: "website",
    locale: "en_US",

    title: siteConfig.name,

    description: siteConfig.description,

    siteName: siteConfig.name,

    url: siteConfig.url
  },

  twitter: {
    card: "summary_large_image",

    title: siteConfig.name,

    description: siteConfig.description
  }
};