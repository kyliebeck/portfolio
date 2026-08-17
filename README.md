# Kylie Beck — Portfolio

Personal portfolio site. Single-page React app with a dark-first design system,
a light theme, scroll-triggered section reveals, and a fully responsive layout.

**Live site:** _add your deployed URL here_

![Kylie Beck — full-stack developer who ships.](public/og-image.png)

## Stack

| | |
|---|---|
| Framework | React 19 |
| Build | Vite 7 |
| Routing | React Router 7 |
| Styling | Plain CSS with custom properties — no framework |
| Lint | ESLint 9 (flat config) |

## Running locally

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build
npm run lint     # eslint
```

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
```

A few decisions worth calling out:

**Theming.** Every color is a custom property defined in both the `:root` and
`:root[data-theme="light"]` blocks, so a component never hardcodes a color and
neither theme can drift. An inline script in `index.html` applies the stored
theme before first paint, which avoids the light-mode flash on load.

**Scroll reveals.** A single `IntersectionObserver` in `useRevealOnScroll`
watches every `[data-reveal]` element rather than one observer per component,
and unobserves each element once revealed. Everything collapses to no-motion
under `prefers-reduced-motion`.

**Scroll-spy.** The navbar highlights a section using an observer with an
asymmetric `rootMargin` that collapses the viewport to a thin band at ~45%
height, so exactly one section is ever active.

**Routing.** The site is one scrolling page. The old `/projects`, `/skills`,
`/experience`, and `/contact` routes redirect to the matching anchor so
previously shared links still resolve.

## Deploying

The SPA fallback is configured for both hosts — `vercel.json` for Vercel and
`public/_redirects` for Netlify. Without one of these, deep links 404.

After deploying, replace `https://example.com` in `index.html` with the real
URL (4 occurrences). Open Graph requires absolute URLs, so link previews stay
blank until this is set.
