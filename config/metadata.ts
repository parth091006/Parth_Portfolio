import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://parth-portfolio-69ek.vercel.app"
  ),

  title: {
    default: "Parth Bhirwandekar",
    template: "%s | Parth Bhirwandekar",
  },

  description:
    "Computer Vision, Robotics and AI Systems Portfolio",

  keywords: [
    "AI",
    "Computer Vision",
    "Robotics",
    "ROS2",
    "Machine Learning",
    "Research",
  ],

  authors: [
    {
      name: "Parth Bhirwandekar",
    },
  ],

  creator: "Parth Bhirwandekar",

  openGraph: {
    title: "Parth Bhirwandekar",

    description:
      "Computer Vision, Robotics and AI Systems",

    url:
      "https://parth-portfolio-69ek.vercel.app",

    siteName: "Parth Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/profile/profile-photo.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Parth Bhirwandekar",

    description:
      "Computer Vision, Robotics and AI Systems",

    images: ["/profile/profile-photo.jpg"],
  },
};