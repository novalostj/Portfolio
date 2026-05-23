import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { personalInfo, socialLinks } from "@/lib/projects-data";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 md:pb-32 md:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/5 blur-3xl" />
          <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-in mb-3 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
            Unity Game Developer
          </p>
          <h1 className="animate-fade-in animation-delay-100 mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="animate-fade-in animation-delay-200 mx-auto mb-8 max-w-xl text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            {personalInfo.bio}
          </p>

          <div className="animate-fade-in animation-delay-300 mb-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/projects"
              className="rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/25 active:scale-95"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition-all hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface-hover)] active:scale-95"
            >
              Get in Touch
            </Link>
          </div>

          <div className="animate-fade-in animation-delay-400 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
                Portfolio
              </p>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)] sm:inline"
            >
              View all projects →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((project, i) => (
              <div
                key={project.slug}
                className="animate-fade-in"
                style={{
                  animationDelay: `${(i + 1) * 100}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/projects"
              className="text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="border-t border-[var(--color-border)] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mb-8 text-base leading-relaxed text-[var(--color-muted)]">
            I&apos;m always open to discussing new projects, opportunities, and
            collaborations. Whether you need a gameplay programmer, AI specialist,
            or general Unity developer — let&apos;s talk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${socialLinks.email}`}
              className="rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/25 active:scale-95"
            >
              {socialLinks.email}
            </a>
            <Link
              href="/contact"
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-foreground)] transition-all hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface-hover)] active:scale-95"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
