# One Detail At A Time LLC - Implementation TODO List

## Project Status: Planning Complete ✅

**Created:** 2025-11-30
**Branch:** `claude/plan-rsc-convex-project-01RY7mxuqeakUdVbXzsfhTsx`
**Target Domain:** odaat1.com

---

## 📋 Implementation Phases

### ✅ Phase 0: Planning & Architecture (COMPLETE)
- [x] Create CLAUDE.MD with comprehensive plan
- [x] Create TODO_LIST.md with implementation breakdown
- [x] Define technical stack and requirements
- [x] Plan topic cluster SEO architecture
- [x] Design Convex schema
- [x] Define TypeScript best practices

---

## Phase 1: Project Foundation & Setup

### 1.1 Initialize Next.js 16 Project
- [ ] Create Next.js 16 app with TypeScript
  ```bash
  pnpm create next-app@latest . --typescript --tailwind --app --no-src-dir
  ```
- [ ] Configure `tsconfig.json` for strict mode
  - Enable strict: true
  - Enable noImplicitAny: true
  - Enable strictNullChecks: true
  - Enable noUnusedLocals: true
  - Enable noUnusedParameters: true
- [ ] Set up `.gitignore` (node_modules, .env.local, .next, etc.)
- [ ] Create `.env.example` template
- [ ] Configure `.env.local` with placeholders

### 1.2 Install Core Dependencies
- [ ] Install Convex
  ```bash
  pnpm add convex
  pnpm convex dev --once
  ```
- [ ] Install Tailwind CSS (should be included)
- [ ] Install Shadcn-ui
  ```bash
  pnpm dlx shadcn@latest init
  ```
- [ ] Install additional dependencies:
  ```bash
  pnpm add next-themes class-variance-authority clsx tailwind-merge
  pnpm add lucide-react @radix-ui/react-* (as needed)
  pnpm add zod react-hook-form @hookform/resolvers
  pnpm add date-fns
  ```
- [ ] Install dev dependencies:
  ```bash
  pnpm add -D @types/node @types/react @types/react-dom
  pnpm add -D prettier eslint-config-prettier
  pnpm add -D vitest @vitejs/plugin-react
  ```

### 1.3 Configure Tailwind & Design System
- [ ] Create `tailwind.config.ts` with custom colors
  - Primary: #00ae98
  - Dark mode backgrounds
  - Custom color palette from CLAUDE.MD
- [ ] Create `app/globals.css`
  - Import Tailwind directives
  - Define CSS variables for dark mode
  - Add custom utility classes
- [ ] Set up `next/font` for Inter
- [ ] Create `lib/utils.ts` with `cn()` helper

### 1.4 Set Up Convex Backend
- [ ] Initialize Convex project
  ```bash
  pnpm convex dev
  ```
- [ ] Create `convex/schema.ts` with full schema
  - pillarPages table
  - clusterPages table
  - bookings table
  - reviews table
  - serviceAreas table
  - leads table
- [ ] Create `convex/tsconfig.json`
- [ ] Set up Convex provider in Next.js app

### 1.5 Project Structure Setup
- [ ] Create route groups:
  - `app/(marketing)/`
  - `app/(services)/`
- [ ] Create base folders:
  - `components/`
  - `lib/`
  - `types/`
  - `config/`
  - `hooks/`
- [ ] Create type definitions file `types/index.ts`

---

## Phase 2: Core Infrastructure

### 2.1 Root Layout & Providers
- [ ] Create `app/layout.tsx`
  - HTML lang attribute
  - Metadata (title, description)
  - Organization schema.org JSON-LD
  - Font configuration
  - Dark mode class
- [ ] Create `app/providers.tsx`
  - ConvexProvider
  - ThemeProvider (next-themes)
- [ ] Create global metadata in `app/metadata.ts`

### 2.2 Shared Components - Layout
- [ ] Create `components/header.tsx`
  - Logo
  - Navigation menu
  - Phone number (click-to-call)
  - Mobile menu
  - Type: Server Component
