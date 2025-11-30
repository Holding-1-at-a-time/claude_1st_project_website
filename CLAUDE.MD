# One Detail At A Time LLC - Website Project Plan

## Project Overview

**Business:** One Detail At A Time LLC - Professional Auto Detailing
**Domain:** odaat1.com
**Location:** 11692 Bricken Circle, San Antonio, TX 78233
**Owner:** Ricardo Romeo Jr.
**Phone:** (726) 207-1007
**Email:** rromerojr1@gmail.com
**Established:** 2019
**Certifications:** IDA Certified
**Rating:** 5.0 (28 Google Reviews)

---

## Technical Stack

### Core Technologies
- **Framework:** Next.js 16 (App Router with React Server Components)
- **Language:** TypeScript (strict mode, NO `any` types)
- **Styling:** Tailwind CSS + Shadcn-ui components
- **Database:** Convex (real-time, serverless)
- **Hosting:** Vercel
- **Package Manager:** pnpm
- **Node Version:** 20.x LTS

### Key Dependencies
```json
{
  "next": "^16.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.3.0",
  "convex": "^1.14.0",
  "tailwindcss": "^3.4.0",
  "next-themes": "^0.3.0"
}
```

### TypeScript Configuration
- Strict mode enabled
- No implicit any
- Strict null checks
- No unused locals/parameters
- All functions must have explicit return types
- All component props must be typed with interfaces (not `any`)

---

## Design System

### Color Palette
```typescript
const colors = {
  primary: '#00ae98',      // Teal (main brand color)
  background: '#0a0a0a',   // Dark mode background
  surface: '#1a1a1a',      // Card/panel background
  text: {
    primary: '#ffffff',
    secondary: '#a1a1a1',
    muted: '#737373'
  },
  accent: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444'
  }
}
```

### Typography
- **Headings:** Inter (bold, 600-700 weight)
- **Body:** Inter (regular, 400 weight)
- **Monospace:** JetBrains Mono (code blocks)

### Components
Using Shadcn-ui components customized for dark mode:
- Button, Card, Dialog, Form, Input, Textarea
- Select, Sheet, Tabs, Toast, Tooltip
- Custom: ServiceCard, ReviewCard, BookingForm, ClusterNav

---

## Architecture Overview

### App Router Structure
```
app/
├── layout.tsx                    # Root layout with providers
├── globals.css                   # Tailwind + custom styles
├── page.tsx                      # Homepage
│
├── (marketing)/                  # Marketing pages route group
│   ├── layout.tsx               # Marketing layout
│   ├── about/
│   │   └── page.tsx             # About page
│   └── contact/
│       └── page.tsx             # Contact page
│
├── (services)/                   # Services route group
│   ├── layout.tsx               # Services layout
│   └── services/
│       ├── page.tsx             # Services overview
│       ├── [service]/
│       │   ├── page.tsx         # Pillar page (RSC)
│       │   └── [cluster]/
│       │       └── page.tsx     # Cluster page (RSC)
│
├── booking/
│   └── page.tsx                 # Global booking page
│
├── reviews/
│   └── page.tsx                 # Reviews showcase
│
└── api/
    └── convex/
        └── [...routes]/
            └── route.ts         # Convex API routes
```

### Convex Backend Structure
```
convex/
├── schema.ts                    # Database schema
├── tsconfig.json                # Convex TypeScript config
│
├── queries/                     # Query functions
│   ├── pillarPages.ts
│   ├── clusterPages.ts
│   ├── bookings.ts
│   └── reviews.ts
│
├── mutations/                   # Mutation functions
│   ├── createBooking.ts
│   ├── createReview.ts
│   └── updateService.ts
│
├── lib/                         # Shared utilities
│   ├── validators.ts
│   └── constants.ts
│
└── http.ts                      # HTTP actions
```

---

## SEO Strategy

### Topic Cluster Architecture

The site implements a **pillar + cluster content strategy** for each of the 14 services:

```
Pillar Page (broad topic)
    ↓
Cluster Pages (specific subtopics)
    ↓
Internal linking creates authority
```

#### Example: Auto Detailing Service

**Pillar:** `/services/auto-detailing`
- Title: "Auto Detailing San Antonio: Complete Guide | One Detail At A Time"
- 2000+ words comprehensive guide
- Links to all 7 cluster pages
- Schema.org Service markup
- Local business schema

