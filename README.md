# Jorge's Cleaning LLC - Professional Landing Page

A modern, fully responsive landing page for Jorge's Cleaning LLC, a residential and commercial cleaning company based in Madison, WI.

## 📋 Project Overview

This is a professional, zero-dependency landing page built with pure HTML5, CSS3, and vanilla JavaScript. No build tools, no frameworks, no external dependencies — just clean code that works in any browser.

**Live Features:**
- ✅ Mobile-first responsive design
- ✅ Sticky navbar with scroll detection
- ✅ Scroll reveal animations
- ✅ Active navigation highlighting
- ✅ Mobile hamburger menu
- ✅ Floating WhatsApp button with pulse animation
- ✅ Fully accessible (semantic HTML, ARIA labels)
- ✅ SEO optimized
- ✅ All contact links integrated (tel:, sms:, mailto:, WhatsApp)

## 📁 Project Structure

```
jorges-cleaning/
├── index.html              # Main HTML file
├── css/
│   ├── reset.css           # Modern CSS reset
│   ├── variables.css       # CSS custom properties (colors, fonts, spacing)
│   ├── main.css            # Layout and page styles
│   ├── components.css      # Reusable component styles
│   └── animations.css      # Animations and transitions
├── js/
│   └── main.js             # Vanilla JavaScript (no dependencies)
└── README.md               # This file
```

## 🎨 Design System

### Colors
- **Primary:** `#1e6e6e` (Dark Teal)
- **Accent:** `#2dd4bf` (Bright Teal)
- **Dark:** `#111` (Near-Black)
- **White:** `#ffffff`
- **WhatsApp Green:** `#25d366`
- **SMS Blue:** `#007aff`

### Typography
- **Headings:** Bebas Neue (Google Fonts)
- **Body:** Nunito (Google Fonts)

### Spacing Scale
- xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl

## 🚀 How to Use

### Quick Start
Simply open `index.html` in your web browser. No installation, no build step required!

