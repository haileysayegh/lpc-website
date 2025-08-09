# Hailey Sayegh, LPC — Website

Static site for `haileysayegh.com`, built with Tailwind CSS and deployed via GitHub Pages from the `docs/` folder.

## Local preview

1) Install deps

```
npm install
```

2) Build CSS once

```
npm run build
```

3) Or watch CSS during edits

```
npm run dev:css
```

4) Preview the site at `http://localhost:5173`:

```
npm run preview
```

## Deploying to GitHub Pages

This repo is configured to serve from the `docs/` directory.

1) Build CSS

```
npm run build
```

2) Commit and push to `main`

```
git add .
git commit -m "Update site"
git push origin main
```

3) In GitHub → Settings → Pages, set:

- **Source**: Deploy from a branch
- **Branch**: `main` / folder `docs`

Custom domain: `docs/CNAME` contains `haileysayegh.com`. Point your DNS A/ALIAS to GitHub Pages and add the domain in Pages settings.

