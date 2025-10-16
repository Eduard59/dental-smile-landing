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
- **External Integrations**:
  - YouTube (video embed)
  - Instagram (Reels embed)
  - DentalPrice.ai (calculator widget)
  - Google Maps (directions)

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
    │   ├── Features.astro (6 Expandable Cards - Payment Flexibility)
    │   ├── Insurance.astro (3 Expandable Cards - PPO/HMO/Medicare)
    │   ├── BeforeAfter.astro (Carousel)
    │   ├── Testimonials.astro (5 Reviews with Read More/Less)
    │   ├── AdditionalBenefits.astro (Doctor Section + YouTube Video)
    │   ├── FAQ.astro (8 Expandable Questions)
    │   ├── InstagramFeed.astro (3 Rows, 9 Custom Reels)
    │   └── CTA.astro (Expandable Free Consultation Card)
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
- **Desktop Navigation**: 7 links + phone CTA button
- **Mobile Navigation**: Animated burger ↔ X icon with slide-down menu
- **Scroll Effect**: Background blur and transparency after 20px scroll
- **Logo**: Dynamic height (40px mobile, 50px desktop)

**Navigation Links** (updated):
```
Cost | Financing | Insurance | Doctor | Reviews | FAQ | Contacts
```
- Cost → `#cost`
- Financing → `#features` (Payment Flexibility Options)
- **Insurance** → `#insurance` (new!)
- Doctor → `#doctor`
- Reviews → `#testimonials`
- FAQ → `#faq`
- Contacts → `#contact` (Footer)

**Phone Number**: **(916) 282-2423** (updated)

**Mobile Menu**:
- White background with shadow
- Burger/X icon animation
- Smooth slide animation (`max-height` transition)
- Auto-closes on link click

**Sticky Behavior**:
- `position: fixed` + `z-index: 50`
- Scroll listener adds `.header-scrolled` class
- Blur: `backdrop-blur-md`

**Location**: `/src/components/Header.astro`

**Customization**:
- **Logo**: Replace `/images/logos/logo_1.png`
- **Phone**: Lines 101, 151 (`href="tel:+19162822423"`)
- **Links**: Modify navigation arrays (desktop: 78-99, mobile: 129-149)

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

**Purpose**: 4 pricing cards for different dental treatments with calculator integration

**Cards**:
1. **Single Implant (or Multiple)**
   - Calculator: `package=single-implant`

2. **Snap-in Removable Denture**
   - Calculator: `package=snap-in-denture`

3. **All-on-4/6/8 Implants** (Featured: "Best Value" badge)
   - Calculator: `package=all-on-468-per-arch`

4. **Permanent Zirconia Teeth**
   - Calculator: `package=zirconia-teeth`

**Calculator Integration**:
- Widget URL: `https://widget.dentalprice.ai/amazcloverr/widget`
- Public Key: `WGT_B8059FA5381A`
- Auto-start enabled
- Opens in new tab

**Card Structure**:
- Image (260px height)
- Title
- Subtitle (blue text)
- 3 checkmark features
- **"Calculate My Cost" button** → Opens calculator widget
- Benefits text (small print)

**Hover Effects**:
- Card lifts (`translateY(-8px)`)
- Image scales (`scale(1.05)`)
- Enhanced shadow

**Location**: `/src/components/PricingPackages.astro`

**Customization**:
- Images: `/images/pricing/*.png`
- Calculator URLs: Lines 47, 82, 118, 153
- Modify features lists per card

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

**Purpose**: Grid of 5 real patient reviews with expandable text

**Reviews** (all 5 stars):
1. **Austin C.** (Google, 2 months ago) - Major surgery, family atmosphere
2. **Nellie G.** (Google, 1 month ago) - 100/10! Wisdom teeth extraction
3. **Aarica J.** (Yelp, 2 weeks ago) - Last minute extraction
4. **Michael L.** (Google, 1 month ago) - Major oral surgery
5. **Stefaniia K.** (Google, 1 month ago) - Excellent experience

**Features**:
- **Read More/Less**: Long reviews collapsed by default
- **Platforms**: Google (4) + Yelp (1) with logos
- **All 5 stars**: Only positive reviews shown

**Review Structure**:
- Platform logo + 5-star rating
- Preview text + hidden full text
- "read more" button (toggles to "read less")
- Avatar circle (initials)
- Name + timestamp

**Grid Layout**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**JavaScript**:
- Click button → shows/hides full text
- `display: inline` for seamless text flow

**Location**: `/src/components/Testimonials.astro`

**Customization**:
- Add reviews: Copy card structure
- Edit text split: Modify preview and `.review-full` span
- Change ratings: Modify SVG star count

---

### 9. AdditionalBenefits.astro (Doctor Section)

**Purpose**: Showcase Dr. Antipov with video and expandable credentials

