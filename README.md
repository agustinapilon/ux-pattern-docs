# UX Patterns Docs

A documentation site for UX design patterns, built with Next.js 14, App Router, and Tailwind CSS.

## Stack

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**
- **Inter** — typography

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (sidebar + topbar)
│   ├── globals.css             # Global styles + Tailwind
│   ├── page.tsx                # /  → Overview
│   ├── onboarding/
│   │   └── page.tsx            # /onboarding
│   ├── payments/
│   │   └── page.tsx            # /payments
│   ├── system-states/
│   │   └── page.tsx            # /system-states  ← fully documented
│   ├── guidelines/
│   │   └── page.tsx            # /guidelines
│   └── changelog/
│       └── page.tsx            # /changelog
└── components/
    ├── Sidebar.tsx             # Fixed left navigation
    ├── Topbar.tsx              # Top breadcrumb bar
    ├── Card.tsx                # Reusable dark card
    ├── Badge.tsx               # Low / Medium / High badges
    ├── SectionTitle.tsx        # Section heading with accent bar
    ├── PageTag.tsx             # Category tag (e.g. "Pattern category")
    └── EmptyPage.tsx           # Empty state for undocumented pages
```

## Adding a new page

1. Create `src/app/<slug>/page.tsx`
2. Add the route to `src/components/Sidebar.tsx` under the correct section
3. Add the breadcrumb label to `src/components/Topbar.tsx`

## Deploying to Vercel

```bash
npx vercel
```

Or push to GitHub and import the repo on [vercel.com](https://vercel.com).
