# SHEREEF — THE SERIES

A cinematic, streaming-inspired portfolio for **Muhammed Shereef K**: AI/ML Developer, Full-Stack Engineer, and Robotics & IoT Specialist.
Every section is an episode, every project is an Original, and the entire site plays like a series.

> A personal portfolio with a fictional streaming-platform aesthetic. Built with React 18, TypeScript, Tailwind CSS 4, Framer Motion, and Lenis smooth scrolling.

---

## 🎬 Features

- **Cinematic Opening Sequence**: Letterbox intro, studio card ("A SHEREEF ORIGINAL"), title reveal ("SHEREEF — THE SERIES"), and interactive start.
- **"Who's Watching?" Profile Selector**: Switch perspectives between *Shereef* (Main Series), *Recruiter* (Credentials & Skills first), *Developer* (Projects & Stack first), and *Robotics & AI* (IoT Showcase first).
- **Billboard Hero**: Parallax portrait with 3D mouse tracking tilt, glowing radial atmosphere, particle effects, floating highlight chips, and quick action buttons.
- **▶ Play Intro Highlight Reel**: Full-screen auto-advancing reel showcasing key highlights, degree, internship, prototypes, and achievements.
- **Continue Exploring Row**: Real-time viewing progress tracking with Netflix-style episode cards.
- **Originals (Projects)**: Pinned horizontal parallax sequence on desktop, native swipe rail on mobile/touch devices. Interactive `ProjectModal` with impact metrics, architectural details, and live application links.
- **Special Feature: IoT & Robotics Showcase**: Dedicated multimedia player with 6 video test flight demonstrations and 4 hardware prototype gallery photos for the **Human Following Robot**.
- **Top Picks**: Top 10 highlights with giant outline typography and custom poster artwork.
- **Skill Universe**: Interactive genre categories with mono badges and cross-referenced evidence tags showing where each skill was utilized.
- **Top Moments & Certifications**: Featured award banner for the **University NSS Best Volunteer Award 2025–26** with ceremony photos and inspirational quote, plus a filterable gallery of 30+ verified PDF certificates.
- **The Screenplay (Resume)**: Interactive resume sheet preview with full-screen viewer and one-click PDF download (`Muhammed-Shereef-K-Resume.pdf`).
- **Responsive & Accessible**: Seamlessly adapted for mobile phones, tablets, laptops, and ultra-wide desktops. Supports `prefers-reduced-motion` and keyboard navigation (Esc, Space, Arrow keys, Enter).

---

## 🛠️ Tech Stack

- **Framework**: React 18 & TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS 4 (`@tailwindcss/vite`)
- **Animations**: Framer Motion 11
- **Smooth Scrolling**: Lenis (`lenis/react`)
- **Image Pipeline**: Sharp (`sharp`)
- **Hosting**: GitHub Pages (via GitHub Actions)

---

## 🚀 Run Locally

Requires **Node.js 18+** (Node 20+ recommended).

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open the URL displayed in the terminal (typically `http://localhost:5173`).

---

## 📦 Production Build

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

The optimized static assets are generated in `dist/`.

---

## 🌐 GitHub Pages Deployment

This repository includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

### How It Works:
1. When code is pushed to the `main` branch, GitHub Actions automatically:
   - Sets up Node.js 20
   - Runs `npm ci`
   - Executes `npm run build`
   - Publishes the `dist/` directory directly to GitHub Pages.

### Verification in GitHub Repository Settings:
1. Go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Any push to `main` will build and publish your portfolio at `https://shereef888k.github.io/`.

---

## 📝 Updating Portfolio Content

All content is centralized in a single source of truth:
👉 [`src/data/portfolio.ts`](src/data/portfolio.ts)

| To Update | File / Section |
|---|---|
| Name, bio, email, social links, resume | `profile` in `src/data/portfolio.ts` |
| Projects & live demo links | `projects` in `src/data/portfolio.ts` |
| IoT Showcase videos & photos | `robotMedia` in `src/data/portfolio.ts` |
| Achievements & NSS ceremony moments | `achievements` in `src/data/portfolio.ts` |
| Certifications & PDF links | `certifications` in `src/data/portfolio.ts` |
| Skills & evidence references | `skillCategories` & `skillEvidence` in `src/data/portfolio.ts` |
| Seasons & journey episodes | `seasons` in `src/data/portfolio.ts` |
| Top 10 row | `topPicks` in `src/data/portfolio.ts` |
| ▶ Play Intro slides | `introSlides` in `src/data/portfolio.ts` |

---

## 📄 License & Attribution

Designed and developed for **Muhammed Shereef K**.
Inspired by modern streaming cinematic interfaces. All project data, certifications, and media are authentic works of Muhammed Shereef K.

