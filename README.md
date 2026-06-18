# Aphrodite's Color Analysis

A rebuild of [aphroditescoloranalysis.com](https://aphroditescoloranalysis.com) — a virtual
seasonal color-analysis studio. The brand's hooks: a color reading done **by a human, not an
algorithm**, and a signature **gemstone bracelet hand-matched to your palette** that you keep.

The centerpiece is the **"Before Your Consultation" intake studio** — a free, guided, five-minute
flow that captures skin-tone photos (in natural light, client-side), style goals, and questions so
the live session goes straight to the good part. It reframes the old dead "Contact Us" form into the
front door of the experience.

> **This is a front-facing demo.** Nothing is wired to a backend — the intake, quiz, and gift flows
> are fully interactive but submit nowhere. Photos are previewed in-browser only and never uploaded.

## What's inside

| Route       | What it is                                                                 |
| ----------- | -------------------------------------------------------------------------- |
| `/`         | The marketing home: hero, method, the four seasons, how-it-works, the bracelet, pricing + comparison, stories, the artist, FAQ. |
| `/intake`   | **The hero feature** — a 6-step intake studio with photo capture + gentle lighting hints, style-goal chips, a review screen, autosave-to-`localStorage`, and a completion state. |
| `/quiz`     | "Discover Your Season" — a playful interactive quiz that scores you into a season and routes you to the real reading. |
| `/gift`     | Gift a session with a live-updating digital gift-card preview.             |

## Design system

- **Type:** Fraunces (editorial display serif) + Inter (UI/body).
- **Palette:** Marble White, Aphrodite Rose, Aegean Ink, Olive Laurel, Gilded Sand, Sea-Glass Mist,
  Shell Blush — with the four color seasons as a recurring accent motif.
- **Visual language:** painterly color itself — SVG/CSS gemstone beads, bracelet strands, swatch
  cards, and watercolor "blooms" — so there are no stock photos or copyright concerns. Real product
  photography (founder, finished bracelets, before/after drapings) drops straight into these slots.

## Tech

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4. Static export — every route
prerenders. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
