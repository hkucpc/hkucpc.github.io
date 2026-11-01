# HKU CPC Website

The official website for the **HKU Competitive Programming Community**. It is a
static [Astro](https://astro.build) site built on a Swiss-influenced editorial
typographic system: a strict grid, **Geist Serif** display type, self-hosted
**Geist / Geist Mono** text, and a GitHub Pages deployment workflow.

> **Content note:** historical records are compiled from HKU and contest
> archives. Some early squads, rosters and results are incomplete.

## Stack

- Astro 7 (static output, no UI framework)
- **Geist Serif** for display type, **Geist** and **Geist Mono** for text
- Sans/mono via `@fontsource-variable`; Geist Serif bundled locally from Vercel
  under the SIL Open Font License (`public/fonts/GeistSerif-OFL.txt`)
- Plain CSS design tokens and a 12-column grid
- GitHub Actions → GitHub Pages

## Quick start

Requires Node 22 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run check:data # validate slugs, team references, dates and news
npm run build      # static output in dist/
npm run preview    # preview the production build
```

## Pages

| Route              | Source                          | Purpose                                      |
| ------------------ | ------------------------------- | -------------------------------------------- |
| `/`                | `src/pages/index.astro`         | Hero, stats, latest news, selected results   |
| `/about/`          | `src/pages/about.astro`         | Mission, training model and community facts  |
| `/join/`           | `src/pages/join.astro`          | How to join, training and competition steps  |
| `/people/`         | `src/pages/people/index.astro`   | Coordinator, coach, contestants and formations   |
| `/people/[id]/`    | `src/pages/people/[id].astro`    | Single squad roster and awards               |
| `/members/[slug]/` | `src/pages/members/[slug].astro`| Contestant and/or staff history, awards and contact|
| `/achievements/`   | `src/pages/achievements.astro`  | Contest record, season tabs and finals overview |
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
│   │   ├── teams.ts               # squads, roster slugs, coaches and honors
│   │   ├── people.ts              # canonical name, per-season notes, email and links
│   │   ├── teamRegistry.ts        # team id → name lookup
│   │   ├── members.ts             # member profiles derived from teams.ts + people.ts
│   │   ├── staff.ts               # coach / coordinator profiles
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

### People and teams

Edit `src/data/teams.ts`:

- `teamSeasons` — every recorded squad from 1990–91 to 2026–27, with roster slug strings and honors
- `coachBySeason` — one coach slug string per season, not attached to individual teams
  (2023–24 to 2025–26: Qipeng Kuang; 2026–27: Mingtian Yang.)
- `coordinatorsBySeason` — one faculty coordinator slug string per season
  (2025–26 and 2026–27: Weiming Feng; 2012–13 to 2024–25: Hubert Chan;
  2008–09: Ho Leung Chan)

Rosters and staff records in `teams.ts` store only a person’s `slug`. Names,
per-season notes, email and links live in `src/data/people.ts`, keyed by slug,
so a person is defined once.

All contestants, coaches and coordinators use the same `/members/<slug>/` page.
People who are both staff and contestants (Mingtian Yang, Bintao Sun) see contestant
and staff history on one page; staff-only people see just their staff history
and contact details. The page list is built by merging `memberProfiles` from
`src/data/members.ts` with `staffProfiles` from `src/data/staff.ts`.
Contact links (email, homepage, Codeforces, AtCoder, GitHub) live in
`people.ts` and appear on personal pages only; the People page shows just the
name and a profile link.

The People page displays one season at a time using accessible year tabs and
opens the latest season (2026–27) by default.
Each team needs a unique `id`; it becomes `/people/<id>/`. The People page
lists coordinator, coach, contestants and team formations for each season;
awards are shown on the individual team pages. Contestant
profiles in `/members/` are generated automatically from `teamSeasons`
(1990–91 to 2026–27) and `people.ts` by `src/data/members.ts`. Every contestant
must have a unique `slug`; it becomes `/members/<slug>/`. Awards shown on a
profile come from that season’s team entry, while staff roles come from
`coachBySeason` and `coordinatorsBySeason` plus the same person record.

### Achievements

The Achievements page has an `Overview` tab (World Finals and Regional
Finals only) plus one tab per season. Season tabs show every result recorded
for that season.

Edit `src/data/achievements.ts`. The `category` field must be one of
`"World Finals"`, `"Regional"`, `"Local"`, `"CCPC"` or `"Other"` to match the
filter buttons. Each result stores a `teamId`, not a team name. IDs come from
`teamSeasons` in `src/data/teams.ts`. Historical teams with unknown rosters
are included with an empty `members` array. Use `teamId: null` for results
with no known team. Update `achievementStats` when the headline numbers change.

The current records cover 1990–2026. The table sorts rows by contest date,
then by rank within the same contest. Update `achievementStats` when a headline
number changes.

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

### Data validation

Run:

```bash
npm run check:data
```

The check verifies team ids, person slugs, roster references, staff references,
achievement team ids, contest date formats, category and award values, news
slugs and dates, and conflicting dates for the same contest. It runs in CI
before the production build.

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

- **Project site** (repository name does not end in `.github.io`): base path `/<repo>/`
- **User or organisation site** (repository name ends in `.github.io`): base path `/`

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
- Review contact links and add a privacy note before major public announcements.
- Team and contest data is maintained by hand. Confirm with the coordinator
  before publishing updates.

## License

The source code is maintained by the HKU Competitive Programming Community. Geist is licensed under the SIL Open Font License.
