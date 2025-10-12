# Modern Marketing Landing Page

A beautiful, minimalist marketing landing page built with Astro 4 and Tailwind CSS. Perfect for SaaS products, startups, or any business looking for a professional web presence.

## Features

- **Astro 4** - Lightning-fast static site generator
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Fully Responsive** - Mobile-first design that looks great on all devices
- **Smooth Animations** - Elegant scroll animations and hover effects
- **SEO Optimized** - Meta tags and semantic HTML
- **Easy to Customize** - Well-structured components and clear code

## Project Structure

```
landing-page/
├── src/
│   ├── components/
│   │   ├── Header.astro       # Sticky navigation with blur effect
│   │   ├── Hero.astro         # Hero section with CTA
│   │   ├── Features.astro     # Feature cards with icons
│   │   ├── Pricing.astro      # Pricing tiers
│   │   ├── Testimonials.astro # Customer reviews
│   │   ├── CTA.astro          # Call-to-action section
│   │   └── Footer.astro       # Footer with links and contact info
│   ├── layouts/
│   │   └── Layout.astro       # Base layout component
│   ├── pages/
│   │   └── index.astro        # Main landing page
│   └── styles/
│       └── global.css         # Global styles and Tailwind imports
├── public/
│   └── favicon.svg
├── astro.config.mjs
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd landing-page

# Install dependencies (already done during setup)
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
# Generate static site
npm run build

# Preview production build
npm run preview
```

## Customization Guide

### 1. Change Brand Name and Colors

**Brand Name:**
- Edit `src/components/Header.astro` - Update "YourBrand" text
- Edit `src/components/Footer.astro` - Update "YourBrand" text
- Edit `src/pages/index.astro` - Update page title

**Colors:**
The design uses a clean color scheme:
- Primary Blue: `#3197ff` (used throughout)
- Light Gray: `#f5f5f7` (backgrounds)
- White: `#ffffff`
- Dark Gray: `#111827` (text)

To change colors globally, search and replace these hex values in all component files, or modify the Tailwind classes:
- `bg-blue-500` → Change to your brand color
- `text-blue-500` → Change to your brand color
- `hover:bg-blue-600` → Change to darker shade

### 2. Update Content

**Hero Section** (`src/components/Hero.astro`):
- Headline: Line 9-12
- Subtext: Line 13-16
- Stats: Line 31-47

**Features** (`src/components/Features.astro`):
- Each feature card has icon, title, and description
- Add/remove features by duplicating card divs

**Pricing** (`src/components/Pricing.astro`):
- Three pricing tiers (Starter, Professional, Enterprise)
- Update prices, features, and plan names

**Testimonials** (`src/components/Testimonials.astro`):
- Six customer testimonials included
- Update names, companies, and review text

### 3. Add Images

Replace placeholder images with real ones:

```astro
<!-- In Hero.astro, replace the placeholder div -->
<img
  src="/your-image.jpg"
  alt="Product screenshot"
  class="rounded-2xl shadow-2xl"
/>
```

Add images to the `public/` folder and reference them with `/image-name.jpg`

### 4. Update Navigation Links

Edit `src/components/Header.astro`:
- Modify navigation items (lines 15-29)
- Add/remove menu items
- Update anchor links

### 5. Contact Information

Edit `src/components/Footer.astro`:
- Email: Line 92
- Phone: Line 99
- Social media links: Lines 60-73

### 6. SEO and Meta Tags

Edit `src/layouts/Layout.astro`:
- Page title and description
- Open Graph tags
- Add Google Analytics or other scripts

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy to GitHub Pages

```bash
# Build the site
npm run build

# The dist/ folder contains your static site
```

## Design Inspiration

This landing page is inspired by modern, minimalist design patterns seen on sites like:
- Apple.com
- Stripe.com
- Linear.app

The design prioritizes:
- Clean typography
- Generous white space
- Subtle animations
- Clear call-to-actions
- Mobile-first approach

## Technologies Used

- **Astro 5.14.4** - Static site generator
- **Tailwind CSS 4.1** - Utility-first CSS
- **Inter Font** - Modern, readable typeface

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance

This landing page is optimized for performance:
- Static HTML generation
- Minimal JavaScript
- Optimized CSS
- Fast page loads (typically < 1s)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Tips for Success

1. **Replace all placeholder content** before going live
2. **Add real images** for better visual appeal
3. **Test on mobile devices** to ensure responsiveness
4. **Set up analytics** to track visitor behavior
5. **A/B test** different headlines and CTAs
6. **Optimize images** before deployment
7. **Add your own favicon** in the public folder

## Want to Learn More?

- Astro Documentation: https://docs.astro.build
- Tailwind CSS Documentation: https://tailwindcss.com
- Astro Discord: https://astro.build/chat

---

Built with Astro and Tailwind CSS
