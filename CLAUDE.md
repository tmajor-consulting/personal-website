# Personal Website — Project Standards

Extends global standards at `~/.claude/STANDARDS.md`.

---

## NON-NEGOTIABLES (project-specific)

In addition to global non-negotiables:

- `pages/` must not contain business logic. Routing and component composition only.
- `components/` are presentational only. No business logic, no direct data mutations.
- `data/data.tsx` is the single source of truth for all site content. Never hardcode content strings in components.
- `data/dataDef.ts` is the source of truth for content types. Define or update types here first, then add content to `data.tsx`.
- No `console.log` in committed code.

---

## Stack Overview

- **Framework:** Next.js 15 (Pages Router) + React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 — CSS-native config via `src/globalStyles.css`. There is no `tailwind.config.js`.
- **Typography:** DM Sans (body/headings), Newsreader (hero name), DM Mono (dates/labels/tags)
- **Deployment:** GitHub Pages — static export (`output: 'export'`). No API routes, no SSR, no ISR.
- **Package manager:** Yarn 4. Use `npm run <script>` for RTK token-saving compatibility.
- **Architecture:** Single long-scroll page. Section order: About → Highlights → Resume (experience + skills) → Consulting → Contact.

---

## Folder Roles

| Folder | Role | Hard rule |
|--------|------|-----------|
| `pages/` | Routing + composition | No business logic |
| `components/Sections/` | One component per page section | No API calls, no business logic |
| `components/Layout/` | Page shell and structural wrappers | No content, no business logic |
| `components/Icon/` | SVG icon components | Pure presentation |
| `hooks/` | Custom React hooks | No direct DOM access except via refs |
| `data/data.tsx` | All site content | Single source of truth — no content elsewhere |
| `data/dataDef.ts` | Content type definitions | Pure types, no runtime logic |
| `config.ts` | Browser/environment utilities | No business logic |

**Dependency direction:**

```
pages/       → components/, data/, hooks/
components/  → hooks/, data/
hooks/       → config.ts
data/        → (nothing internal)
```

---

## Adding a New Section

1. Define the content type in `src/data/dataDef.ts`
2. Add the content export to `src/data/data.tsx`
3. Add the section ID to `SectionId` in `src/data/data.tsx`
4. Create `src/components/Sections/<Name>.tsx` — import content from `data/data`
5. Import and render in `src/pages/index.tsx` in the correct scroll order
6. Add the nav link in `src/components/Sections/Header.tsx`

---

## Static Export Constraints

- No `getServerSideProps` — use `getStaticProps` or client-side only
- No Next.js API routes — `pages/api/` stays empty
- `next/image` must use `unoptimized: true` (already set in `next.config.js`)
- No SSR or ISR — fully static

---

## Tailwind CSS 4

This project uses Tailwind 4's CSS-native configuration. All theme customisation goes in `src/globalStyles.css` under the `@theme` block:

```css
@theme {
  --font-sans: 'DM Sans', sans-serif;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-mono: 'DM Mono', monospace;
  /* animations, custom variants, etc. also go here */
}
```

Do not create a `tailwind.config.js` — it is not used in Tailwind 4.

---

## Testing

**Tool:** Jest + `@testing-library/react` (`next/jest` preset)

- Test files: co-located `*.test.{ts,tsx}` next to the file under test
- Mock at system boundaries only — do not mock internal components or hooks
- Use `@testing-library/user-event` for interaction tests, not `fireEvent`
- Test behaviour, not implementation — assert what the user sees, not internal state

**Commands:**
```bash
npm run test            # run all tests
npm run test:coverage   # run with coverage report
npm run type-check      # tsc --noEmit
```

---

## Dev Commands

```bash
npm run dev             # compile TypeScript + start dev server
npm run build           # production build (tsc + next build)
npm run lint            # prettier --write + eslint --fix
npm run type-check      # tsc --noEmit
npm run test            # run Jest test suite
npm run test:coverage   # Jest with coverage report
npm run deploy          # build + gh-pages push to GitHub Pages
```
