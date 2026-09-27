/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL IMAGE AND VIDEO URLS LIVE HERE.
 *  Every URL below is a dummy placeholder. Replace each one with the real asset
 *  (a CDN URL, or a path such as '/assets/video/app-overview.mp4' if you drop
 *  the files into /public/assets/...). Nothing else in the codebase hard-codes
 *  an asset URL.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const ph = (w: number, h: number, bg: string, label: string, fg = '0a0d12'): string =>
  `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(label)}&font=montserrat`;

export interface VideoAsset {
  /** MP4 (H.264) — required, plays everywhere. */
  mp4: string;
  /** Optional WebM (VP9 with alpha) — use this for the green-screen-removed transparent version. */
  webm?: string;
  /** Still frame shown before the video loads and for reduced-motion users. */
  poster: string;
}

export const ASSETS = {
  brand: {
    /** Full-colour logo for the header (roughly 3:1, transparent PNG or SVG). */
    logo: ph(360, 120, 'ebf5ff', 'Captain Cargo'),
    /** Logo used on the dark footer CTA block. */
    logoOnDark: ph(360, 120, '181d27', 'Captain Cargo', 'ffffff'),
  },

  /** Floating 3D illustrations (transparent PNG/WebP, no background plate). */
  illustrations: {
    hero: ph(1200, 720, 'cce7ff', '3D hero — plane, truck, ship & parcels'),
    parcel: ph(480, 480, 'f1e6ff', '3D parcel'),
    phone: ph(480, 480, 'd3f6e3', '3D phone'),
    globe: ph(480, 480, 'cce7ff', '3D globe'),
    headset: ph(480, 480, 'fff2be', '3D headset'),
    dashboard: ph(480, 480, 'ffe4d4', '3D dashboard'),
    about: ph(960, 720, 'f1e6ff', 'Team / operations photo or 3D scene'),
  },

  videos: {
    /** Mobile app overview — the 2-phone promo clip (Home + Wallet). */
    appOverview: {
      mp4: 'https://cdn.example.com/captain-cargo/video/app-overview.mp4',
      webm: 'https://cdn.example.com/captain-cargo/video/app-overview.webm',
      poster: ph(1920, 1080, 'f1e6ff', 'App overview video'),
    } satisfies VideoAsset,

    /** Cargo TMS overview — second clip for the agent dashboard page. */
    tmsOverview: {
      mp4: 'tms-overview.mp4',
      webm: 'tms-overview.webm',
      poster: ph(1920, 1080, 'cce7ff', 'Cargo TMS overview video'),
    } satisfies VideoAsset,
  },

  /** Mobile app screenshots — portrait, ideally 1170 × 2532 (iPhone 3x) or similar. */
  appScreens: {
    home: ph(390, 844, 'f1e6ff', 'Home screen'),
    shipments: ph(390, 844, 'f1e6ff', 'My Shipments'),
    tracking: ph(390, 844, 'f1e6ff', 'Tracking Details'),
    wallet: ph(390, 844, 'f1e6ff', 'My Wallet'),
    support: ph(390, 844, 'f1e6ff', 'Help & Support'),
  },

  /** Cargo TMS screenshots — landscape, 1536 × 1024 or larger. */
  tmsScreens: {
    dashboard: ph(1536, 1024, 'e4ccff', 'Cargo TMS dashboard'),
  },

  /** Contact page map image (static map screenshot). */
  officeMap: ph(1200, 600, 'd3f6e3', 'Map — Khalidiya Tower 4, Riyadh'),
} as const;
