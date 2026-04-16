# KasiaCare Changelog

How to use this file: add a new entry at the top each time the site changes. Use a new version number for user-facing changes, or an **Infrastructure** note (no version bump) for behind-the-scenes work.

---

## Infrastructure — April 16, 2026

**Dev/Staging Environment**

Added a dedicated development preview environment at `/dev/`. The dev site mirrors the production site exactly but displays a visible "Dev Preview" badge in the header and a "Development Preview — Changes here are not live" bar at the bottom of every page. Both environments run independently. This gives the team a safe place to review and approve changes before they go live.

No changes were made to the production site (`/`).

---

## [v0.1.0] — Pre-Release · April 16, 2026

Initial pre-release of the KasiaCare marketing website. This version establishes
the full public-facing site with all core pages, navigation, and content.

### Pages

- **Home** (`/`) — Hero section with tagline and CTA, mission statement, "Who It's For"
  audience cards (Family Caregivers, Individuals, Personal Aids), features preview
  grid, and email sign-up CTA section.
- **Features** (`/features`) — Full feature breakdown organized by tier: Daily
  Dashboard detail block (AM Care, Daily Tasks, PM Care, Activities, Appointments,
  Reminders). Core Features (All Tiers): Real-Time Checklist, Multiple Caregiver/Family
  Access, Medication Reminders (time-based), Google Calendar Sync, Emergency Contacts,
  Supply Needs, Printable Care Plan PDF, Caregiver Hub Basic, Email Notifications.
  Plus Features: Full Caregiver Hub + Visit Scheduling, Incident Notes, Goal Progress,
  Extended Dashboard & Reports, Extended Notifications (Text & Email), Data Input
  Guided Wizard. Six-calendar section: Meals, Personal Care, Tasks, Medication,
  Activities (all tiers), and Caregiver (Plus only) — each with a reminder option.
- **Pricing** (`/pricing`) — Three-column pricing layout: Basic ($14.99/month), Plus
  ($34.99/month, featured), and A La Carte personal support services. Includes a
  detailed A La Carte section with six service offerings delivered by KasiaCare Angels,
  and a Frequently Asked Questions section.
- **About** (`/about`) — Story of Kasia (1938–2023), the inspiration behind the
  platform. Founder profile for Lilia Kuzmicz (Founder & CEO). Mission statement
  section.
- **Angels** (`/angels`) — KasiaCare Angels volunteer program page. Four Angel roles
  (Social Media, Beta Testing, Care Plan Builder, Grant Research), recognition tiers
  table (Kasia's Angel, Guardian Angel, Archangel), and an application form.
- **Contact** (`/contact`) — Free trial sign-up form (name, email, password, role,
  plan selection). Contact information (email, websites). Feature voting section
  ("What should we build next?") with eight candidate features.
- **Privacy** (`/privacy`) — Combined Privacy Policy and Terms of Service. Includes
  Version 1 data policy statement (no PHI stored), data collection, data use, data
  sharing, security, user rights, and terms of service sections.

### Navigation & Layout

- Floating pill logo (top-left) and animated dropdown navigation menu (top-right)
  with links to all main pages plus a "Sign Up for a Free Trial" CTA button.
- Active-page indicator in the nav dropdown.
- Responsive layout — single-column on mobile, multi-column on desktop.
- Footer with product and company link columns, mission quote, and copyright line.
- Decorative `FlowerStrip` divider component used throughout all pages.
- Animated flower banner (🌸🌹🌺🌻🪷) on a dark navy bar — appears after every page hero and at the top of the footer, site-wide.
- Scroll-to-top on all internal navigation.

### Features & Functionality

- Framer Motion animations: floating flower emojis on Home hero, hover lift on
  audience cards, animated menu toggle icon rotation, staggered dropdown link entry.
- Feature voting toggle buttons on Contact page (client-side state only).
- Angel application form (UI only — not yet wired to a backend).
- Free trial sign-up form (UI only — not yet wired to a backend).
- React Query and Tooltip provider context wired at the app root.
- Wouter-based client-side routing with base URL support.

### Pricing at Launch

| Plan | Price | Notes |
|------|-------|-------|
| Basic | $14.99/month | 14-day free trial, no credit card required |
| Plus | $34.99/month | 14-day free trial, most popular |
| A La Carte | $45–$399 | Add-on services, delivered by KasiaCare Angels |
| Annual billing | −15% | Available on Basic and Plus |

### Design

- Color palette: dark navy (`#1a3a5c`), warm cream (`#faf7f2`), rose/accent (`#c4667a`), sage green.
- Typography: Cormorant Garamond (serif headings) + DM Sans (body).
- Framer Motion animations on cards, the nav dropdown, and the flower strip.

### Notes

- Version 1 does not store Personal Health Information (PHI). Medication reminders
  are time-based labels only; no medication names, dosages, or clinical data stored.
- Privacy Policy and Terms of Service are working documents subject to attorney
  review before public launch.
- All forms are UI-complete but not yet connected to a backend or payment processor.
