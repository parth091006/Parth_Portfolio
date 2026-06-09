import "@/styles/globals.css";

import type { Metadata } from "next";
import { metadata as siteMetadata } from "@/config/metadata";

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Analytics } from "@vercel/analytics/react";

import { inter } from "./fonts";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">

            <Navbar />

            <main className="flex-1">
              {children}
            </main>

            <Footer />

          </div>

          <Analytics />
          <PersonJsonLd />
          <WebSiteJsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}