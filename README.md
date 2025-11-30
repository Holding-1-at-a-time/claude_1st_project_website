# One Detail At A Time LLC - Website

Professional auto detailing website built with Next.js 16, TypeScript, Convex, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router + React Server Components)
- **Language:** TypeScript (strict mode, no `any` types)
- **Styling:** Tailwind CSS + Shadcn-ui
- **Database:** Convex (serverless, real-time)
- **Hosting:** Vercel
- **Package Manager:** pnpm

## 📋 Prerequisites

- Node.js 20+ LTS
- pnpm 9+
- Convex account (free tier available at [convex.dev](https://convex.dev))

## 🛠️ Setup Instructions

### 1. Install Dependencies

\`\`\`bash
pnpm install
\`\`\`

### 2. Set Up Convex

First, sign up for a free Convex account at [convex.dev](https://convex.dev).

Then initialize Convex:

\`\`\`bash
pnpm convex dev
\`\`\`

This will:
- Create a new Convex project
- Generate your deployment URL
- Set up the database schema
- Create the `convex/_generated` directory

**Important:** After running `pnpm convex dev`, copy the `NEXT_PUBLIC_CONVEX_URL` from the output and add it to your `.env.local` file.

### 3. Configure Environment Variables

The `.env.local` file has been created with placeholder values. Update it with your Convex deployment URL:

\`\`\`env
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud
\`\`\`

### 4. Start Development Server

In a **separate terminal** (keep Convex dev running):

\`\`\`bash
pnpm dev
\`\`\`

The site will be available at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

\`\`\`
claude_1st_project_website/
├── app/                          # Next.js 16 App Router
│   ├── (marketing)/             # Marketing pages (home, about, contact)
│   ├── (services)/              # Services pages (pillar + cluster)
│   ├── layout.tsx               # Root layout with providers
│   ├── providers.tsx            # Convex + Theme providers
│   └── globals.css              # Global styles
├── components/
│   └── ui/                      # Shadcn-ui components
├── convex/                       # Convex backend
│   ├── queries/                 # Database queries
│   ├── mutations/               # Database mutations
│   ├── lib/                     # Shared utilities
│   └── schema.ts                # Database schema
├── lib/
│   ├── constants.ts             # Business info (NAP)
│   └── utils.ts                 # Utility functions
├── types/
│   └── index.ts                 # TypeScript type definitions
├── CLAUDE.MD                     # Complete project plan
└── TODO_LIST.md                  # Implementation checklist
\`\`\`

## 🎯 Key Features

### Topic Cluster SEO Architecture
- 14 services × 8 pages each = **112 total pages**
- Pillar pages for broad topics
- Cluster pages for long-tail keywords
- Internal linking for SEO authority

### Local SEO Optimized
- Schema.org structured data (Organization, Service, Review, FAQ)
- NAP consistency across all pages
- Google Business Profile integration
- Service area targeting (7 San Antonio neighborhoods)

### Performance
- React Server Components (minimal client-side JS)
- Image optimization with Next.js Image
- Dark mode by default
- Core Web Vitals optimized

### Type Safety
- Strict TypeScript (no `any` types)
- Convex type generation
- End-to-end type safety

## 📝 Available Scripts

\`\`\`bash
# Development
pnpm dev              # Start Next.js dev server
pnpm convex           # Start Convex dev (watches for changes)

# Build
pnpm build            # Build for production
pnpm start            # Start production server

# Quality
pnpm typecheck        # Run TypeScript type checking
pnpm lint             # Run ESLint

# Database
pnpm seed             # Seed database with sample data (TODO)
\`\`\`

## 🏗️ Implementation Status

**Phase 1: Foundation** ✅ COMPLETE
- [x] Next.js 16 setup
- [x] TypeScript configuration (strict mode)
- [x] Tailwind CSS + design system
- [x] Convex backend setup
- [x] Project structure
- [x] Environment configuration

**Next Steps:** See `TODO_LIST.md` for detailed implementation plan.

## 📖 Documentation

- **Project Plan:** See `CLAUDE.MD` for complete technical specifications
- **TODO List:** See `TODO_LIST.md` for implementation checklist
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Convex Docs:** [docs.convex.dev](https://docs.convex.dev)
- **Tailwind Docs:** [tailwindcss.com/docs](https://tailwindcss.com/docs)

## 🔐 Environment Variables

Required environment variables:

- `NEXT_PUBLIC_CONVEX_URL` - Your Convex deployment URL
- `NEXT_PUBLIC_SITE_URL` - Your site URL (localhost in dev, odaat1.com in prod)

See `.env.example` for all available variables.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

Vercel will auto-detect Next.js and configure everything.

### Convex Production

Before deploying to production:

\`\`\`bash
pnpm convex deploy
\`\`\`

This creates a production Convex deployment and gives you the production URL.

## 📞 Contact

**Business:** One Detail At A Time LLC
**Owner:** Ricardo Romeo Jr.
**Phone:** (726) 207-1007
**Email:** rromerojr1@gmail.com
**Location:** 11692 Bricken Circle, San Antonio, TX 78233

## 📄 License

Proprietary - All rights reserved by One Detail At A Time LLC.

---

**Built with ❤️ in San Antonio, TX**
