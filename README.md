# Aegean Dispatch

**Aegean Dispatch** is my personal corner of the internet. A small, quiet blog where I write about:

- cinema and the films that stick with me  
- technology and the tools I actually use  
- sport (mostly NBA)  
- books worth thinking about  

The goal is posting short dispatches from whatever I’m currently watching, reading, or building.

Live site: <https://erdagege.github.io/aegean-dispatch/>

---

## What this repo is

This repository contains the source code for the blog.  
It’s built with [Astro](https://astro.build/) and deployed as a static site.

- Markdown files for each post  
- Simple layouts for Home, About, and All Posts  
- Responsive design aimed at staying fast and readable  

---

## Running it locally

Clone the repo and install dependencies:

```bash
npm install
npm run dev     # starts dev server at http://localhost:4321
```

Build and preview:

```bash
Copy code
npm run build
npm run preview
```

### Creating a new post

New posts live in src/content/posts/ as Markdown files with frontmatter:

```bash
---
title: "Post title"
description: "Short summary"
date: 2024-10-01
tags:
  - cinema
---
Post body here…
```

## Project structure

```bash
public/                 # Static assets (favicons, images)
src/
  components/           # Header, footer, cards, etc.
  content/              # Content collections and Markdown posts
  layouts/              # Base and post layouts
  pages/                # Home, About, All Posts, dynamic post routes
  styles/               # Global styles
astro.config.mjs        # Astro configuration
package.json            # Scripts & dependencies
tsconfig.json           # TypeScript settings
```

## Deployment
The site is deployed via GitHub Pages as a static build.

Any push to the main branch triggers a GitHub Action that:

1. Builds the Astro site.
2. Publishes the dist/ folder to GitHub Pages.

Enjoy the calm dispatches.
