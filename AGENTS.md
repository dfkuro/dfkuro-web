# Agent Notes — dfkuro-next

## Context

This is a **Next.js migration** of the portfolio at `../dfkuro` (Astro 7, static output). The source repo is the authority for content, branding rules, and easter-egg behavior. Copy data and copy text from there; do not invent new facts about the person or their work.

- **Name:** `Izmir Sánchez`
- **Alias:** `(dfkuro)` — treated as a developer alias, never a nickname
- **Domain:** `izmir.dev`
- **Package manager:** Bun (`bun.lock` in source)
- **Output:** static export (was Astro `output: 'static'`)

## Branding Rules for `(dfkuro)`

These are hard constraints carried over from the Astro build. Getting them wrong is a visible regression.

- Never render the alias larger than the real name.
- Use the accent color (`var(--color-magic)`, fuchsia) whenever appropriate.
- Keep it lightweight and subtle; it must not compete with the real name.
- Only place it where it improves the experience. Do not force it everywhere.

**Known placements (verify against source):**
- Navbar logo: `izmir` + dot + `<span class="nav-logo-alias">(dfkuro)</span>` — `0.75rem`, fuchsia, `aria-hidden`
- Hero kicker: `Senior Full-Stack Software Engineer · <span class="hero-kicker-alias">(dfkuro)</span>` — caption size, fuchsia
- Footer: `izmir.dev <span class="footer-alias">(dfkuro)</span>` — rendered via translation key with `set:html` (or equivalent)
- SEO title: `Izmir Sánchez (dfkuro) — Senior Full-Stack Software Engineer`
- Open Graph / Twitter: same title propagated to all meta tags
- Structured data: JSON-LD `Person` with `name: "Izmir Sánchez"` and `alternateName: "dfkuro"`; `sameAs: ["https://github.com/dfkuro"]`
- Terminal title bar: `dfkuro@izmir.dev`
- Terminal prompt: `dfkuro@izmir.dev:~$` (both EN/ES)
- Terminal `whoami`: `Izmir Sánchez (dfkuro)` with alias in fuchsia (`term-art`)
- Terminal `neofetch`: `User:` line with name + alias
- Terminal `sudo hire`: recognizes `dfkuro` instead of `izmir`
- Command palette label: `Run: sudo hire dfkuro`
- Contact closing hint: `sudo hire dfkuro`
- Hidden storage keys: all use `dfkuro-*` prefix (`dfkuro-lang`, `dfkuro-reloads`, `dfkuro-eggs`)

## i18n

- **Locales:** `en` (default), `es`
- **Source of truth:** `../dfkuro/src/i18n/translations.ts` — a flat key/value record, not a framework like `next-intl`.
- **Routing:** The Astro site prefixes the default locale (`/en/`, `/es/`). Preserve this URL structure so existing links do not break.
- **Approach:** The simplest migration is to keep the same flat translation object and pass `lang` through props. If you adopt `next-intl`, make sure the key names and strings remain identical.

## Theme & Styling

- **Tailwind CSS** is used for layout, spacing, typography, and color tokens.
- **Custom CSS** in `app/globals.css` covers base styles, focus rings, selection color, scrollbar styling, and a few utility classes that are easier to express in CSS than utilities.
- **No CSS-in-JS / styled-components.** Tailwind utilities + the occasional inline style handle theming.
- **Fonts:** Inter (sans) + JetBrains Mono (mono), loaded via `next/font/google`.
- **Color tokens:** Defined as CSS custom properties in `globals.css`, mapped in `tailwind.config.ts`. Colors switch automatically when `.dark` is present on `<html>`.
- **Dark mode:** Manual toggle with `light / dark / system` options. State is persisted in `localStorage` under `dfkuro-theme`. A small inline script in `<head>` prevents FOUC on page load.
- **Accent:** fuchsia — `#D9047A` in light mode, `#F04BA0` in dark mode.
- **Animation library:** `motion` (Framer Motion successor) is used for scroll reveals.

## Architecture

- **Framework:** Next.js 15 App Router.
- **Static export:** `output: 'export'` + `trailingSlash: true` in `next.config.ts`. Output goes to `dist/`.
- **i18n routing:** `app/[lang]/` with `generateStaticParams()` for `/en/` and `/es/`.
- **Root layout:** `app/layout.tsx` defines the root `<html>` and `<body>` (required by Next.js App Router). The root page `/` renders the English version directly in `app/page.tsx`.
- **Single page, many sections:** Hero → About → Experience → Stack → Values → Currently → Contact.
- **Layout hierarchy:** `app/[lang]/layout.tsx` (head/meta/fonts/theme/JSON-LD) → `app/[lang]/page.tsx` (nav + sections + footer + easter eggs).
- **Path aliases** (source uses these; map them in `tsconfig.json`):
  - `@/*` → `src/*`
  - `@components/*` → `src/components/*`
  - `@sections/*` → `src/sections/*`
  - `@layouts/*` → `src/layouts/*`
  - `@styles/*` → `src/styles/*`
  - `@data/*` → `src/data/*`
  - `@app-types` → `src/types/index.ts`
  - `@config/*` → `src/config/*`
  - `@composables/*` → `src/composables/*`
  - `@i18n` → `src/i18n/index.ts`

