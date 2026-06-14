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
      className="crypto-card overflow-hidden h-full flex flex-col hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
    >
      <div className="relative h-56 w-full bg-[#0F1115] border-b border-white/10 p-4">
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col bg-[#030304]">
        <div className="flex justify-between items-start mb-4 gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[#F7931A]/30 bg-[#F7931A]/5 text-[#F7931A] font-medium">
            {certificate.category}
          </span>
          <span className="font-mono text-xs text-[#94A3B8] font-medium whitespace-nowrap pt-1">
            {certificate.issueDate}
          </span>
        </div>

        <h3 className="font-heading text-lg font-bold mb-2 line-clamp-2 group-hover:text-[#F7931A] transition-colors duration-200 text-white">
          {certificate.title}
        </h3>

        <p className="font-body text-sm text-[#94A3B8] mb-4">
          Issued by <span className="text-white font-medium">{certificate.issuer}</span>
        </p>

        {certificate.credentialId && (
          <p className="text-xs text-[#94A3B8]/60 mb-4 font-mono truncate">
            ID: {certificate.credentialId}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
          {certificate.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="border border-white/10 bg-[#0F1115] rounded-full px-2.5 py-0.5 font-mono text-[10px] text-[#94A3B8]"
            >
              {skill}
            </span>
          ))}
          {certificate.skills.length > 3 && (
            <span className="font-mono text-[10px] text-[#F7931A] self-center pl-1 font-medium">
              +{certificate.skills.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