**Layout**: 2-column grid
- **Left**: YouTube video embed (500px height)
- **Right**: 4 expandable info cards

**Cards**:
1. **16+ Years Experience in California**
2. **On-Site Lab – 365 Dental Lab**
3. **3000+ Full-Arch Restorations** (Fusion Dental Academy founder)
4. **Over 45,000 Implants Placed** (with statistics grid)

**Video**:
- YouTube embed: `https://youtu.be/y-mAGcATgKg`
- Fullscreen enabled
- Responsive iframe

**Interaction**:
- Click card → expands details
- Others auto-collapse
- Blue border when active

**Location**: `/src/components/AdditionalBenefits.astro`

**Customization**:
- Change video: Update `src` in iframe (line 23)
- Edit card content: Modify `.card-expanded` sections
- Add more cards: Copy card structure

---

### 10. Insurance.astro

**Purpose**: Explain insurance coverage options with expandable cards

**Cards** (3 in row):

1. **PPO Plan** (Preferred Provider Organization)
   - **Border**: Thick green (`border-4 border-green-300`) - emphasized
   - Coverage: 0-50%+ for implants
   - Annual max: $1,000-$2,000
   - Verification process explained

2. **HMO & DHMO Plans** (Health Maintenance Organization)
   - **Border**: Regular green (`border-2`)
   - **Warning**: NOT accepted (orange banner)
   - **Discount Program**: Special pricing on extractions, diagnostics, CT scan (green banner)
   - Alternative payment options

3. **Medicare/Medicaid** (Government coverage)
   - **Border**: Regular green (`border-2`)
   - **Warning**: Implants NOT covered (orange banner)
   - **Discount Program**: Same discounts as HMO/DHMO (green banner)
   - Self-pay required with financing options

**Visual Hierarchy**:
- Orange banners: Limitations/restrictions
- Green banners: Positive alternatives (Special Discount Program)

**Location**: `/src/components/Insurance.astro`

**Customization**:
- Add/remove cards: Copy card structure (lines 20-102)
- Edit discount services: Modify green banner lists
- Change border colors: Update `border-` classes

---

### 11. FAQ.astro

**Purpose**: Answer common questions about dental implants and clinic

**Questions** (8 expandable):
1. Single implant cost → Redirects to calculator (no specific prices)
2. Full mouth restoration cost → Redirects to calculator
3. Payment plans (48/60/90 months, $0 down, 85%+ approval)
4. Insurance coverage (PPO partial coverage)
5. **Free consultation details** ($650 → $0, includes exam, CT scan, plan, quote)
6. Implant process (4-step timeline)
7. Same-day implants (Yes! with on-site lab)
8. Upper & lower together (Yes!)
9. Sedation options (Local, IV, General)
10. Healing process (timeline)
11. Materials (Titanium, Zirconia)
12. Office hours (Mon-Fri 8-6, Sat 9-3)

**Special Features**:
- Questions 1 & 2: Blue CTA buttons to calculator
- Question 5: Price comparison visual ($650 crossed → $0)
- Bottom CTA: "Still have questions? Contact us"

**Location**: `/src/components/FAQ.astro`

**Customization**:
- Add questions: Copy `.faq-item` structure
- Update answers: Modify `.faq-answer` content
- Change office hours: Line 245-251

---

### 12. InstagramFeed.astro

**Purpose**: Display Instagram Reels with custom cropping and row positioning

**Architecture**:
- **3 Rows** of Instagram embeds (3 reels per row = 9 total)
- **Row 1**: Centered (marginLeft: 0px)
- **Row 2**: Shifted right (marginLeft: 150px)
- **Row 3**: Shifted right (marginLeft: 150px)

**Key Parameters**:

| Parameter | Value | Purpose |
|-----------|-------|---------|
| Container height | 630px | Viewport height |
| iframe height | 650px | Actual embed height |
| Scale | 1.42 | Zoom to crop UI |
| Top offset | -30px | Vertical crop |
| Row 2/3 shift | +150px | Horizontal offset (via marginLeft) |

**Stability Solution**:
- Uses `setInterval(forceStyles, 2000)` to reapply styles every 2 seconds
- Prevents Instagram from overriding custom positioning
- CSS hides Instagram UI elements (header, captions, buttons)

**Instagram URLs**:
- Row 1: `DPO94lcjFlK`, `DPotzeEDLnZ`, `DPg_avfle4B`
- Row 2: `DPcsvrfEVgX`, `DPUN7aIAXZm`, `DPRbyt3gnbF`
- Row 3: `DPCGPF3FW-b`, `DPEqqy9iTdc`, `DPpMzoPEh0F`

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

### 13. CTA.astro (Free Consultation Card)

**Purpose**: Highlight free consultation offer with expandable details

