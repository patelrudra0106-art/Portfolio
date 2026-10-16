![Portfolio Banner](https://img.shields.io/badge/Status-GitHub%20Ready-success?style=for-the-badge&logo=github)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

# Rudra · Personal Portfolio

A personal portfolio for **Rudra**, a student and full-stack developer from Surat, Gujarat. It features an animated hero, scroll-driven project cards, a skills showcase, and a contact section with a message form that sends directly from the site.

**Live site:** https://portfolio-rudra-58.vercel.app

## ✨ Features

- **Animated hero** with a magnetic portrait that follows the cursor
- **Scroll-stacking project cards** that pin and scale as you scroll (on tall screens)
- **Scroll-linked text reveal** in the About section
- **Dual-row image marquee** that drifts with scroll
- **Skills section** grouped into languages, frameworks, backend and databases, and tools
- **Contact section** with copy-to-clipboard buttons, social links, and a working message form
- **Responsive layout** for phones, tablets, and desktops
- **Accessible**: visible keyboard focus rings, live form status messages, and reduced-motion support for the marquee and smooth scrolling

## 🛠 Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 18, TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS 3, custom CSS for hero typography |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Contact form | Web3Forms API |
| Hosting | Vercel |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- npm (installed with Node.js)

### Installation

```bash
git clone https://github.com/patelrudra0106-art/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Type-checks with `tsc`, then builds for production into `dist/` |
| `npm run preview` | Serves the production build locally |

## 📬 Contact Form Setup

The form sends messages through [Web3Forms](https://web3forms.com/), so no backend is needed.

1. Create a free access key on Web3Forms and set the email address it should deliver to.
2. Create a `.env` file in the project root:

   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```

3. Add the same variable in Vercel under **Project Settings → Environment Variables**, then **redeploy**. Vite bakes `VITE_` variables into the build, so a change only takes effect after a new build.
4. In the Web3Forms dashboard, restrict the key to your site's domain.

Never commit your `.env` file to git.

## 🧩 Customizing

| What to change | Where |
| --- | --- |
| Contact details and form key | `src/data/contact.ts` |
| Project cards | `src/data/projects.ts` |
| Skills list | `src/components/SkillsSection.tsx` |
| About text | `src/components/AboutSection.tsx` |
| Hero heading, tagline, and portrait | `src/components/HeroSection.tsx` |
| Page title and meta tags | `index.html` |
| Section order | `src/App.tsx` |

## 📁 Project Structure

```
Portfolio/
├── index.html
├── src/
│   ├── App.tsx            # Page layout and section order
│   ├── main.tsx           # Entry point
│   ├── index.css          # Global styles and hero typography
│   ├── components/        # One file per page section, plus shared UI
│   └── data/
│       ├── contact.ts     # Contact details and form key
│       └── projects.ts    # Project card content
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## ☁️ Deployment

The site is deployed on Vercel:

1. Import the GitHub repository in Vercel.
2. Use the **Vite** framework preset (build command `npm run build`, output directory `dist`).
3. Add the `VITE_WEB3FORMS_ACCESS_KEY` environment variable.
4. Deploy, and redeploy whenever you change the environment variables.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 📫 Contact

- Email: patelrudra0106@gmail.com
- GitHub: [@patelrudra0106-art](https://github.com/patelrudra0106-art)
