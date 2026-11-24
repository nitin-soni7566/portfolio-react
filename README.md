# Nitin Soni — Portfolio (React + Vite)

## Run locally
npm install
npm run dev        # http://localhost:5173

## Edit content
Page text, links and projects live in `src/data.js`.
Section names are in `src/App.jsx`, diagram labels in `src/ArchDiagram.jsx`, and the page title and meta tags in `index.html`.
Resume PDF: `public/Nitin_Soni_Resume.pdf` (replace with a newer one any time).

## Build & deploy
npm run build      # output in dist/

- Netlify / Vercel: import the repo, build command `npm run build`, output folder `dist`.
- GitHub Pages: push `dist/` to a `gh-pages` branch (base is already './').
- Any static host / cPanel: upload the contents of `dist/`.