- [ ] Create `components/footer.tsx`
  - NAP (Name, Address, Phone)
  - Service areas list
  - Social links
  - Copyright
  - Type: Server Component
- [ ] Create `components/nav-menu.tsx`
  - Desktop navigation
  - Mobile hamburger menu
  - Services dropdown
  - Type: Client Component (interactive)

### 2.3 Shared Components - UI
- [ ] Install Shadcn components:
  ```bash
  pnpm dlx shadcn@latest add button card input textarea select label
  pnpm dlx shadcn@latest add form dialog sheet accordion tabs
  pnpm dlx shadcn@latest add skeleton toast
  ```
- [ ] Create `components/ui/service-card.tsx`
  - Props: title, description, slug, icon
  - Link to service pillar page
  - Type: Server Component
- [ ] Create `components/ui/review-card.tsx`
  - Props: name, rating, comment, date
  - Star rating display
  - Type: Server Component
- [ ] Create `components/ui/breadcrumbs.tsx`
  - Dynamic breadcrumb generation
  - Schema.org BreadcrumbList markup
  - Type: Server Component

### 2.4 SEO Components
- [ ] Create `components/seo/schema-organization.tsx`
  - LocalBusiness schema
  - Organization schema
  - Type: Server Component
- [ ] Create `components/seo/schema-service.tsx`
  - Service schema generator
  - Props: service data
  - Type: Server Component
- [ ] Create `components/seo/schema-review.tsx`
  - Review schema generator
  - Props: review data
  - Type: Server Component
- [ ] Create `components/seo/schema-faq.tsx`
  - FAQ schema generator
  - Props: FAQ array
  - Type: Server Component

### 2.5 Utility Functions
- [ ] Create `lib/constants.ts`
  - NAP constants
  - Service areas array
  - Business hours
  - Social media links
- [ ] Create `lib/validators.ts`
  - Zod schemas for forms
  - Phone validation
  - Email validation
  - ZIP code validation
- [ ] Create `lib/seo.ts`
  - Generate meta tags helper
  - Generate canonical URL helper
  - Keyword formatter
- [ ] Create `lib/analytics.ts`
  - trackEvent function
  - Type-safe event names

---

## Phase 3: Convex Backend Development

### 3.1 Queries - Pillar Pages
- [ ] Create `convex/queries/pillarPages.ts`
  - `getAll`: Get all published pillar pages
  - `getBySlug`: Get single pillar by slug
  - `getWithClusters`: Get pillar + all clusters
  - All return types explicitly typed

### 3.2 Queries - Cluster Pages
- [ ] Create `convex/queries/clusterPages.ts`
  - `getBySlug`: Get single cluster by slug
  - `getByPillar`: Get all clusters for a pillar
  - `getRelated`: Get related clusters by IDs

### 3.3 Queries - Reviews
- [ ] Create `convex/queries/reviews.ts`
  - `getFeatured`: Get featured reviews
  - `getByService`: Get reviews for specific service
  - `getRecent`: Get N most recent reviews
  - `getByRating`: Get reviews by rating

### 3.4 Queries - Service Areas
- [ ] Create `convex/queries/serviceAreas.ts`
  - `getAll`: Get all active service areas
  - `checkZipCode`: Verify ZIP code coverage

### 3.5 Mutations - Bookings
- [ ] Create `convex/mutations/bookings.ts`
  - `create`: Create new booking
    - Input validation with Zod
    - Email notification trigger
    - Return booking ID
  - `updateStatus`: Update booking status

### 3.6 Mutations - Reviews
- [ ] Create `convex/mutations/reviews.ts`
  - `create`: Submit new review
    - Validation
    - Auto-set createdAt
  - `toggleFeatured`: Mark review as featured

### 3.7 Mutations - Leads
- [ ] Create `convex/mutations/leads.ts`
  - `trackLead`: Log lead action
    - Source tracking
    - Page tracking
    - Metadata

### 3.8 Seed Data
- [ ] Create `convex/seed.ts`
  - Seed 3 pillar pages (auto detailing, ceramic coating, paint correction)
  - Seed 21 cluster pages (7 per pillar)
  - Seed 10 sample reviews
  - Seed 7 service areas
