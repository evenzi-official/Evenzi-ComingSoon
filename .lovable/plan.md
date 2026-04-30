# Evenzi — "Coming Soon" Landing Page

A single-page, editorial, invitation-card-inspired coming soon experience for Evenzi (evenzii.com), a premium event-planning SaaS for Indian celebrations. Warm, ornamental, and premium — not a typical SaaS page. Includes feature teasers and an email waitlist.

## Visual Direction

**Palette** (champagne canvas, rose & gold accents)
- `champagne` `#FFF8F0` — page background
- `champagne-warm` `#FFE9D4` — top gradient glow
- `rose` `#C2185B` — primary, CTAs, accents
- `rose-hover` `#A01449`
- `gold` `#F9A825` — ornamental details, garlands
- `charcoal` `#1C1C2E` — headings & body text
- `muted` `#7A6D5A` — secondary text
- `border-soft` `#E8D9C4` — hairline dividers

**Typography**
- Headings: **Cormorant Garamond** (500/600, italic for accents) — editorial, invitation feel
- Body & UI: **Inter** (400/500) — calm, modern
- A small uppercase tracking-wide label style for eyebrow text ("EST. 2025", "INVITATION", section labels)

**Motif system — Marigold garlands** (custom inline SVG)
- Garland strand draped across the top of the hero (full width, faintly swaying)
- Smaller garland accent under the wordmark
- Corner floral sprigs on feature cards
- Thin gold double-rule dividers between sections
- Subtle paper-grain texture overlay on background (very low opacity) to evoke cardstock

## Page Structure (single route: `/`)

```text
┌─────────────────────────────────────────────┐
│  ✿ ─── marigold garland strand ─── ✿        │
│                                              │
│         [ EST · 2025 — INVITATION ]          │
│                                              │
│              E V E N Z I                     │  ← Cormorant display
│         ·  marigold garland  ·               │
│                                              │
│   Where every Indian celebration finds       │  ← italic serif tagline
│            its perfect rhythm.               │
│                                              │
│   Premium event planning, reimagined for     │  ← supporting body
│   weddings, sangeets, and every milestone    │
│   that deserves to be remembered.            │
│                                              │
│         ◆  Launching Soon  ◆                 │
└─────────────────────────────────────────────┘
        ─── ornamental gold divider ───

           [ WHAT AWAITS YOU ]

   ┌──────────┐ ┌──────────┐ ┌──────────┐
   │  ✿ icon  │ │  ✿ icon  │ │  ✿ icon  │
   │ Vendor   │ │ Guest    │ │ Ritual   │
   │ Atelier  │ │ Concierge│ │ Timeline │
   │ short... │ │ short... │ │ short... │
   └──────────┘ └──────────┘ └──────────┘

        ─── ornamental gold divider ───

           [ BE THE FIRST TO KNOW ]

       Reserve your invitation.
   We'll send a personal note when
       Evenzi opens its doors.

   ┌──────────────────────┐ ┌────────┐
   │ your@email.com       │ │ Notify │
   └──────────────────────┘ └────────┘

           ── thank-you state ──

  ✿ Evenzi · evenzii.com · © 2025 ✿
```

### 1. Hero
- Top marigold garland strand (SVG), full-width, gold + rose blooms with green leaves
- Eyebrow chip: "EST · 2025 — INVITATION" in tracked uppercase
- Wordmark **Evenzi** in large Cormorant (clamp 64–128px), with a tiny garland flourish underneath
- Italic serif tagline: *"Where every Indian celebration finds its perfect rhythm."*
- Two-line supporting paragraph in Inter, warm/editorial
- "Launching Soon" pill with gold diamond ornaments on either side
- Soft radial champagne-warm glow behind the wordmark

### 2. Feature teasers (3 cards)
Section eyebrow: "WHAT AWAITS YOU"
- **Vendor Atelier** — *Hand-picked decorators, caterers, and artists, curated for every tradition.*
- **Guest Concierge** — *RSVPs, dietary notes, and seating — handled with grace.*
- **Ritual Timeline** — *From haldi to vidaai, every ceremony choreographed in one place.*

Each card: cream surface, gold hairline border, corner SVG sprig, small filled-circle icon in rose, serif title, body in Inter. Cards stack on mobile, 3-up on `md+`.

### 3. Waitlist signup
Section eyebrow: "BE THE FIRST TO KNOW"
- Centered headline (serif): *Reserve your invitation.*
- Supporting line in Inter
- Email input + "Notify Me" button (rose, hover rose-hover)
- Inline validation with zod (trimmed, valid email, max 255)
- On submit: writes to a `waitlist_signups` table via Lovable Cloud; replaces the form with a warm thank-you message ("Your invitation is reserved. We'll be in touch soon. ✿")
- Honeypot field + duplicate-email handling (treat duplicates as success silently)

### 4. Footer
- Centered tiny garland divider
- "Evenzi · evenzii.com · © 2025"
- Small "Made with love for Indian celebrations" line in muted italic

## Responsive

- **Mobile (<640):** wordmark scales to ~64px, garland SVGs scale and simplify, single-column cards, stacked email form
- **Tablet (≥768):** 3-up feature cards, inline email + button
- **Desktop (≥1024):** generous vertical rhythm, max-width 1100px container, larger garland presence

Subtle motion: garland gently sways (CSS keyframe, ~6s, prefers-reduced-motion respected); cards lift on hover with a soft shadow and gold border deepening.

## Technical Details

- **Route:** replace placeholder `src/routes/index.tsx` with the new hero+sections; per-page `head()` with title "Evenzi — Coming Soon", description, og:title, og:description, og:type=website. No og:image (none available yet).
- **Design tokens:** add the rose/gold/champagne/charcoal/muted/border-soft palette to `src/styles.css` as CSS variables under `:root` and register them in the `@theme inline` block (Tailwind v4 native theme, not `tailwind.config.ts`). Add Cormorant Garamond + Inter via `<link>` tags in `__root.tsx` head, and register `--font-display` / `--font-sans` in `@theme inline`.
- **Components (new, in `src/components/evenzi/`):**
  - `MarigoldGarland.tsx` — reusable inline SVG (props: variant `strand | flourish | sprig | divider`)
  - `Hero.tsx`, `FeatureTeasers.tsx`, `Waitlist.tsx`, `SiteFooter.tsx`
- **Waitlist backend (Lovable Cloud):** create table `waitlist_signups (id uuid pk, email citext unique, created_at timestamptz default now())` with RLS enabled; policy allowing public `INSERT` only (no SELECT). Insert from the client via the Supabase client; show toast on error via existing `sonner`.
- **Validation:** zod schema for the email field, both client-side; server-side enforced by the unique constraint and column type.
- **Accessibility:** semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), labelled email input, focus-visible rings in rose, contrast checked against champagne background, decorative SVGs marked `aria-hidden`.
- **Reused shadcn primitives:** `Button`, `Input`, `Card` (restyled via classes to match the editorial language).
- No new routes; no auth; no countdown (per your selection).

## Out of scope (for this pass)
- Countdown timer, founder's note, social links, multi-language toggle, blog, vendor onboarding flows, actual launch date.
