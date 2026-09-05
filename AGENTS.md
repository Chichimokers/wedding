# AGENTS.md

## Project

Wedding invitation SPA for RY & Yttusi (26 Sep 2026, Villa Rosa, Cotorro). React 18 + TypeScript + Vite 5 + Tailwind CSS 3. Spanish language.

## Commands

```bash
npm run build      # tsc && vite build — type-check + bundle, no test/lint step
npm run dev        # Vite dev server on localhost:5173
```

No test framework, no linter, no formatter config. `build` is the only verification gate.

## TypeScript

Strict tsconfig: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`. Build fails on unused imports/variables.

## Tailwind Custom Tokens

Colors: `ink`, `inkSoft`, `parchment`, `parchmentDark`, `wax`, `waxDark`, `waxLight`, `gold`, `goldLight`, `night`.
Fonts: `font-display` (Playfair Display), `font-body` (Montserrat), `font-script` (Great Vibes).
Shadows: `shadow-seal`, `shadow-card`.
Animations: `animate-floaty`, `animate-shimmer`, `animate-sway`.

## View Order (App.tsx)

Footer → Hero → Events → Story → Location. Footer is intentionally first — it's the landing/intro screen (RY & YTTUSI names). IntroLetter shows first (before `open` state), then views render.

## Unused Components

These exist in `src/components/` but are **not imported** in App.tsx: `Navbar`, `DressCode`, `Rsvp`, `Countdown`, `Ornament`. Do not delete without asking — they may be intentionally kept for future use.

## Data

All wedding data lives in `src/data/wedding.ts`. Some components reference fields that may not exist on the exported object — check before adding new data references.

## Gotchas

- Google Fonts loaded via `<link>` in `index.html`, not `@import` in CSS.
- Lenis smooth scroll intercepts anchor clicks — custom handler in App.tsx `useEffect`.
- `postcss.config.js` exists at root (required for Tailwind processing).
- `dist/` is gitignored but may contain stale build artifacts.