- [ ] Create script to run seed: `pnpm seed`

---

## Phase 4: Marketing Pages (Route Group: marketing)

### 4.1 Homepage
- [ ] Create `app/(marketing)/page.tsx`
  - Hero section with CTA
  - Services overview (grid)
  - Featured reviews carousel
  - Service areas map
  - Why choose us section
  - Final CTA
  - Type: Server Component with Client islands
- [ ] Create `components/home/hero.tsx`
  - H1: "Professional Auto Detailing San Antonio"
  - Subheading with USPs
  - CTA buttons (Book Now, Call Now)
  - Background image (optimized)
- [ ] Create `components/home/services-grid.tsx`
  - Grid of ServiceCard components
  - Link to all 14 services
  - Type: Server Component
- [ ] Create `components/home/reviews-carousel.tsx`
  - Rotating reviews
  - Type: Client Component (interactive)
- [ ] Generate metadata for homepage
  - Title: "Auto Detailing San Antonio | One Detail At A Time LLC"
  - Description optimized for local SEO

### 4.2 About Page
- [ ] Create `app/(marketing)/about/page.tsx`
  - Business story
  - Owner bio (Ricardo Romeo Jr.)
  - IDA certification
  - Years of experience (since 2019)
  - Mission statement
  - Values
  - Image: owner with vehicle
- [ ] Generate metadata
  - Title: "About Us | One Detail At A Time LLC"
  - Description: expertise and credentials

### 4.3 Contact Page
- [ ] Create `app/(marketing)/contact/page.tsx`
  - Contact form
  - NAP display
  - Google Maps embed
  - Hours of operation
  - Service areas list
- [ ] Create `components/contact/contact-form.tsx`
  - Type: Client Component
  - Fields: name, email, phone, message
  - Validation with Zod
  - Submit to Convex mutation
  - Success toast notification
- [ ] Create `components/contact/google-map.tsx`
  - Type: Client Component
  - Embedded Google Map
  - Marker at business location
  - "Get Directions" link
- [ ] Generate metadata
  - Title: "Contact Us | Auto Detailing San Antonio"

### 4.4 Marketing Layout
- [ ] Create `app/(marketing)/layout.tsx`
  - Include Header
  - Include Footer
  - Shared layout for all marketing pages

---

## Phase 5: Services Infrastructure

### 5.1 Services Layout
- [ ] Create `app/(services)/layout.tsx`
  - Include Header
  - Include Footer
  - Breadcrumbs
  - Sidebar navigation (optional)

### 5.2 Services Overview Page
- [ ] Create `app/(services)/services/page.tsx`
  - H1: "Auto Detailing Services San Antonio"
  - Introduction to all services
  - Grid of all 14 services
  - Link to each pillar page
  - Service selection CTA
- [ ] Generate metadata
  - Title: "Services | Professional Auto Detailing San Antonio"

### 5.3 Pillar Page Template
- [ ] Create `app/(services)/services/[service]/page.tsx`
  - Dynamic route for all services
  - RSC (React Server Component)
  - Fetch pillar data from Convex
  - Render pillar content
  - Cluster navigation section
  - FAQ section with schema
  - Reviews section
  - Booking CTA
  - Related services
- [ ] Create `generateMetadata()` function
  - Dynamic meta title
  - Dynamic meta description
  - Canonical URL
  - OpenGraph tags
- [ ] Create `generateStaticParams()` function
  - Pre-render all pillar pages at build time
- [ ] Add Service schema.org markup
- [ ] Add FAQ schema.org markup
- [ ] Add Review schema.org markup
- [ ] Add Breadcrumb schema.org markup

### 5.4 Cluster Page Template
- [ ] Create `app/(services)/services/[service]/[cluster]/page.tsx`
  - Dynamic nested route
  - RSC (React Server Component)
  - Fetch cluster data from Convex
  - Render cluster content
  - Link back to pillar page
  - Related clusters navigation
  - Booking CTA