**Clusters:**
1. `/services/auto-detailing/paint-protection` - Paint Protection Methods
2. `/services/auto-detailing/interior-vs-exterior` - Interior vs Exterior Detailing
3. `/services/auto-detailing/benefits` - Benefits of Professional Auto Detailing
4. `/services/auto-detailing/pricing-guide` - Pricing Guide San Antonio
5. `/services/auto-detailing/diy-vs-professional` - DIY vs Professional
6. `/services/auto-detailing/seasonal-care` - Seasonal Car Care Tips
7. `/services/auto-detailing/booking` - Book Service

Each cluster:
- 800-1200 words focused content
- Links back to pillar
- Links to 2-3 related clusters
- Targets long-tail keywords
- Local + service intent

### 14 Core Services (Each with Pillar + 7 Clusters)

1. **Auto Detailing** (general/main)
2. **Ceramic Coating**
3. **Paint Correction**
4. **Interior Deep Cleansing**
5. **Exterior Hand Wash & Sealant**
6. **Headlight Restoration**
7. **Engine Detailing**
8. **Window Tinting**
9. **Odor Removal**
10. **Scratch & Swirl Removal**
11. **Leather Conditioning**
12. **Wheel & Tire Detailing**
13. **RV/Boat Detailing**
14. **Fleet Services**

**Total Pages:** 14 pillars + 98 clusters = **112 service pages**

---

## Advanced Local SEO Implementation

### Core Local SEO Components

#### 1. NAP Consistency (Name, Address, Phone)
Appears identically on EVERY page:
```typescript
const NAP = {
  name: "One Detail At A Time LLC",
  address: "11692 Bricken Circle, San Antonio, TX 78233",
  phone: "(726) 207-1007",
  email: "rromerojr1@gmail.com"
} as const;
```

#### 2. Schema.org Structured Data

**Organization Schema (Root Layout):**
```typescript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "One Detail At A Time LLC",
  "@id": "https://odaat1.com",
  "url": "https://odaat1.com",
  "telephone": "(726) 207-1007",
  "email": "rromerojr1@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "11692 Bricken Circle",
    "addressLocality": "San Antonio",
    "addressRegion": "TX",
    "postalCode": "78233",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.6199,
    "longitude": -98.4738
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "San Antonio",
      "@id": "https://www.wikidata.org/wiki/Q975"
    },
    {
      "@type": "Place",
      "name": "Stone Oak, San Antonio"
    },
    {
      "@type": "Place",
      "name": "Alamo Heights, San Antonio"
    },
    {
      "@type": "Place",
      "name": "Medical Center, San Antonio"
    },
    {
      "@type": "Place",
      "name": "Northwest Side, San Antonio"
    },
    {
      "@type": "Place",
      "name": "Northeast Side, San Antonio"
    },
    {
      "@type": "Place",
      "name": "Downtown San Antonio"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "28",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "15:00"
    }
  ],
  "image": "https://odaat1.com/images/logo.png",
  "logo": "https://odaat1.com/images/logo.png"
};
```

**Service Schema (Each Service Pillar Page):**
```typescript
interface ServiceSchemaProps {
  serviceName: string;
  serviceType: string;
  description: string;
  url: string;
}

const generateServiceSchema = (props: ServiceSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": props.serviceType,
  "provider": {
    "@type": "LocalBusiness",
    "name": "One Detail At A Time LLC",
    // ... full NAP
  },
  "areaServed": [
    { "@type": "City", "name": "San Antonio" },
    // ... all neighborhoods
  ],
  "url": props.url,
  "description": props.description
});
```

**Review Schema:**
```typescript
const reviewSchema = {
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "[Customer Name]"
  },
  "reviewBody": "[Review text]",
  "datePublished": "2024-XX-XX"
};
```

**FAQ Schema (Per Service):**
```typescript
const faqSchema = {
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer [service] in Stone Oak?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide [service] throughout Stone Oak..."
      }
    }
  ]
};
```

**Breadcrumb Schema:**
```typescript
const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Services",
      "item": "https://odaat1.com/services"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Service Name]",
      "item": "https://odaat1.com/services/[slug]"
    }
  ]
};
```

#### 3. Local Keyword Strategy

**Primary Keywords Pattern:**
- `[Service] San Antonio`
- `[Service] near me`
- `[Service] Stone Oak`
- `best [Service] San Antonio`
- `professional [Service] San Antonio TX`
- `affordable [Service] San Antonio`

