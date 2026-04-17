# KasiaCare — Project Reference

## Overview

pnpm workspace monorepo using TypeScript. The project contains the KasiaCare marketing website, a staging/dev environment, an Express API server, and shared database and API libraries. Named in memory of Kasia (1938–2023).

---

## Stack

| Layer | Technology |
|---|---|
| Monorepo | pnpm workspaces |
| Language | TypeScript 5.9, Node.js 24 |
| Frontend | React 19 + Vite 7, Tailwind CSS v4, Framer Motion, Wouter routing |
| Backend | Express 5 |
| Database | PostgreSQL + Drizzle ORM + drizzle-zod |
| Authentication | Clerk (provisioned — keys in environment secrets) |
| Email | Resend — sends from `contact@kasiacare.com` to `My211411@gmail.com` |
| Validation | Zod (`zod/v4`), drizzle-zod |
| API Codegen | Orval (from OpenAPI spec) |
| Build | esbuild (CJS bundle) |
| Fonts | Cormorant Garamond (headings), DM Sans (body) |

---

## Brand

| Token | Value |
|---|---|
| Navy | `#1a3a5c` |
| Rose / Accent | `#c4667a` |
| Gold | `#c8952a` |
| Cream | `#faf7f2` |
| Secondary (warm) | `#f2e8d8` |
| Sage | `#2d6b2d` |

---

## Key Commands

```bash
pnpm run typecheck                              # Full typecheck across all packages
pnpm run build                                  # Typecheck + build all packages
pnpm --filter @workspace/db run push           # Push DB schema changes (dev only)
pnpm --filter @workspace/api-server run dev    # Run API server locally
pnpm --filter @workspace/api-spec run codegen  # Regenerate API hooks from OpenAPI spec
git push github main                           # Manual push to GitHub (auto-runs via post-commit hook)
```

---

## Artifacts

### KasiaCare (`artifacts/kasiacare`)
- **Type**: React + Vite
- **Preview Path**: `/` — live at **kasiacare.com**
- **Description**: Marketing website + authenticated app shell for KasiaCare.

**Public marketing pages:**
| Route | Page |
|---|---|
| `/` | Home — hero, mission, who it's for, features preview, CTA |
| `/about` | About — Kasia's story, founder profile, mission |
| `/features` | Features — full feature breakdown by tier |
| `/pricing` | Pricing — Basic, Plus, A La Carte; FAQ |
| `/angels` | Angels — volunteer program, roles, application form |
| `/contact` | Contact — message form + feature voting |
| `/free-trial` | Free Trial — sign-up request form |
| `/privacy` | Privacy Policy + Terms of Service |

**Auth pages:**
| Route | Page |
|---|---|
| `/sign-in` | Branded Clerk sign-in (email + Google) |
| `/sign-up` | Branded Clerk sign-up |

**App pages (protected — requires sign-in):**
| Route | Page |
|---|---|
| `/dashboard` | Daily care dashboard (in development) |

### KasiaCare Dev (`artifacts/kasiacare-dev`)
- **Type**: React + Vite (mirrors production)
- **Preview Path**: `/dev/`
- **Description**: Staging environment. Imports source directly from `artifacts/kasiacare/src`. Shows "Dev Preview" header badge and bottom banner on every page.

### API Server (`artifacts/api-server`)
- **Type**: Express 5
- **Preview Path**: `/api`
- **Port**: 8080
- **Middleware**: pino logging, Clerk session middleware (`clerkMiddleware`), Clerk proxy
- **Auth**: `requireAuth` middleware in `src/middlewares/requireAuth.ts` — use on any protected route

**Email routes (public):**
| Route | Description |
|---|---|
| `POST /api/contact` | Contact form → email via Resend |
| `POST /api/free-trial` | Free trial request → email via Resend |
| `POST /api/angels` | Angels application → email via Resend |

---

## Database Schema (`lib/db`)

All V1 tables are live in PostgreSQL. Schema defined with Drizzle ORM in `lib/db/src/schema/`.