- [ ] Create `generateMetadata()` function
  - Dynamic title from cluster data
  - Dynamic description
  - Canonical URL
- [ ] Create `generateStaticParams()` function
  - Pre-render all cluster pages
  - Fetch all pillar/cluster combinations
- [ ] Add Breadcrumb schema.org markup

### 5.5 Shared Service Components
- [ ] Create `components/services/cluster-navigation.tsx`
  - Props: clusters array
  - Grid of links to cluster pages
  - Type: Server Component
- [ ] Create `components/services/pillar-content.tsx`
  - Props: pillar data
  - Render HTML content
  - Internal linking
  - Type: Server Component
- [ ] Create `components/services/booking-cta.tsx`
  - Props: service slug
  - CTA button
  - Quick facts
  - Type: Server Component
- [ ] Create `components/services/faq-section.tsx`
  - Props: FAQ array
  - Accordion UI
  - Schema.org markup
  - Type: Client Component (accordion)

---

## Phase 6: Booking System

### 6.1 Global Booking Page
- [ ] Create `app/booking/page.tsx`
  - Service selector
  - Booking form
  - Type: Client Component
- [ ] Generate metadata
  - Title: "Book Auto Detailing | San Antonio"

### 6.2 Booking Form Component
- [ ] Create `components/booking/booking-form.tsx`
  - Type: Client Component
  - Fields:
    - Service selection (dropdown)
    - Customer name
    - Email
    - Phone
    - Address (optional)
    - ZIP code
    - Vehicle type (sedan, SUV, truck, RV, boat)
    - Vehicle details (make, model, year)
    - Preferred date (calendar picker)
    - Preferred time (time picker)
    - Notes (textarea)
  - Validation with Zod
  - Submit to Convex mutation
  - Success/error handling
  - Redirect to confirmation page

### 6.3 Booking Confirmation
- [ ] Create `app/booking/confirmation/page.tsx`
  - Thank you message
  - Booking details summary
  - Next steps
  - Contact info
- [ ] Add to calendar link (Google Calendar)

### 6.4 Service-Specific Booking
- [ ] Create `app/(services)/services/[service]/booking/page.tsx`
  - Pre-filled service selection
  - Reuse BookingForm component
  - Pass service slug as prop

---

## Phase 7: Reviews System

### 7.1 Reviews Page
- [ ] Create `app/reviews/page.tsx`
  - All reviews display
  - Filter by rating
  - Filter by service
  - Pagination
  - Type: Server Component with Client filters
- [ ] Generate metadata
  - Title: "Customer Reviews | 5 Stars | San Antonio"

### 7.2 Review Components
- [ ] Create `components/reviews/review-list.tsx`
  - Props: reviews array
  - Map ReviewCard components
  - Type: Server Component
- [ ] Create `components/reviews/review-filters.tsx`
  - Type: Client Component
  - Filter by rating
  - Filter by service
  - Update URL params
- [ ] Create `components/reviews/star-rating.tsx`
  - Props: rating number
  - Display stars
  - Type: Server Component

### 7.3 Review Submission (Optional)
- [ ] Create review submission form
  - For customers to leave reviews
  - Validation
  - Admin approval required

---

## Phase 8: Local SEO Implementation

### 8.1 Schema.org Structured Data
- [ ] Add Organization schema to root layout
  - LocalBusiness type
  - Full NAP
  - Geo coordinates
  - Service areas
  - Aggregate rating
  - Opening hours
- [ ] Add Service schema to each pillar page
- [ ] Add Review schema to review sections
- [ ] Add FAQ schema to FAQ sections
- [ ] Add Breadcrumb schema to all pages
- [ ] Validate all schemas with Google Rich Results Test

### 8.2 Sitemap Generation
- [ ] Create `app/sitemap.ts`
  - Generate dynamic sitemap
  - Include all static pages
  - Include all pillar pages (fetch from Convex)
  - Include all cluster pages (fetch from Convex)
  - Set priority and changefreq
  - Include lastmod dates
- [ ] Test sitemap: `https://odaat1.com/sitemap.xml`

