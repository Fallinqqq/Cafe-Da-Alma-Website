# AGENTS.md — Café Da Alma Website

Mandatory guidelines for any AI agent modifying this project.
Read this file **before** making any changes.

---

## Project Overview

Website for a Brazilian specialty coffee shop (Café Da Alma) with two locations: Lynchburg, VA (USA) and São Paulo, BR. The site is **bilingual (en / pt-BR)** and serves as the brand showcase, menu, shop, and online ordering. Priorities in order: **visual identity → mobile experience → performance**.

---

## Tech Stack

| Layer     | Technology                         | Notes                                      |
| --------- | ---------------------------------- | ------------------------------------------ |
| Framework | React 18                           | Functional JSX, no class components        |
| Routing   | React Router DOM v6                | `BrowserRouter` + `Routes`                 |
| Build     | Vite 6                             | `npm run dev` / `npm run build`            |
| Styles    | Plain global CSS (`src/index.css`) | **Single CSS file for the entire project** |
| i18n      | Manual Context (`LanguageContext`) | Only `en` and `pt`                         |
| State     | Local `useState` + Context         | No Redux, no Zustand                       |
| Typing    | None                               | No TypeScript                              |

**Do not add:** TypeScript, Tailwind, CSS Modules, styled-components, UI libraries, external state managers.

---

## File Structure

```
src/
├── App.jsx                  # Single routing entry point
├── main.jsx                 # Vite entry point
├── index.css                # ALL project CSS — do not create other .css files
├── components/
│   ├── Navbar.jsx           # Global header — sticky, bilingual, mobile menu
│   ├── Footer.jsx           # Global footer — links + newsletter + social
│   └── ShopCategoryPage.jsx # Reusable component for shop category pages
├── context/
│   └── LanguageContext.jsx  # Language provider (en/pt) + useLanguage() hook
├── data/
│   └── siteContent.js       # Source of truth: menu, locations, shop categories
└── pages/                   # One page per file, no sub-routes
```

### Structure rules

- **Do not create new CSS files.** New styles go in `src/index.css`.
- **Do not create subfolders in `pages/`.** Each page is a flat file.
- **Do not create test files** without explicit request.

---

## CSS — Critical Rules

### Single file

All CSS lives in `src/index.css`. Do not create `.module.css` files, and do not use inline `style={{}}` for structural layout (only for dynamic values like colors coming from data).

### Required tokens

Always use the CSS variables from `:root`. Never hardcode color values outside specific component contexts:

```css
--nav-bg: #1e110a --nav-hover: #3d2010 --accent: #c8752a --accent-light: #e09355
    --bg: #fbead0 --card: #ffffff --text: #2d2020 --text-muted: #7a6a60
    --border: #ede6db --radius: 10px --shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
```

### Typography

- **Body:** `"mendl-sans", Arial, sans-serif`
- **Headings (h1, h2, h3, .footer-brand):** `"mendl-serif-dusk", Georgia, serif`
- Never add Google Fonts imports or any external CDN.

### Naming convention

- Flat kebab-case: `.nav-link`, `.home-hero-banner`, `.ordering-cart-item`
- Section prefixes: `.home-*`, `.menu-*`, `.shop-*`, `.ordering-*`, `.footer-*`
- State classes: `.active`, `.open` (lowercase, no prefix)
- No BEM, no Tailwind-style utilities

### Full-bleed pattern (sections that break out of the container)

Used for background sections on the Home page and special pages. The parent container **must** have `overflow-x: clip`:

```css
.my-fullbleed-section {
    width: 100vw;
    margin-left: calc(50% - 50vw);
}
```

**Important:** `header` and `.site-footer` are direct children of `body` — they **do not use** this pattern. They use `width: 100%` only. Adding `width: 100vw` to them causes horizontal overflow on mobile.

### Horizontal overflow

`html` and `body` have `overflow-x: clip`. This masks problems but does not fix them. When adding new sections, verify they don't cause real overflow at 320px. The `100vw + calc(50% - 50vw)` pattern inside `<main>` elements is safe because `html/body` has `clip`.

### Responsive breakpoints (use only these)

| Breakpoint         | Use                             |
| ------------------ | ------------------------------- |
| `max-width: 980px` | Tablet: Shop adjustments        |
| `max-width: 860px` | Hamburger menu, column layouts  |
| `max-width: 820px` | Shop sections collapse          |
| `max-width: 600px` | Mobile: grids collapse, marquee |
| `max-width: 540px` | Small screens: forms            |