| File | Tables | Description |
|---|---|---|
| `users.ts` | `users` | Local user profile linked to Clerk ID. Role, subscription tier, notification prefs. |
| `care-recipients.ts` | `care_recipients` | The person receiving care. Profile, preferences, routine notes. |
| `care-team.ts` | `care_team_members`, `emergency_contacts` | Care team membership and emergency contacts per recipient. |
| `tasks.ts` | `tasks`, `task_completions` | Task calendar with AM/PM/time-of-day, categories, recurrence. Completion timestamps. |
| `meals.ts` | `meals` | Meals calendar — breakfast/lunch/dinner/snack with completion tracking. |
| `medications.ts` | `medication_reminders`, `medication_completions` | Time-based reminder labels only (V1 PHI boundary — no medication names stored). |
| `activities.ts` | `activities` | Activities calendar — outings, visits, entertainment. |
| `appointments.ts` | `appointments` | Appointments with location, bring-items notes, Google Calendar event ID hook. |
| `caregiver-visits.ts` | `caregiver_visits` | Caregiver visit scheduling — Plus tier only. |
| `notes-and-supplies.ts` | `daily_notes`, `supply_needs` | Daily care notes and supply needs tracking. |

**PHI Notice:** Version 1 does not store Personal Health Information. Medication reminders are time-based labels only. Fields requiring PHI are marked V2+ in the Data Dictionary and require HIPAA review before development.

---

## Authentication (Clerk)

- **Provider**: Clerk (Replit-managed, keys auto-provisioned)
- **Environment secrets**: `CLERK_SECRET_KEY`, `CLERK_PUBLISHABLE_KEY`, `VITE_CLERK_PUBLISHABLE_KEY`
- **Sign-in providers**: Email, Google (configurable in the Auth pane in the workspace toolbar)
- **Sign-in page**: `/sign-in` — branded in KasiaCare navy/cream/rose
- **Sign-up page**: `/sign-up` — branded, with "Start your free trial" messaging
- **Logo**: `artifacts/kasiacare/public/logo.svg`
- **Session validation**: Use `requireAuth` middleware on any protected API route
- **Managing users**: Use the **Auth pane** in the workspace toolbar (not clerk.com)

---

## Email (Resend)

- **From**: `contact@kasiacare.com` (domain verified in Resend + GoDaddy DNS)
- **To**: `My211411@gmail.com`
- **Secret**: `RESEND_API_KEY` (stored in Replit secrets)
- **Routes**: `artifacts/api-server/src/routes/email.ts`

---

## Version Control

- **GitHub repo**: `github.com/Liliakuz/kasiacare` (private)
- **Remote**: `github` (HTTPS, credentials stored via git credential store)
- **Auto-push**: Post-commit hook at `scripts/git-hooks/post-commit` — fires on every commit
- **Credential source**: `GITHUB_PERSONAL_ACCESS_TOKEN` environment secret
- **git config**: `core.hooksPath = scripts/git-hooks`

---

## Domain & Deployment

- **Live URL**: kasiacare.com
- **DNS**: GoDaddy — two A records pointing to Replit IPs (15.197.148.33, 3.33.130.190), CNAME for www, TXT for Replit domain verification
- **Email DNS**: MX `send` → Amazon SES, TXT `resend._domainkey` DKIM (all verified)
- **Republish**: Click Republish in the workspace to push changes to kasiacare.com

---

## Data Dictionary

Reference document: `attached_assets/KC_DataDictionary_v1.0_*.html`

All V1 fields are implemented. V2/V3+ fields (medication names, dosages, clinical data) are excluded pending HIPAA review.

---

## Accessibility

- Minimum font size 1rem enforced on all viewports under 600px (global CSS rule)
- iOS zoom prevention: form inputs use `font-size: 16px !important` on mobile
- All forms have `htmlFor`/`id` pairs, `aria-required`, `aria-describedby` on error containers
- Decorative SVGs and emojis marked `aria-hidden="true"`
- All sections have `aria-label`
- Color contrast meets WCAG AA (`.text-accent-label` class for section overlines)
- Screen reader audit completed (Tasks #6, #8) — 0 axe-core violations across all pages
- Audit documentation: `artifacts/kasiacare/src/docs/accessibility-audit.md`

---

## Changelog

See `artifacts/kasiacare/CHANGELOG.md` for full version history.

Current version: **v0.4.0**
