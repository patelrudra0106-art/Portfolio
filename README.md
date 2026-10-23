# Patel Rudra · Personal Portfolio

Personal portfolio for **Patel Rudra**, a full-stack web developer and student from Surat, Gujarat, India.

**Live site:** https://portfolio-rudra-58.vercel.app

## Overview

The site is a single-page React app with a homepage and a case study page for each project. It includes an animated hero, scroll-driven project cards, a hiring section with FAQ, and a contact form that sends messages directly from the site.

## Pages

| Route | Description |
|---|---|
| `/` | Homepage: hero, marquee, about, skills, projects, hire, testimonials (hidden until populated), contact |
| `/projects/brew-and-bean` | Case study: Brew & Bean cafe landing page |
| `/projects/travel-website-landing-page` | Case study: travel agency landing page |
| `/projects/space-survivor` | Case study: SPACE-SURVIVOR, a roguelike space shooter |
| `/projects/nova-ai-assistant` | Case study: Nova, a voice-controlled Windows assistant |

Unknown addresses show a custom 404 page.

## Features

- **Hero** with a portrait that follows the cursor
- **Scroll-stacking project cards** that pin and scale as you scroll on tall screens, with live, source-code and case study buttons
- **Scroll-linked text reveal** in the About section
- **Scrolling image marquee** that respects `prefers-reduced-motion`
- **Skills** section
- **Hire section** with services, a four-step process, FAQ and contact buttons
- **Testimonials** section that stays hidden until you add entries
- **Contact section** with copy-to-clipboard buttons, social links and a message form
- **Mobile navigation** menu and a text logo that returns to the top
- **Accessibility**: visible keyboard focus rings, labelled buttons and links, and live status messages on the form
- **SEO**: page titles and descriptions, Open Graph and Twitter tags, JSON-LD structured data, `sitemap.xml`, `robots.txt`, `llms.txt`, and a canonical URL on each page

## Tech stack

- React 18 with TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion 12
- React Router 6
- Lucide React icons
- Web3Forms for the contact form
- Kanit font, self-hosted in `public/fonts/`

## Getting started

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

### Other commands

```bash
npm run build     # type-check and build for production (output in dist/)
npm run preview   # serve the production build locally
```

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `VITE_WEB3FORMS_ACCESS_KEY` | No | Overrides the Web3Forms access key used by the contact form |

The site includes a default Web3Forms key in `src/data/contact.ts`. Web3Forms keys are public by design, so restrict the key to your domain in the Web3Forms dashboard.

## Editing content

| What | Where |
|---|---|
| Projects (titles, descriptions, tech tags, links, screenshots) | `src/data/projects.ts` |
| Case study text and features | `src/data/caseStudies.ts` |
| Testimonials (leave empty to hide the section) | `src/data/testimonials.ts` |
| Email, phone, WhatsApp and social links | `src/data/contact.ts` |
| Homepage text (hero, about, skills, hire) | `src/components/` |
| Page titles and meta tags | `index.html` |
| Search engine files | `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt` |

### Project screenshots

Screenshots are WebP files in `public/projects/`, named `<project-number>-<image-number>.webp`. For example, `01-3.webp` is the large image for the first project. Each image needs matching `alt` text, width and height in `src/data/projects.ts`.

### Adding a case study

1. Add the project to `src/data/projects.ts` with a `slug`.
2. Add matching content under the same slug in `src/data/caseStudies.ts`.
3. Add the new URL to `public/sitemap.xml`.

## Project structure

```
public/
  fonts/              Self-hosted Kanit font files
  projects/           Project screenshots (WebP)
  404.html            Custom 404 page
  llms.txt            Plain-text summary for AI tools
  robots.txt, sitemap.xml
src/
  components/         Page sections and shared UI
  data/               Projects, case studies, contact details, testimonials
  hooks/              useDocumentMeta (per-page title and description)
  pages/              Case study page
  App.tsx             Routes
  main.tsx            App entry point (wraps the app in BrowserRouter)
  index.css           Global styles and font faces
vercel.json           Routes /projects/* to the app
```

## Deployment

The site is deployed on Vercel as a static Vite build.

- `vercel.json` rewrites `/projects/:slug` to `index.html`, so case study pages load on direct visits.
- Other unknown addresses are served by `public/404.html`.
- After changing the sitemap or adding a page, redeploy and request indexing in Google Search Console.

## Known limitations

- The hero portrait and marquee images are loaded from external hosts. Hosting them locally would improve load speed.
- Case study pages are rendered in the browser. Search engines that run JavaScript will read them, but link previews and some other crawlers will see only the homepage's meta tags.

## Contact

- Email: patelrudra0106@gmail.com
- GitHub: https://github.com/patelrudra0106-art
- Instagram: https://www.instagram.com/rudra011028/

## Usage

This is a personal portfolio. Please ask the author before reusing the design or content.