**Long-tail Keywords:**
- `[Service] in [neighborhood] San Antonio`
- `certified [Service] San Antonio Texas`
- `IDA certified [Service] near me`
- `mobile [Service] San Antonio` (note: mobile excluded in business model)

**Title Tag Format:**
```
[Service] San Antonio | [Neighborhood] | One Detail At A Time
```

**Meta Description Format:**
```
Professional [Service] in San Antonio. Serving [neighborhoods]. IDA Certified. 5-star rated. Call (726) 207-1007 for a quote.
```

#### 4. Content Localization

Every page must include:
- ✅ Business name + city in H1
- ✅ Location mention in first 100 words
- ✅ Service areas in footer
- ✅ Embedded Google Map on contact page
- ✅ Location-specific images with geo-tagged alt text
- ✅ Local landmarks/references in content

**Neighborhood-Specific Content:**
```typescript
interface NeighborhoodInfo {
  name: string;
  slug: string;
  description: string;
  landmarks: string[];
  travelTime: string;
}

const serviceAreas: NeighborhoodInfo[] = [
  {
    name: "Stone Oak",
    slug: "stone-oak",
    description: "Serving Stone Oak residents since 2019",
    landmarks: ["Stone Oak Parkway", "Sonterra", "The Rim"],
    travelTime: "15 minutes"
  },
  // ... 6 more areas
];
```

#### 5. Google Business Profile Integration

- Display GBP reviews on site
- Sync service posts
- Embed Google Maps with business marker
- One-click directions link
- Click-to-call prominently displayed

#### 6. Mobile-First Local Features

```typescript
// Click-to-call component
<a
  href="tel:+17262071007"
  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg"
  onClick={() => trackEvent('phone_click', { page: 'service' })}
>
  <PhoneIcon /> Call Now
</a>

// Directions link
<a
  href="https://www.google.com/maps/dir/?api=1&destination=11692+Bricken+Circle+San+Antonio+TX+78233"
  target="_blank"
  rel="noopener noreferrer"
>
  Get Directions
</a>

// Service area checker
<form onSubmit={checkZipCode}>
  <input
    type="text"
    placeholder="Enter ZIP code"
    pattern="[0-9]{5}"
  />
  <button type="submit">Check Coverage</button>
</form>
```

---

## Convex Database Schema

```typescript
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Pillar pages (main service pages)
  pillarPages: defineTable({
    slug: v.string(),
    serviceName: v.string(),
    serviceType: v.string(), // for schema.org
    title: v.string(),
    metaDescription: v.string(),
    h1: v.string(),
    introContent: v.string(),
    mainContent: v.string(),
    keywords: v.array(v.string()),
    neighborhoods: v.array(v.string()),
    faqs: v.array(v.object({
      question: v.string(),
      answer: v.string()
    })),
    published: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number()
  })
    .index("by_slug", ["slug"])
    .index("by_published", ["published"]),

  // Cluster pages (subtopic pages)
  clusterPages: defineTable({
    slug: v.string(),
    pillarPageId: v.id("pillarPages"),
    title: v.string(),
    metaDescription: v.string(),
    h1: v.string(),
    content: v.string(),
    keywords: v.array(v.string()),
    relatedClusterIds: v.array(v.id("clusterPages")),
    callToAction: v.string(),
    published: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number()
  })
    .index("by_slug", ["slug"])
    .index("by_pillar", ["pillarPageId"])
    .index("by_published", ["published"]),

  // Bookings
  bookings: defineTable({
    serviceSlug: v.string(),
    serviceName: v.string(),
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    customerAddress: v.optional(v.string()),
    customerZip: v.optional(v.string()),
    vehicleType: v.string(), // sedan, suv, truck, rv, boat
    vehicleMake: v.optional(v.string()),
    vehicleModel: v.optional(v.string()),
    vehicleYear: v.optional(v.number()),
    preferredDate: v.string(),
    preferredTime: v.string(),
    notes: v.optional(v.string()),
    status: v.string(), // pending, confirmed, completed, cancelled
    createdAt: v.number(),
    updatedAt: v.number()
  })
    .index("by_status", ["status"])
    .index("by_date", ["preferredDate"])
    .index("by_email", ["customerEmail"]),

  // Reviews
  reviews: defineTable({
    serviceSlug: v.optional(v.string()),
    serviceName: v.optional(v.string()),
    customerName: v.string(),
    customerInitial: v.string(), // for privacy (e.g., "John D.")
    rating: v.number(), // 1-5
    title: v.string(),
    comment: v.string(),
    source: v.string(), // google, facebook, direct
    verified: v.boolean(),
    featured: v.boolean(),
    createdAt: v.number(),
    publishedAt: v.optional(v.number())
  })
    .index("by_rating", ["rating"])
    .index("by_featured", ["featured"])
    .index("by_published", ["publishedAt"]),

  // Service areas / neighborhoods
  serviceAreas: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    landmarks: v.array(v.string()),
    zipCodes: v.array(v.string()),
    travelTime: v.string(),
    active: v.boolean()
  })
    .index("by_slug", ["slug"])
    .index("by_active", ["active"]),

  // Lead tracking (for analytics)
  leads: defineTable({
    source: v.string(), // organic, direct, referral
    page: v.string(),
    action: v.string(), // phone_click, form_submit, email_click
    timestamp: v.number(),
    metadata: v.optional(v.object({
      service: v.optional(v.string()),
      neighborhood: v.optional(v.string())
    }))
  })
    .index("by_source", ["source"])
    .index("by_timestamp", ["timestamp"])
});
```

