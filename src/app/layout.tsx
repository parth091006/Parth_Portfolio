import "@/styles/globals.css";

import type { Metadata } from "next";
import { metadata as siteMetadata } from "@/config/metadata";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Analytics } from "@vercel/analytics/react";

import { inter, spaceGrotesk, jetbrainsMono } from "./fonts";
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
      className="dark"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <div className="min-h-screen flex flex-col bg-[#030304]">

          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

        </div>

        <Analytics />
        <PersonJsonLd />
        <WebSiteJsonLd />
      </body>
    </html>
  );
}