**Features**:
- **Expandable white card** on blue gradient background
- **Collapsed state**: $650 crossed → $0 comparison
- **Expanded state**: Full consultation details

**Includes**:
- Price visual: ~~$650~~ → **$0** (large, prominent)
- 4 services in 2x2 grid:
  1. 1-on-1 Exam with Dr. Antipov
  2. 3D CT Scan
  3. Personalized Full-Arch Treatment Plan
  4. Transparent, All-Inclusive Quote
- Limited time banner: Save $650
- 2 CTA buttons:
  - "Call Now: (916) 282-2423"
  - "Schedule Free Consultation"

**Interaction**:
- Click card → expands/collapses
- Arrow rotates 180°
- Enhanced shadow when active

**Location**: `/src/components/CTA.astro`

**Customization**:
- Change price: Lines 26, 33, 45, 52
- Edit services: Grid items (lines 62-112)
- Update CTAs: Lines 121-135

---

### 14. Footer.astro

**Purpose**: Site footer with links, contact info, office locations, and scroll-to-top button

**Sections** (3 columns):
1. **Company Info**:
   - Logo image (`/images/logos/logo_1.png`)
   - Description
   - Social media: Facebook, Twitter, Instagram, YouTube

2. **Quick Links**:
   - Cost | Financing | Insurance | Doctor | Reviews | FAQ | Contacts
   - Matches header navigation

3. **Contact Info**:
   - Phone: **(916) 282-2423**
   - Email: **info@dentalimplantsclub.com**
   - **Roseville Office**: 911 Reserve Dr Ste 150, Roseville, CA + "Get Directions" button
   - **El Dorado Hills Office**: 4913 Golden Foothill Pkwy, El Dorado Hills, CA 95762 + "Get Directions" button

**Get Directions Buttons**:
- Google Maps integration with `maps/dir/?api=1&destination=`
- Opens navigation from user's location
- Blue color, icon with arrow

**Additional Features**:
- **Bottom Bar**: Copyright "© 2025 Dental Implants Club"
- **Scroll-to-Top Button**: Appears after 500px scroll

**Location**: `/src/components/Footer.astro`

**Customization**:
- Logo: Line 10-13
- Social links: Lines 18-38 (Instagram/YouTube URLs updated)
- Addresses: Lines 95-125
- Update Get Directions URLs: Lines 101, 123

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
│   │   ├── Header.astro (Updated: navigation, phone, mobile menu)
│   │   ├── Hero.astro
│   │   ├── PhotoGallery.astro
│   │   ├── PricingPackages.astro (Updated: calculator links)
│   │   ├── Features.astro
│   │   ├── Insurance.astro (NEW: PPO/HMO/Medicare cards)
│   │   ├── BeforeAfter.astro
│   │   ├── Testimonials.astro (Updated: 5 new reviews, read more/less)
│   │   ├── AdditionalBenefits.astro (Updated: Doctor section + YouTube)
│   │   ├── FAQ.astro (NEW: 8 expandable questions)
│   │   ├── InstagramFeed.astro (Updated: 3 rows, 9 videos, stable positioning)
│   │   ├── CTA.astro (Updated: expandable consultation card)
│   │   ├── Footer.astro (Updated: contacts, addresses, Get Directions)
│   │   ├── MobileButtons.astro
│   │   ├── Pricing.astro (unused alternative)
│   │   └── ...
│   │
│   ├── config/
│   │   └── instagram.config.ts (NEW: Instagram settings - not currently used)
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro (Updated: new components added)
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

### v2.1 (2025-10-13) - SEO & AI Optimization
- **SEO**: Full meta tags (Open Graph, Twitter Cards, keywords, geo tags)
- **Structured Data**: JSON-LD for Google Business integration
- **AI Search**: `/ai-search-optimized.json` for ChatGPT/Perplexity/Claude
- **robots.txt**: Created for search engine crawling
- **Sticky Buttons**: Now work on desktop when scrolled past Cost section
- **Clinic Carousel**: New component with 3 photos + amenities overlay
- **Color Consistency**: Orange (#E07B47) for Free Consultation across all CTAs
- **Client Documentation**: CLIENT_GUIDE.md created

### v2.0 (2025-10-13)
- **New Components**: FAQ, Insurance, Doctor section with video
- **Updated Components**: Testimonials (5 real reviews with read more/less), CTA (expandable card), InstagramFeed (3 rows, stable positioning)
- **Calculator Integration**: All pricing cards linked to DentalPrice.ai widget
- **Contact Info**: Updated phone (916) 282-2423, email, 2 office addresses
- **Navigation**: Added Insurance to menu, updated all anchor links
- **Footer**: Logo, Get Directions buttons, social media links
- **Mobile**: Improved burger menu with white background
- **Total**: 16 components + 1 config file

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