---

## React Server Components (RSC) Strategy

### Why RSC for this Project

1. **SEO Performance:** Server-rendered HTML for all content
2. **Zero JS for Content:** Pillar/cluster pages ship no React to client
3. **Streaming:** Progressive page rendering for faster LCP
4. **Data Fetching:** Direct Convex queries in components (no API routes)
5. **Type Safety:** End-to-end TypeScript from DB to UI

### RSC Architecture

```typescript
// app/services/[service]/page.tsx (Pillar Page - RSC)
import { Suspense } from 'react';
import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';

interface PillarPageProps {
  params: Promise<{ service: string }>;
}

export async function generateMetadata(
  { params }: PillarPageProps
): Promise<Metadata> {
  const { service } = await params;
  const pillar = await preloadQuery(api.queries.pillarPages.getBySlug, {
    slug: service
  });

  return {
    title: pillar.title,
    description: pillar.metaDescription,
    alternates: {
      canonical: `https://odaat1.com/services/${service}`
    },
    openGraph: {
      title: pillar.title,
      description: pillar.metaDescription,
      url: `https://odaat1.com/services/${service}`,
      type: 'website'
    }
  };
}

async function PillarPage({ params }: PillarPageProps): Promise<JSX.Element> {
  const { service } = await params;

  const pillarPromise = preloadQuery(api.queries.pillarPages.getBySlug, {
    slug: service
  });

  const clustersPromise = preloadQuery(api.queries.clusterPages.getByPillar, {
    pillarSlug: service
  });

  const reviewsPromise = preloadQuery(api.queries.reviews.getFeaturedByService, {
    serviceSlug: service
  });

  return (
    <main>
      <Suspense fallback={<PillarSkeleton />}>
        <PillarContent pillarPromise={pillarPromise} />
      </Suspense>

      <Suspense fallback={<ClusterNavSkeleton />}>
        <ClusterNavigation clustersPromise={clustersPromise} />
      </Suspense>

      <Suspense fallback={<ReviewsSkeleton />}>
        <ReviewsSection reviewsPromise={reviewsPromise} />
      </Suspense>

      <BookingCTA service={service} />
    </main>
  );
}

export default PillarPage;
```

### Client Components (When Needed)

Use `'use client'` ONLY for:
- Forms with state (booking form, contact form)
- Interactive components (accordions, tabs, modals)
- Theme toggle (dark mode switch)
- Analytics tracking

```typescript
// components/booking-form.tsx
'use client';

import { useState } from 'react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface BookingFormProps {
  serviceSlug: string;
  serviceName: string;
}

