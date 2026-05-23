# Portfolio — Jay | Unity Game Developer

A personal portfolio website showcasing game development projects, built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Statically exported and deployed to **GitHub Pages**.

🌐 **Live site:** [https://novalostj.github.io/Portfolio](https://novalostj.github.io/Portfolio)

---

## Tech Stack

| Layer        | Technology                           |
| ------------ | ------------------------------------ |
| Framework    | Next.js 16 (App Router)              |
| UI Library   | React 19                             |
| Language     | TypeScript                           |
| Styling      | Tailwind CSS v4                      |
| Deployment   | Static export → GitHub Pages         |

## Features

- **Dark-themed** design with an indigo accent palette
- **Responsive layout** — mobile-friendly with a bottom navigation bar
- **Featured projects** grid on the homepage
- **Project detail pages** with contribution lists, tech tags, and external links (Steam, itch.io, etc.)
- **About page** showcasing skills, expertise, and shipped titles
- **Contact form** powered by Formspree
- **Social links** — GitHub, YouTube, Twitter/X, itch.io
- **Static export** for fast, zero-server hosting

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Dark theme + animation utilities
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Homepage (Hero, Featured Projects, CTA)
│   ├── about/page.tsx       # About page with bio, skills, highlights
│   ├── contact/page.tsx     # Contact form page
│   └── projects/
│       ├── page.tsx         # All projects grid
│       └── [slug]/page.tsx  # Individual project detail
├── components/
│   ├── Header.tsx           # Fixed navigation (desktop top bar / mobile bottom bar)
│   ├── Footer.tsx           # Footer with social links & copyright
│   ├── ProjectCard.tsx      # Project card with status badge & tech tags
│   └── SocialLinks.tsx      # Social media SVG icons
└── lib/
    ├── types.ts             # TypeScript interfaces (Project, SocialLinks)
    ├── projects-data.ts     # All project data, personal info, social links
    └── projects.ts          # Data access utilities (getFeaturedProjects, etc.)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. The base path is ignored in development.

### Build for production

```bash
npm run build
```

Generates a static export in the `out/` directory, ready to deploy.

### Lint

```bash
npm run lint
```

## Deployment

The site is automatically deployed via **GitHub Actions** whenever changes are pushed to the `main` branch:

1. Push to `main`
2. GitHub Actions runs the build workflow
3. Static files are deployed to GitHub Pages

To deploy manually:

```bash
npm run build
# The out/ folder contains the full static site
```

## Adding Projects

1. Add project data to `src/lib/projects-data.ts`
2. Place project images in `public/images/projects/`
3. Set `featured: true` to show on the homepage

## License

This project is a personal portfolio. All project names, trademarks, and assets belong to their respective owners.
