# 💼 Personal Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-2.5-6366f1?style=for-the-badge&logo=About.me&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)

**A modern, responsive portfolio website with glassmorphism design and interactive animations**

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Contact](#-contact)

</div>

---

/* ## 📸 Preview

<div align="center">
  <img src="assets/preview.png" alt="Portfolio Preview" width="80%">
</div> */

---

## ✨ Features

### 🎨 Design
- **Glassmorphism UI** - Modern glass-like card designs with blur effects
- **Gradient Backgrounds** - Dynamic animated gradient backgrounds
- **Responsive Layout** - Fully responsive design for all devices
- **Dark Theme** - Eye-friendly dark color scheme

### 🚀 Animations
- **Smooth Transitions** - Fluid animations throughout the site
- **Scroll Animations** - Elements fade in as you scroll
- **Interactive Hover Effects** - Dynamic responses to user interactions
- **Typing Effect** - Animated tagline with typewriter effect
- **Counter Animations** - Stats numbers count up on scroll
- **Ripple Effects** - Interactive click feedback on project cards

### 📊 Sections
- **Hero Section** - Profile photo and introduction
- **Statistics Cards** - Animated stats showcase
- **About Me** - Personal introduction
- **Education** - Academic background with timeline
- **Featured Projects** - Clickable project cards with links
- **Skills** - Visual skill bars with progress animations
- **Work Experience** - Professional background
- **Contact** - Get in touch section

### 🎯 Interactive Elements
- **Clickable Project Cards** - Direct links to GitHub, itch.io, and YouTube
- **Image Gallery** - Cyberpunk 2077 screenshots with lightbox
- **Parallax Mouse Effect** - Background responds to mouse movement
- **Profile Image Animation** - Rotating animation on click

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, and glassmorphism effects |
| **JavaScript** | Interactive features and animations |
| **Intersection Observer API** | Scroll-based animations |
| **CSS Grid & Flexbox** | Responsive layout system |

---

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── style.css              # All styles and animations
├── script.js              # Interactive functionality
├── assets/
│   ├── PPhoto.png         # Profile photo
│   └── photomode_*.png    # Screenshot gallery images
└── public/
    ├── contact.html       # Contact page
    ├── myHobbies.html     # Hobbies page
    └── myScreenshots.html # Photo gallery
```

---

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/cemsvs/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Customize**
   - Replace images in `assets/` folder
   - Update personal information in `index.html`
   - Modify colors in `style.css` (`:root` variables)
   - Add your own projects and skills

---

## 🎨 Customization

### Color Scheme
Edit the CSS variables in `style.css`:

```css
:root {
  --primary-bg: #0a0e27;
  --secondary-bg: #1a1f3a;
  --accent-color: #6366f1;
  --accent-hover: #818cf8;
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
}
```

### Adding New Projects
Add a new project card in `index.html`:

```html
<div class="project-card" onclick="window.open('YOUR_URL', '_blank')">
  <span class="project-icon">🚀</span>
  <h3 class="project-title">Project Name</h3>
  <p class="project-description">Description here...</p>
  <div class="project-tags">
    <span class="project-tag">Tag1</span>
    <span class="project-tag">Tag2</span>
  </div>
</div>
```

### Updating Skills
Modify skill items in `index.html`:

```html
<div class="skill-item">
  <div class="skill-header">
    <span class="skill-name">Skill Name</span>
    <span class="skill-level">85%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" data-skill="85"></div>
  </div>
</div>
```

---

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 **Mobile Phones** (320px - 480px)
- 📱 **Tablets** (481px - 768px)
- 💻 **Laptops** (769px - 1024px)
- 🖥️ **Desktops** (1025px+)

---

## 🌟 Key Features Breakdown

### Statistics Counter
- Animates from 0 to target value
- Triggers on scroll into view
- Supports numbers and percentages
- One-time animation for better performance

### Skill Bars
- Smooth width animation
- Shimmer effect for visual appeal
- Percentage counter animation
- Intersection Observer for performance

### Project Cards
- Ripple effect on click
- Opens links in new tab
- Hover transformations
- Tag system for technologies

### Screenshot Gallery
- Modern grid layout
- Lightbox modal view
- Smooth zoom animations
- ESC key support
- Mobile-optimized

---

## 🔧 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |

---

## 📊 Performance

- ⚡ **Fast Load Times** - Optimized assets and code
- 🎯 **SEO Friendly** - Semantic HTML and meta tags
- ♿ **Accessible** - ARIA labels and keyboard navigation
- 📱 **Mobile First** - Optimized for mobile devices

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Hayri Cem Sivas**

- 🌐 Portfolio: [Your Website](#)
- 💼 LinkedIn: [hayricemsivas](https://www.linkedin.com/in/hayricemsivas)
- 🐙 GitHub: [@cemsvs](https://github.com/cemsvs)
- 🎮 Itch.io: [cemgo](https://cemgo.itch.io)
- 📺 YouTube: [@CemOver](https://www.youtube.com/@CemOver)
- 📧 Email: hayricemsivas@gmail.com

---

## 🙏 Acknowledgments

- Inspired by modern web design trends
- Color palette inspired by Cyberpunk aesthetics
- Icons: Unicode emojis
- Fonts: Inter, System fonts

---

## 📸 Screenshots

### Desktop View
<details>
<summary>Click to expand</summary>

- Hero Section
- Projects Section
- Skills Section
- Contact Section

</details>

### Mobile View
<details>
<summary>Click to expand</summary>

- Responsive Layout
- Mobile Navigation
- Touch Optimizations

</details>

---

<div align="center">

### ⭐ Star this repository if you found it helpful!

**Made with 💜 and passion for technology**

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=cemsvs.portfolio-website)

</div>

---

## 🔮 Future Enhancements

- [ ] Add dark/light mode toggle
- [ ] Implement blog section
- [ ] Add contact form with backend
- [ ] Include testimonials section
- [ ] Add more interactive animations
- [ ] Implement i18n (Turkish/English)
- [ ] Add PWA support
- [ ] Create admin panel for easy updates

---

## 📞 Contact

Have questions or want to collaborate? Feel free to reach out!

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/hayricemsivas)
[![Email](https://img.shields.io/badge/Email-Contact-red?style=for-the-badge&logo=gmail)](mailto:hayricemsivas@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/cemsvs)
[![YouTube](https://img.shields.io/badge/YouTube-Subscribe-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/@CemOver)

</div>
