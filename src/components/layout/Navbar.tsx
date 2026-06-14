"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/certificates", label: "Certs" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#030304]/80 backdrop-blur-xl border-b border-white/10">
      <div className="container-custom h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-heading font-bold text-2xl gradient-text tracking-tight"
          onClick={() => setMobileOpen(false)}
        >
          PB
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm tracking-wider text-[#94A3B8] hover:text-[#F7931A] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Status Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-[#F7931A]/30 bg-[#F7931A]/5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#F7931A] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7931A]" />
          </span>
          <span className="font-mono text-xs text-[#F7931A] tracking-wider">
            Open to Work
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#94A3B8] hover:text-[#F7931A] transition-colors p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden bg-[#030304]/95 backdrop-blur-xl border-t border-white/10 px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm tracking-wider text-[#94A3B8] hover:text-[#F7931A] transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                / {link.label.toUpperCase()}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping-custom absolute inline-flex h-full w-full rounded-full bg-[#F7931A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7931A]" />
            </span>
            <span className="font-mono text-xs text-[#F7931A] tracking-wider">Open to Work</span>
          </div>
        </div>
      )}
    </header>
  );
}