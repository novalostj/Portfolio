import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Jay`,
    description: project.shortDescription,
  };
}

const statusColors: Record<string, string> = {
  released: "bg-[var(--color-success)]/10 text-[var(--color-success)]",
  "in-development":
    "bg-yellow-500/10 text-yellow-400",
  "game-jam": "bg-purple-500/10 text-purple-400",
  academic: "bg-blue-500/10 text-blue-400",
};

const statusLabels: Record<string, string> = {
  released: "Released",
  "in-development": "In Development",
  "game-jam": "Game Jam",
  academic: "Academic",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  return (
    <div className="px-6 pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${statusColors[project.status]}`}
            >
              {statusLabels[project.status]}
            </span>
            <span className="rounded-md bg-[var(--color-accent)]/10 px-2.5 py-1 text-xs font-semibold text-[var(--color-accent)]">
              {project.engine}
            </span>
            <span className="text-sm text-[var(--color-muted)]">
              {project.year}
            </span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h1>

          <p className="text-lg leading-relaxed text-[var(--color-muted)]">
            {project.shortDescription}
          </p>
        </div>

        {/* Project image */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="relative aspect-video bg-[var(--color-background)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content grid */}
        <div className="mb-12 grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-xl font-semibold">About This Project</h2>
            <div className="space-y-4 leading-relaxed text-[var(--color-muted)]">
              {project.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <aside className="space-y-8">
            {/* Role */}
            <div>
              <h3 className="mb-2 text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase">
                My Role
              </h3>
              <p className="text-sm font-medium text-[var(--color-foreground)]">
                {project.role}
              </p>
            </div>

            {/* Contributions */}
            <div>
              <h3 className="mb-3 text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase">
                Contributions
              </h3>
              <ul className="space-y-2">
                {project.contributions.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-[var(--color-muted)]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="mb-3 text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-[var(--color-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-foreground)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(project.links.steam ||
              project.links.itchIo ||
              project.links.website ||
              project.links.github ||
              (project.links.custom && project.links.custom.length > 0)) && (
              <div>
                <h3 className="mb-3 text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase">
                  Links
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.links.steam && (
                    <a
                      href={project.links.steam}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-hover)]"
                    >
                      Steam ↗
                    </a>
                  )}
                  {project.links.itchIo && (
                    <a
                      href={project.links.itchIo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-hover)]"
                    >
                      itch.io ↗
                    </a>
                  )}
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-hover)]"
                    >
                      Website ↗
                    </a>
                  )}
                  {project.links.custom?.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition-all hover:bg-[var(--color-surface-hover)]"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-8">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="hidden sm:inline">{prevProject.title}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-2 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-foreground)]"
            >
              <span className="hidden sm:inline">{nextProject.title}</span>
              <span className="sm:hidden">Next</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Related projects */}
        <div className="mt-16 border-t border-[var(--color-border)] pt-12">
          <h2 className="mb-2 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
            More Projects
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {allProjects
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
