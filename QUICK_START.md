# Quick Start Guide

## 1. Start Development Server

```bash
cd /Users/eduardkarionov/mcp-tools/landing-page
npm run dev
```

Open: http://localhost:4321

## 2. Essential Customizations (15 minutes)

### Replace Brand Name
Find and replace "YourBrand" in:
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/index.astro`

### Update Hero Section
File: `src/components/Hero.astro`

```astro
<!-- Line 9-12: Main headline -->
<h1>
  Your Main Value Proposition
  <span class="text-blue-500">Your Benefit</span>
</h1>

<!-- Line 13-16: Subtext -->
<p>Your compelling description here.</p>
```

### Change Brand Color
Find: `bg-blue-500` and `text-blue-500`
Replace with your color (e.g., `bg-purple-500`)

### Update Contact Info
File: `src/components/Footer.astro`
- Line 92: Email
- Line 99: Phone

## 3. Add Your Images

Put images in `/public/` folder:
```
public/
├── logo.svg
├── hero-image.jpg
└── favicon.svg
```

Use in components:
```astro
<img src="/hero-image.jpg" alt="Description" />
```

## 4. Build & Deploy

```bash
# Test build
npm run build

# Preview production
npm run preview

# Deploy to Vercel
vercel

# Or deploy to Netlify
# Connect repo and set:
# - Build: npm run build
# - Publish: dist
```

## File Reference

| File | Purpose | Lines |
|------|---------|-------|
| `src/components/Header.astro` | Navigation | 102 |
| `src/components/Hero.astro` | Hero section | 101 |
| `src/components/Features.astro` | Feature cards | 145 |
| `src/components/Pricing.astro` | Pricing tiers | 183 |
| `src/components/Testimonials.astro` | Reviews | 230 |
| `src/components/CTA.astro` | Call-to-action | 54 |
| `src/components/Footer.astro` | Footer | 166 |

## Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Color Scheme

- Primary: `#3197ff` (blue)
- Background: `#f5f5f7` (light gray)
- Text: `#111827` (dark)

## Need More Help?

- **Detailed Guide:** See `CUSTOMIZATION.md`
- **Full Docs:** See `README.md`
- **Project Info:** See `PROJECT_SUMMARY.md`

---

**Pro Tip:** Make one change at a time and check in the browser!