export function BookingForm({ serviceSlug, serviceName }: BookingFormProps): JSX.Element {
  const [formData, setFormData] = useState<BookingFormData>({
    // ... typed form state
  });

  const createBooking = useMutation(api.mutations.createBooking);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await createBooking({ ...formData, serviceSlug, serviceName });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

---

## TypeScript Best Practices

### No `any` Policy

❌ **Never:**
```typescript
function handleData(data: any) { } // WRONG
const items: any[] = []; // WRONG
```

✅ **Always:**
```typescript
interface ServiceData {
  slug: string;
  title: string;
  description: string;
}

function handleData(data: ServiceData): void { }
const items: ServiceData[] = [];
```

### Convex Type Safety

```typescript
// convex/queries/pillarPages.ts
import { query } from "./_generated/server";
import { v } from "convex/values";
import type { Doc } from "./_generated/dataModel";

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args): Promise<Doc<"pillarPages"> | null> => {
    const pillar = await ctx.db
      .query("pillarPages")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();

    return pillar;
  }
});
```

### Component Props Typing

```typescript
// Always use interfaces for props
interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
  featured?: boolean;
}

export function ServiceCard({
  title,
  description,
  slug,
  icon,
  featured = false
}: ServiceCardProps): JSX.Element {
  return (
    <article className={cn("card", featured && "card-featured")}>
      {/* ... */}
    </article>
  );
}
```

---

## Performance Optimization

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **TTFB (Time to First Byte):** < 600ms

### Optimization Strategies

1. **Image Optimization:**
   - Use Next.js Image component
   - WebP format with fallbacks
   - Lazy loading below fold
   - Responsive sizes
   - Priority loading for hero images

```typescript
import Image from 'next/image';

<Image
  src="/images/ceramic-coating-hero.jpg"
  alt="Ceramic coating application in San Antonio"
  width={1200}
  height={600}
  priority
  quality={85}
  sizes="(max-width: 768px) 100vw, 1200px"
/>
```

2. **Font Optimization:**
   - Use next/font for Google Fonts
   - Preload critical fonts
   - Font display: swap

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});
```

3. **Code Splitting:**
   - Dynamic imports for heavy components
   - Route-based splitting (automatic with App Router)
   - Lazy load non-critical UI

```typescript
import dynamic from 'next/dynamic';

const ReviewsCarousel = dynamic(() => import('@/components/reviews-carousel'), {
  loading: () => <ReviewsSkeleton />,
  ssr: false
});
```

4. **Caching Strategy:**
   - Static generation for all pillar/cluster pages
   - ISR (Incremental Static Regeneration) for reviews
   - Client-side caching with Convex subscriptions

```typescript
export const revalidate = 3600; // Revalidate every hour

// Or per-page:
export async function generateStaticParams() {
  const services = await convex.query(api.queries.pillarPages.getAll);
  return services.map((service) => ({
    service: service.slug
  }));
}
```

---

## Development Workflow

### Initial Setup

```bash
# Clone repository
git clone [repo-url]
cd claude_1st_project_website

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add Convex deployment URL and keys

# Initialize Convex
pnpm convex dev

