<!-- v1.2 · KasiaCare · README · May 2026 · README_v120.md -->
> **Confidential — Not for Public Distribution · KasiaCare Internal Document · © 2026 KasiaCare**

# KasiaCare 💙

### Care Plan Software for Individuals, Families, Caregivers & Care Teams

---

> *"No one receiving care should feel unknown. No one providing care should feel unprepared."*
> — KasiaCare Mission Statement

> *"Uniting our actions and dreams to reflect what we want to help people achieve — in the most basic way — just to have a simple care plan."*

---

## The Dream

KasiaCare began with one simple belief — that everyone deserves a care plan.

As we get older, face a disability, or navigate a health challenge, the people around us need to know what we need, when we need it, and how to help. Right now, millions of families are coordinating care through notebooks, text messages, and memory. Caregivers walk through the door with no idea what that person's day looks like. Critical information gets lost every single handoff.

KasiaCare is being built to change that — one care plan at a time.

This is a sample site. KasiaCare is currently in active development and we are working hard to make this dream a reality. The software is coming — step by step, with purpose and care.

---

## Who This Is For

- **Individuals** managing their own care — whether recovering, living with a disability, or simply wanting to stay on top of their health
- **Families** coordinating care for a loved one — knowing what was done, what is needed, and who is coming next
- **Caregivers & Personal Aids** who need to walk through the door ready — with a clear picture of the person's full day
- **Care Teams** — everyone on the same plan, in real time, wherever care happens

---

## How You Can Help

We are looking for people who believe in this mission and want to be part of making it real.

**Sign up as a KasiaCare Angel** — test the software, give feedback, spread the word, or simply show your support. Every Angel matters.

