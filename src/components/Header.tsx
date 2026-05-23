import Link from "next/link";
import { socialLinks, personalInfo } from "@/lib/projects-data";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-[var(--color-foreground)] transition-colors hover:text-[var(--color-accent)]"
        >
          {personalInfo.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Contact
          </Link>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-hover)]"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile nav */}
        <div className="flex items-center gap-4 md:hidden">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-hover)]"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav className="flex items-center justify-center gap-6 border-t border-[var(--color-border)] bg-[var(--color-background)] py-3 md:hidden">
        <Link href="/" className="text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]">
          Home
        </Link>
        <Link href="/projects" className="text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]">
          Projects
        </Link>
        <Link href="/about" className="text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]">
          About
        </Link>
        <Link href="/contact" className="text-xs font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]">
          Contact
        </Link>
      </nav>
    </header>
  );
}
