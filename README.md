# Aphrodite's Color Analysis

A rebuild of [aphroditescoloranalysis.com](https://aphroditescoloranalysis.com) — a virtual color
analysis studio. The rebuild stays faithful to her brand (dark, romantic, rose-floral, candlelit)
and her offering, and elevates it to a couture polish.

Her promise, kept: a color reading done **by a human, not an algorithm** ("no AI, no filters"), a
single virtual session grounded in your own input, and two things to take away — a **written color
report** and a **gemstone bracelet made of stones in your unique color set**.

As a supporting demo, the site includes the **"Before Your Consultation" intake tool** (`/intake`) —
a free, guided, five-minute flow that captures skin-tone photos (client-side, with gentle lighting
hints), style goals, and questions, so the session goes straight to the good part.

> **Front-facing demo.** Nothing is wired to a backend. The contact and intake forms submit nowhere;
> intake photos are previewed in-browser only and never uploaded. There is **no published pricing**
> (she lists "contact for pricing") and no e-commerce — by design, to mirror her real site.

## Routes

| Route     | What it is                                                                 |
| --------- | -------------------------------------------------------------------------- |
| `/`       | The site: hero, the reading, the method (her five lenses), what you receive (report + bracelet), the signature bracelet, the seasons, the experience, the intake tool, FAQ, contact. |
| `/intake` | The "before your consultation" intake tool — a 6-step flow with photo capture + lighting hints, style-goal chips, a review screen, autosave, and a completion state. |

## Design system

- **Type:** Playfair Display (high-contrast romantic serif) + Inter (UI/body).
- **Palette:** warm near-black charcoal canvas, antique rose, restrained gold, ivory text, with the
  four color seasons as a recurring palette/bracelet motif. Candlelit radial glows for warmth.
- **Visual language:** painterly color and a line-art rose motif — SVG/CSS gemstone beads, bracelet
  strands, swatch cards, color drapes — so there are no stock photos or copyright concerns. Her real
  photography (her, finished bracelets, clients) drops straight into these slots later.

## Tech

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4. Static — every route prerenders.
Deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```
