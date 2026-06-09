import React from "react";

/**
 * Reusable Person Schema JSON-LD Component
 */
export function PersonJsonLd() {
  const personSchema = {
    "@context": "https://schema.org" as const,
    "@type": "Person" as const,
    "name": "Parth Bhirwandekar",
    "jobTitle": "AIML Student",
    "description": "Computer Vision, Robotics and AI Systems",
    "url": "https://parth-portfolio-69ek.vercel.app",
    "sameAs": [
      "https://github.com/parth091006",
      "https://www.linkedin.com/in/parthbhirwandekar/"
    ]
  };

  return (
    <script
      id="person-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

/**
 * Reusable WebSite Schema JSON-LD Component
 */
export function WebSiteJsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org" as const,
    "@type": "WebSite" as const,
    "name": "Parth Portfolio",
    "url": "https://parth-portfolio-69ek.vercel.app"
  };

  return (
    <script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}