# Start development server
pnpm dev
```

### Environment Variables

```bash
# .env.local
CONVEX_DEPLOYMENT=dev:your-deployment-name
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Production
CONVEX_DEPLOY_KEY=prod:xxxxx
NEXT_PUBLIC_SITE_URL=https://odaat1.com
```

### Git Workflow

- **Main Branch:** `main` (production)
- **Development Branch:** `claude/plan-rsc-convex-project-01RY7mxuqeakUdVbXzsfhTsx`
- **Feature Branches:** `feature/[feature-name]`
- **Commit Messages:** Conventional Commits format

```bash
git checkout -b feature/booking-form
# Make changes
git add .
git commit -m "feat(booking): add booking form with validation"
git push origin feature/booking-form
```

---

## Testing Strategy

### Unit Tests
- Utility functions
- Form validation logic
- Type guards

### Integration Tests
- Convex mutations/queries
- API routes
- Component interactions

### E2E Tests
- Booking flow
- Contact form submission
- Service page navigation

### Tools
- **Unit:** Vitest
- **Integration:** Vitest + Convex testing
- **E2E:** Playwright
- **Type Check:** `tsc --noEmit`

---

## Deployment

### Vercel Configuration

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

### Environment Setup

**Development:**
- Branch: `claude/plan-rsc-convex-project-01RY7mxuqeakUdVbXzsfhTsx`
- Auto-deploy preview

**Production:**
- Branch: `main`
- Domain: odaat1.com
- Auto-deploy on merge

### Pre-deployment Checklist

- ✅ All TypeScript errors resolved (`pnpm typecheck`)
- ✅ All tests passing (`pnpm test`)
- ✅ Lighthouse score > 90 (all categories)
- ✅ No console errors/warnings
- ✅ All images optimized
- ✅ Meta tags verified
- ✅ Schema.org markup validated
- ✅ Sitemap generated
- ✅ robots.txt configured
- ✅ 404 page functional
- ✅ Contact form tested
- ✅ Booking form tested

---

## Content Strategy

### Content Creation Priority

**Phase 1: Foundation (Week 1-2)**
- Homepage
- About page
- Contact page
- Services overview

**Phase 2: Top Services (Week 3-4)**
1. Auto Detailing (pillar + 7 clusters)
2. Ceramic Coating (pillar + 7 clusters)
3. Paint Correction (pillar + 7 clusters)

**Phase 3: Secondary Services (Week 5-6)**
4. Interior Deep Cleansing
5. Exterior Hand Wash & Sealant
6. Headlight Restoration
7. Engine Detailing

**Phase 4: Specialized Services (Week 7-8)**
8. Window Tinting
9. Odor Removal
10. Scratch & Swirl Removal
11. Leather Conditioning
12. Wheel & Tire Detailing
13. RV/Boat Detailing
14. Fleet Services

### Content Guidelines

**Word Count:**
- Pillar pages: 2000-2500 words
- Cluster pages: 800-1200 words
- Homepage: 1000-1500 words

**SEO Optimization:**
- Primary keyword in H1
- Primary keyword in first 100 words
- Secondary keywords in H2s
- Related keywords throughout
- Internal links (5-10 per page)
- External links (2-3 authoritative sources)

**E-E-A-T Signals:**
- Author bio (Ricardo Romeo Jr., IDA Certified)
- Certifications mentioned
- Years of experience (2019-present)
- Customer testimonials
- Before/after galleries
- Process documentation

---

## Analytics & Tracking

### Google Analytics 4

Track:
- Page views
- Scroll depth
- Click-to-call events
- Form submissions
- Booking conversions
- Service page engagement

### Custom Events

```typescript
// lib/analytics.ts
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, string | number>
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Usage:
trackEvent('phone_click', {
  page: '/services/ceramic-coating',
  service: 'Ceramic Coating'
});
```

### Convex Analytics

Store lead data:
```typescript
const createLead = mutation({
  args: {
    source: v.string(),
    page: v.string(),
    action: v.string(),
    metadata: v.optional(v.object({ /* ... */ }))
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("leads", {
      ...args,
      timestamp: Date.now()
    });
  }
});
```

---

## Accessibility (a11y)

### WCAG 2.1 AA Compliance

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Color contrast ratios (4.5:1 minimum)
- ✅ Alt text for all images
- ✅ Form labels and error messages
- ✅ Skip to main content link

### Dark Mode Implementation

```typescript
// app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
```

---

## Security Best Practices

### Form Validation

- Server-side validation (Convex mutations)
- Client-side validation (react-hook-form + zod)
- CSRF protection (Next.js built-in)
- Rate limiting (Convex rate limits)
- Sanitize user input

### Environment Security

- Never commit `.env.local`
- Use Vercel environment variables
- Rotate API keys regularly
- Use Convex auth for sensitive operations

---

## Maintenance & Updates

### Regular Tasks

**Weekly:**
- Review Google Analytics
- Check for new reviews (add to site)
- Monitor uptime (Vercel dashboard)

**Monthly:**
- Update dependencies (`pnpm update`)
- Review and respond to form submissions
- Check broken links
- Review SEO rankings

**Quarterly:**
- Content refresh (update stats, dates)
- Add new service pages if needed
- A/B test CTAs
- Review Core Web Vitals

---

## Success Metrics

### SEO Goals (6 months)

- Rank top 3 for "auto detailing San Antonio"
- Rank top 5 for "[service] San Antonio" (all 14 services)
- 50+ organic leads per month
- DA (Domain Authority) > 20

### Technical Goals

- Lighthouse Performance > 95
- Lighthouse SEO > 100
- Lighthouse Accessibility > 95
- Zero TypeScript errors
- < 3s page load time

### Business Goals

- 100+ bookings via website
- 50+ new reviews
- 20% conversion rate (visitors to leads)
- Rank #1 in Google Maps for target area

---

## Resources

### Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Convex Docs](https://docs.convex.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn-ui](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### SEO Resources
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org)
- [Semrush Keyword Tool](https://www.semrush.com)

### Design Resources
- [Coolors (color palettes)](https://coolors.co)
- [Heroicons](https://heroicons.com)
- [Unsplash (stock photos)](https://unsplash.com)

---

## Contact & Support

**Developer:** Claude (Anthropic)
**Project Owner:** Ricardo Romeo Jr.
**Email:** rromerojr1@gmail.com
**Phone:** (726) 207-1007

---

*Last Updated: 2025-11-30*
*Version: 1.0*
