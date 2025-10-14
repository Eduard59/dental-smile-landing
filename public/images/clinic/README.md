# Clinic Photos

Add your clinic photos here for the carousel.

## Required Photos

Add at least 3 photos with these names:
- `office-1.jpg` - Main reception/waiting area
- `office-2.jpg` - Treatment room
- `office-3.jpg` - Exterior or other clinic area

## Recommended Specifications

- **Format**: JPG or PNG
- **Size**: 1920x1080px (landscape orientation)
- **File size**: < 500KB (compress for web)
- **Quality**: High resolution for best appearance

## After Adding Photos

Update the carousel slides in `/src/components/ClinicCarousel.astro`:

Replace the placeholder div (lines 20-24) with:
```html
<div class="carousel-slide active">
  <img
    src="/images/clinic/office-1.jpg"
    alt="Clinic Interior"
    class="w-full h-full object-cover"
  />
</div>
```

Repeat for slides 2 and 3.