### 8.3 Robots.txt
- [ ] Create `app/robots.ts`
  - Allow all crawlers
  - Sitemap reference
  - Disallow admin routes (if any)

### 8.4 Metadata Optimization
- [ ] Review all page titles
  - Include location (San Antonio)
  - Include service name
  - Under 60 characters
- [ ] Review all meta descriptions
  - Include CTA
  - Include location
  - Include phone number
  - 150-160 characters
- [ ] Add OpenGraph images for all pages
  - 1200x630px
  - Branded images

### 8.5 Local Content Optimization
- [ ] Ensure NAP on every page
- [ ] Add service areas to footer
- [ ] Include neighborhood names in content
- [ ] Add local landmarks references
- [ ] Create alt text with location keywords

### 8.6 Google Business Profile Integration
- [ ] Add GBP link to footer
- [ ] Embed Google reviews on homepage
- [ ] Add "Leave a Review" CTA
- [ ] Link to Google Maps for directions

---

## Phase 9: Content Creation

### 9.1 Core Service Content (Priority 1)
- [ ] **Auto Detailing** (Service 1)
  - [ ] Pillar page content (2000+ words)
  - [ ] Cluster: Paint Protection (800-1200 words)
  - [ ] Cluster: Interior vs Exterior (800-1200 words)
  - [ ] Cluster: Benefits (800-1200 words)
  - [ ] Cluster: Pricing Guide (800-1200 words)
  - [ ] Cluster: DIY vs Professional (800-1200 words)
  - [ ] Cluster: Seasonal Care (800-1200 words)
  - [ ] Cluster: Booking (400-600 words)

- [ ] **Ceramic Coating** (Service 2)
  - [ ] Pillar page content
  - [ ] Cluster: What is Ceramic Coating
  - [ ] Cluster: Ceramic vs Wax
  - [ ] Cluster: Longevity
  - [ ] Cluster: Cost Analysis
  - [ ] Cluster: Application Process
  - [ ] Cluster: Maintenance
  - [ ] Cluster: Booking

- [ ] **Paint Correction** (Service 3)
  - [ ] Pillar page content
  - [ ] Cluster: Swirl Removal
  - [ ] Cluster: Scratch Repair
  - [ ] Cluster: Oxidation Removal
  - [ ] Cluster: Multi-Stage Correction
  - [ ] Cluster: Before/After Gallery
  - [ ] Cluster: Process Explanation
  - [ ] Cluster: Booking

### 9.2 Secondary Services Content (Priority 2)
- [ ] **Interior Deep Cleansing** (Service 4)
  - [ ] Pillar + 7 clusters
- [ ] **Exterior Hand Wash & Sealant** (Service 5)
  - [ ] Pillar + 7 clusters
- [ ] **Headlight Restoration** (Service 6)
  - [ ] Pillar + 7 clusters
- [ ] **Engine Detailing** (Service 7)
  - [ ] Pillar + 7 clusters

### 9.3 Specialized Services Content (Priority 3)
- [ ] **Window Tinting** (Service 8)
  - [ ] Pillar + 7 clusters
- [ ] **Odor Removal** (Service 9)
  - [ ] Pillar + 7 clusters
- [ ] **Scratch & Swirl Removal** (Service 10)
  - [ ] Pillar + 7 clusters
- [ ] **Leather Conditioning** (Service 11)
  - [ ] Pillar + 7 clusters
- [ ] **Wheel & Tire Detailing** (Service 12)
  - [ ] Pillar + 7 clusters
- [ ] **RV/Boat Detailing** (Service 13)
  - [ ] Pillar + 7 clusters
- [ ] **Fleet Services** (Service 14)
  - [ ] Pillar + 7 clusters

### 9.4 Content Upload to Convex
- [ ] Create script to upload content to Convex
  - [ ] Parse markdown/content files
  - [ ] Insert into pillarPages table
  - [ ] Insert into clusterPages table
  - [ ] Link clusters to pillars
  - [ ] Set published status

