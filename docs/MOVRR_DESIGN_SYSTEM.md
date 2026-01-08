Below is your **fully updated Movrr Design System**, now **grounded in the Tailwind tokens** so designers, engineers, and product all speak the same language.

This version is ready to be shared with investors, partners, designers, and developers.

---

# **Movrr Design System**

**“Precision Mobility. Measurable Impact.”**

Movrr’s design system expresses **speed, intelligence, and commercial confidence**.
It is inspired by **Uber for Business, Stripe, Vercel, Linear, and modern ad-tech dashboards** — clean, data-forward, and optimized for decision-making.

Movrr is not a marketing site.
It is an **operational command center for city-scale bicycle advertising.**

---

# **1. Design Philosophy**

### Core Principles

**Performance First**
Every screen exists to explain _performance, coverage, and results._

**Operational Clarity**
Data must be readable in **1–2 seconds**.
No decoration that slows interpretation.

**Spatial Intelligence**
Movrr is about **movement, geography, and routes**.
The interface must visually reflect motion and territory.

**Commercial Trust**
Advertisers must immediately feel:

> “This platform handles real money and real outcomes.”

**Modern Without Noise**
No skeuomorphism.
No growth-hacking visuals.
No startup chaos.

---

# **2. Color System**

Movrr’s palette is bold, disciplined, and functional.
Each color has a strict semantic meaning.

These colors are encoded in Tailwind as tokens.

---

## **Brand Colors**

| Role       | Token          | Value     |
| ---------- | -------------- | --------- |
| Primary    | `movrr-green`  | `#23B245` |
| Accent     | `movrr-orange` | `#FF6B35` |
| Foundation | `movrr-black`  | `#000000` |

### Meaning

**Movrr Green → “GO”**
Used for:

- Primary actions
- Active campaigns
- Success states
- Live riders

**Movrr Orange → “LOOK HERE”**
Used for:

- Alerts
- Warnings
- Pending states
- Important secondary emphasis

**Movrr Black → Authority**
Used for:

- Footers
- Side navigation
- Premium sections
- Enterprise feel

---

## **UI Neutrals**

Mapped directly to Tailwind tokens:

| Role            | Token            | Color     |
| --------------- | ---------------- | --------- |
| App background  | `surface`        | `#F7F8FA` |
| Card background | `surface-card`   | `#FFFFFF` |
| Border          | `border`         | `#E4E7EB` |
| Primary text    | `text-primary`   | `#111827` |
| Secondary text  | `text-secondary` | `#6B7280` |
| Muted           | `text-muted`     | `#9CA3AF` |

---

## **Status Colors**

| Status    | Token                     |
| --------- | ------------------------- |
| Active    | `status-active` (green)   |
| Paused    | `status-paused` (orange)  |
| Draft     | `status-draft` (gray)     |
| Completed | `status-completed` (gray) |
| Danger    | `status-danger` (red)     |

---

# **3. Typography**

Movrr typography must feel **technical, modern, and trustworthy**.

### Fonts

Tailwind Tokens:

```ts
font-sans: Inter
font-display: Plus Jakarta Sans
font-mono: JetBrains Mono
```

**Why**

- Excellent legibility
- Used by Stripe, Vercel, Linear
- Neutral but premium

---

## **Type Scale**

| Role           | Token          | Size | Use              |
| -------------- | -------------- | ---- | ---------------- |
| Page Title     | `text-page`    | 36px | Dashboard titles |
| Section Header | `text-section` | 22px | Cards, tables    |
| Body           | `text-body`    | 16px | UI text          |
| Labels         | `text-label`   | 12px | Forms            |
| Metrics        | `text-metric`  | 16px | Stats & tables   |

Monospaced font is used for:

- Timers
- Impressions
- Revenue
- Performance numbers

This prevents visual jitter and signals precision.

---

# **4. Layout & Spacing**

Movrr uses a **grid-first system**.

Tailwind spacing tokens:

| Token | Size |
| ----- | ---- |
| `xs`  | 4px  |
| `sm`  | 8px  |
| `md`  | 16px |
| `lg`  | 24px |
| `xl`  | 32px |
| `2xl` | 48px |

Rules:

- Cards → `p-lg` (24px)
- Page sections → `gap-xl` to `gap-2xl`
- Tables → `py-sm` to `py-md`

Whitespace improves **scan speed**, not aesthetics.

---

# **5. Component System**

## **Buttons**

### Primary

```
bg-movrr-green text-white hover:bg-[#1fa13f]
```

Used for:

- Create
- Launch
- Assign
- Save

### Secondary

```
border border-movrr-green text-movrr-green bg-white hover:bg-movrr-green/10
```

### Warning / Destructive

```
bg-movrr-orange text-white hover:bg-[#e65f2f]
```

Disabled:

```
opacity-40 cursor-not-allowed
```

---

## **Cards**

```
bg-surface-card
rounded-card
shadow-card
border border-border-subtle
```

Cards hold **intelligence**, not decoration.

---

## **Navigation**

Top Navigation:

- White or black
- High contrast
- Always visible

Side Navigation (if applicable):

- Black background
- White icons
- Green active state

Movrr must feel **enterprise-grade**.

---

# **6. Tables (Mission-Critical)** (if applicable)

Movrr runs on tables.

Tables power:

- Campaigns
- Riders
- Routes
- Advertisers

Rules:

- Sticky headers
- Hoverable rows
- Clickable rows
- Inline status chips
- Filters always visible

Row hover:

```
hover:bg-surface transition
```

Headers:

```
text-text-secondary uppercase text-label
```

---

# **7. Data Visualization** (if applicable)

Charts are **tools**, not art.

Colors:

- Green → positive
- Orange → warning
- Gray → baseline

Tailwind tokens:

```
chart-impressions
chart-revenue
chart-baseline
chart-warning
```

No gradients
No shadows
No gimmicks

Three-second readability is mandatory.

---

# **8. Maps & Routes** (if applicable)

Maps are a **core product surface**.

| Route State | Color        |
| ----------- | ------------ |
| Active      | movrr-green  |
| Planned     | movrr-orange |
| Completed   | gray         |

Heatmaps:

- Green → high impressions
- Yellow → medium
- Red → low

Riders must look like **moving assets**, not decorative dots.

---

# **9. Responsive Behavior**

### Desktop

- Multi-column dashboards
- Side navigation (if applicable)
- Dense data

### Mobile (if applicable)

- Single column
- Bottom navigation
- Collapsible tables
- Floating “Create” button
- Maps → full screen + swipeable routes

---

# **10. Accessibility**

- WCAG AA contrast
- Keyboard navigation
- Screen reader labels
- Never rely on color alone

---

# **11. Visual Tone**

Movrr should feel:

✔ Confident
✔ Efficient
✔ Serious
✔ Data-driven

Not:

✖ Playful
✖ Cute
✖ Startup-fluffy
✖ Chaotic

---

# **Movrr vs Competitors**

Movrr sits between:

- **Uber for Business** (logistics)
- **Stripe** (financial trust)
- **OUTFRONT** (advertising agency)
- **Vercel / Linear** (modern SaaS)

But with **maps, routes, and mobility** as its unique signature.

---

# **Final Thought**

Movrr is not a bicycle company.
It is a **city-scale advertising intelligence platform powered by bikes**.

The design system must make that obvious in **three seconds**.
