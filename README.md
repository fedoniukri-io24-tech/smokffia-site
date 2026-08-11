# SMOKFFIA — Portfolio Website

Next.js 14 + TypeScript + Tailwind CSS portfolio site for Sofia (SMOKFFIA), UI/UX designer.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (ready to use)
- **Lucide React** (icons)

## SEO / AI files

Set your production domain in `.env` (see `.env.example`):

```bash
NEXT_PUBLIC_SITE_URL=https://smokffia.com
```

Generated / static SEO endpoints:

| Path | Purpose |
|------|---------|
| `/robots.txt` | Crawler rules |
| `/sitemap.xml` | Sitemap |
| `/manifest.webmanifest` | PWA manifest |
| `/llms.txt` | AI / LLM site summary |
| `/humans.txt` | Humans.txt credits |
| `/opengraph-image` | Open Graph image |
| `/twitter-image` | Twitter card image |

Schema.org JSON-LD is injected in the root layout (`Person`, `WebSite`, `ProfessionalService`, `FAQPage`).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Your Photos

Place images in `/public/images/`:

| File | Usage |
|------|-------|
| `logo.svg` | Navbar logo |
| `sofia-hero.jpg` | Hero — main portrait |
| `hero-cat.jpg` | Hero headline — after «Я» |
| `hero-design.jpg` | Hero headline — after «ДИЗАЙН,» |
| `letter-o.png` | Hero — decorative «О» in «СТВОРЮЮ» |
| `moon.svg` | Hero — moon icon |
| `cursor.svg` | Cursor sticker |
| `sun-smiley.png` | Hero — sun smiley sticker |
| `sofia-about.png` | About — oval photo in lime frame |
| `about-bg.png` | About — section background |
| `projects-fire.svg` | Projects — fire icon next to title |
| `project-butenko.png` | Project card — Butenko Fit |
| `project-trade.png` | Project card — Trade Ground |
| `project-bakery.png` | Project card — Nieznany Piekarz |

## Project Structure

```
smokffia/
├── app/
│   ├── globals.css       # Design system (colors, animations, utilities)
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Page assembly
├── components/
│   ├── Navbar.tsx        # Fixed top nav with mobile menu
│   ├── Hero.tsx          # Hero section with headline + photo
│   ├── About.tsx         # About Sofia (black bg section)
│   ├── Services.tsx      # Pricing plans with tabs
│   ├── Projects.tsx      # Project cards + marquee
│   ├── Process.tsx       # Timeline + Skills + Reviews
│   └── Contacts.tsx      # Contact form + footer links
└── public/
    └── images/           # ← Put your photos here
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#0A0A0A` | Background, text |
| Lime | `#CDFF00` | Accent, CTAs |
| Pink | `#FF2D9B` | Highlights, popular badge |
| Beige | `#F0EDE6` | Skills section bg |
| White | `#FFFFFF` | Main background |

## Build for Production

```bash
npm run build
npm start
```
