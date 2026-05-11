# retro-spec

A personal history of the cars, phones, and laptops you've owned. Lightweight, static, self-hostable.

## How it works

| Branch | Contains |
|---|---|
| `main` | Next.js app code — shareable as a template |
| `data` | Your JSON files and images — personal, never merged into main |

GitHub Actions checks out both branches at build time, merges them, and deploys to GitHub Pages automatically on every push to either branch.

## Local development

```bash
npm install
npm run dev          # uses whatever's in data/ and public/images/ locally
npm run dev:branch   # syncs from the data branch first, then starts dev
```

Data files (`data/*.json`) and images (`public/images/`) are gitignored on `main` so they can never be accidentally committed to the app branch.

## Data format

Each category has a JSON file in the `data` branch:

```json
{
  "id": "unique-slug",
  "released": "YYYY-MM",   // official product launch date
  "acquired": "YYYY-MM",   // when you got it
  "sold": "YYYY-MM",       // when you sold it (omit if still owned)
  "current": false,        // set to suppress the current badge when sold date is unknown
  "image": "phones/filename.webp"
}
```

Cars also have: `make`, `model`, `year`, `trim`, `color` (hex for swatch), `mileageIn`, `mileageOut`  
Phones also have: `brand`, `model`, `storage`, `color`  
Laptops also have: `brand`, `model`, `year`, `chip`, `ram`, `storage`, `color`

## Adding a new item

1. `git checkout data`
2. Add your image to `public/images/{category}/` (WebP recommended, max 1200px)
3. Add an entry to `data/{category}.json`
4. `git add . && git commit -m "add ..." && git push`
5. GitHub Actions rebuilds and deploys automatically

## Deployment (GitHub Pages)

1. Create the repo on GitHub and push both branches
2. Go to Settings → Pages → Source: **GitHub Actions**
3. If deploying as a project page (not `username.github.io`), add a repository variable `NEXT_PUBLIC_BASE_PATH=/retro-spec`

## Tech

Next.js 14 · TypeScript · Tailwind CSS · Static export
