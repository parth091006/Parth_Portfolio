import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/parth091006",
    href: profile.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "parthbhirwandekar",
    href: profile.linkedin,
  },
];

export default function ContactSection() {
  return (
    <section className="bg-[#030304] py-24">
      <div className="container-custom">

        {/* Section header */}
        <p className="section-label mb-3">// CONTACT</p>
        <h2 className="section-title font-heading mb-4">
          Let&apos;s{" "}
          <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-[#94A3B8] font-body text-lg mb-14 max-w-xl">
          I&apos;m open to research collaborations, internship opportunities,
          and interesting project discussions.
        </p>

        {/* Contact grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div
              key={label}
              className="group crypto-card p-6 flex flex-col gap-4"
            >
              {/* Icon container */}
              <div className="w-11 h-11 rounded-xl border border-[#EA580C]/40 bg-[#EA580C]/10 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all duration-300">
                <Icon size={20} className="text-[#F7931A]" />
              </div>

              <div>
                <p className="font-mono text-xs text-[#94A3B8] tracking-widest uppercase mb-1.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="font-body text-base font-medium text-white hover:text-[#F7931A] transition-colors duration-200 break-all group/link flex items-center gap-1"
                  >
                    {value}
                    <ArrowUpRight size={14} className="opacity-0 group-hover/link:opacity-100 -translate-x-2 translate-y-2 group-hover/link:translate-x-0 group-hover/link:-translate-y-0 transition-all duration-300" />
                  </a>
                ) : (
                  <p className="font-body text-base font-medium text-white">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail size={16} />
            Send an Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Connect on LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}