## Easter Eggs (do not drop during migration)

These are intentional features, not decorative extras.

1. **Terminal** (`Terminal.astro` → React component)
   - Refactored to a React client component (`'use client'`) that uses the same engine.
   - Engine lives in `src/composables/terminalEngine.ts`.
   - Commands: `help`, `whoami`, `ls`, `neofetch`, `clear`, `exit`, `sudo hire dfkuro`.
   - `sudo hire dfkuro` dispatches `achievement-unlocked` with detail `sudo-hire` and spawns confetti.
   - Terminal is opened via `CustomEvent('open-terminal')` and `CustomEvent('sudo-hire')`.

2. **Command Palette** (`CommandPalette.astro`)
   - Triggered by `Cmd+K` or `/` (but not when an input/textarea is focused).
   - Actions: scroll-to-section, copy-email, open-terminal, sudo-hire.
   - Uses `document.body.style.overflow = 'hidden'` while open.

3. **Konami Code** (`KonamiCode.astro`)
   - Listens for the classic sequence; triggers an achievement.

4. **Achievement System** (`AchievementSystem.astro`)
   - Listens for `achievement-unlocked` events.
   - Tracks unlocked achievements in `localStorage` under `dfkuro-eggs`.

5. **StarField** (`StarField.astro`)
   - Canvas-based background effect.

6. **Page-level triggers** (`Page.astro` script block)
   - Triple-click footer year spawns a duck and dispatches `duck-found`.
   - Click footer vim hint toggles temporary line numbers on sections and dispatches `line-numbers-toggled`.
   - Tracks reloads in `sessionStorage` under `dfkuro-reloads`; after 3 reloads changes the status badge to “Critical” with fast pulse.

## Data & Content

- **Profile:** `src/data/profile.ts` — contains name, alias, role, bio, shell, editor, etc.
- **Stack:** `src/data/stack.ts` — `TechNode[]` and `techDomains`. The source uses an orbit/category model.
- **Site config:** `src/config/site.ts` — url, email, nav items, SEO defaults.
- **Translations:** `src/i18n/translations.ts` — 800+ line file with every UI string in both languages. Do not truncate or summarize; migrate it verbatim.

## SEO / Meta

- JSON-LD `Person` structured data must remain in the `<head>`.
- `hreflang` links for both locales must be present.
- `og:` and `twitter:` meta tags must match the source.

## Build & Dev

- Source uses `astro dev`, `astro build`, `astro preview`, `astro check`.
- For Next.js, use `bun dev` (Next.js dev server) and `bun run build` (static export to `dist/`).
- `output: 'export'` + `trailingSlash: true` in `next.config.ts`.
- No test runner, linter, or formatter config exists in the source; do not add one unless asked.

## What to preserve from `../dfkuro/AGENTS.md`

The source `AGENTS.md` contains two dated entries:
1. **Personal Branding Refinement** — the alias placement table above is derived from this. Keep it current.
2. **Values Section Refinement** — spacing and layout tweaks. Re-apply the same CSS values in the Next.js version:
   - `.values-editorial` gap: `var(--space-12)`
   - `.section-divider` margin-bottom: `var(--space-8)`
   - `.value-closing` margin-top: `var(--space-12)`
   - Divider span: `font-size: 1rem`, `font-weight: 500`, `color: var(--color-text-secondary)`
   - No zig-zag layout; all articles align left.

## Verification Checklist

Before declaring migration complete:
- [ ] Both `/en/` and `/es/` routes render correctly.
- [ ] `(dfkuro)` alias appears exactly where the source places it, in fuchsia, and never larger than the real name.
- [ ] Terminal opens, accepts commands, and `sudo hire dfkuro` triggers confetti + achievement.
- [ ] Command palette opens with `Cmd+K` and `/`.
- [ ] Konami code triggers an achievement.
- [ ] Triple-clicking footer year spawns a duck.
- [ ] Clicking footer hint toggles line numbers for 5 seconds.
- [ ] After 3 reloads, status badge changes to “Critical” with fast pulse.
- [ ] JSON-LD structured data is present and valid.
- [ ] Dark mode works via `prefers-color-scheme: dark`.
