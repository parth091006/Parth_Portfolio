"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { certificates, Certificate } from "@/data/certificates";
import CertificateCard from "@/components/cards/CertificateCard";

export default function CertificateSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  // Filter logic
  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const lowerQuery = searchQuery.toLowerCase();
      const matchesSearch =
        cert.title.toLowerCase().includes(lowerQuery) ||
        cert.issuer.toLowerCase().includes(lowerQuery) ||
        cert.skills.some((skill) => skill.toLowerCase().includes(lowerQuery));

      return matchesSearch;
    });
  }, [searchQuery]);

  return (
    <section className="bg-[#030304] py-24 min-h-screen">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3">// CERTIFICATIONS</p>
            <h1 className="section-title font-heading mb-3">
              Verified <span className="gradient-text">Qualifications</span>
            </h1>
            <p className="font-body text-[#94A3B8] max-w-xl">
              A repository of my professional qualifications, certifications, and technical accomplishments.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-[#94A3B8]" />
            <input
              type="text"
              placeholder="Search by title, issuer, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-3 bg-[#0F1115] border border-white/10 rounded-xl focus:outline-none focus:border-[#F7931A]/50 focus:ring-1 focus:ring-[#F7931A]/50 font-mono text-sm text-white transition-all placeholder:font-body"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#F7931A] transition-colors cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
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

          </>
        ) : (
          <div className="crypto-card text-center py-20 px-4">
            <Award className="mx-auto h-12 w-12 text-[#94A3B8] mb-4 stroke-1" />
            <h3 className="font-heading text-xl font-semibold mb-2 text-white">No Certifications Found</h3>
            <p className="font-body text-[#94A3B8] text-sm max-w-md mx-auto">
              Try adjusting your search criteria or category filter.
            </p>
          </div>
        )}

        {/* Modal Preview - Redesigned to be MASSIVE */}
        {activeModalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[#030304]/90 backdrop-blur-md transition-opacity duration-300 cursor-pointer"
              onClick={() => setActiveModalCert(null)}
            />

            {/* Content Card - Increased max-w to 5xl and changed to flex-col for large image */}
            <div className="relative crypto-card w-full max-w-5xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh] z-10 animate-in fade-in zoom-in-95 duration-200">

              {/* Close Button */}
              <button
                onClick={() => setActiveModalCert(null)}
                className="absolute top-4 right-4 z-20 bg-[#030304]/80 hover:bg-[#F7931A]/20 text-white hover:text-[#F7931A] rounded-full p-2 border border-white/10 hover:border-[#F7931A]/50 transition-all cursor-pointer backdrop-blur-md"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Top: Massive Image Area */}
              <div className="relative w-full bg-[#0F1115] border-b border-white/10 flex items-center justify-center p-6 md:p-10 shrink-0">
                <div className="relative w-full aspect-[1.414] max-h-[50vh] shadow-2xl rounded-lg overflow-hidden border border-white/5">
                  <Image
                    src={activeModalCert.image}
                    alt={activeModalCert.title}
                    fill
                    className="object-contain bg-white"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>

              {/* Bottom: Info Area */}
              <div className="p-6 md:p-8 flex-1 overflow-y-auto">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

                  {/* Left Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-mono text-xs px-3 py-1 rounded-full border border-[#F7931A]/30 bg-[#F7931A]/10 text-[#F7931A] uppercase tracking-wider">
                        {activeModalCert.category}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                      {activeModalCert.title}
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
                      <div className="flex items-center gap-2 font-body text-[#94A3B8]">
                        <ShieldCheck className="h-4 w-4 text-[#F7931A] flex-shrink-0" />
                        <span>
                          Issuer: <strong className="text-white font-medium">{activeModalCert.issuer}</strong>
                        </span>
                      </div>

                      <div className="flex items-center gap-2 font-body text-[#94A3B8]">
                        <Calendar className="h-4 w-4 text-[#F7931A] flex-shrink-0" />
                        <span>
                          Date: <strong className="text-white font-medium">{activeModalCert.issueDate}</strong>
                        </span>
                      </div>

                      {activeModalCert.credentialId && (
                        <div className="flex items-center gap-2 font-body text-[#94A3B8]">
                          <Award className="h-4 w-4 text-[#F7931A] flex-shrink-0" />
                          <span>
                            Credential ID:{" "}
                            <strong className="text-white font-mono">{activeModalCert.credentialId}</strong>
                          </span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-3">
                        Skills Verified
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeModalCert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="font-mono text-xs border border-white/10 bg-[#0F1115] rounded-full px-3 py-1.5 text-[#94A3B8]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right CTA */}
                  <div className="shrink-0 flex items-center md:items-start pt-4 md:pt-0">
                    <a
                      href={activeModalCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full md:w-auto text-center"
                    >
                      Verify Certificate <ExternalLink className="h-4 w-4 inline-block ml-1" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}