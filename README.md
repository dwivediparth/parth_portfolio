# Interactive Portfolio Website

A modern, responsive portfolio website with smooth animations, interactive gallery, and dark/light mode toggle.

## Features

✨ **Sticky Header Navigation** - Always visible navigation bar with smooth scrolling
🎨 **Animated Hero Section** - Text reveal animations and floating background shapes
👤 **Personal Information Section** - Profile photo, tagline, and quick facts
🖼️ **Interactive Image Gallery** - Hover zoom effects and lightbox popup
🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
📱 **Fully Responsive** - Works beautifully on all devices
🎭 **Smooth Animations** - Scroll-triggered fade-ins and parallax effects

## Getting Started

1. Open `index.html` in your web browser
2. No build process required - it's ready to use!

## Customization

### Personal Information

Edit the following sections in `index.html`:

- **Hero Section** (lines ~40-50): Update name, tagline, and description
- **About Section** (lines ~70-100): Change profile photo URL, name, role, and quick facts
- **Contact Section** (lines ~200+): Update contact information

### Profile Photo

Replace the profile image URL in the About section:
```html
<img src="YOUR_IMAGE_URL" alt="Profile Photo" class="profile-img">
```

### Gallery Images

Update gallery images by replacing the `src` attributes in the gallery items:
```html
<img src="YOUR_IMAGE_URL" alt="Description">
```

### Colors & Theme

Modify CSS variables in `styles.css` (lines 3-20) to change the color scheme:
```css
:root {
    --accent-color: #6366f1;
    --bg-color: #ffffff;
    /* ... other variables */
}
```

### Navigation Links

Add or remove navigation items in the header:
```html
<li class="nav-item"><a href="#section-id" class="nav-link">Section Name</a></li>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

## Features Breakdown

### 1. Sticky Header
- Fixed position navigation that stays visible while scrolling
- Active link highlighting based on scroll position
- Mobile-responsive hamburger menu

### 2. Animated Hero
- Text reveal animations with staggered delays
- Floating gradient shapes in the background
- Smooth scroll indicator

### 3. Personal Information
- Profile photo with hover effects
- Quick facts cards with icons
- Responsive grid layout

### 4. Interactive Gallery
- Hover zoom effect on images
- Click to open full-size lightbox
- Keyboard navigation (Arrow keys, Escape)
- Previous/Next buttons

### 5. Dark/Light Mode
- Toggle button in header
- Saves preference to localStorage
- Smooth theme transitions

## Tips

- Replace placeholder images with your own photos
- Update all text content to reflect your personal information
- Customize colors to match your brand
- Add more sections as needed
- Test on different screen sizes

Enjoy your new portfolio! 🚀



