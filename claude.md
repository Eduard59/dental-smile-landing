# Landing Page Documentation

**Project:** Dental Smile Landing Page
**Tech Stack:** Astro 4 + Tailwind CSS
**Last Updated:** 2025-10-11

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Components Documentation](#components-documentation)
4. [Styling System](#styling-system)
5. [Interactive Features](#interactive-features)
6. [Customization Guide](#customization-guide)
7. [File Structure](#file-structure)
8. [Development Guidelines](#development-guidelines)

---

## Project Overview

### Description
A modern, responsive landing page for a dental implant service featuring:
- Hero section with statistics
- Infinite scrolling photo gallery
- Pricing packages with 4 treatment options
- Payment flexibility options (expandable feature cards)
- Before/after carousel
- Patient testimonials
- Instagram feed integration (custom cropping)
- Mobile-optimized UI

### Key Features
- **Responsive Design**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
- **Animations**: Fade-in, slide-in, hover effects
- **Interactive Components**: Expandable cards, carousels, sticky navigation
- **Instagram Integration**: Custom-cropped Instagram Reels with parallax row positioning
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### Technology Stack
- **Framework**: Astro 4 (Static Site Generator)
- **Styling**: Tailwind CSS + Custom CSS
- **Fonts**: Inter (Google Fonts)
- **Icons**: Inline SVG
- **JavaScript**: Vanilla JS for interactivity

---

## Architecture

### Page Structure

```
Layout.astro (Wrapper)
└── index.astro (Main Page)
    ├── Header.astro (Sticky Navigation)
    ├── main
    │   ├── Hero.astro
    │   ├── PhotoGallery.astro (Infinite Scroll)
    │   ├── PricingPackages.astro (4 Cards)
    │   ├── Features.astro (6 Expandable Cards)
    │   ├── BeforeAfter.astro (Carousel)
    │   ├── Testimonials.astro (6 Reviews)
    │   ├── AdditionalBenefits.astro
    │   ├── InstagramFeed.astro (Custom Reels)
    │   └── CTA.astro
    ├── Footer.astro
    └── MobileButtons.astro (Sticky Bottom)
```

### Data Flow
- **Static Content**: All content is hardcoded in components
- **No Backend**: Pure static site, no API calls
- **Client-Side Interactions**: JavaScript for UI interactions only

---

## Components Documentation

### 1. Layout.astro

**Purpose**: Base HTML wrapper for all pages

**Props**:
- `title` (string, required): Page title for `<title>` tag
- `description` (string, optional): Meta description (default: "Modern, clean landing page...")

**Features**:
- Global CSS import
- Meta tags (viewport, Open Graph)
- Google Fonts (Inter)
- Smooth scroll behavior
- Font fallback stack

**Location**: `/src/layouts/Layout.astro`

**Usage**:
```astro
<Layout title="Your Title" description="Optional description">
  <slot />
</Layout>
```

---

### 2. Header.astro

**Purpose**: Sticky navigation bar with blur effect on scroll

**Features**:
- **Desktop Navigation**: 7 links + phone CTA
- **Mobile Navigation**: Hamburger menu with collapsible links
- **Scroll Effect**: Background blur and transparency after 20px scroll
- **Logo**: Dynamic height (40px mobile, 50px desktop)

**Navigation Links**:
```
Cost | Financing | About | Doctor | Reviews | FAQ | Contacts
```

**Sticky Behavior**:
- `position: fixed` + `z-index: 50`
- Scroll listener adds `.header-scrolled` class
- Blur: `backdrop-blur-md`

**Location**: `/src/components/Header.astro`

**Customization**:
- **Logo**: Replace `/images/logos/logo_1.png`
- **Phone**: Update `href="tel:+19162820000"` and text
- **Links**: Modify `<a>` tags in desktop/mobile menus

---

### 3. Hero.astro

**Purpose**: Above-the-fold hero section with headline, CTA buttons, and stats

**Layout**: 2-column grid (text left, image right)

**Key Elements**:
- **Headline**: "New Smile in Just One Day"
- **Subheadline**: Doctor credentials
- **CTAs**:
  - Primary: "Calculate Your Cost" → `#cost`
  - Secondary: "Free Consultation" → `#contacts`
- **Stats**: 3000+ Cases | 98% Success | 1-Day Treatment
- **Hero Image**: `/images/hero/Gemini_Generated_Image_2syrh42syrh42syr.png`

**Animations**:
- Text: `fadeIn` (0.8s)
- Image: `slideIn` (0.8s, 0.2s delay)

**Location**: `/src/components/Hero.astro`

**Customization**:
- Change stats in lines 41-51
- Update hero image path (line 59)
- Modify CTAs (lines 18-35)

---

### 4. PhotoGallery.astro

**Purpose**: Infinite horizontal scrolling gallery of smile transformations

**Features**:
- **Infinite Loop**: Images duplicated for seamless scroll
- **Auto-scroll**: CSS `@keyframes scroll` animation (40s duration)
- **Hover Pause**: Animation pauses on hover
- **Responsive**: Different item sizes per breakpoint

**Image Sizes**:
- Mobile (< 640px): 150x220px
- Tablet (641-1024px): 180x270px
- Desktop (> 1024px): 200x300px

**Images** (11 total, duplicated):
```
/images/gallery/Gemini_Generated_Image_*.png
```

**Location**: `/src/components/PhotoGallery.astro`

**Customization**:
- Add/remove images in both sets (lines 16-83)
- Adjust scroll speed: `animation: scroll 40s linear infinite;` (line 102)
- Change item dimensions in CSS (lines 111-159)

---

### 5. PricingPackages.astro

**Purpose**: 4 pricing cards for different dental treatments

**Cards**:
1. **Single Implant (or Multiple)**
2. **Snap-in Removable Denture**
3. **All-on-4/6/8 Implants** (Featured: "Best Value" badge)
4. **Permanent Zirconia Teeth**

**Card Structure**:
- Image (260px height)
- Title
- Subtitle (blue text)
- 3 checkmark features
- Primary CTA button (blue)
- Benefits text (small print)

**Hover Effects**:
- Card lifts (`translateY(-8px)`)
- Image scales (`scale(1.05)`)
- Enhanced shadow

**Location**: `/src/components/PricingPackages.astro`

**Customization**:
- Images: `/images/pricing/*.png` (lines 22, 57, 93, 128)
- Add `.featured` class to change featured card
- Modify features lists (lines 27-45 per card)

---

### 6. Features.astro

**Purpose**: 6 expandable feature cards explaining payment flexibility

**Features**:
1. **$0 Down Payment** (0% down financing)
2. **High Approval Rate** (85%+ approval, multiple lenders)
3. **No Impact on Credit Score** (soft pull only)
4. **48/60/90 Month Plans** (flexible terms)
5. **600+ Credit Score** (fair credit accepted)
6. **Instant Decision** (60-second approval)

**Interaction**:
- Click card → expands with detailed content
- Other cards auto-collapse
- Arrow rotates 180° when active
- Smooth scroll to expanded card on mobile

**Card States**:
- Default: Gray background
- Active: Blue background + border
- "Click for details" badge pulses

**Location**: `/src/components/Features.astro`

**JavaScript Logic**:
- MutationObserver pattern for expand/collapse
- `feature-expanded` div toggles display
- Only one card active at a time

**Customization**:
- Add more cards: Copy structure from lines 20-79
- Edit expanded content: Modify `.feature-expanded` sections
- Change icons: Replace SVG paths in `.w-14.h-14` divs

---

### 7. BeforeAfter.astro

**Purpose**: Carousel of before/after transformation images

**Features**:
- 8 before/after images
- **Navigation**: Previous/Next arrow buttons
- **Dots Indicator**: 8 dots for slide position
- **Responsive**: Shows 1/2/3 images per view based on screen size

**Breakpoints**:
- Mobile (< 769px): 1 image
- Tablet (769-1024px): 2 images
- Desktop (> 1024px): 3 images

**Controls**:
- Arrows: Navigate one slide
- Dots: Jump to specific slide
- Disabled state: Opacity 0.5 when at edges

**Location**: `/src/components/BeforeAfter.astro`

**JavaScript Logic**:
- `currentIndex` tracks active slide
- `updateCarousel()` recalculates transform offset
- Window resize listener for responsive updates

**Customization**:
- Images: `/images/before-after/*.png` (lines 25, 36, 47, etc.)
- Add more slides:
  1. Add carousel-item div
  2. Add dot button
  3. JavaScript auto-adjusts

---

### 8. Testimonials.astro

**Purpose**: Grid of 6 patient reviews (Google & Yelp)

**Review Sources**:
- 5× Google Reviews (with Google logo SVG)
- 1× Yelp Review (with Yelp logo image)

**Review Structure**:
- Platform logo + 5-star rating
- Review text (italicized quote)
- Avatar circle (initials)
- Name + source

**Grid Layout**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Location**: `/src/components/Testimonials.astro`

**Customization**:
- Add reviews: Copy card structure (lines 19-60)
- Change ratings: Modify SVG star count
- Update avatars: Change initials in `.w-12.h-12` div

---

### 9. AdditionalBenefits.astro

**Purpose**: Simple 2-column benefits section

**Layout**:
- Left: Text content with 4 checkmark bullets
- Right: Decorative icon background (blue gradient)

**Benefits**:
1. Easy integration with existing tools
2. Automated workflows to save time
3. Regular updates with new features
4. Dedicated support team

**Location**: `/src/components/AdditionalBenefits.astro`

**Customization**:
- Edit benefits: Lines 17-40
- Change gradient: Modify `from-blue-100 to-blue-200` (line 44)

---

### 10. InstagramFeed.astro

**Purpose**: Display Instagram Reels with custom cropping and row positioning

**Architecture**:
- **3 Rows** of Instagram embeds (3 reels per row = 9 total)
- **Row 1**: Centered (`50%`)
- **Row 2**: Shifted right (`+205px`)
- **Row 3**: Shifted right (`+205px`)

**Key Parameters**:

| Parameter | Value | Purpose |
|-----------|-------|---------|
| Container height | 630px | Viewport height |
| iframe height | 650px | Actual embed height |
| Scale | 1.42 | Zoom to crop UI |
| Top offset | -30px | Vertical crop |
| Row 2/3 shift | +205px | Horizontal offset |

**Instagram URLs**:
- Row 1: `DPO94lcjFlK`, `DPotzeEDLnZ`, `DPg_avfle4B`
- Row 2: `DPcsvrfEVgX`, `DPUN7aIAXZm`, `DPRbyt3gnbF`
- Row 3: Same as Row 1

**JavaScript Logic**:
- `MutationObserver` detects iframe injection
- Applies styles based on `data-row` attribute
- Disconnects observer after styling

**Location**: `/src/components/InstagramFeed.astro`

**Full Documentation**: See `/INSTAGRAM_FEED_DOCS.md` for detailed customization guide

**Quick Customization**:
```javascript
// Change row offsets (line 99-104, 124-129)
if (row === '2') {
  leftOffset = 'calc(50% + 205px)'; // Change 205 to desired offset
}
```

**Adding New Row**:
1. Copy grid HTML (lines 35-51)
2. Update `data-row="4"`
3. Add JavaScript condition for row 4
4. See INSTAGRAM_FEED_DOCS.md for details

---

### 11. CTA.astro

**Purpose**: Final call-to-action section with gradient background

**Features**:
- Blue gradient background (`from-blue-500 to-blue-600`)
- 2 CTA buttons:
  - "Start Free Trial" (white bg)
  - "Schedule a Demo" (outlined)
- Trust indicators: Free trial | No credit card | Cancel anytime

**Location**: `/src/components/CTA.astro`

**Customization**:
- Update headline (line 7-8)
- Modify CTAs (lines 15-29)
- Edit trust badges (lines 33-52)

---

### 12. Footer.astro

**Purpose**: Site footer with links, contact info, and scroll-to-top button

**Sections** (4 columns):
1. **Company Info**: Logo, description, social media icons
2. **Product Links**: Features, Pricing, Documentation, etc.
3. **Company Links**: About, Blog, Careers, etc.
4. **Support**: Help center, contact info (email + phone)

**Additional Features**:
- **Bottom Bar**: Copyright + legal links
- **Scroll-to-Top Button**: Appears after 500px scroll

**Location**: `/src/components/Footer.astro`

**Customization**:
- Brand name: Lines 10, 124
- Social links: Lines 15-34
- Email/phone: Lines 104, 112
- Add columns: Follow grid structure

**Scroll-to-Top**:
- Shows: `window.scrollY > 500`
- Fixed position: `bottom-8 right-8`
- Z-index: 40

---

### 13. MobileButtons.astro

**Purpose**: Sticky mobile CTA buttons at bottom of screen

**Features**:
- **Fixed Position**: `bottom: 0`, `z-index: 100`
- **2 Buttons**:
  - Primary (blue): "Calculate Your Cost" → `#calculator`
  - Secondary (orange outline): "Free Consultation" → `#contacts`
- **Visibility**: Hidden on desktop (> 768px)
- **Body Padding**: Adds 80px bottom padding to prevent content overlap

**Location**: `/src/components/MobileButtons.astro`

**Customization**:
- Button text/links: Lines 6-11
- Colors: Lines 41-59
- Hide breakpoint: Line 63 (change `min-width: 768px`)

---

## Styling System

### Tailwind CSS Configuration

**Breakpoints** (default):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Color Palette**:
- **Primary Blue**: `#3197ff` (`bg-blue-500`)
- **Secondary Orange**: `#E07B47`
- **Gray Scale**: `gray-50` through `gray-900`
- **Text**: `gray-900` (headings), `gray-600` (body)

### Custom CSS Patterns

**Animations**:
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
```

**Common Utilities**:
- Hover lift: `hover:translateY(-8px)`
- Shadow progression: `shadow-lg → hover:shadow-2xl`
- Smooth transitions: `transition-all duration-300`

### Typography

**Font Family**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

**Hierarchy**:
- H1: `text-5xl sm:text-6xl lg:text-7xl font-bold`
- H2: `text-4xl sm:text-5xl font-bold`
- H3: `text-3xl font-bold`
- Body: `text-xl` (intro), `text-lg` (standard)
- Small: `text-sm` (captions)

---

## Interactive Features

### 1. Sticky Header with Blur

**Trigger**: Scroll > 20px
**Effect**: Adds `backdrop-blur-md` + gray background + shadow
**File**: `Header.astro` (lines 139-147)

```javascript
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header?.classList.add('header-scrolled', 'backdrop-blur-md', 'shadow-sm');
  } else {
    header?.classList.remove('header-scrolled', 'backdrop-blur-md', 'shadow-sm');
  }
});
```

---

### 2. Mobile Menu Toggle

**Trigger**: Click hamburger button
**Effect**: Shows/hides mobile nav
**File**: `Header.astro` (lines 150-163)

**Auto-close**: Clicks on navigation links close menu

---

### 3. Expandable Feature Cards

**Trigger**: Click card
**Effect**:
- Expands clicked card
- Collapses others
- Scrolls card into view on mobile

**File**: `Features.astro` (lines 492-527)

**State Management**:
- `.active` class for expanded card
- `display: none/block` for content
- Arrow rotation via `.expand-arrow`

---

### 4. Before/After Carousel

**Controls**:
- Previous/Next buttons
- Dot navigation
- Responsive item count

**File**: `BeforeAfter.astro` (lines 174-245)

**Calculations**:
```javascript
const offset = -(currentIndex * (itemWidth + gap));
track.style.transform = `translateX(${offset}px)`;
```

---

### 5. Instagram Feed Custom Cropping

**Process**:
1. Instagram `embed.js` injects iframe
2. `MutationObserver` detects injection
3. JavaScript applies custom positioning

**File**: `InstagramFeed.astro` (lines 81-148)

**Per-Row Configuration**:
```javascript
const row = wrapper.dataset.row;
if (row === '2') {
  leftOffset = 'calc(50% + 205px)';
}
```

---

### 6. Scroll-to-Top Button

**Trigger**: Scroll > 500px
**Effect**: Fades in fixed button
**File**: `Footer.astro` (lines 148-165)

```javascript
window.scrollTo({ top: 0, behavior: 'smooth' });
```

---

## Customization Guide

### Common Customizations

#### 1. Change Color Scheme

**Primary Color** (Blue → Purple):
```
Find: bg-blue-500, text-blue-500, border-blue-500
Replace: bg-purple-500, text-purple-500, border-purple-500
```

**Files to update**:
- All components with CTAs
- `Features.astro` active states
- `MobileButtons.astro` primary button

---

#### 2. Update Contact Information

**Phone Number**:
- `Header.astro`: Line 77 (`href="tel:..."`)
- `Footer.astro`: Line 112

**Email**:
- `Footer.astro`: Line 104

**Social Media**:
- `Footer.astro`: Lines 15-34 (update `href="#"`)

---

#### 3. Replace Images

**Logo**: `/public/images/logos/logo_1.png`
**Hero**: `/public/images/hero/*.png`
**Pricing**: `/public/images/pricing/*.png`
**Gallery**: `/public/images/gallery/*.png` (11 images)
**Before/After**: `/public/images/before-after/*.png` (8 images)
**Testimonials**: `/public/images/testimonials/*.png`

---

#### 4. Add New Section

**Steps**:
1. Create new component: `/src/components/YourSection.astro`
2. Import in `index.astro`: `import YourSection from '../components/YourSection.astro';`
3. Add to `<main>`: `<YourSection />`
4. Follow existing component patterns

---

#### 5. Modify Pricing Cards

**Add 5th card**:
```astro
<!-- Card 5 -->
<div class="pricing-card parallax-card">
  <div class="card-image-wrapper">
    <img src="/images/pricing/your-image.png" alt="..." class="parallax-image" />
  </div>
  <div class="card-content">
    <h3 class="card-title">Your Title</h3>
    <!-- ... rest of structure -->
  </div>
</div>
```

Update grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-5`

---

#### 6. Instagram Feed: Add 4th Row

See full guide: `/INSTAGRAM_FEED_DOCS.md`

**Quick steps**:
1. Copy row 3 HTML
2. Change `data-row="3"` → `data-row="4"`
3. Update Instagram URLs
4. Add JavaScript condition:
```javascript
if (row === '4') {
  topOffset = '-30px';
  leftOffset = '50%'; // or custom offset
  transformX = '-50%';
}
```

---

## File Structure

```
landing-page/
├── public/
│   └── images/
│       ├── logos/
│       │   └── logo_1.png
│       ├── hero/
│       │   └── Gemini_Generated_Image_*.png
│       ├── pricing/
│       │   ├── singl.png
│       │   ├── Snap-in Denture.png
│       │   ├── All-on-4.png
│       │   └── Zirconia Teeth.png
│       ├── gallery/
│       │   └── Gemini_Generated_Image_*.png (11 files)
│       ├── before-after/
│       │   └── Gemini_Generated_Image_*.png (8 files)
│       └── testimonials/
│           └── h120w120.png (Yelp logo)
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── PhotoGallery.astro
│   │   ├── PricingPackages.astro
│   │   ├── Features.astro
│   │   ├── BeforeAfter.astro
│   │   ├── Testimonials.astro
│   │   ├── AdditionalBenefits.astro
│   │   ├── InstagramFeed.astro
│   │   ├── CTA.astro
│   │   ├── Footer.astro
│   │   ├── MobileButtons.astro
│   │   ├── Pricing.astro (unused alternative)
│   │   └── ...
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── INSTAGRAM_FEED_DOCS.md (Component-specific docs)
├── claude.md (This file)
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

---

## Development Guidelines

### Best Practices

#### 1. Component Structure
```astro
---
// Frontmatter: Props, imports, logic
interface Props {
  title: string;
}
const { title } = Astro.props;
---

<!-- Template: HTML + Tailwind -->
<section class="py-20">
  <h2>{title}</h2>
</section>

<!-- Scoped Styles -->
<style>
  /* Component-specific CSS */
</style>

<!-- Scripts -->
<script>
  // Client-side JavaScript
</script>
```

#### 2. Responsive Design
- **Mobile-first**: Start with mobile styles, use `sm:`, `md:`, `lg:` for larger screens
- **Test breakpoints**: 375px (mobile), 768px (tablet), 1024px (desktop)
- **Touch targets**: Minimum 44x44px for mobile buttons

#### 3. Performance
- **Image Optimization**: Use WebP format, compress with tools like Squoosh
- **Lazy Loading**: Add `loading="lazy"` to below-fold images
- **CSS**: Minimize custom CSS, leverage Tailwind utilities
- **JavaScript**: Keep minimal, use vanilla JS (no heavy libraries)

#### 4. Accessibility
- **ARIA Labels**: Add to interactive elements (`aria-label`, `aria-expanded`)
- **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Keyboard Navigation**: Ensure all interactive elements are keyboard-accessible
- **Alt Text**: Descriptive alt text for all images

#### 5. SEO
- **Meta Tags**: Update in `Layout.astro`
- **Headings**: Proper hierarchy (H1 → H2 → H3)
- **Links**: Use descriptive text, avoid "click here"
- **Performance**: Fast load times improve rankings

---

### Common Tasks

#### Build for Production
```bash
npm run build
```
Output: `dist/` folder

#### Preview Production Build
```bash
npm run preview
```

#### Development Server
```bash
npm run dev
```

#### Update Dependencies
```bash
npm update
```

---

### Troubleshooting

#### Issue: Instagram embeds not showing
**Solutions**:
1. Check Instagram embed.js is loading (Network tab)
2. Verify Instagram URLs are valid (test in browser)
3. Clear cache and hard reload
4. Check console for errors

#### Issue: Carousel not working
**Solutions**:
1. Verify JavaScript is executing (add `console.log`)
2. Check `currentIndex` calculations
3. Ensure `carousel-item` class is present
4. Inspect transform CSS is applied

#### Issue: Mobile menu not closing
**Solutions**:
1. Verify event listeners are attached
2. Check `mobile-menu` ID matches JavaScript
3. Test `classList.toggle` is working
4. Inspect DOM for hidden class

#### Issue: Images not loading
**Solutions**:
1. Check file paths (case-sensitive)
2. Verify images exist in `/public/images/`
3. Inspect Network tab for 404 errors
4. Ensure build process copies public folder

---

### Performance Optimization

#### Images
1. **Compress**: Use tools like TinyPNG, Squoosh
2. **Format**: Convert to WebP for better compression
3. **Dimensions**: Serve appropriately sized images
4. **Lazy Load**: Add `loading="lazy"` to below-fold images

#### CSS
1. **Purge**: Tailwind auto-purges unused classes in production
2. **Critical CSS**: Inline above-fold CSS (optional)
3. **Minimize custom CSS**: Leverage Tailwind utilities

#### JavaScript
1. **Minimize**: Keep scripts small and focused
2. **Defer**: Use `<script>` at end of body or `defer` attribute
3. **Event Delegation**: Use delegation for repeated elements

---

### Deployment

#### Netlify (Recommended)
1. Connect Git repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploys on push

#### Vercel
1. Import project
2. Framework: Astro
3. Auto-configured build settings

#### Static Hosting (S3, Cloudflare Pages, etc.)
1. Build: `npm run build`
2. Upload `dist/` folder contents
3. Configure routing (if needed)

---

## Version History

### v1.0 (2025-10-11)
- Initial documentation
- All components documented
- Instagram Feed custom implementation
- Mobile-responsive design
- 13 components + layout

---

## Support & Resources

### Astro Documentation
- Docs: https://docs.astro.build
- Discord: https://astro.build/chat

### Tailwind CSS
- Docs: https://tailwindcss.com/docs
- Playground: https://play.tailwindcss.com

### Related Documentation
- Instagram Feed: `/INSTAGRAM_FEED_DOCS.md`
- Component-specific notes in component files

---

## License & Credits

**Project**: Dental Smile Landing Page
**Built with**: Astro 4 + Tailwind CSS
**Images**: AI-generated (Gemini)
**Icons**: Inline SVG
**Fonts**: Inter (Google Fonts)

---

**End of Documentation**
