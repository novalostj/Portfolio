<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Project Guidelines

## Architecture

This is a **static Next.js 16 site** (App Router) deployed to GitHub Pages. All data is compile-time static — no API routes, no client-side fetching. See [README.md](./README.md) for full structure.

- **Data flow:** `src/lib/projects-data.ts` (single source of truth) → `src/lib/projects.ts` (helpers) → page components
- **Pages are async Server Components** with `generateStaticParams()` and `generateMetadata()` for dynamic routes
- **Params are Promises in Next.js 16:** always use `params: Promise<{ slug: string }>` and `const { slug } = await params`
- **No Image Optimization:** Static export requires `unoptimized: true`; use raw `<img>` tags (with `eslint-disable-next-line`)

## Build & Test

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server on `:3000` |
| `npm run build` | Static export to `out/` |
| `npm run lint` | Run ESLint (flat config) |

Auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.

## Critical Conventions

- **Image paths MUST use `assetPath()`** — prepends `/Portfolio` base path. Never hardcode image paths.
- **Use CSS variables, not Tailwind color classes.** All colors reference `var(--color-*)` (e.g., `bg-[var(--color-accent)]`). Do NOT use `bg-indigo-500` or similar.
- **Tailwind CSS v4 syntax:** Use `@import "tailwindcss"` not `@tailwind` directives.
- **Project status** is a string union: `"released" | "in-development" | "game-jam" | "academic"`
- **Path alias:** `@/*` maps to `./src/*`
- **Contact form** submits to external Formspree endpoint — no internal API.
- **Animations** use CSS `@keyframes` with inline `style` delay props — do not convert to JS animation libraries.
