# Cafe Da Alma Website — Project Guidelines

## Project Overview

A pure static HTML/CSS website for a specialty coffee and pastry shop. No build tools, no JavaScript, no external dependencies.

## Architecture

- **All pages** live in `pages/` — one `.html` file per page
- **Single stylesheet**: `pages/styles.css` — shared across all pages, linked as `href="styles.css"` (relative)
- No templating engine; navigation and structural markup are duplicated on every page by hand
- No server, no build step — open any `.html` file directly in a browser

## Code Style

### HTML
- HTML5 semantic structure (`<nav>`, `<main>`, `<h1>`)
- Each page gets exactly one `<h1>`
- Navigation: `<div class="logo">` + `<ul class="nav-links">` inside `<header>` > `<nav>`
- Mark the current page's nav link with class `active` (only one per page)
- Internal links use relative paths (e.g., `href="menu.html"`, not absolute URLs)
- Keep `<title>` consistent with the page: `Cafe Da Alma - <Page Name>`

### CSS
- The existing `styles.css` is written compacted (minimal whitespace) — match that style when adding rules
- No CSS variables, no preprocessor, no utility framework
- Layout: Flexbox
- No media queries currently — the site is not yet responsive
- Color palette:
  - Nav background: `#292b2c`
  - Page background: `#f4f4f4`
  - Content box: `#fff`
  - Body text: `#333`
  - Nav hover/active: `#444`
- Typography: `Arial, sans-serif`, `line-height: 1.6`
- Main content: `max-width: 900px`, centered with `margin: auto`, `border-radius: 8px`, `box-shadow: 0 2px 8px rgba(0,0,0,.08)`

## Conventions

- **No JavaScript** — keep the site JS-free unless explicitly requested
- **No external CDNs** — no fonts, icons, or framework links
- When adding a new page, duplicate the full `<header>`/`<nav>` block from an existing page and update the `.active` class
- `menu.html` uses `.menu-list` / `.menu-list li` for item listings — reuse for similar list-style content

## Known Issues (do not silently "fix" without discussion)

- `services.html` has a `<title>` of "Order Now" — likely a copy-paste error
- Some pages link to `index.html` where others link to `locations.html` for the Locations nav item — needs audit
- No `<meta name="description">` tags on any page
