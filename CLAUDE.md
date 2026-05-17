# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**katyknowles.com** is a static React site with **no build step**. React 18.3.1 + Babel Standalone transpile JSX in the browser via unpkg CDN. All files are static—suitable for GitHub Pages and Cloudflare Pages.

### Key Constraint
This is **not** a typical React app (no npm, no webpack, no build command). React and Babel load from CDN. JSX transpiles client-side. This design is intentional: zero infrastructure, fast hosting on static platforms.

## Architecture

### Script Loading Order (index.html)

JSX files load in this **exact order** via `<script type="text/babel">` tags. Order matters—later files depend on earlier globals:

1. **tweaks-panel.jsx** — Defines `useTweaks` hook and all tweak UI components. Exports via `Object.assign(window, {...})`.
2. **data.jsx** — Defines `PRODUCTIONS`, `JOURNEY`, `TESTIMONIALS`, `INSPIRATIONS`, `VALUES_*`. Shared content, no React dependencies.
3. **editorial-components.jsx** — Defines 15+ React components (Nav, Hero, Portfolio, Lightbox, etc.). Uses tweaks and data from earlier scripts.
4. **editorial-app.jsx** — Root `App` component. Calls `ReactDOM.createRoot()` to mount. **Must load last.**

**Important:** Do not rearrange these files or split them into modules. The global-sharing pattern is by design.

### Global State Pattern

Instead of ES modules, the app uses `Object.assign(window, {...})` to share code:
- tweaks-panel exports: `useTweaks`, `TweaksPanel`, `TweakColor`, `TweakSlider`, etc.
- data exports: `PRODUCTIONS`, `JOURNEY`, `TESTIMONIALS`, etc.
- editorial-components exports: `Nav`, `Hero`, `Portfolio`, `Lightbox`, etc.
- editorial-app uses all of the above via `window.*`

**When adding features:** Export new functions/components via `Object.assign(window, {NewComponent})` at the file's end. Do not use `export` keyword (ES modules don't work in this setup).

### Design System

#### CSS Custom Properties (defined in `<style>` in index.html)

**Color palettes** (swappable via `data-palette` attribute on root div):
- `cream` (default) — warm editorial aesthetic
- `midnight` — dark theatrical
- `paper` — cool monochrome
- `oxblood` — earthy warm

Each palette overrides:
- `--paper`, `--paper-2`, `--paper-3` (backgrounds)
- `--ink`, `--ink-2` (text colors)
- `--mute`, `--rule` (secondary/borders)
- `--accent`, `--accent-soft`

**Typography variants** (swappable via `data-type` attribute):
- `classic` — serif display + sans body
- `sansforward` — all sans
- `literary` — all serif

**Responsive tokens:**
- `--gutter: clamp(20px, 4vw, 56px)` — horizontal padding
- `--section-y: clamp(80px, 10vw, 160px)` — vertical section spacing

**Accent color:** Dynamically derived in `editorial-app.jsx`:
- `--accent` set from tweaks
- `--accent-soft` computed as `rgba(r, g, b, 0.12)` from hex

#### Layout Patterns

**12-column grid for portfolio:**
- Asymmetric card spans: 4, 6, 8 columns
- Aspect ratios: `tall`, `wide`, `half`, `default`
- Defined via CSS Grid in editorial-components

**2-column grids:**
- Used in About, Testimonials, Resume, Educator
- Collapse to 1 column at 800-900px

**Responsive breakpoints:**
- 840px: Nav links hide, hamburger menu shown
- 900px: Grid columns collapse
- 800px: Testimonials/Resume grids collapse
- 700px: Journey timeline goes single-column
- 600px: Contact form stacks

### Interaction Patterns

#### IntersectionObserver (Scrollspy + Reveal)

**Scrollspy (editorial-app.jsx):**
- Tracks 7 sections: `about`, `educator`, `journey`, `portfolio`, `resume`, `testimonials`, `contact`
- Updates `active` state when section is >20% visible
- Nav highlights active section

**Scroll reveal (editorial-components.jsx):**
- `Reveal` component wraps content
- Triggers fade-in animation when element enters viewport
- Optional `delay` prop for staggered animations
- Threshold: `{ threshold: 0.3 }`

#### localStorage Persistence

**useTweaks hook (tweaks-panel.jsx):**
- Reads initial state from `init` param (TWEAK_DEFAULTS)
- On mount, loads overrides from localStorage keys `_twk_{key}`
- On change, persists to localStorage
- Try/catch silently ignores storage errors (quota, private browsing, etc.)

#### Keyboard Navigation

**Lightbox (editorial-components.jsx):**
- Arrow Left/Right: navigate images
- Escape: close

**Tweaks Panel (tweaks-panel.jsx):**
- Ctrl+` or Cmd+`: toggle open
- Click close button: close

### Content Structure

#### data.jsx

- **PRODUCTIONS**: Array of 9 productions + 1 video. Fields: `id`, `title`, `subtitle`, `role`, `year`, `venue`, `summary`, `images` (array of JPG paths), `layout`, `isVideo`, `vimeoId`
- **JOURNEY**: Timeline array. Fields: `year`, `title`, `sub` (subtitle), `major` (boolean for styling)
- **VALUES_LEFT**, **VALUES_RIGHT**: Arrays of teaching philosophy strings
- **INSPIRATIONS**: Artist array. Fields: `name`, `craft`
- **TESTIMONIALS**: Quote array. Fields: `body`, `name`, `role`

