# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 website for a professional violinist. It uses the App Router with React 19.

### Key Directories

- `src/app/` - Pages using App Router (each folder with `page.tsx` is a route)
- `src/components/` - Shared components (Navigation, Footer)
- `public/images/` - Static images
- `public/videos/` - Video samples

### Routes

- `/` - Homepage
- `/about` - About page
- `/contact` - Contact form
- `/lessons` - Private lessons info
- `/samples` - Audio/video samples
- `/services/solo-violin` - Solo violin services
- `/services/ensembles` - Ensemble services

### Styling

- **Tailwind CSS 4** with custom CSS in `globals.css`
- Custom CSS classes: `.btn`, `.btn-outline`, `.card`, `.service-card`, `.nav-link`, `.section-title`, `.image-wrapper`
- CSS variables define the color palette (warm whites, corals, muted grays)
- Fonts: Josefin Sans (headings) and DM Sans (body) via `next/font`

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`)

### Layout

`src/app/layout.tsx` wraps all pages with Navigation and Footer components.
