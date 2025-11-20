# Aegean Dispatch

Aegean Dispatch is a minimal personal blog built with [Astro](https://astro.build). It highlights essays about cinema, technology, sport, and books while staying fast, responsive, and easy to deploy as a static site (e.g., GitHub Pages).

## Features

- **Content collections** powered by Astro Content Collections with Markdown frontmatter (`title`, `date`, `tags`, `description`).
- **Pretty URLs** for each post (`/posts/<slug>/`) plus curated landing pages (Home, About, All Posts).
- **Reusable layouts & components** for navigation, hero, and post presentation.
- **Responsive, dark-on-light theme** with custom typography and tag pills.
- **Static output** for painless hosting anywhere, including GitHub Pages.

## Project Structure

```
├── public/                # Static assets (e.g., favicon)
├── src/
│   ├── components/        # Header/Footer components
│   ├── content/           # Astro content collections + Markdown posts
│   ├── layouts/           # Base layout + Post layout
│   ├── pages/             # Home, About, All Posts, dynamic post route
│   └── styles/            # Global styling
├── astro.config.mjs       # Astro configuration
├── package.json           # Scripts & dependencies
└── tsconfig.json          # TypeScript settings
```

## Getting Started

```bash
npm install        # install dependencies
npm run dev        # start local dev server (default: http://localhost:4321)
npm run check      # type & content validation
npm run build      # generate static `dist/`
npm run preview    # preview built site locally
```

Add new posts in `src/content/posts/` using Markdown with frontmatter:

```md
---
title: "Post title"
description: "Short summary"
date: 2024-10-01
tags:
  - cinema
---
Post body here…
```

## Deployment

1. Update `site` (and optionally `base`) inside `astro.config.mjs` to match the production URL.
2. Run `npm run build` to produce the static `dist/` directory.
3. Deploy `dist/` to any static host. For GitHub Pages, push the contents of `dist/` to `gh-pages` or use GitHub Actions with `with: path: dist`.

## Customization Tips

- Adjust theme values inside `src/styles/global.css`.
- Add or rename tags by updating `src/content/config.ts` (remember to update frontmatter accordingly).
- Modify navigation links in `src/components/Header.astro` if you add new sections.
- Replace sample posts with your own Markdown files for a personalized feed.

Enjoy the calm dispatches!