### 9.5 Images & Media
- [ ] Gather service images
  - Before/after photos
  - Process photos
  - Equipment photos
  - Team photos
- [ ] Optimize all images
  - Convert to WebP
  - Resize for web
  - Compress with tools (TinyPNG, Squoosh)
  - Add to `public/images/`
- [ ] Create alt text for all images
  - Include service name
  - Include location (San Antonio)
  - Descriptive and keyword-rich

---

## Phase 10: Performance Optimization

### 10.1 Image Optimization
- [ ] Use Next.js Image component everywhere
- [ ] Set appropriate sizes and quality
- [ ] Use priority for above-fold images
- [ ] Lazy load below-fold images
- [ ] Generate multiple image sizes
- [ ] Use modern formats (WebP, AVIF)

### 10.2 Font Optimization
- [ ] Use next/font for Google Fonts
- [ ] Preload critical fonts
- [ ] Set font-display: swap
- [ ] Minimize font weights loaded

### 10.3 Code Optimization
- [ ] Dynamic imports for heavy components
- [ ] Code split by route (automatic with App Router)
- [ ] Minimize client-side JavaScript
- [ ] Remove unused dependencies
- [ ] Tree-shake and minimize bundle

### 10.4 Caching Strategy
- [ ] Set revalidate times for ISR
- [ ] Use static generation for all possible pages
- [ ] Configure CDN caching headers
- [ ] Implement Convex query caching

### 10.5 Core Web Vitals Testing
- [ ] Test LCP (target: < 2.5s)
  - Optimize hero image
  - Reduce server response time
- [ ] Test FID (target: < 100ms)
  - Minimize JavaScript execution
  - Break up long tasks
- [ ] Test CLS (target: < 0.1)
  - Set image dimensions
  - Reserve space for dynamic content
- [ ] Run Lighthouse audits
  - Performance > 95
  - SEO > 100
  - Accessibility > 95
  - Best Practices > 95

---

## Phase 11: Testing

### 11.1 TypeScript Type Checking
- [ ] Run `pnpm tsc --noEmit`
- [ ] Fix all type errors
- [ ] Ensure no `any` types (search codebase)
- [ ] Ensure all functions have return types

### 11.2 Unit Tests
- [ ] Test utility functions
  - `lib/validators.ts`
  - `lib/seo.ts`
  - `lib/analytics.ts`
- [ ] Test Convex queries (if possible)
- [ ] Test form validation logic

### 11.3 Integration Tests
- [ ] Test booking flow
  - Fill form
  - Submit
  - Verify Convex mutation
  - Check confirmation page
- [ ] Test contact form
- [ ] Test review display

### 11.4 E2E Tests (Playwright)
- [ ] Test homepage loads
- [ ] Test navigation
- [ ] Test service page navigation
- [ ] Test cluster page linking
- [ ] Test booking form submission
- [ ] Test mobile responsiveness

### 11.5 SEO Validation
- [ ] Validate all Schema.org markup
  - Use Google Rich Results Test
  - Use Schema.org validator
- [ ] Check all meta tags
  - Title tags
  - Meta descriptions
  - OpenGraph tags
  - Canonical URLs
- [ ] Validate sitemap.xml
- [ ] Test robots.txt
- [ ] Check internal linking
  - No broken links
  - All cluster pages link to pillar
  - All pillar pages link to clusters

### 11.6 Accessibility Testing
- [ ] Run axe DevTools
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility
- [ ] Check color contrast ratios
- [ ] Verify ARIA labels
- [ ] Test focus indicators

### 11.7 Cross-Browser Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on Edge
- [ ] Test on mobile browsers (iOS Safari, Chrome Mobile)

### 11.8 Mobile Responsiveness
- [ ] Test on mobile devices
  - iPhone (various sizes)
  - Android (various sizes)
- [ ] Test tablet sizes
- [ ] Verify touch targets (min 44x44px)
- [ ] Test mobile navigation menu

---

## Phase 12: Analytics & Tracking

### 12.1 Google Analytics Setup
- [ ] Create GA4 property
- [ ] Add GA tracking code to root layout
- [ ] Set up custom events
  - Phone click
  - Form submission
  - Booking conversion
  - Email click
