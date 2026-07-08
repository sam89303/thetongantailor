# The Tongan Tailor — Website

Single-page marketing site for The Tongan Tailor (TTT), built with Vite + vanilla HTML/CSS/JS. Live at [thetongantailor.netlify.app](https://thetongantailor.netlify.app), deployed from this repo's `main` branch via Netlify.

## Project structure

```
index.html              Page markup
css/style.css           Design system + styles
js/main.js              Nav, scroll reveal, mobile menu
public/assets/images/   Photos and favicon (served as-is, no build processing)
vite.config.js          base: './' so the build works from any path
```

## Local development

```
npm install
npm run dev
```

Opens a local dev server (usually http://localhost:5173) with hot reload.

## Building locally (optional)

```
npm run build
```

Outputs a static `dist/` folder you could open directly or drag into Netlify manually — not required day-to-day since deploys are automatic (see below).

## Making a design update

1. **Describe the change** — copy, layout, images, colors, whatever. Be specific (e.g. "swap the Jackets photo" or "make the hero headline smaller on mobile").
2. **The change gets made** locally and verified in a live preview before being called done.
3. **Commit + push** to GitHub (`sam89303/thetongantailor`, `main` branch).
4. **Netlify auto-deploys** — it detects the push, runs `npm run build`, and publishes automatically. No manual upload step.
5. **Check the live site** after ~30–60 seconds. Netlify's **Deploys** tab shows build progress and logs in real time.

## If a deploy looks wrong

- Check **Deploys** in the Netlify dashboard — click the deploy to see build logs if it failed.
- Netlify keeps every previous deploy — roll back instantly from the Deploys list ("Publish deploy" on an older one) if a new one breaks something.

## Netlify build settings

- **Base directory**: (blank — repo root)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Adding real content later (photos, copy, sizing info)

Send the files/text over, same process as above — wired in, committed, pushed, live.

## Pointing the real domain at it

Netlify → **Domain management** → **Add a domain** → follow the DNS instructions. This is the one step that needs your domain registrar login.
