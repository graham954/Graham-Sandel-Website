# CLAUDE.md

Guidance for working in this repository.

## Project

Personal-brand portfolio website for **Graham Sandel**, live at **grahamsandel.com**.
The goal is a bold, modern, memorable web presence that showcases Graham's leadership,
community work, and drive — something he can share with anyone (networking, recognition,
opportunities). It is a personal brand site, not a college-application-only resume.

**Brand in three words:** Outgoing · Charismatic · Philanthropist.

## Tech stack & hosting

- **Framework:** [Astro](https://astro.build) — chosen for fast, content-focused, near-zero-JS
  output. Use `.astro` components; reach for a React/Svelte island only when interactivity
  genuinely needs it.
- **Hosting:** Cloudflare Pages (deploy the static build output).
- **Styling:** Bold & modern, with a committed point of view. Design system lives in
  [src/styles/global.css](src/styles/global.css) (OKLCH tokens).
  - **Color strategy: Committed.** A single electric blue (`--flare`) carries large surface
    area against cool near-black ink (`--ink`) and a true off-white (`--paper`) — deliberately
    *not* the cream/beige AI-default neutral. One drenched blue section + a blue marquee
    ribbon supply the energy. (Text on the blue is light — `--on-flare`.)
  - **Type:** Bricolage Grotesque (display) + Hanken Grotesk (body) — chosen off the AI
    reflex-reject list (the old IBM Plex / Space Grotesk / Inter picks were tells).
  - **Anti-slop rules to keep:** no tracked-uppercase eyebrow above every section (use the
    single `.kicker` once per page instead); no numbered `01/02` section scaffolding; no
    cream/beige body background; every animation has a `prefers-reduced-motion` fallback.
- **Design docs:** [PRODUCT.md](PRODUCT.md) holds the strategic brief (register, users, brand
  personality, anti-references, principles) used by the `impeccable` design skill. Read it before
  reshaping UI.
- **Tone of voice:** Mixed per section — confident & energetic where it sells achievement, warm &
  approachable where it's about community, polished & professional where credibility matters.

### Current state of the repo

The original site was plain multi-page vanilla HTML/CSS/JS (`index.html`, `about.html`, `work.html`,
`features.html`, `contact.html`, `styles.css`, `script.js`). Those files are **deleted from the
working tree but still in git history** (`git show HEAD:index.html`, etc.) — useful as a content/design
reference. The plan is to rebuild on Astro rather than extend the old static files.

## Site structure (pages)

1. **About** — Graham's story and background.
2. **Work / Portfolio** — projects, events, fundraisers, things he's organized or built.
   Keep this as a **simple, scaffolded structure for now** — Graham will fill in specific entries
   later. Build a clean, repeatable card/list pattern that's easy to add to.
3. **Leadership & Activities** — DECA, student government, the nonprofit, and athletics.
4. **Contact** — ways to reach him plus social links.

## About Graham (source content)

- **School:** Lexington High School — Lexington, South Carolina. **Class of 2028.**
- **Future:** Plans to attend a 4-year college **business program**; long-term goal is **real estate**.

### Leadership & activities

- **DECA — South Carolina DECA, VP of Hospitality.** Serves **3,500+ members**; helps prepare
  members and improve state conferences.
  - **1st place** in PMCA at SCDC (state) this past year.
  - **2nd place** in PMCA the prior year.
  - **2× ICDC qualifier and competitor** (DECA International Career Development Conference).
- **Student government — Junior Class President** (current); previously **Sophomore Class President.**
  Executes projects and fundraisers and drives school spirit for **2,500+ students**.
- **Nonprofit — Children in the Arts** ([childreninarts.com](https://childreninarts.com)).
  Raised **$3,500+ last year** through multiple events and fundraisers.
- **Athletics:** **2-year varsity Track & Field, All-Region athlete**; **2-year varsity Swim athlete.**

### Contact & social

- **Email:** graham@childreninarts.com
- **LinkedIn:** https://www.linkedin.com/in/graham-sandel-694767338/
- **Instagram:** @grahamsandel (personal), @scdeca_graham (DECA)

## Working conventions

- Keep the build simple and the content easy for Graham to edit himself.
- Prefer content in data/markdown/collections so non-code edits don't require touching components.
- When adding Portfolio entries, follow the established card/list pattern rather than bespoke layouts.
- Verify proper nouns and stats against this file before publishing — get names, numbers, and titles right.
