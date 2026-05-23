import { socialLinks } from "@/lib/projects-data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12">
        <div className="flex items-center gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            GitHub
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            Twitter
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            YouTube
          </a>
          <a
            href={socialLinks.itchIo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
          >
            itch.io
          </a>
        </div>
        <p className="text-xs text-[var(--color-muted)]">
          &copy; {new Date().getFullYear()} Jay. Built with Next.js
        </p>

        {/*
          ---- Country Visitor Counter ----
          To enable the visible country flag counter:
          1. Go to https://flagcounter.com/
          2. Click "Get your free Flag Counter!"
          3. Customize colors to match the dark theme:
             - Background: #0a0a0b
             - Text: #ededed
             - Border: #27272a
          4. Copy the embed code they give you and paste it below,
             replacing the placeholder comment.
        */}
        <div className="mt-4 flex justify-center">
          {/* Paste your FlagCounter embed code here */}
        </div>
      </div>
    </footer>
  );
}
