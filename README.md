# grahamsandel.com

Personal-brand portfolio for **Graham Sandel**, built with [Astro](https://astro.build)
and deployed to **Cloudflare Pages**.

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  data/site.ts          ← edit your facts/stats/socials here (single source of truth)
  layouts/Layout.astro  ← page shell (head, header, footer, scroll animations)
  components/            ← Header, Footer, WorkCard
  pages/
    index.astro         ← home
    about.astro         ← About
    leadership.astro    ← Leadership & Activities
    work.astro          ← Work/Portfolio listing
    work/[...slug].astro← individual work entry
    contact.astro       ← Contact
  content/
    work/*.md           ← add a Markdown file per portfolio entry
    config.ts           ← schema for work entries
```

## Adding a portfolio entry

Copy `src/content/work/example-fundraiser.md`, rename it, and edit the front matter
(`title`, `category`, `summary`, `metric`, `order`, `date`). It appears on `/work`
automatically. Set `draft: true` to hide a work-in-progress entry.

## Editing your info

Most facts (name, email, socials, stats, leadership roles) live in
[`src/data/site.ts`](src/data/site.ts) — edit there and the site updates everywhere.

## Deploy (Cloudflare Pages)

Connect this repo in the Cloudflare dashboard with:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Custom domain:** `grahamsandel.com`