👉 [kasiacare.com/signup.html](https://kasiacare.com/signup.html)

**Contact us** — if you are a developer, a healthcare professional, a caregiver, or simply someone who believes in this mission and wants to get involved.

👉 [kasiacare.com/contact.html](https://kasiacare.com/contact.html)

---

## Website Pages

| Page | Description |
|---|---|
| `/` | Home — mission, story, features overview |
| `/about.html` | About — Kasia's story, founder profile |
| `/features.html` | Features — full feature breakdown |
| `/subscriptions.html` | Subscriptions — Basic, Pro, Med Basic, Med Pro, A La Carte |
| `/angels.html` | Angels — volunteer program |
| `/contact.html` | Contact — message form |
| `/signup.html` | Sign Up — free trial, Angels, mailing list |
| `/logon.html` | Log On — coming soon page |
| `/privacy.html` | Privacy & AI Policy |

---

## Subscription Plans

| Plan | Price | Status |
|---|---|---|
| Basic Plan | $14.99/month | Available at launch |
| Pro Plan | $34.99/month | Available at launch |
| Med Basic Plan | TBD | Coming Year 2–3 |
| Med Pro Plan | TBD | Coming Year 3–5 |
| A La Carte Services | $45–$399 | Available at launch |

---

## Technology Stack

| Layer | Technology |
|---|---|
| Hosting | GitHub Pages |
| Frontend (current) | HTML · CSS · JavaScript |
| Frontend (planned app) | React 19 + Vite 7, TypeScript 5.9 |
| Backend (planned) | Express 5, Node.js 24 |
| Database (planned) | PostgreSQL + Drizzle ORM |
| Authentication (planned) | Clerk — email + Google sign-in |
| Email | Google Workspace — kasiacare.com domain · Formspree (current) · Resend planned |
| Email Inbox | contact@kasiacare.com — receives all form submissions and inquiries |
| Analytics | Google Analytics 4 — Measurement ID G-JKYSYM2RC5 · linked to contact@kasiacare.com Google Workspace account |
| Domain | kasiacare.com via GoDaddy |
| Forms | Formspree |

---

## Brand Colors

| Token | Hex | Usage |
|---|---|---|
| Navy | `#102940` | Primary background · nav · headers · cards |
| Rose | `#b03060` | Accent · buttons · KasiaCare logo · highlights |
| Gold | `#b07d10` | Tags · banners · Basic Plan badge · footer headers |
| Cream | `#f2e8d8` | Warm section backgrounds |
| Warm Background | `#faf7f2` | Page background |
| Muted Text | `#4a3828` | Body text |
| Green | `#2d6b2d` | Pro Plan badge · Individual Care |
| Purple | `#6b2d8a` | Med Basic Plan badge · Disability Care |
| Aqua Blue | `#0891b2` | Med Pro Plan badge |
| Teal | `#1a7a6a` | Activities category |
| Brown | `#8a4a10` | Orders category |

## Subscription Plan Badge Colors

| Plan | Color | Hex |
|---|---|---|
| All Plans / Basic Plan | Gold | `#b07d10` |
| Pro Plan | Green | `#2d6b2d` |
| Med Basic Plan | Purple | `#6b2d8a` |
| Med Pro Plan | Aqua Blue | `#0891b2` |

## Font Standard

| Font | Stack | Reason |
|---|---|---|
| Verdana | `Verdana, Geneva, sans-serif` | System font · no external dependency · accessible · designed for screen readability |

---

## Database Schema (Planned — V1)

All V1 tables are defined and ready for development. No Personal Health Information (PHI) is stored in V1.

| Schema File | Tables | Description |
|---|---|---|
| `users.ts` | `users` | User profile, role, subscription tier, notification preferences |
| `care-recipients.ts` | `care_recipients` | Person receiving care — profile, preferences, routine notes |
| `care-team.ts` | `care_team_members`, `emergency_contacts` | Care team membership and emergency contacts |
| `tasks.ts` | `tasks`, `task_completions` | Task calendar with AM/PM, categories, recurrence, completion timestamps |
| `meals.ts` | `meals` | Meals calendar — breakfast, lunch, dinner, snack with completion tracking |
| `medications.ts` | `medication_reminders`, `medication_completions` | Time-based reminder labels only — no medication names stored in V1 |
| `activities.ts` | `activities` | Activities calendar — outings, visits, recreation |
| `appointments.ts` | `appointments` | Appointments with location, notes, Google Calendar integration |
| `caregiver-visits.ts` | `caregiver_visits` | Caregiver visit scheduling — Pro Plan only |
| `notes-and-supplies.ts` | `daily_notes`, `supply_needs` | Daily care notes and supplies & vendors tracking |

**PHI Notice:** V1 does not store Personal Health Information. Medication names, dosages, diagnoses, and vital signs are excluded pending full HIPAA review. These features are planned for Med Basic and Med Pro plans.

---

## Accessibility

KasiaCare is built with accessibility as a priority:

- Minimum font size 1rem enforced on all viewports
- iOS zoom prevention on form inputs
- All forms have proper label/id pairs, aria-required, and aria-describedby
- Color contrast meets WCAG AA standards
- Screen reader audit completed — 0 axe-core violations across all pages

---

## HIPAA & Privacy

KasiaCare currently does not store any personal health information within its software. No medication names, dosages, diagnoses, or vital signs. Med Box Reminders are time-based with simple user-written labels only. We never sell your information. Ever.

When KasiaCare introduces medical data tracking in Med Basic and Med Pro plans, full HIPAA compliance will be in place before a single line of medical data is stored.

---

## Version

- **Website:** v1.3.0
- **Business Plan:** v3.6.5

---

*Built for Kasia. Built for every family like ours.* 💙

**KasiaCare · kasiacare.com · 2026**


## KasiaCare Care Philosophy — Medications & Food

> *"Medications are scheduled around food times whenever possible. Breakfast. Snack. Lunch. Supper. Food first. Meds follow."*

Most medications are better absorbed and gentler on the stomach when taken with food. KasiaCare Med Box Reminders are organized around the natural rhythm of the day — not arbitrary clock times.

### The KasiaCare Daily Framework

| Time | Moment | Care |
|---|---|---|
| Morning | UP | AM Care — personal care · dressing |
| 8–10 AM | Breakfast | Meal + Breakfast Med |
| Mid-morning | Snack | Snack + Snack Med if needed |
| 12–2 PM | Lunch | Meal + Lunch Med |
| Afternoon | Snack | Snack |
| 4–6 PM | Supper | Meal + Supper Med |
| 7–9 PM | Bedtime | PM Care + Bedtime Med if needed |

*Inspired by Lilia Kuzmicz, KasiaCare Founder, from 30 years of caring for her mother Kasia.*


## KasiaCare Core Principle

> *"KasiaCare helps people track, report, and maintain their care plan."*

KasiaCare does not recommend care, treatments, medications, or medical solutions. KasiaCare is a care plan tracking tool. It helps people track, report, and maintain their care plan. All care decisions are made by the caregiver, the person receiving care, their family, and or their medical team.

| KasiaCare Does | KasiaCare Does Not |
|---|---|
| Track care plan items | Recommend treatments |
| Report daily activities | Recommend medications |
| Maintain care schedules | Recommend medical solutions |
| Store personal care preferences | Diagnose conditions |
| Remind caregivers of tasks | Replace medical professionals |
| Share care plan with care team | Make care decisions |