```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

Or drag and drop `index.html` onto your browser window.

### File Structure

- **index.html**: All HTML sections (navbar, hero, services, about, contact CTA, footer, floating button)
- **css/reset.css**: Modern CSS reset for consistent cross-browser styling
- **css/variables.css**: All CSS custom properties for easy theming
- **css/main.css**: Main layout, navbar, hero, services, about, contact, and footer styles
- **css/components.css**: Reusable button, card, badge, and other component styles
- **css/animations.css**: Scroll reveal, fade-in, pulse animations
- **js/main.js**: Navbar scroll detection, mobile menu toggle, scroll reveal with IntersectionObserver, active nav link tracking

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

All sections adapt seamlessly across all screen sizes with mobile-first CSS.

## ✨ Key Features

### 1. Navbar
- Fixed positioning with scroll-based shadow
- Mobile hamburger menu that transforms into an X
- Active nav link highlighting based on scroll position
- Sticky "Free Quote" CTA button
- Fully accessible with ARIA labels

### 2. Hero Section
- Two-column layout (1-column on mobile)
- Animated badge, title, subtitle, and CTA
- Three CTA buttons: Call, WhatsApp, Text
- Info card with both phone numbers
- Stat pills: "5★ Rated", "FREE Quote", "24/7 Available"
- Decorative background shapes (CSS only, no images)

### 3. Services Section
- 6-card responsive grid (1 column mobile, 2 columns tablet, 3 columns desktop)
- Icon + title + description cards with hover lift effect
- Special "Custom Quote" CTA card with WhatsApp button

### 4. About Section
- Two-column layout with image placeholder
- Business description
- 4 badge items: Location, Locally Owned, Free Quotes, Fast Response
- Pull quote card: "Happiness smells like a clean house."
- Contact block with phone, phone alt, and email links

### 5. Contact CTA Section
- Dark gradient background
- 5 action buttons: Call (main), Call (alt), WhatsApp, Text, Email
- Pre-filled messages for WhatsApp and SMS
- Email link

### 6. Footer
- Logo, tagline, phone numbers, email
- All links are functional (tel:, sms:, mailto:, WhatsApp)
- Copyright notice

### 7. Floating WhatsApp Button
- Fixed bottom-right corner
- Pulsing animation ring
- Hover effect with scale
- Links to WhatsApp with pre-filled message

## 🔗 Contact Links

All contact methods are fully functional:

- **Call:** `tel:6085208779` → (608) 520-8779
- **Call Alt:** `tel:6088003451` → (608) 800-3451
- **WhatsApp:** Pre-filled message at `wa.me/16085208779`
- **SMS/Text:** Pre-filled message at `sms:6085208779`
- **Email:** `jorgescleaning@outlook.com`

## 🎯 JavaScript Features

### Navbar Scroll Behavior
- Adds `.scrolled` class when user scrolls past 50px
- Toggles shadow effect dynamically

### Mobile Menu Toggle
- Click hamburger icon to open/close menu
- Menu closes when any nav link is clicked
- Menu closes when clicking outside

### Scroll Reveal
- Uses IntersectionObserver API
- `.reveal` elements animate in when 12% visible
- Staggered delays for sequential animations
- Disconnect observer after element is revealed

### Active Nav Link Highlighting
- Tracks current section with IntersectionObserver
- Adds `.active` class to matching nav link
- Updates as user scrolls

### Smooth Scroll
- All anchor links scroll smoothly to target sections

## ♿ Accessibility

- **Semantic HTML5** throughout
- **ARIA labels** on icon buttons
- **Color contrast** meets WCAG AA standards
- **Keyboard accessible** navigation
- **Responsive text** that scales appropriately
- **Focus visible** states on all interactive elements

## 📊 SEO Optimization

- Meta title optimized for keywords
- Meta description for search results
- Semantic HTML structure
- Mobile-first responsive design
- Fast loading (no dependencies)
- Proper heading hierarchy (h1, h2)

## 🛠️ Customization

### Change Colors
Edit `css/variables.css`:
```css
:root {
  --color-primary: #1e6e6e;    /* Main teal */
  --color-accent: #2dd4bf;     /* Bright teal */
  --color-dark: #111;          /* Near-black */
  --color-white: #ffffff;      /* White */
}
```

### Change Fonts
Edit `css/variables.css`:
```css
:root {
  --font-display: "Bebas Neue", sans-serif;  /* Headings */
  --font-body: "Nunito", sans-serif;         /* Body text */
}
```

### Update Phone Numbers
Find and replace:
- `6085208779` → your phone number
- `6088003451` → your alternative number

### Update Business Info
- Business name: Find "Jorge's Cleaning" in `index.html`
- Location: Update "Madison, WI" references
- Email: `jorgescleaning@outlook.com` → your email

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 File Sizes

- **index.html**: ~8 KB
- **CSS (all files)**: ~15 KB
- **JavaScript**: ~2 KB
- **Total**: ~25 KB (loaded files, no external dependencies)

## ✅ Performance

- Zero external dependencies (Google Fonts only for typography)
- CSS animations use GPU acceleration (transform, opacity)
- IntersectionObserver for efficient scroll detection
- Minimal JavaScript footprint
- Optimized for Core Web Vitals

## 🎓 Learning Resources

This project uses:
- **Semantic HTML5** - Structure and accessibility
- **CSS Custom Properties (CSS Variables)** - Easy theming
- **CSS Grid & Flexbox** - Modern layout techniques
- **Mobile-First Design** - Responsive from ground up
- **IntersectionObserver API** - Efficient scroll animations
- **Vanilla JavaScript** - No frameworks or libraries

## 📝 License

This project is provided as-is for Jorge's Cleaning LLC. Free to modify and use.

## 📞 Contact

- **Phone:** (608) 520-8779
- **Phone Alt:** (608) 800-3451
- **Email:** jorgescleaning@outlook.com
- **WhatsApp:** https://wa.me/16085208779

---

**Built with ❤️ for Jorge's Cleaning LLC - Madison, WI**
