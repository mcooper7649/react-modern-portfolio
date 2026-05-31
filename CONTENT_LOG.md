# Content Log

A running log of changes made during the 2026 portfolio modernization.

- 2026-05-31 — Replaced deprecated `node-sass` with Dart Sass (`sass`) in `frontend_react`; node-sass fails to compile on modern Node (18+/22), which would break Netlify deploys. Drop-in replacement supported natively by react-scripts 5. Build verified.
