# Quick Customization Guide

This guide will help you quickly customize the landing page for your brand.

## Step-by-Step Customization

### Step 1: Brand Identity (5 minutes)

1. **Company Name**
   - Search for "YourBrand" in all files and replace with your company name
   - Files to update:
     - `src/components/Header.astro` (line 12)
     - `src/components/Footer.astro` (line 10)
     - `src/pages/index.astro` (line 12)

2. **Brand Color**
   - Replace `#3197ff` with your brand color throughout
   - Or use find/replace for these Tailwind classes:
     - `bg-blue-500` → `bg-[your-brand-color]`
     - `text-blue-500` → `text-[your-brand-color]`
     - `hover:bg-blue-600` → `hover:bg-[darker-shade]`

### Step 2: Hero Section (10 minutes)

File: `src/components/Hero.astro`

1. **Main Headline** (lines 9-12)
   ```astro
   <h1>
     Your Main Value Proposition
     <span class="text-blue-500 block">Your Key Benefit</span>
   </h1>
   ```

2. **Subheadline** (lines 13-16)
   - Explain what you do in 1-2 sentences
   - Keep it under 25 words

3. **Stats** (lines 31-47)
   - Update numbers and labels to match your business
   - Examples: customers, downloads, reviews, users, etc.

4. **Hero Image** (lines 52-63)
   - Replace the placeholder with your product screenshot:
   ```astro
   <img src="/hero-image.jpg" alt="Product screenshot" />
   ```

### Step 3: Features (15 minutes)

File: `src/components/Features.astro`

Each feature card has:
- Icon (SVG)
- Title
- Description

**To modify a feature:**
1. Find the feature card (starts around line 17)
2. Update the title (line 26)
3. Update the description (line 27-29)
4. Optional: Change icon (use https://heroicons.com for new icons)

**To add/remove features:**
- Copy/paste entire `<div class="bg-white rounded-2xl...">` block
- Maintain the grid layout (works with 3, 6, or 9 features)

### Step 4: Pricing (20 minutes)

File: `src/components/Pricing.astro`

For each pricing tier:

1. **Plan Name** (line 18): "Starter", "Professional", "Enterprise"
2. **Description** (line 19): Target audience
3. **Price** (line 23): Update dollar amount
4. **Features** (lines 26-53): Add/remove feature bullets

**Popular Pricing Models:**
- SaaS: Monthly/Annual subscriptions
- Services: Packages (Basic/Pro/Premium)
- Products: One-time purchase tiers

### Step 5: Testimonials (10 minutes)

File: `src/components/Testimonials.astro`

For each testimonial:
1. **Quote** (line 29-31): Customer feedback
2. **Initials** (line 39): For avatar
3. **Name** (line 43): Full name
4. **Title/Company** (line 44): Position and company

**Pro Tips:**
- Use real testimonials when possible
- Keep quotes under 30 words
- Include diverse customer types

### Step 6: Footer & Contact (10 minutes)

File: `src/components/Footer.astro`

1. **Company Description** (lines 11-14)
2. **Social Media Links** (lines 16-48)
   - Update href attributes with your social profiles
   - Remove unused social networks
3. **Email** (line 92): `hello@yourbrand.com`
4. **Phone** (line 99): Your contact number
5. **Navigation Links** (lines 52-108): Update or remove sections

### Step 7: SEO & Meta Tags (5 minutes)

File: `src/layouts/Layout.astro`

1. **Page Title** (line 20): Shows in browser tab
2. **Description** (line 8): For search engines
3. **Open Graph** (lines 23-26): Social media sharing

**Best Practices:**
- Title: Under 60 characters
- Description: Under 160 characters
- Include primary keyword

### Step 8: Add Your Logo & Images

1. Add images to `/public/` folder:
   ```
   public/
   ├── logo.svg (or .png)
   ├── hero-image.jpg
   ├── feature-1.jpg
   └── favicon.svg
   ```

2. Reference in components:
   ```astro
   <img src="/logo.svg" alt="Company Logo" />
   ```

## Color Customization

### Option 1: Simple Find & Replace

1. Find: `bg-blue-500`
2. Replace with: `bg-[#YOUR-COLOR]`

Repeat for:
- `text-blue-500`
- `border-blue-500`
- `hover:bg-blue-600`
- `from-blue-500` and `to-blue-600` (gradients)

### Option 2: Using Tailwind Config (Advanced)

Create `tailwind.config.mjs`:

```js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#YOUR-COLOR',
          600: '#DARKER-SHADE',
        }
      }
    }
  }
}
```

Then replace `blue-500` with `primary-500` throughout.

## Content Writing Tips

### Headlines
- Lead with benefits, not features
- Use action words
- Keep it under 10 words
- Test multiple variations

### Subheadlines
- Expand on the headline
- Address pain points
- Build credibility
- 1-2 sentences max

### Call-to-Actions
Strong CTAs:
- "Start Free Trial"
- "Get Started Now"
- "See It In Action"
- "Join 10,000+ Users"

Weak CTAs:
- "Click Here"
- "Submit"
- "Learn More" (overused)

## Common Customizations

### Change Fonts

In `src/layouts/Layout.astro`, replace the Google Fonts link:

```html
<!-- Current: Inter -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />

<!-- Alternative: Poppins -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
```

Then update CSS:
```css
font-family: 'Poppins', sans-serif;
```

### Add a Section

1. Create new component in `src/components/NewSection.astro`
2. Import in `src/pages/index.astro`:
   ```astro
   import NewSection from '../components/NewSection.astro';
   ```
3. Add to page:
   ```astro
   <NewSection />
   ```

### Remove a Section

In `src/pages/index.astro`, comment out or delete:
```astro
<!-- <Testimonials /> -->
```

## Pre-Launch Checklist

- [ ] All "YourBrand" replaced with actual name
- [ ] Brand colors updated
- [ ] Real content in all sections
- [ ] Actual images added (no placeholders)
- [ ] Contact information updated
- [ ] Social media links correct
- [ ] Favicon replaced
- [ ] SEO title and description set
- [ ] Tested on mobile device
- [ ] All links work
- [ ] Analytics code added (if using)
- [ ] Test build: `npm run build`

## Getting Help

- **Astro Docs:** https://docs.astro.build
- **Tailwind Docs:** https://tailwindcss.com
- **Icons:** https://heroicons.com
- **Colors:** https://coolors.co
- **Fonts:** https://fonts.google.com

---

Good luck with your landing page! Remember: Ship it fast, get feedback, iterate.
