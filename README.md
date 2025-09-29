# Cactus Labs AI Landing Page

A modern, responsive dark mode website for your Cactus Labs AI consulting agency. Built with HTML, CSS, and JavaScript, featuring a professional design that showcases your AI services and expertise.

## 🚀 Features

- **Dark Mode Design**: Modern, professional dark theme with gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Professional Sections**: Hero, Services, About, Contact, and Footer
- **Contact Form**: Functional contact form with validation and notifications
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth navigation between sections
- **Modern Typography**: Clean, readable fonts using Inter font family
- **Icon Integration**: Font Awesome icons throughout the design

## 🎨 Design Features

- **Color Scheme**: Dark theme with purple/blue gradients and green accents
- **Typography**: Inter font family for modern, professional look
- **Animations**: Subtle animations and transitions for enhanced UX
- **Visual Elements**: Floating AI-themed elements in hero section
- **Service Cards**: Interactive service showcase with hover effects
- **Statistics**: Company metrics display
- **Tech Stack**: Technology showcase section

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🛠️ Setup Instructions

1. **Download Files**: Ensure you have all three files in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Open Website**: Simply open `index.html` in your web browser

3. **Local Development**: For development, you can use any local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have live-server installed)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎯 Customization Guide

### Colors
Edit the CSS variables in `styles.css` to change the color scheme:
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #10b981;    /* Secondary accent */
    --bg-primary: #0f0f23;        /* Main background */
    --bg-secondary: #1a1a2e;      /* Secondary background */
    --text-primary: #ffffff;      /* Main text color */
}
```

### Content
- **Company Name**: Update the logo text in `index.html`
- **Services**: Modify the service cards in the services section
- **Contact Info**: Update email, phone, and location in the contact section
- **About Section**: Customize company description and statistics
- **Social Links**: Update social media links in the footer

### Images and Icons
- **Logo**: Replace the brain icon with your company logo
- **Icons**: Change Font Awesome icons throughout the design
- **Backgrounds**: Modify gradient backgrounds in CSS

### Form Integration
The contact form currently shows a success message. To integrate with a backend:
1. Update the form action in `index.html`
2. Modify the form submission handler in `script.js`
3. Add your backend endpoint for processing form submissions

## 🔧 Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Dependencies
- **Fonts**: Google Fonts (Inter)
- **Icons**: Font Awesome 6.0.0 (CDN)
- **No build tools required**

### Performance Features
- CSS animations using transform and opacity
- Intersection Observer for scroll-based animations
- Efficient event handling
- Optimized CSS with CSS custom properties

## 📁 File Structure

```
consulting/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Examples

### Change Primary Color
```css
:root {
    --primary-color: #ff6b6b; /* Change to red */
}
```

### Add New Service
```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-cloud"></i>
    </div>
    <h3>Cloud Solutions</h3>
    <p>Scalable cloud infrastructure for AI applications.</p>
    <ul>
        <li>AWS Integration</li>
        <li>Auto-scaling</li>
        <li>Cost Optimization</li>
    </ul>
</div>
```

### Modify Hero Text
```html
<h1 class="hero-title">
    <span class="gradient-text">Innovative</span> AI Solutions
    <br>for Tomorrow
</h1>
```

## 🚀 Deployment

### Static Hosting
- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to S3 bucket

### Domain Setup
1. Purchase a domain name
2. Configure DNS settings
3. Point to your hosting provider
4. Enable HTTPS (most providers do this automatically)

## 📞 Support

For customization help or questions:
- Review the CSS variables for color changes
- Check browser console for any JavaScript errors
- Ensure all files are in the same directory
- Verify file permissions and web server configuration

## 🔄 Updates and Maintenance

### Regular Updates
- Keep Font Awesome icons updated
- Monitor browser compatibility
- Update content regularly
- Test on different devices

### Performance Monitoring
- Use browser dev tools for performance
- Monitor Core Web Vitals
- Optimize images if added
- Minimize HTTP requests

---

**Built with ❤️ for Cactus Labs AI**

This landing page provides a solid foundation for your Cactus Labs AI consulting agency. Customize the content, colors, and branding to match your company's identity and requirements.
