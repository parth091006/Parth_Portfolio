import React from "react";
import Image from "next/image";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
  certificate: Certificate;
  onClick: (cert: Certificate) => void;
}

export default function CertificateCard({ certificate, onClick }: CertificateCardProps) {
  return (
    <div
      onClick={() => onClick(certificate)}
      className="glass-card overflow-hidden h-full flex flex-col hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-48 w-full bg-black/40 border-b border-white/10">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3 gap-2">
          <span className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-blue-400 font-medium">
            {certificate.category}
          </span>
          <span className="text-xs text-muted font-medium whitespace-nowrap">
            {certificate.issueDate}
          </span>
        </div>

        <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-blue-400 transition-colors duration-200">
          {certificate.title}
        </h3>

        <p className="text-sm text-muted mb-4">
          Issued by <span className="text-white/80 font-medium">{certificate.issuer}</span>
        </p>

        {certificate.credentialId && (
          <p className="text-xs text-muted/60 mb-4 font-mono truncate">
            ID: {certificate.credentialId}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
          {certificate.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="border border-white/5 bg-white/5 rounded-full px-2.5 py-0.5 text-xs text-muted"
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 3 && (
            <span className="text-xs text-muted/60 self-center pl-1 font-medium">
              +{certificate.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