- [ ] Set up goals/conversions
  - Booking submitted
  - Contact form submitted
  - Phone number clicked

### 12.2 Google Search Console
- [ ] Add property for odaat1.com
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Monitor indexing status
- [ ] Check for crawl errors

### 12.3 Convex Analytics
- [ ] Implement lead tracking
  - Track form submissions
  - Track phone clicks
  - Track page views (if needed)
- [ ] Create analytics dashboard queries
  - Leads by source
  - Leads by page
  - Bookings by service
  - Popular services

---

## Phase 13: Deployment Preparation

### 13.1 Environment Configuration
- [ ] Set up Vercel project
- [ ] Configure environment variables in Vercel
  - CONVEX_DEPLOYMENT
  - NEXT_PUBLIC_CONVEX_URL
  - NEXT_PUBLIC_SITE_URL
  - GA_MEASUREMENT_ID
- [ ] Set up production Convex deployment
- [ ] Configure custom domain (odaat1.com)

### 13.2 Pre-Deployment Checklist
- [ ] All TypeScript errors resolved
- [ ] All tests passing
- [ ] Lighthouse scores verified
- [ ] No console errors/warnings
- [ ] All images optimized
- [ ] Meta tags verified on all pages
- [ ] Schema.org markup validated
- [ ] Sitemap generated and tested
- [ ] robots.txt configured
- [ ] 404 page exists and styled
- [ ] Favicon added
- [ ] Apple touch icon added
- [ ] Web manifest added (PWA)

### 13.3 Security Checklist
- [ ] Environment variables not committed
- [ ] HTTPS enforced
- [ ] CSP headers configured (if needed)
- [ ] Rate limiting on forms
- [ ] Input validation on all forms
- [ ] No sensitive data exposed

### 13.4 Build & Deploy
- [ ] Run production build locally
  ```bash
  pnpm build
  pnpm start
  ```
- [ ] Test production build locally
- [ ] Deploy to Vercel
  ```bash
  vercel --prod
  ```
- [ ] Verify deployment
- [ ] Test live site

---

## Phase 14: Post-Launch

### 14.1 Monitoring Setup
- [ ] Set up Vercel Analytics
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Set up error tracking (Sentry, optional)
- [ ] Monitor Core Web Vitals in Search Console

### 14.2 SEO Submission
- [ ] Submit site to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Submit to Google My Business (link website)
- [ ] Submit sitemap to search engines

### 14.3 Initial Content Marketing
- [ ] Create Google Business Profile posts
  - Announce new website
  - Highlight featured services
- [ ] Social media announcements (if applicable)
- [ ] Email existing customers (if list exists)

### 14.4 Review Collection
- [ ] Add "Leave a Review" CTAs
- [ ] Send review requests to recent customers
- [ ] Monitor new reviews
- [ ] Add new reviews to site

---

## Phase 15: Ongoing Maintenance

### 15.1 Weekly Tasks
- [ ] Review Google Analytics
  - Traffic sources
  - Top pages
  - Conversions
- [ ] Check for new reviews
  - Add to site if positive
  - Respond to all reviews
- [ ] Monitor uptime
- [ ] Check for errors in logs

### 15.2 Monthly Tasks
- [ ] Update dependencies
  ```bash
  pnpm update
  ```
- [ ] Review and respond to form submissions
- [ ] Check for broken links
- [ ] Review SEO rankings
  - Track keyword positions
  - Identify opportunities
- [ ] Add new content (blog posts, service updates)

### 15.3 Quarterly Tasks
- [ ] Content refresh
  - Update statistics
  - Update dates/years
  - Add new service offerings
- [ ] A/B test CTAs
- [ ] Review Core Web Vitals
- [ ] Security audit
  - Update dependencies
  - Review access logs
  - Check for vulnerabilities

### 15.4 Annual Tasks
- [ ] Comprehensive site audit
- [ ] Redesign evaluation
- [ ] New feature planning
- [ ] Content strategy review
- [ ] Competitor analysis

