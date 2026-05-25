# Portfolio Website — React + Animated Dot Grid Background

A stunning full-stack developer portfolio with a **unified animated background** that spans the entire page. The glow orbs drift smoothly as you scroll.

## ✨ Features

- **Animated Global Background** — One dot grid with floating glow orbs that move based on scroll position
- **Smooth Scroll Animation** — Orbs drift diagonally across the page as you scroll down
- **Responsive Design** — Mobile-first, works on all devices
- **Dark Theme** — Purple accent palette with cyan accents
- **SEO Ready** — Proper meta tags and semantic HTML
- **Fast** — Built with Vite + React

## 🚀 Quick Start

Open in Browser: https://ravi2005-portfolio.vercel.app/ or https://raviprasath-portfolio.netlify.app/

## 📁 Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx              ← Main app wrapper
    ├── App.css              ← Global styles & CSS variables
    ├── index.jsx            ← Entry point
    └── components/
        ├── Background.jsx   ← Global animated bg (NEW!)
        ├── Background.css
        ├── Navbar.jsx
        ├── Navbar.css
        ├── Hero.jsx
        ├── Hero.css
        ├── About.jsx
        ├── About.css
        ├── Skills.jsx
        ├── Skills.css
        ├── Projects.jsx
        ├── Projects.css
        ├── Contact.jsx
        ├── Contact.css
        ├── Footer.jsx
        └── Footer.css
```

---

## 🎨 Customization

### Change Your Name & Info

1. **Hero section** — `src/components/Hero.jsx`
   - Line 26: Change `"Alex Chen"`
   - Line 28: Update role description
   - Lines 46-53: Update tech stack in code card

2. **About section** — `src/components/About.jsx`
   - Line 32: Change `"Alex Chen"` to your name
   - Lines 30-36: Update bio text
   - Line 58: Update location

3. **Skills** — `src/components/Skills.jsx`
   - Update skill arrays in `skillGroups`

4. **Projects** — `src/components/Projects.jsx`
   - Update `projects` array with your real projects
   - Add live demo & GitHub links

5. **Contact** — `src/components/Contact.jsx`
   - Line 14: Update email
   - Update social links

### Change Colors

All colors are CSS variables in `src/App.css`:

```css
:root {
  --bg:       #070710;        /* Main dark bg */
  --accent:   #7c6aff;        /* Purple accent */
  --accent2:  #a78bfa;        /* Lighter purple */
  --text:     #e8e6ff;        /* Text color */
  --muted:    #6b6a8a;        /* Muted gray */
  --green:    #4ade80;        /* Success green */
  --cyan:     #38bdf8;        /* Cyan for accents */
}
```

Just change the hex values!

### Adjust Background Animation

In `src/components/Background.jsx`, the orb movement is controlled here:

```javascript
// Lines 17-26 — Main orb
const pct = scrollY / (totalH() - window.innerHeight);
const x = 30 + Math.sin(pct * Math.PI * 2) * 25;  // 30% from left
const y = 10 + pct * 80;                          // drifts 80vh down

// Change these numbers to move the orbs differently:
// x: "30" = starting position from left (0-100%)
// * 25 = amplitude of sine wave (how much it wobbles)
// y: "10" = starting position from top
// * 80 = total vertical drift (how far it travels)
```

### Tweak Dot Grid

In `src/components/Background.css`, line 18:

```css
background-size: 28px 28px;  /* Smaller = denser dots, Larger = sparser */
```

Try `20px` for dense, `40px` for sparse.

---

## 📦 Deployment

### Vercel (Recommended — 1 click)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repo
4. Click "Deploy"

### Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag & drop the `dist/` folder

### GitHub Pages
```bash
# Update vite.config.js:
# base: '/portfolio-repo-name/',

npm run build
# Push dist/ folder to gh-pages branch
```

---

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite** — Lightning-fast build tool
- **CSS3** — All styling (no Tailwind/Bootstrap needed)
- **Vanilla JS** — Scroll animation

---

## 📝 Notes

- The global background is **fixed** so it doesn't move with content
- All sections have a **semi-transparent dark overlay** so content is readable
- The glow orbs use **requestAnimationFrame** for smooth 60fps animation
- The design is **fully responsive** — test on mobile!

---

## 🎯 What You Changed

✅ **Global Background** — `Background.jsx` + `Background.css`  
✅ **Scroll Animation** — Orbs drift based on scroll position  
✅ **Unified Theme** — Same background across all sections  
✅ **Smooth Transitions** — `cubic-bezier` easing for natural motion  

---

## 💡 Tips

- Customize the glow colors in `Background.css` (lines 30-40)
- Add parallax to content by adjusting scroll values
- For slower animation, increase transition time in Background.css
- Add more orbs by duplicating `global-bg__orb` divs in Background.jsx

---

Happy coding! 🚀
# Portfolio
