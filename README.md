# SolarPower & Controls Website

A modern, clean, and professional website for SolarPower & Controls featuring a stunning black and white design with smooth animations and responsive layout.

## 🚀 Features

- **Modern Design**: Minimalist black and white color scheme inspired by SolarEdge
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Animations**: Professional transitions and interactive elements
- **GitHub Pages Ready**: No build process needed - pure HTML, CSS, and JavaScript
- **Fast Performance**: Optimized for quick loading times
- **SEO Friendly**: Proper semantic HTML structure
- **Accessibility**: Clean markup and proper contrast ratios

## 📁 File Structure

```
SolarPower-ControlsWebsite/
├── index.html           # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
├── _config.yml         # GitHub Pages configuration
├── .gitignore          # Git ignore rules
├── LogoBlackBackground.png
├── LogoWhiteBackground.png
├── LogoMisc.png
└── README.md           # This file
```

## 🎨 Design Highlights

- **Black Background**: Professional `#000000` base
- **White Text**: Clean `#ffffff` for maximum contrast
- **Smooth Transitions**: CSS cubic-bezier animations
- **Glassmorphism Effects**: Modern frosted glass backgrounds
- **Responsive Grid**: Auto-fitting layouts for all screen sizes
- **Embedded Video**: SolarEdge product showcase video

## 📄 Sections

1. **Navigation Bar**: Fixed, modern navbar with mobile menu
2. **Hero Section**: Eye-catching hero with call-to-action
3. **Services**: Four core services with icons
4. **Products**: Feature showcase with badges
- **Background Video**: Hero uses an autoplaying background video (muted)
6. **About**: Company stats and value proposition
7. **Contact**: Contact form and business information
8. **Footer**: Links and copyright information

## 🌐 Deploy to GitHub Pages

### Step 1: Push to GitHub
5. **Video**: Hero uses an autoplay background video; the separate embedded video section has been removed
```bash
git add .
git commit -m "Add modern website design"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/(root)** folder
5. Click **Save**

### Step 3: Access Your Website

Your website will be live at:
```
https://<your-github-username>.github.io/SolarPower-ControlsWebsite/
```

## ⚙️ Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #ffffff;      /* White */
    --secondary-color: #000000;    /* Black */
    --accent-color: #f0f0f0;       /* Light gray */
    --text-light: #e0e0e0;         /* Light text */
    --text-muted: #b0b0b0;         /* Muted text */
}
```

### Update Contact Information

Edit the contact section in `index.html`:

```html
<p>Email: your-email@example.com</p>
<p>Phone: (555) 123-4567</p>
```

### Add Your Own Logo

Replace the logo file paths in `index.html`:

```html
<img src="your-logo.png" alt="SolarPower & Controls" class="logo">
```

### Modify Video

Change the YouTube video ID in the video section:

```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...></iframe>
```

## 🎯 Performance Tips

The hero uses an autoplaying, muted background video. If you want to change that source, edit the `source` URL in `index.html`:
- CSS is minified and organized
- JavaScript is lightweight and efficient
<video class="hero-video" autoplay muted loop>
    <source src="https://example.com/your-video.mp4" type="video/mp4">
</video>
- Smooth 60fps animations

If you want a working contact form on GitHub Pages (serverless), use a provider such as Formspree or Getform which accept POSTs from static sites and support file uploads. Steps for Formspree:

1. Create an account at https://formspree.io/
2. Create a new form and copy the form endpoint (looks like `https://formspree.io/f/xyz`)
3. Open `script.js` and set `FORM_ENDPOINT` to your endpoint URL
4. The contact form supports file attachments via the `attachment` input. Formspree will forward the uploaded file with the submission.

Alternative: EmailJS can send emails directly from the browser but requires creating a service and template and embedding keys in the client — follow EmailJS docs if you prefer that route.
## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Local Testing

1. Open `index.html` directly in your browser, or
2. Use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code
Install "Live Server" extension and click "Go Live"
```

Then navigate to `http://localhost:8000`

### Mobile Testing

- Use Chrome DevTools (F12 → Toggle device toolbar)
- Test on actual devices when possible
- Check all breakpoints: 480px, 768px, 1200px

## 📝 License

This website design is proprietary to SolarPower & Controls.

## 🤝 Support

For issues or modifications, contact the development team.

---

**Last Updated**: May 2026  
**Version**: 1.0.0  
**Status**: Production Ready
