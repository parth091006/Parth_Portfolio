import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const socialLinks = [
  { href: profile.github, icon: Github, label: "GitHub" },
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030304] mt-24">
      <div className="container-custom py-12">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-xl gradient-text">
              Parth Bhirwandekar
            </h3>
            <p className="font-mono text-xs text-[#94A3B8] tracking-widest mt-2 uppercase">
              Computer Vision • Robotics • AI Systems
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl border border-white/10 text-[#94A3B8] hover:text-[#F7931A] hover:border-[#F7931A]/40 hover:shadow-[0_0_15px_-5px_rgba(247,147,26,0.4)] transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs text-[#94A3B8]/60 tracking-wide">
            © 2026 Parth Bhirwandekar
          </p>

        </div>

      </div>
    </footer>
  );
}