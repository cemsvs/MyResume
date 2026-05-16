# cemsvs / portfolio

Personal portfolio site. Third version — built from scratch twice, this time with a cleaner head.

Live at: **[your domain here]**

---

## What's in here

A single-page portfolio with a few sub-pages. No frameworks, no build step — just HTML, CSS, and a small JS file. The focus is on VeinLight, my main project right now, but it also covers my other work, skills, and contact info.

Sub-pages:
- `/public/myHobbies.html`
- `/public/contact.html`
- `/public/myScreenshots.html` — Cyberpunk 2077 photo mode gallery

---

## Stack

| | |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 — custom properties, grid, flexbox |
| Scripting | Vanilla JS — Intersection Observer for scroll animations |
| Fonts | [Syne](https://fonts.google.com/specimen/Syne) (headings) + [Outfit](https://fonts.google.com/specimen/Outfit) (body) via Google Fonts |

No dependencies. No npm. Open `index.html` and it runs.

---

## Structure

```
portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── ProfilePhotov2.jpeg
│   └── photomode_*.png       ← screenshot gallery images
└── public/
    ├── contact.html
    ├── myHobbies.html
    └── myScreenshots.html
```

---

## Running locally

```bash
git clone https://github.com/cemsvs/portfolio-website.git
cd portfolio-website

# any static server works, or just open the file directly
python -m http.server 8000
```

---

## Customizing

Colors live in `:root` inside `style.css`:

```css
:root {
  --bg:     #0b0d0c;
  --ember:  #e07540;   /* main accent */
  --teal:   #3a9178;   /* secondary */
  --text:   #d8d2cb;
}
```

Skills and project content are all in `index.html` — straightforward to edit. Skill bars use a `data-skill` attribute (0–100) that the JS picks up on scroll.

---

## Versions

| Version | Notes |
|---------|-------|
| v1 | First attempt — built by hand, learned a lot |
| v2 | Redesigned with AI assistance, purple/indigo palette |
| v2.5 | Small additions, same base |
| **v3** | Full rewrite. New palette, new fonts, VeinLight featured, JS bugs fixed |

---

## Featured: VeinLight

Most of the portfolio exists to point at this. VeinLight is a survival horror roguelite I've been building solo in Unity — microphone-based gameplay, daily quota system, a cave troll that hunts you if you fail. Currently in alpha.

- itch.io: [cemgo.itch.io/veinlight](https://cemgo.itch.io/veinlight)
- Steam: [store.steampowered.com/app/4291310/VeinLight](https://store.steampowered.com/app/4291310/VeinLight)

---

## Contact

- Email: hayricemsivas@gmail.com
- GitHub: [@cemsvs](https://github.com/cemsvs)
- YouTube: [@CemOver](https://www.youtube.com/@CemOver)
- itch.io: [cemgo](https://cemgo.itch.io)

---

MIT License