Do not create new breakpoints without clear need. Do not use `min-width` (site uses max-width first).

---

## React — Component Rules

### i18n required

**All user-visible text** must come from translations, never hardcoded in JSX:

```jsx
// ✅ Correct
const { t } = useLanguage();
<h1>{t.home.title}</h1>

// ❌ Wrong
<h1>Order Now</h1>
```

If you need new text, add it to **both** locales (`en` and `pt`) in `LanguageContext.jsx`.

### Language hook

```jsx
import { useLanguage } from "../context/LanguageContext";
const { locale, t, setLocale } = useLanguage();
```

- `locale`: `'en'` or `'pt'`
- `t`: translations object for the current locale
- Never import the `translations` object directly — always use the hook

### Data consumption

```jsx
import {
    getMenuSections,
    getShopCategories,
    getLocations,
} from "../data/siteContent";
const sections = getMenuSections(locale);
```

- Always pass `locale` to data functions
- Do not duplicate data inside page files

### Standard page structure

```jsx
export default function MyPage() {
    const { t } = useLanguage();
    return <main className="my-page">{/* content */}</main>;
}
```

- Always export `default`
- Always wrap in `<main>` with a descriptive class
- No `useEffect` for data fetching — data is synchronous (imported)

### Routing

All routes live in `App.jsx`. To add a new page:

1. Create `src/pages/NewPage.jsx`
2. Import it in `App.jsx`
3. Add `<Route path="/route" element={<NewPage />} />`
4. Add nav link in `Navbar.jsx` if needed

---

## Data — Source of Truth

### `siteContent.js`

The only place where content data is defined. Structure:

```js
// Menu
getMenuSections(locale) → [{ title, items: [{ name, price, description? }] }]

// Locations
getLocations(locale) → [{ name, addressLines[], mapSrc }]

// Shop
getShopCategories(locale) → [{ slug, title, navLabel, route, description, products: [{ name, price, image? }] }]
getShopCategory(slug, locale) → single category
```

To add a product, category, or menu item: **only in `siteContent.js`**, in both locales.

---

## Global Components — Do Not Touch Without Need

### `Navbar.jsx`

- Announcement bar (`.nav-announce`): static English text, not critical for i18n
- Mobile menu: class `.nav-mobile`, toggled via `open` state
- Language switcher: globe button + dropdown, uses `ref` to close on outside click
- Active link: `NavLink` with `linkClass()` — `/menu` intentionally does not receive `.active`

### `Footer.jsx`

- Newsletter form: `event.preventDefault()` — not connected to backend, do not "fix"
- Social links: inline SVGs, do not replace with icon libraries
- `width: 100%` — do not add `width: 100vw`

### `LanguageContext.jsx`

- Persists locale in `localStorage` under key `'cafe-da-alma-locale'`
- Sets `document.documentElement.lang` automatically
- Do not add more than 2 locales without discussion

---

## Anti-patterns — Never Do

| ❌ Forbidden                                                          | Reason                                                          |
| --------------------------------------------------------------------- | --------------------------------------------------------------- |
| Add UI libraries (MUI, Chakra, etc.)                                  | Breaks visual identity                                          |
| Create separate `.css` files                                          | Violates project convention                                     |
| Hardcode English text in JSX                                          | Breaks bilingualism                                             |
| Add `width: 100vw` to `header` or `.site-footer`                      | Causes horizontal overflow on mobile                            |
| Add `overflow: hidden` to containers with `position: sticky` children | Breaks sticky                                                   |
| Use `overflow-x: hidden` on `body` or `html` (use `clip`)             | `hidden` creates stacking context and breaks `position: sticky` |
| Remove `overflow-x: clip` from `html` or `body`                       | Causes overflow on all 14 full-bleed elements                   |
| Add JavaScript via `<script>` in `index.html`                         | All logic lives in React                                        |
| Add `console.log` in production code                                  | Clean code                                                      |

---

## Known Issues — Do Not Fix Silently

- Announcement bar in Navbar is hardcoded in English — not i18n
- `public/` contains images not yet referenced in code — they are **intentionally kept** for future use, do not delete them

---

## Pre-commit Checklist

- [ ] New text added to **both** locales (`en` and `pt`) in `LanguageContext.jsx`
- [ ] New data added to `siteContent.js` with both locales
- [ ] No new `.css` files created
- [ ] No `width: 100vw` added to `header` or `.site-footer`
- [ ] Responsiveness tested at existing breakpoints (980, 860, 820, 600, 540px)
- [ ] No external dependencies added without discussion
