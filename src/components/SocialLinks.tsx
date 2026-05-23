import { socialLinks } from "@/lib/projects-data";

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md";
}

const iconMap = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  itch: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M22.5 0H1.5C.675 0 0 .675 0 1.5v21c0 .825.675 1.5 1.5 1.5h21c.825 0 1.5-.675 1.5-1.5v-21C24 .675 23.325 0 22.5 0zM4.5 4.5h3v3h-3v-3zm4.5 0h3v3H9v-3zm4.5 0h3v3h-3v-3zm-6 13.5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm6 0c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
    </svg>
  ),
};

const sizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
};

export default function SocialLinksComponent({
  className = "",
  iconSize = "md",
}: SocialLinksProps) {
  const links = [
    { href: socialLinks.github, icon: iconMap.github, label: "GitHub" },
    { href: socialLinks.twitter, icon: iconMap.twitter, label: "Twitter" },
    { href: socialLinks.youtube, icon: iconMap.youtube, label: "YouTube" },
    { href: socialLinks.itchIo, icon: iconMap.itch, label: "itch.io" },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-[var(--color-muted)] transition-all duration-200 hover:text-[var(--color-foreground)] hover:scale-110"
        >
          <div className={sizeClasses[iconSize]}>{link.icon}</div>
        </a>
      ))}
    </div>
  );
}
