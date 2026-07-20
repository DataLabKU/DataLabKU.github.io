# DATA Lab Website

Single-page website for the **DATA Lab** (AI & Data Science Research Laboratory) at Kuwait University's Department of Computer Science.

**Live site:** [www.datalabku.org/](https://www.datalabku.org/)
**Developed by:** [Abdullah Almekhyal](https://github.com/mekhyal)

## Tech Stack

- React 18 + Vite
- CSS with design tokens and animations
- Tabler Icons (CDN)
- Inter font (Google Fonts)

## Project Structure

```
datalab/
├── public/
│   └── images/people/   # Drop profile photos here (see README inside)
├── src/
│   ├── components/      # Nav, Hero, People, PersonModal, etc.
│   ├── data/            # content.js, cvData.js
│   ├── hooks/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
└── build/               # Production output (generated)
```

## Profile Photos

Add photos to `public/images/people/` using these filenames:

| File | Person |
|------|--------|
| `lulkulaib.jpg` | Dr. Lulwah AlKulaib |
| `halghanem.jpg` | Humoud Alghanem |
| `aalabdulsalam.jpg` | Abdullah Alabdulsalam |
| `salmaamari.jpg` | Sulaiman Almaamari |
| `aalmekhyal.jpg` | Abdullah Almekhyal |
| `yjoudah.jpg` | Yousef Joudah |
| `ajlidi.jpg` | Ahmad Jlidi |

Until a photo is added, initials are shown automatically.

## Commands

```bash
cd datalab
npm install
npm start          # Dev server → http://localhost:3000
npm test           # Run tests
npm run build      # Production build → build/
npm run deploy     # Build & push to gh-pages branch
```

## Deploy to GitHub Pages

**Option A — GitHub Actions (automatic):**  
Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

**Option B — Manual:**
```bash
cd datalab
npm run deploy
```

Then in GitHub repo **Settings → Pages**, set source to the `gh-pages` branch.

## Lab Info

- **Director:** [Dr. Lulwah AlKulaib](https://www.lalkulaib.com/)
- **Email:** lalkulaib@cs.ku.edu.kw
- **GitHub:** [github.com/datalabku](https://github.com/datalabku)
