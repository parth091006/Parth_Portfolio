"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certificates", label: "Certificates" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#020B18]/80 backdrop-blur-xl border-b border-[#00D4FF]/10">
      <div className="container-custom h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-2xl tracking-tight"
          style={{
            background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          onClick={() => setMobileOpen(false)}
        >
          PB
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-sm tracking-wider transition-colors duration-200 ${isActive ? "text-[#00D4FF]" : "text-[#5B7A91] hover:text-[#00D4FF]"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
          </span>
          <span className="font-mono text-xs text-[#39FF14] tracking-wider">
            Open to Work
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#5B7A91] hover:text-[#00D4FF] transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-[#020B18]/95 backdrop-blur-xl border-t border-[#00D4FF]/10 px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-sm tracking-wider transition-colors duration-200 ${isActive ? "text-[#00D4FF]" : "text-[#5B7A91] hover:text-[#00D4FF]"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  / {link.label.toUpperCase()}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]" />
            </span>
            <span className="font-mono text-xs text-[#39FF14] tracking-wider">Open to Work</span>
          </div>
        </div>
      )}
    </header>
  );
}