**Adding new content:** Edit arrays in data.jsx. No rebuild needed—Babel recompiles on page load.

## Common Tasks

### Modify a Palette

1. Open index.html, find `[data-palette="palette-name"]` rule in `<style>`
2. Update CSS custom properties (e.g., `--accent: #newcolor`)
3. Save. Changes live-reload in browser.

### Add a Production

1. Open data.jsx, add object to `PRODUCTIONS` array with fields: `id`, `title`, `subtitle`, `role`, `year`, `venue`, `summary`, `images` (array of 5 JPG paths), `layout` (one of `default`, `tall`, `wide`, `half`)
2. Add 5 JPG images to `assets/portfolio/{id}/1.jpg` through `5.jpg`
3. Save. Production appears in portfolio on reload.

### Add a Testimonial

1. Open data.jsx, add object to `TESTIMONIALS` with fields: `body`, `name`, `role`
2. Save. Testimonial appears on reload.

### Adjust Hero Variant

1. Open editorial-app.jsx, find `const portraitMap = { ... }`
2. Add/edit portrait image paths (current: `profile` → `assets/profile.png`, `alt` → `assets/profile_alt.png`)
3. Or add new `HeroVariant` component to editorial-components.jsx and add option to `TweakRadio` in App

### Change Default Tweaks

1. Open editorial-app.jsx, find `TWEAK_DEFAULTS`
2. Edit: `palette`, `type`, `hero`, `portrait`, `accent` (hex color)
3. Comment `/*EDITMODE-BEGIN*/` and `/*EDITMODE-END*/` are preserved—they mark user-editable defaults

### Adjust Responsive Breakpoints

1. Open index.html, find CSS media queries (e.g., `@media (max-width: 840px)`)
2. Edit breakpoint and rules
3. Save. Changes live-reload.

## Development Workflow

**No build step. Every change is live:**

1. Start HTTP server: `cd /Volumes/[C]\ Windows\ 11/1a/Personal/katyknowles.com && python3 -m http.server 8000`
2. Open http://localhost:8000 in browser
3. Edit any `.jsx` or `.html` file
4. Refresh browser—Babel retranspiles JSX instantly
5. If editing index.html CSS, refresh to see changes

**Note:** Some browsers cache JSX transpilation. Hard-refresh (Cmd+Shift+R or Ctrl+Shift+R) if changes don't appear.

## Deployment

**Static site—no build required.** Push files as-is to GitHub or Cloudflare Pages.

### GitHub Pages
1. Create repo, push files to `main` branch
2. Settings → Pages → Deploy from `main` branch, `/` root
3. GitHub auto-serves `index.html` at repo root or custom domain (via CNAME)

### Cloudflare Pages
1. Connect GitHub repo to Cloudflare Pages
2. Build command: (leave blank)
3. Build output: (leave blank)
4. Deploy—Cloudflare serves static files as-is

**Custom domain:** CNAME file already contains `www.katylynnknowles.com`. Both platforms auto-detect it.

## Files & Directories

```
index.html                  # HTML shell + all CSS design system
tweaks-panel.jsx           # useTweaks hook, tweak UI components
data.jsx                   # PRODUCTIONS, JOURNEY, TESTIMONIALS, etc.
editorial-components.jsx   # Nav, Hero (3 variants), Portfolio, Lightbox, etc.
editorial-app.jsx          # Root App, scrollspy, accent override
CNAME                      # Custom domain: www.katylynnknowles.com
assets/
  favicon.*                # Favicons (ico, 16x16, 32x32, apple)
  profile.png, profile_alt.png, signature.png
  k_knowles_*.pdf         # Artistic resume and CV
  portfolio/{production_id}/1-5.jpg  # 5 images per production
```

## Debugging Tips

**JSX not updating?** 
- Hard-refresh browser (Cmd+Shift+R)
- Check browser console for Babel transpilation errors
- Verify file syntax (Babel error messages are clear)

**Images not loading?**
- Check browser console for 404s
- Verify path in data.jsx matches file in assets/ directory
- Relative paths are from index.html root

**localStorage not persisting?**
- Check browser DevTools → Application → Local Storage
- Key format: `_twk_{tweakKey}` (e.g., `_twk_palette`)
- Some browsers disable in private/incognito mode

**Accent color wrong?**
- Verify hex in tweaks or TWEAK_DEFAULTS (must be valid 6-digit hex)
- Check browser console for parse errors in accent override code (editorial-app.jsx lines 53-65)

## CDN Dependencies

**React 18.3.1**, **ReactDOM**, **Babel Standalone** loaded from unpkg with SRI integrity hashes in index.html. These must remain unchanged for security. If updating React version:
- Update `src="https://unpkg.com/react@X.Y.Z/..."`
- Update `integrity="sha384-..."`  hashes (get from unpkg.com)
- Test thoroughly—React API changes may require code updates
