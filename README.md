# Kylie Beck — Portfolio

Personal portfolio site. Single-page React app with a dark-first design system,
a light theme, scroll-triggered section reveals, and a fully responsive layout.

**Live site:** <https://portfolio-kylie.up.railway.app/>

[![CI](https://github.com/kyliebeck/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/kyliebeck/portfolio/actions/workflows/ci.yml)

![Kylie Beck — full-stack developer who ships.](public/og-image.png)

## The projects it links to

| Project | What it is | Stack |
|---|---|---|
| [Nightstand](https://nightstand-production.up.railway.app/) | Book tracker — search, shelve, share | React, TypeScript, Supabase |
| [Pixby](https://tamagotchi-production-b14d.up.railway.app/) | Virtual pet game with shop, minigame, leaderboards | Vanilla JS, Express, SQLite |
| [Marquee](https://marquee-production-e065.up.railway.app/) | Movie collection with reviews and watchlists | Django, PostgreSQL, TMDB |
| [Sudoku](https://kyliebeck.github.io/Sudoku-Project/) | 9×9 puzzle, no framework | JavaScript, CSS |

## Stack

| | |
|---|---|
| Framework | React 19 |
| Build | Vite 7 |
| Routing | React Router 7 |
| Styling | Plain CSS with custom properties — no framework |
| Lint | ESLint 9 (flat config) |
| Tests | Vitest 3 + Testing Library, jsdom |
| CI | GitHub Actions — lint, test, build on every push |

## Running locally

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint
npm test         # vitest, single run
npm run test:watch
```

## Testing

22 tests across four files, run in jsdom. They cover the parts where a
regression would be visible to someone evaluating the site:

| File | What it protects |
|---|---|
| `components/Projects.test.jsx` | Every card renders; demo and code links are absolute URLs carrying `noopener noreferrer`; screenshots have alt text and intrinsic dimensions; links are distinguishable by project for screen readers |
| `components/Navbar.test.jsx` | Drawer opens and closes from the burger, Escape, and link clicks; body scroll is frozen while open and restored after; `aria-controls` points at a real element |
| `hooks/useTheme.test.js` | Seeds from the attribute `index.html` sets pre-paint; toggles and persists; still applies when `localStorage` throws (Safari private mode) |
| `hooks/useRevealOnScroll.test.jsx` | Elements reveal on intersection; everything shows immediately under reduced motion or when `IntersectionObserver` is missing — the failure mode there is a blank page |

`src/test/setup.js` registers jest-dom matchers and stubs `IntersectionObserver`
and `matchMedia`, neither of which jsdom provides.

## How it's put together

```
src/
  index.css              design tokens (color, type scale, spacing) + base layer
  App.jsx                page composition and legacy-route redirects
  hooks/
    useTheme.js          theme state, mirrored to <html data-theme> + localStorage
    useRevealOnScroll.js one page-wide IntersectionObserver drives every reveal
  components/
    Navbar.jsx           sticky nav, scroll-spy, mobile drawer
    Hero.jsx             Projects.jsx  Skills.jsx  Experience.jsx  Contact.jsx  Footer.jsx
    css/                 one stylesheet per component
public/
  images/                project screenshots (webp, ~1200px wide)
  resume.pdf  og-image.png  robots.txt  sitemap.xml
```

Project cards are data, not markup — the `projects` array at the top of
`Projects.jsx` drives the whole section. Adding one means adding an object
(and a screenshot with its intrinsic `imageSize`, which reserves layout space
so the grid doesn't shift as images load).

## Deploying

Built as a static site; `dist/` is the artifact. `vercel.json` carries SPA
rewrites and cache headers for Vercel, and `public/_redirects` does the same on
Netlify — both are inert on the platform that isn't in use.

The canonical URL is hard-coded in four places: the `<link rel="canonical">`
and Open Graph tags in `index.html`, the JSON-LD block below them, `robots.txt`,
and `sitemap.xml`. Moving to a custom domain means updating all four.


