# HKU CPC Website

A starter website for the **HKU Competitive Programming Community**. It is a
static [Astro](https://astro.build) site with a Swiss international-style
typographic system, self-hosted **Geist / Geist Mono**, and a GitHub Pages
deployment workflow.

> **Data provenance:** the Teams and Achievements data are based on the
> [HKU Provinci contact page](https://i.cs.hku.hk/~provinci/contact.html) and
> [achievements archive](https://i.cs.hku.hk/~provinci/achievements.html).
> News copy, training logistics and some contact details are illustrative —
> review and replace them before publishing.

## Stack

- Astro 7 (static output, no UI framework)
- Geist and Geist Mono via `@fontsource-variable` (self-hosted, no Google Fonts)
- Plain CSS design tokens and a 12-column grid
- GitHub Actions → GitHub Pages

## Quick start

Requires Node 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # preview the production build
```

## Pages

| Route              | Source                          | Purpose                                      |
| ------------------ | ------------------------------- | -------------------------------------------- |
| `/`                | `src/pages/index.astro`         | Hero, stats, latest news, selected results   |
| `/about/`          | `src/pages/about.astro`         | Mission, training model, history, joining    |
| `/teams/`          | `src/pages/teams.astro`         | Current squads, coaches, past squads         |
| `/achievements/`   | `src/pages/achievements.astro`  | Filterable contest record and World Finals   |
| `/news/`           | `src/pages/news/index.astro`    | Featured story and filterable story list     |
| `/news/[slug]/`    | `src/pages/news/[slug].astro`   | Generated article pages                      |
| `/404.html`        | `src/pages/404.astro`           | GitHub Pages not-found page                  |

## Project structure

```text
.
├── .github/workflows/deploy.yml   # build + deploy to GitHub Pages
├── public/                        # favicon, robots.txt, static assets
├── src/
│   ├── components/                # Header, Footer, cards, page header, CTA
│   ├── data/                      # all editable content
│   │   ├── site.ts                # name, nav, contact, home stats
│   │   ├── teams.ts               # squads, coaches, archive
│   │   ├── achievements.ts        # contest records
│   │   └── news.ts                # articles and their bodies
│   ├── layouts/BaseLayout.astro   # <head>, header, footer, global CSS
│   ├── lib/url.ts                 # base-path-aware link helper
│   ├── pages/                     # routes
│   └── styles/global.css          # design system
└── astro.config.mjs               # site/base from environment
```

## Editing content

### Identity, navigation and stats

Edit `src/data/site.ts`. Navigation labels and numbering are shared by the
header and footer. Homepage statistics live in the same file.

### Teams

Edit `src/data/teams.ts`:

- `currentTeams` — one object per squad card (name, members, coach, honors)
- `coaches` — coordinator and coaching staff cards
- `archive` — the recent-squads table

Each team needs a unique `id`; it becomes the anchor on `/teams/`.

### Achievements

Edit `src/data/achievements.ts`. The `category` field must be one of
`"World Finals"`, `"Regional"`, `"Local"`, `"CCPC"` or `"Other"` to match the
filter buttons. Update `achievementStats` when the headline numbers change.

The current data was generated from the Provinci achievements table (2000–2026).
When adding results, keep the newest-first order and update `achievementStats`
if a headline number changes.

### News

Add an object to `posts` in `src/data/news.ts`. The page, detail route and
filter are all generated from this array.

- `slug` becomes `/news/<slug>/`
- `date` is ISO (`YYYY-MM-DD`) for `<time datetime>`; `displayDate` is shown
- set `featured: true` on the story that should lead the news page
- `body` is an array of blocks:
  - `"## Heading"` renders an `<h2>`
  - `"> Quote"` renders a blockquote
  - any other string renders a paragraph

### Visual system

`src/styles/global.css` contains the whole design system:

- paper `#f2f1eb`, ink `#111110`, HKU green `#006f51`, signal green `#00a878`
- fluid display sizes with `clamp()`
- a 12-column layout used with explicit column spans
- responsive breakpoints at 1200, 960, 860 and 640 px
- reduced-motion support and visible focus styles

To swap the accent colour, change `--green` and `--green-bright` in `:root`.

## Deployment

### GitHub Pages

1. Push this repository to GitHub with `main` as the default branch.
2. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually). `.github/workflows/deploy.yml`
   builds the site and deploys `dist/`.

The workflow automatically detects the repository type:

- **Project site** (`github.com/<owner>/<repo>`): base path `/<repo>/`
- **User site** (`github.com/<owner>/<owner>.github.io`): base path `/`

`astro.config.mjs` reads `SITE_URL` and `BASE_PATH`. Every internal link goes
through `href()` in `src/lib/url.ts`, so the same code works at a domain root
and under a repository subpath.

### Custom domain

Set `SITE_URL` to the custom domain and `BASE_PATH` to `/` in the workflow,
then add a `public/CNAME` file containing the domain (for example
`cpc.example.com`). Point the domain at GitHub Pages in your DNS provider.

### Building for a subpath locally

```bash
SITE_URL=https://example.github.io BASE_PATH=/hku-cpc-website/ npm run build
npm run preview
```

## Notes for future maintainers

- The design is deliberately framework-free; add small, progressive
  enhancements rather than a client-side app.
- Filtering on the achievements and news pages is done with a few lines of
  inline JavaScript. Content remains readable without it.
- Fonts are bundled at build time. There are no third-party requests at
  runtime.
- Add real social links, a mailing address and a privacy note before launch.
- Team and contest data comes from the HKU Provinci pages. Confirm with the
  coordinator before publishing updates; results are maintained by hand.

## Sources

- Teams: <https://i.cs.hku.hk/~provinci/contact.html>
- Achievements: <https://i.cs.hku.hk/~provinci/achievements.html>

## License

The source code is provided as a template for the HKU Competitive Programming
Community. Geist is licensed under the SIL Open Font License.
