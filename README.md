# AETHERIA Studio — Next-Gen Digital Products & Spatial Engineering Website

A complete, modern, visually attractive, and fully responsive website designed and engineered for **AETHERIA Studio**, a premier digital product, AI interface, and spatial computing engineering agency.

---

## 🌟 Live Demo & Local Server

The website is currently being served locally via Python HTTP server:
- **Local URL:** [http://localhost:8000](http://localhost:8000)

To start the server manually at any time:
```powershell
python -m http.server 8000
```
Then open `http://localhost:8000` in your preferred web browser.

---

## 🎨 Design & Aesthetic Highlights

- **Bespoke Obsidian & Neon Color Palette:** Tailored deep obsidian background (`#08090d`), electric violet, royal indigo, cyan glow, and emerald accents.
- **Dark & Light Mode Support:** One-click instant theme toggle in the header and mobile drawer, with automatic preference persistence in `localStorage`.
- **Dynamic Ambient Canvas Background:** Interactive particle constellation canvas that tracks mouse movement and smoothly shifts colors according to the active theme.
- **Modern Typography:** Handcrafted typographic hierarchy using Google Fonts (*Syne* for headlines, *Outfit* for crisp body UI, and *JetBrains Mono* for technical badges and metrics).
- **Glassmorphism & Micro-Interactions:** Subtle backdrop-filter blurs, card hover elevations, smooth button scaling, active link indicator lines, and glowing neon borders.
- **Custom High-Resolution Generated Visuals:** 5 custom bespoke digital product mockups created specifically for this website (Aurora Intelligence, Vitalis Health, Aura Living, Cosmos Studio, and Atlas Spatial).

---

## 🧱 Website Structure & Core Sections

1. **Top Announcement Bar:** Dismissible update banner highlighting the annual engineering report.
2. **Sticky Glassmorphic Header & Navbar:**
   - Animated SVG brand mark
   - Smooth-scrolling anchor links with real-time **ScrollSpy** active state tracking
   - Top page scroll progress bar
   - Dark/Light mode theme switch
   - "Book Consultation" Quick Modal trigger
   - Responsive slide-out mobile drawer with backdrop blur
3. **Hero Section:**
   - Availability badge with live pulsing status light
   - High-impact headline & value proposition
   - Dual action CTAs: "Explore Selected Work" & "Calculate Project Cost"
   - 3D visual showcase with floating metric pills (`+340% User Velocity`, `99.4% CSAT`)
   - Stats counter grid (`150+` Products, `$420M+` Funding, `99.4%` Retention, `18` Awards)
   - Social proof client marquee (Vercel, Stripe, Linear, Figma, OpenAI, Notion)
4. **About Section:**
   - Architectural narrative & design philosophy
   - Interactive 3-tab system: **Our Philosophy**, **The 4-Stage Process**, and **Engineering Standards**
   - 4-card core values grid (Pixel Precision, Scalability, Radical Transparency, Velocity)
5. **Services Section:**
   - 6 comprehensive cards detailing services (Product Strategy & UI/UX, Full-Stack Web & Mobile, AI Integration, Spatial Computing & 3D, Design Systems, and Cloud Performance)
   - Feature checklists with SVG indicators, deliverable badges, and direct scope estimator links
6. **Portfolio & Selected Work:**
   - Category filtering pills (*All Work*, *AI & Data*, *Web & Mobile*, *Spatial & 3D*, *Luxury & E-Commerce*)
   - Real-time live search bar (filters by project title, tagline, or tech stack tags)
   - 6 rich case study cards
   - **Interactive Project Detail Modal:** Displays executive overview, client, timeline, the challenge, our engineering solution, measurable impact metrics, and tech stack tags
7. **Interactive Project Cost & Timeline Estimator:**
   - Step 1: Select Project Type (SaaS, Mobile, E-Commerce, Enterprise AI/Spatial)
   - Step 2: Select Project Scale (MVP, Growth, Enterprise)
   - Step 3: Desired Timeline (Expedited Sprint, Standard, Flexible)
   - Step 4: Optional Add-ons (Design System Tokens, AI Assistant Agent, Core Web Vitals Tuning, 6-Month SLA)
   - Real-time dynamic budget range and delivery schedule calculation
   - **"Apply Scope to Inquiry Form" CTA:** Smoothly scrolls to the contact section and auto-populates the service dropdown and project details textarea
8. **Client Reviews & Testimonials Carousel:**
   - Testimonials from real founders and CTOs
   - 5-star ratings, quotes, verified roles and company tags
   - Next/Previous controls, interactive dot indicators, and automatic rotation
9. **Frequently Asked Questions (FAQ) Accordion:**
   - 6 comprehensive questions addressing project kickoffs, IP ownership, team integration, and warranty
   - Smooth expand/collapse animation with ARIA accessibility compliance
10. **Contact & Project Inquiry Section:**
    - Studio direct communication channels with one-click clipboard copy
    - **Live San Francisco HQ World Clock:** Real-time ticking seconds formatted for PST with active availability indicator
    - Comprehensive interactive form:
      - Name, Work Email, Company, Service dropdown
      - Interactive budget selector pills
      - Message textarea with live character counter
      - Real-time client-side validation with inline warning states
      - Realistic simulated transmission delay with loading spinner
      - Rich celebratory confirmation card with unique reference ID (`AETH-XXXX`) and reset button
11. **Footer:**
    - Newsletter subscription input with toast notification feedback
    - Full sitemap navigation
    - Social links (GitHub, X / Twitter, LinkedIn)
    - Copyright and legal notice
12. **Floating Back-to-Top Button:**
    - Automatically fades in after scrolling 400px and smoothly navigates to top

---

## 📁 Project File Structure

```
c:\Users\Nandhana\Documents\Github\
  ├── index.html                   # Semantic HTML5 structure & SEO metadata
  ├── README.md                    # Project documentation
  ├── css/
  │    ├── style.css               # Core design tokens, typography, dark/light themes
  │    ├── components.css          # Rich component styling, cards, modals, hero, estimator
  │    └── responsive.css          # Mobile drawer & multi-breakpoint responsive styles
  ├── js/
  │    ├── portfolio-data.js       # Case studies, testimonials, and FAQ data objects
  │    ├── canvas-bg.js            # Ambient interactive particle constellation background
  │    ├── estimator.js            # Real-time project cost & timeline calculation engine
  │    └── app.js                  # Main controller: theme, scrollspy, modal, form, clock
  └── assets/
       └── images/
            ├── hero-showcase.jpg  # Generated neon glassmorphic dashboard showcase
            ├── project-health.jpg # Generated mobile health biometric application UI
            ├── project-luxury.jpg # Generated luxury Scandinavian e-commerce MacBook UI
            ├── project-ai.jpg     # Generated AI node-based generative studio interface
            └── project-spatial.jpg# Generated Atlas Spatial holographic command center
```

---

## 🚀 Browser Compatibility & Accessibility

- **Zero External Dependencies:** Built with pure HTML5, CSS3, and modern ES6+ JavaScript. No node_modules or build step required.
- **Responsive:** Tested across desktop (1920px+), laptop (1280px), tablet (768px), and mobile (375px+).
- **Accessible:** Semantic markup, ARIA roles, keyboard navigation (Escape key modal dismissal), and focus indicators.
