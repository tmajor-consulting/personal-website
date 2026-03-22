# personal-website

A static portfolio/personal website built with Next.js and TypeScript, deployed to GitHub Pages.

**Live site:** https://tmajor-consulting.github.io

## Tech Stack

- **Framework:** Next.js 14 (static export)
- **Language:** TypeScript 4.5 (strict mode)
- **Styling:** Tailwind CSS 3 + SCSS + PostCSS
- **UI:** React 18 + HeadlessUI + HeroIcons

## Project Structure

```
src/
├── pages/          # Next.js pages (_app, _document, index)
├── components/     # Layout, section components (Header, About, Resume, Contact, Footer)
├── data/           # data.tsx (all site content), dataDef.ts (TypeScript types)
├── hooks/          # Custom React hooks
├── images/         # Image assets
└── config.ts       # Browser/device detection utilities
```

All personal content (resume, skills, contact info, metadata) is managed in `src/data/data.tsx`. To update the site content, edit that file.

## Getting Started

Install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

The site will be available at http://localhost:3000.

## Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start local development server |
| `yarn build` | Production static build |
| `yarn start` | Start production server |
| `yarn lint` | Format and lint source files |
| `yarn compile` | Run TypeScript compiler |
| `yarn clean` | Remove build artifacts |
| `yarn sitemap` | Generate sitemap |
| `yarn deploy` | Deploy to GitHub Pages |

## Deployment

The site is automatically deployed to GitHub Pages via a GitHub Actions workflow on every push to `main`. The workflow:

1. Checks out the repository
2. Sets up Node.js 20 with Next.js build cache
3. Runs `yarn build` to generate the static export
4. Publishes the output to GitHub Pages

Manual deployment is also possible via `yarn deploy`.
