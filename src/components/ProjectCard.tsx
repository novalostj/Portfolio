import Link from "next/link";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

const statusColors: Record<Project["status"], string> = {
  released: "bg-[var(--color-success)]/10 text-[var(--color-success)]",
  "in-development":
    "bg-yellow-500/10 text-yellow-400",
  "game-jam": "bg-purple-500/10 text-purple-400",
  academic: "bg-blue-500/10 text-blue-400",
};

const statusLabels: Record<Project["status"], string> = {
  released: "Released",
  "in-development": "In Development",
  "game-jam": "Game Jam",
  academic: "Academic",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/5 active:scale-[0.98]"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[var(--color-background)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Status badge */}
        <span
          className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${statusColors[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded-md bg-[var(--color-accent)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent)] uppercase tracking-wider">
            {project.engine}
          </span>
          <span className="text-xs text-[var(--color-muted)]">{project.year}</span>
        </div>

        <h3 className="mb-1.5 text-lg font-semibold text-[var(--color-foreground)] transition-colors group-hover:text-[var(--color-accent)]">
          {project.title}
        </h3>

        <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-[var(--color-background)] px-2 py-0.5 text-[10px] text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-md bg-[var(--color-background)] px-2 py-0.5 text-[10px] text-[var(--color-muted)]">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
