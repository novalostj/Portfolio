import { personalInfo } from "@/lib/projects-data";
import SocialLinks from "@/components/SocialLinks";

export default function AboutPage() {
  return (
    <div className="px-6 pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
            About Me
          </p>
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
            Unity Game Developer
            <br />
            based in the {personalInfo.location}
          </h1>
          <div className="prose prose-invert max-w-2xl leading-relaxed text-[var(--color-muted)]">
            {personalInfo.extendedBio.split("\n\n").map((para, i) => (
              <p key={i} className="mb-4">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h2 className="mb-8 text-2xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap gap-2">
            {personalInfo.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-foreground)] transition-all hover:border-[var(--color-accent)]/30 hover:bg-[var(--color-surface-hover)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience highlights */}
        <div>
          <h2 className="mb-8 text-2xl font-bold tracking-tight">
            Highlights
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="mb-3 text-3xl">🎮</div>
              <h3 className="mb-2 text-lg font-semibold">Shipped Titles</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Contributed to commercial releases on Steam including Five Nights at
                Freddy&apos;s: Into the Pit, WrestleQuest, and Renfield.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="mb-3 text-3xl">🎯</div>
              <h3 className="mb-2 text-lg font-semibold">Leadership</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Led development teams on multiple projects — from college game jams
                to solo indie development.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="mb-3 text-3xl">🔧</div>
              <h3 className="mb-2 text-lg font-semibold">Technical Range</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Experience across AI, gameplay systems, UI, multiplayer networking,
                Steam SDK integration, and more.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <div className="mb-3 text-3xl">🚀</div>
              <h3 className="mb-2 text-lg font-semibold">Game Jams</h3>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                Active game jam participant — rapid prototyping, creative
                problem-solving, and shipping under pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
