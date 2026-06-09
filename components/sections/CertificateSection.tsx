"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { certificates, Certificate } from "@/data/certificates";
import CertificateCard from "@/components/cards/CertificateCard";

const CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Robotics",
  "Programming",
  "Cloud",
  "Other",
];

export default function CertificateSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  // Filter logic
  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;

      const lowerQuery = searchQuery.toLowerCase();
      const matchesSearch =
        cert.title.toLowerCase().includes(lowerQuery) ||
        cert.issuer.toLowerCase().includes(lowerQuery) ||
        cert.skills.some((skill) => skill.toLowerCase().includes(lowerQuery));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="container-custom py-24 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-white to-white/75 bg-clip-text text-transparent">
            Certifications
          </h1>
          <p className="text-muted max-w-xl">
            A repository of my professional qualifications, certifications, and technical accomplishments.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted" />
          <input
            type="text"
            placeholder="Search by title, issuer, or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 text-sm transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-xl text-sm transition-all duration-200 border whitespace-nowrap cursor-pointer ${
              selectedCategory === category
                ? "bg-blue-600/25 border-blue-500/50 text-blue-400"
                : "bg-white/5 border-white/10 text-muted hover:text-white hover:border-white/20"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredCertificates.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                onClick={(c) => setActiveModalCert(c)}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted mt-12">
            More certifications and achievements will be added as they are earned.
          </p>
        </>
      ) : (
        <div className="glass-card text-center py-20 px-4">
          <Award className="mx-auto h-12 w-12 text-muted mb-4 stroke-1" />
          <h3 className="text-xl font-medium mb-2 text-white">No Certifications</h3>
          <p className="text-muted text-sm max-w-md mx-auto">
            More certifications and achievements will be added as they are earned.
          </p>
        </div>
      )}

      {/* Modal Preview */}
      {activeModalCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setActiveModalCert(null)}
          />

          {/* Content Card */}
          <div className="relative glass-card w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200 border border-white/10">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalCert(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 border border-white/10 transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left/Top: Image Area */}
            <div className="relative w-full md:w-1/2 min-h-[240px] md:min-h-full bg-black/40 flex items-center justify-center p-4">
              <div className="relative w-full aspect-4/3 max-h-[300px] md:max-h-full shadow-lg rounded overflow-hidden">
                <Image
                  src={activeModalCert.image}
                  alt={activeModalCert.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Right/Bottom: Info Area */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-blue-400 font-medium">
                    {activeModalCert.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-3 leading-snug">
                  {activeModalCert.title}
                </h2>

                <div className="space-y-2.5 text-sm mb-6">
                  <div className="flex items-center gap-2 text-muted">
                    <ShieldCheck className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>
                      Issuer: <strong className="text-white/90">{activeModalCert.issuer}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted">
                    <Calendar className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>
                      Date: <strong className="text-white/90">{activeModalCert.issueDate}</strong>
                    </span>
                  </div>

                  {activeModalCert.credentialId && (
                    <div className="flex items-center gap-2 text-muted">
                      <Award className="h-4 w-4 text-blue-400 flex-shrink-0" />
                      <span>
                        Credential ID:{" "}
                        <strong className="text-white/95 font-mono">{activeModalCert.credentialId}</strong>
                      </span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-2.5">
                    Skills Verified
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeModalCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/10 bg-white/5 rounded-full px-3 py-1 text-xs text-muted/90"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5">
                <a
                  href={activeModalCert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                >
                  Verify Certificate <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}