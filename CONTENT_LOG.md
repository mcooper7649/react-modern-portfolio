# Content Log

A running log of changes made during the 2026 portfolio modernization.

- 2026-05-31 — Replaced deprecated `node-sass` with Dart Sass (`sass`) in `frontend_react`; node-sass fails to compile on modern Node (18+/22), which would break Netlify deploys. Drop-in replacement supported natively by react-scripts 5. Build verified.
- 2026-05-31 — Rewrote SEO/OpenGraph/Twitter meta in `public/index.html` (real title, description, keywords, author, canonical, og:*, twitter:*), fixed favicon to use `%PUBLIC_URL%`, and updated PWA `manifest.json` name/short_name/theme_color. Replaces leftover Create-React-App defaults.
- 2026-05-31 — Modernized hero copy in `Header.jsx`: full name "Michael Cooper" and 2026-accurate role tags (Senior Full-Stack Engineer; React/Next.js & Kotlin/Android; Self-Hosting, Homelab & AI Tooling). Added accessible alt text to profile and tech-stack images and marked the decorative circle aria-hidden.
