<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Whisp Website

This repository contains the marketing/landing site for Whisp - a lightweight, location-based app for short local conversations and micro-communities. The site is built with React + TypeScript and Vite, and uses TailwindCSS-style utility classes.

## What this site shows
- Short product overview and hero
- Feature highlights (anonymous avatars, location channels, privacy-first design)
- Use cases gallery and carousel demonstrating real-world channels
- Waitlist / call-to-action and footer with deploy settings

## Run locally

Prerequisites: Node.js (LTS recommended)

1. Install dependencies:

```bash
npm install
```

2. Run in development mode:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

## Deploy
This project is configured to publish the `dist` folder using `gh-pages`.

```bash
npm run deploy
```

## Notable files
- `App.tsx` - main page composition (Hero, Features, Gallery, UseCases, WaitingList, Footer)
- `components/` - React UI sections used on the landing page
- `vite.config.ts`, `package.json` - build and deploy scripts

## About Whisp (short)
Whisp is designed for quick, in-the-moment local conversations without profiles or persistent identities. Key ideas highlighted on the site:
- Temporary avatars for lightweight recognition
- Location-based channels (neighborhoods, coffee shops, events)
- Privacy and cryptography-first approach
- Simple interactions: join a channel, send a short whisper, react with hearts

## Contributing
This repo contains the front-end marketing site. For UI changes, edit or add components in the `components/` folder and test locally with `npm run dev`.

If you want me to help update copy, adjust layout, or remove/add features, tell me which component to change and I'll make a focused patch.

---
Generated/edited at your request.
