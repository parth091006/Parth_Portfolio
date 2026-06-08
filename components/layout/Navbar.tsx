import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10">

      <div className="container-custom h-20 flex items-center justify-between">

        <Link
          href="/"
          className="font-bold text-2xl"
        >
          PB
        </Link>

        <nav className="hidden md:flex items-center gap-8">

          <Link href="/projects">
            Projects
          </Link>

          <Link href="/research">
            Research
          </Link>

          <Link href="/blog">
            Blog
          </Link>

          <Link href="/gallery">
            Gallery
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        <ThemeToggle />

      </div>

    </header>
  );
}