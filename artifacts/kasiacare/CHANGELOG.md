# KasiaCare Changelog

How to use this file: add a new entry at the top each time the site changes. Use a new version number for user-facing changes, or an **Infrastructure** note (no version bump) for behind-the-scenes work.

---

## Infrastructure — April 16, 2026

**Dev/Staging Environment**

Added a dedicated development preview environment at `/dev/`. The dev site mirrors the production site exactly but displays a visible "Dev Preview" badge in the header and a "Development Preview — Changes here are not live" bar at the bottom of every page. Both environments run independently. This gives the team a safe place to review and approve changes before they go live.

No changes were made to the production site (`/`).

---

## v0.1.0 — Pre-Release — April 16, 2026

Initial build of the KasiaCare website. All pages and core features are in place. The site is not yet publicly launched.

### Pages

- **Home** — Hero section, mission statement, "Who It's For" cards (Family Caregivers, Individuals, Personal Aids), feature preview grid, and email sign-up CTA.
- **About** — Story of Kasia, the founding mission, and the team's caregiving philosophy.
- **Features** — Full breakdown of all product features organized by tier (All Tiers / Plus).
- **Pricing** — Basic and Plus plan comparison with pricing and feature lists; FAQ section.
- **Angels** — KasiaCare Angels volunteer program overview and application section.
- **Contact** — Sign-up / contact form and general enquiry information.
- **Privacy** — Privacy policy page.

### Site-Wide Features

- Floating navigation with animated hamburger menu (top-left logo pill, top-right menu dropdown).
- Active-page indicator in the nav dropdown.
- "Sign Up for a Free Trial" CTA in the nav menu and footer.
- Animated flower banner (🌸🌹🌺🌻🪷) on a dark navy bar — appears after every page hero and at the top of the footer, site-wide.
- Responsive layout across all pages (mobile and desktop).
- Scroll-to-top on all internal navigation.
- Footer with product links, company links, and legal links.

### Design

- Color palette: dark navy (`#1a3a5c`), warm cream (`#faf7f2`), rose/accent (`#c4667a`), sage green.
- Typography: Cormorant Garamond (serif headings) + DM Sans (body).
- Framer Motion animations on cards, the nav dropdown, and the flower strip.
