# Portfolio

React + Vite + TypeScript + Tailwind CSS v4 portfolio site, with a separate photography gallery page.

## Local development

```bash
npm install
npm run dev
```

Opens on http://localhost:5173

## Build

```bash
npm run build   # outputs to dist/
npm run serve   # preview the production build locally
```

## Before you deploy

Replace the placeholder images at:

- `src/assets/srijit-profile.webp`
- `src/assets/srijit-about.webp`

with your real photos (any image format works, just update the filenames/imports in
`src/components/sections/about.tsx` if you rename them).

## Deploying to Vercel

1. Push this repo to GitHub (see steps below).
2. Go to https://vercel.com/new and import the GitHub repo.
3. Vercel auto-detects the Vite framework preset — build command `vite build`,
   output directory `dist`. No changes needed.
4. Click **Deploy**.

`vercel.json` is already included so client-side routes (like `/photography`) work
correctly on refresh/direct link.
