import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="px-6 pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
            Portfolio
          </p>
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            All Projects
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
            A collection of games I&apos;ve worked on — from commercial Steam releases
            to game jam experiments and academic projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className="animate-fade-in"
              style={{
                animationDelay: `${i * 60}ms`,
                animationFillMode: "backwards",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
