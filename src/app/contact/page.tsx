import { socialLinks } from "@/lib/projects-data";

export default function ContactPage() {
  return (
    <div className="px-6 pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-[var(--color-accent)] uppercase">
            Contact
          </p>
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            Get in Touch
          </h1>
          <p className="text-base leading-relaxed text-[var(--color-muted)]">
            Have a project in mind, a job opportunity, or just want to chat about
            game dev? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact form */}
        <form
          action="https://formspree.io/f/xykvpdqd"
          method="POST"
          className="space-y-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[var(--color-foreground)]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[var(--color-foreground)]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-[var(--color-foreground)]"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="What's this about?"
              className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-[var(--color-foreground)]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell me about your project or opportunity..."
              className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[var(--color-accent)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-lg hover:shadow-[var(--color-accent)]/25 active:scale-[0.98] sm:w-auto sm:px-10"
          >
            Send Message
          </button>
        </form>

        {/* Direct email */}
        <div className="mt-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
          <p className="mb-2 text-sm text-[var(--color-muted)]">
            Or reach me directly at
          </p>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-lg font-semibold text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            {socialLinks.email}
          </a>
        </div>
      </div>
    </div>
  );
}
