# LINE-UP Barber Shop Website

A modern, minimal website for LINE-UP, a premium men's barber shop owned by Yanai Amsalem.

## Features

- **RTL Support**: Full Hebrew language support with right-to-left layout
- **Responsive Design**: Mobile-first approach, works on all devices
- **Black & White Theme**: Minimal, sophisticated design
- **Contact Form**: Validated contact form with Israeli phone number support
- **Gallery**: Image gallery with smooth transitions (placeholder ready)
- **Google Maps Integration**: Location mapping (requires API key)
- **Performance Optimized**: Fast loading with lazy loading and optimization
- **SEO Ready**: Meta tags and structured content for search engines

## Sections

1. **Hero Section**: Prominent LINE-UP branding
2. **About Section**: Information about Yanai Amsalem and the shop
3. **Gallery**: Showcase of work (6 placeholder items)
4. **Coming Soon**: Future services section
5. **Contact**: Contact form and shop information
6. **Map**: Google Maps integration

## Setup Instructions

### Basic Setup

1. Open `index.html` in a web browser
2. All files should be in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`

### Google Maps Setup

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. In `index.html`, uncomment and update the Maps API script:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly" async defer></script>
   ```
3. Update the location coordinates in `script.js` (line 195):
   ```javascript
   const barbershopLocation = { lat: YOUR_LAT, lng: YOUR_LNG };
   ```

### Adding Images to Gallery

1. Replace placeholder images in the gallery section
2. Add actual image files to a `images/` directory
3. Update the gallery items in `index.html`:
   ```html
   <div class="gallery-item">
       <img src="images/your-image.jpg" alt="Description" loading="lazy">
   </div>
   ```

### Contact Information

Update the contact details in `index.html`:
- Address (line ~132)
- Phone number (line ~136)
- Hours (line ~140)

## Customization

### Colors

The website uses a strict black and white palette. To modify:
- Primary black: `#000`
- Primary white: `#fff`
- Gray variations: `#333`, `#666`, `#ccc`, `#eee`, `#f8f8f8`

### Typography

The site uses the Inter font family. To change fonts, update the Google Fonts import in `index.html` and the CSS font-family declarations in `styles.css`.

### Content

All Hebrew text can be easily modified in the HTML file. The "LINE-UP" branding remains in English as specified in the design requirements.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- RTL layout support for Hebrew content

## Performance Features

- Lazy loading for images
- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading fonts with `font-display: swap`

## File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Technical Notes

- The website is built with vanilla HTML, CSS, and JavaScript
- No framework dependencies for maximum performance
- Mobile-first responsive design
- Accessibility considerations included
- Form validation for contact form
- Smooth scrolling navigation

## Enhanced Features Added

### Video Background Hero
- Video background support with black overlay
- Optimized for web with autoplay and loop
- Fallback gradient for browsers without video support

### Interactive Gallery
- **Automatic slideshow** with 3-second intervals
- **Full-width layout** with no side gaps
- **Smooth cross-fade** transitions between slides
- **Pause-on-hover** functionality
- **Manual controls** with previous/next buttons
- **Indicator dots** for direct slide navigation
- **Touch gesture support** for mobile swipe navigation

### Enhanced About Section
- **Permanent drop shadows** on all feature cards
- **Staggered animations** from bottom on page load
- **Smooth hover effects** with enhanced shadows
- **Professional timing** (300-500ms transitions)

### Coming Soon Section
- **Atmospheric background** image support
- **Dual gradient overlays** from left and right sides
- **High contrast text** with shadow effects
- **Responsive typography** scaling

### WhatsApp Integration
- **Direct WhatsApp links** from phone numbers
- **Proper international format** (wa.me/972...)
- **Visual styling** with WhatsApp green colors
- **Hover effects** with smooth transitions

### Back-to-Top Button
- **Floating scroll button** appears after 300px scroll
- **Smooth scroll animation** back to hero
- **Consistent black/white theme** styling
- **Mobile-optimized** touch interactions

### Performance Optimizations
- **Lazy loading** for all images
- **Touch gesture support** for mobile gallery
- **Optimized animations** with reduced motion support
- **Improved mobile responsiveness**

## File Structure Update

```
/
├── index.html          # Enhanced HTML with video, slideshow, and interactions
├── styles.css          # Complete styling with animations and responsive design
├── script.js           # Advanced JavaScript with slideshow, gestures, and scroll effects
├── README.md           # This comprehensive guide
├── videos/             # Directory for video background (create and add barbershop-bg.mp4)
└── images/             # Directory for gallery and background images
    ├── gallery-1.jpg   # Gallery slideshow images (6 total)
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    ├── gallery-5.jpg
    ├── gallery-6.jpg
    └── atmospheric-bg.jpg # Coming Soon section background
```

## Setup Instructions for Enhanced Features

### 1. Video Background
1. Create a `videos/` directory
2. Add `barbershop-bg.mp4` (optimized for web, max 10MB recommended)
3. Video should show barber shop ambiance/work footage

### 2. Gallery Images
1. Create an `images/` directory
2. Add 6 high-quality images named `gallery-1.jpg` through `gallery-6.jpg`
3. Recommended size: 1920x1080 or similar landscape ratio
4. Optimize images for web (compress to under 500KB each)

### 3. Coming Soon Background
1. Add `atmospheric-bg.jpg` to the `images/` directory
2. Should be a moody, atmospheric image
3. Recommended size: 1920x1080

### 4. WhatsApp Phone Number
1. Update the phone number in the WhatsApp link (line 164 in index.html)
2. Format: `https://wa.me/972XXXXXXXXX` (replace with actual number)

### 5. Google Maps Location
1. Get coordinates for the actual barbershop location
2. Update `barbershopLocation` in script.js (line 195)
3. Update address in contact section

## Enhanced Features in Detail

### Gallery Slideshow
- **Auto-rotation**: Changes slides every 3 seconds
- **Manual control**: Click arrows or indicators to navigate
- **Pause behavior**: Hovering pauses auto-rotation
- **Resume behavior**: Auto-rotation resumes 5 seconds after manual interaction
- **Mobile gestures**: Swipe left/right to navigate on touch devices
- **Smooth transitions**: 0.8s cross-fade between slides

### Performance Features
- **Lazy loading**: Images load only when needed
- **Optimized animations**: Hardware-accelerated transforms
- **Touch-friendly**: All interactive elements sized for mobile
- **Reduced motion**: Respects user accessibility preferences

---

**Credits**: Website built by [LiaMesika](https://liamesika.co.il)

For questions or modifications, refer to the code comments or contact the developer.