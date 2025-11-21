---
title: "How I built Aegean Dispatch with Astro"
description: "Notes on the stack, structure, styling, and deployment choices behind this blog."
date: 2025-11-21
tags:
  - tech
cover: "/images/aegean-dispatch-initial-logo.jpg"
coverAlt: "Minimal tech gradient"
---

I wanted a quiet, fast blog with minimal noise. Somewhere to unload my writings and stuff to say about movies etc. (because the Letterboxd is never enough). Astro gave me static output, content collections, and just enough structure to keep things tidy without forcing a heavy client bundle.

So I just wanted to try to publish a new post about the tech stack of the *Aegean Dispatch*. Here's some lists about what I used and how I used them;

### Stack and structure

- **Astro + content collections:** Posts live in `src/content/posts` as Markdown with frontmatter (`title`, `description`, `date`, `tags`, `cover`, `coverAlt`). The collection schema lives in `src/content/config.ts`.
- **Layouts and components:** A base layout for meta + shell, a post layout for cover/meta/body, and small components for navigation and footer. Pages are simple: home, about, archive, and dynamic post/tag routes.
- **Styling:** A single `src/styles/global.css` with a light palette, rounded cards, and pill tags. Google Fonts (Space Grotesk + Source Serif 4) keep type readable without extra dependencies.

### Content flow

- Add a new Markdown file to `src/content/posts/` with frontmatter. Optional `cover` can be a public path (`/images/your-cover.jpg`) or a relative asset in the same folder.
- Tags drive both the archive and the `/tags/<tag>/` filtered views; pills are clickable everywhere.
- Inline images in Markdown use normal syntax: `![Alt text](./image.jpg)`.

### Navigation and base paths

- Links and image URLs respect `import.meta.env.BASE_URL`, so it works on GitHub Pages under `/aegean-dispatch/`.
- `astro.config.mjs` sets `site` and `base`, and output is static.

### Deployment

- Build with `npm run build`; output lands in `dist/`.
- GitHub Pages via Actions: a workflow builds Astro and publishes `dist/`.

### Why Astro here?

- Content collections keep frontmatter typed.
- Islands-free pages mean quick Time to Content.
- Simple theming and zero client JS unless I decide to add it later (search, analytics, etc.).

If I want to extend this site later, the obvious next steps are RSS + sitemap, pagianation and a small client-side search function. But the current setup is intentionally minimal, easy to read, easy to deploy, easy to maintain.
