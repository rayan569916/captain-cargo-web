# Captain Cargo International: website

Angular 21 (standalone components, signals, zoneless) + Tailwind CSS v4.
The visual system follows the **Geniestudio** style reference: sky-tint canvas, bone-white cards,
mid-weight display type, dark pill buttons, pastel tiles and a single iris-blue accent.

## Run it

```bash
npm install
npm start          # http://localhost:4200
npm run build      # production build in dist/captain-cargo-web
```

Requires Node 20.19+ or 22.12+.

## Pages

| Route         | Page                 | Sections                                                                                                             |
| ------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `/`           | Home                 | Hero + quick track, destinations marquee, services, **app band with overview video**, how it works, app + TMS, why us, stats, testimonial, FAQ |
| `/about`      | About                | Headline, stats, story, mission & vision, leadership message (hidden until text is added), why us                  |
| `/services`   | Services             | All 9 services, benefits, process, quote CTA                                                                         |
| `/mobile-app` | Captain Logistic app | **Overview with app video**, feature grid, 5 module deep-dives (Home, My Shipments, Tracking, Wallet, Help & Support), how it works, destinations, download CTA |
| `/cargo-tms`  | Cargo TMS            | **Overview with TMS video**, module groups (Finance, Fleet, Accounts, System), dashboard screenshot, app ⇄ TMS flow, multi-branch capabilities, agent login CTA |
| `/track`      | Track                | Reference search (supports `?ref=CAP-2026-030`), shipment summary, stage timeline                                   |
| `/contact`    | Contact              | Call / email / WhatsApp / office, contact form, map, FAQ                                                             |
| `**`          | 404                  |                                                                                                                      |

Module anchors work as deep links, e.g. `/mobile-app#wallet`, `/cargo-tms#finance`.

## Replacing images and videos

**Every asset URL is in one file:** `src/app/core/assets.config.ts`. All of them are dummy
placeholders (`placehold.co` images, `cdn.example.com` videos). Replace each URL with the real
file, either a CDN URL or a local path after dropping files into `public/`
(e.g. `public/assets/video/app-overview.mp4` → `'/assets/video/app-overview.mp4'`).

| Key                          | What goes there                                                        |
| ---------------------------- | ---------------------------------------------------------------------- |
| `brand.logo` / `logoOnDark`  | Logo, ~3:1, transparent PNG or SVG                                     |
| `illustrations.*`            | Floating 3D renders (transparent PNG/WebP, no background)              |
| `videos.appOverview`         | The two-phone app promo clip (Home + Wallet)                           |
| `videos.tmsOverview`         | The Cargo TMS promo clip                                               |
| `appScreens.*`               | Clean app screenshots, portrait (e.g. 1170 × 2532)                     |
| `tmsScreens.dashboard`       | TMS home screen, landscape (1536 × 1024 or larger)                     |
| `officeMap`                  | Static map image of the Riyadh office                                  |

**Videos:** each takes an `mp4` (required), an optional `webm` and a `poster` image. The app promo
was shot on green screen. Export a **WebM with alpha** (green removed) as `webm` so the phones float
on the page, plus an MP4 fallback for Safari. Videos autoplay muted and loop, don't autoplay for
reduced-motion users, and have a play/pause button. Keep each under ~3 MB and strip the audio track.

## Content and links to finish before launch

- `src/app/core/data/site.data.ts`
  - `LINKS.playStore`: the real Google Play URL (package id)
  - `LINKS.appStore`: set it if an iOS version exists (the button stays hidden while empty)
  - `LINKS.agentLogin`: the Cargo TMS login URL
  - `ABOUT.leadershipMessage`: add text to show the leadership section
  - `TESTIMONIALS`: add real customer quotes (with permission)
  - `FAQS`: confirm the prohibited-items answer with operations
- `src/app/core/services/tracking.service.ts`: returns a **labelled sample** shipment. Connect it to
  the TMS tracking API (see the TODO in `lookup()`).
- `src/app/pages/contact/contact.ts`: the form currently prepares the message for WhatsApp or email.
  Connect `submit()` to a backend endpoint when one exists.

## Where things live

```
src/
  styles.css                   Tailwind v4 @theme tokens + component classes (.btn-primary, .card, .tile, .pill …)
  app/
    core/
      assets.config.ts         ← all image/video URLs
      data/                    ← all page copy: site, services, app modules, TMS modules
      services/tracking.service.ts
    layout/                    header, footer
    shared/                    icon set, section header, feature video, phone/browser frames, FAQ, store buttons
    pages/                     one folder per route
```

## Design tokens (from the style reference)

- Canvas `#ebf5ff`, card `#fafdff`, ink `#0a0d12`, button `#181d27`, body `#535862`, muted `#93979f`
- Accent `#0069e0` / `#0099ff`: used for highlights and the hero frame only, never as a button fill
- Pastel tiles: lavender `#f1e6ff`, mint `#d3f6e3`, powder `#cce7ff`, solar `#fff2be`, peach `#ffe4d4`
- Radii: cards 32px, images 24px, inputs 16px, buttons and tags full pill
- Type: display is **Aeonik** 500 (licensed; **General Sans** loads as the free stand-in), UI/body is **Geist** 500
- To move the accent toward the Captain Cargo purple/gold, change `--color-iris-blue`, `--color-iris-light`,
  `--color-sky-blue` and `--gradient-iris` in `styles.css`.