---

## 📊 Progress Tracking

### Overall Progress
```
Phase 0: ✅ COMPLETE (Planning)
Phase 1: ⬜ TODO (Foundation)
Phase 2: ⬜ TODO (Infrastructure)
Phase 3: ⬜ TODO (Backend)
Phase 4: ⬜ TODO (Marketing Pages)
Phase 5: ⬜ TODO (Services Pages)
Phase 6: ⬜ TODO (Booking System)
Phase 7: ⬜ TODO (Reviews)
Phase 8: ⬜ TODO (Local SEO)
Phase 9: ⬜ TODO (Content)
Phase 10: ⬜ TODO (Performance)
Phase 11: ⬜ TODO (Testing)
Phase 12: ⬜ TODO (Analytics)
Phase 13: ⬜ TODO (Deployment)
Phase 14: ⬜ TODO (Post-Launch)
Phase 15: ⬜ TODO (Maintenance)
```

### Key Milestones
- [ ] Project initialized (Phase 1)
- [ ] Core infrastructure complete (Phase 2)
- [ ] First service page live (Phase 5)
- [ ] Booking system functional (Phase 6)
- [ ] All 14 services deployed (Phase 9)
- [ ] Performance optimized (Phase 10)
- [ ] Site launched (Phase 13)
- [ ] First organic lead (Phase 14)

---

## 🎯 Success Metrics

### Technical Metrics
- [ ] Lighthouse Performance: > 95
- [ ] Lighthouse SEO: 100
- [ ] Lighthouse Accessibility: > 95
- [ ] Zero TypeScript errors
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1

### SEO Metrics (6 months post-launch)
- [ ] Indexed pages: 112+ (all services)
- [ ] Organic traffic: 500+ monthly visits
- [ ] Top 3 ranking: "auto detailing San Antonio"
- [ ] Top 5 rankings: All 14 core service keywords
- [ ] Domain Authority: > 20

### Business Metrics
- [ ] 50+ organic leads per month
- [ ] 20% conversion rate (visitors to leads)
- [ ] 100+ bookings via website
- [ ] 50+ new reviews collected
- [ ] 5.0 average rating maintained

---

## 📝 Notes

### Development Guidelines
- **NO `any` types** - Use proper TypeScript typing
- **Server Components first** - Use 'use client' only when needed
- **Semantic HTML** - Use proper HTML5 elements
- **Accessibility** - WCAG 2.1 AA compliance
- **Mobile-first** - Design and test mobile first
- **Performance** - Optimize images, code, fonts
- **SEO** - Every page optimized for local search

### Content Guidelines
- **E-E-A-T** - Experience, Expertise, Authoritativeness, Trust
- **Local focus** - Always mention San Antonio, neighborhoods
- **User intent** - Write for real customers, not just search engines
- **Internal linking** - Link between related pages generously
- **CTAs** - Every page should have clear next steps

### Testing Guidelines
- **Test early, test often** - Don't wait until the end
- **Real devices** - Test on actual phones/tablets
- **Real users** - Get feedback from potential customers
- **Automated tests** - Unit, integration, E2E
- **Manual testing** - Click through every flow

---

## 🔗 Resources

### Documentation
- [Next.js 16 Docs](https://nextjs.org/docs)
- [Convex Docs](https://docs.convex.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn-ui](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org)
- [Semrush](https://www.semrush.com)
- [Ahrefs](https://ahrefs.com)

### Performance Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev)
- [Web.dev Measure](https://web.dev/measure)
- [WebPageTest](https://www.webpagetest.org)

### Image Optimization
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com)

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
pnpm install

# Start Convex dev server
pnpm convex dev

# Start Next.js dev server
pnpm dev

# Type check
pnpm typecheck

# Build for production
pnpm build

# Start production server
pnpm start

# Deploy to Vercel
vercel --prod

# Seed database
pnpm seed
```

---

**Last Updated:** 2025-11-30
**Status:** Planning Complete - Ready for Implementation
**Next Step:** Phase 1 - Project Foundation & Setup
