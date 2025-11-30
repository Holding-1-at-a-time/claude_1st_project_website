# Advanced Routing Patterns

This project demonstrates Next.js 16 App Router's advanced routing capabilities.

## 🗂️ Route Groups

Route groups organize routes without affecting the URL structure.

### Implementation

```
app/
├── (marketing)/         # Marketing pages
│   ├── layout.tsx      # Shared marketing layout
│   ├── page.tsx        # Home page (/)
│   ├── about/
│   │   └── page.tsx    # About page (/about)
│   └── contact/
│       └── page.tsx    # Contact page (/contact)
│
└── (services)/          # Services pages
    ├── layout.tsx      # Shared services layout
    └── services/
        └── page.tsx    # Services overview (/services)
```

**Benefits:**
- Separate layouts for marketing vs services
- Better code organization
- Doesn't add `/marketing` or `/services` to URLs

---

## 🔀 Dynamic Routes

Dynamic routes enable parameter-based page generation.

### Single Dynamic Segment

**Path:** `app/(services)/services/[service]/page.tsx`

**Matches:**
- `/services/ceramic-coating`
- `/services/auto-detailing`
- `/services/paint-correction`

**Features:**
```typescript
// Generate static paths at build time
export async function generateStaticParams() {
  return [
    { service: 'ceramic-coating' },
    { service: 'auto-detailing' },
    // ... all services
  ];
}

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { service } = await params;
  return {
    title: `${service} San Antonio | One Detail At A Time`,
  };
}

// Server Component
export default async function PillarPage({ params }) {
  const { service } = await params;
  // Fetch data from Convex
  // Render page
}
```

### Nested Dynamic Segments

**Path:** `app/(services)/services/[service]/[cluster]/page.tsx`

**Matches:**
- `/services/ceramic-coating/benefits`
- `/services/ceramic-coating/pricing`
- `/services/auto-detailing/process`

**Features:**
```typescript
// Generate all combinations
export async function generateStaticParams() {
  const services = ['ceramic-coating', 'auto-detailing'];
  const clusters = ['benefits', 'pricing', 'process'];

  return services.flatMap(service =>
    clusters.map(cluster => ({ service, cluster }))
  );
}

// Access both params
export default async function ClusterPage({ params }) {
  const { service, cluster } = await params;
  // Full slug: `${service}/${cluster}`
}
```

---

## ⚡ Parallel Routes

Parallel routes render multiple pages in the same layout simultaneously.

### Implementation

**Directory Structure:**
```
app/
├── layout.tsx           # Accepts @modal slot
├── page.tsx            # Main content
├── @modal/             # Parallel route
│   ├── default.tsx     # Default state (null)
│   └── (.)booking/     # Intercepted route
│       └── page.tsx    # Modal content
```

**Root Layout:**
```typescript
interface RootLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;  // @modal slot
}

export default function RootLayout({ children, modal }) {
  return (
    <body>
      {children}
      {modal}  {/* Renders alongside children */}
    </body>
  );
}
```

**Default Slot:**
```typescript
// @modal/default.tsx
export default function Default() {
  return null;  // No modal by default
}
```

---

## 🎯 Intercepted Routes

Intercepted routes show modals when navigating client-side, but work as full pages when accessed directly.

### Pattern: (.) - Same Level

**Path:** `app/@modal/(.)booking/page.tsx`

**Intercepts:** `/booking`

**When Active:**
- User clicks "Book Service" → Opens modal
- User navigates to `/booking` directly → Shows full page
- User refreshes on `/booking` → Shows full page

### Implementation

**Modal Version (Intercepted):**
```typescript
'use client';

// @modal/(.)booking/page.tsx
export default function BookingModal() {
  const router = useRouter();

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={() => router.back()}>Close</button>
        {/* Modal content */}
      </div>
    </div>
  );
}
```

**Full Page Version:**
```typescript
// booking/page.tsx
export default function BookingPage() {
  return (
    <main>
      {/* Full page content */}
    </main>
  );
}
```

### Intercept Patterns

- `(.)` - Same level
- `(..)` - One level up
- `(..)(..)` - Two levels up
- `(...)` - From root

**Example:**
```
app/
├── @modal/
│   ├── (.)booking/          # Intercepts /booking
│   ├── (..)reviews/         # Intercepts /reviews (one level up)
│   └── (...)admin/          # Intercepts /admin (from root)
```

---

## 🚀 Combined Example: Booking Flow

### User Journey 1: Modal Flow
1. User on `/services/ceramic-coating`
2. Clicks "Book This Service"
3. `Link href="/booking?service=ceramic-coating"`
4. **Intercepted route triggers**
5. Modal appears over current page
6. URL updates to `/booking?service=ceramic-coating`
7. User can close modal (go back) or proceed

### User Journey 2: Direct Access
1. User types `/booking` in browser
2. **No interception** (direct navigation)
3. Full booking page renders
4. Same URL, different experience

### User Journey 3: Refresh
1. User on modal at `/booking`
2. Presses F5 (refresh)
3. **No interception** (page load)
4. Full booking page renders
5. Modal experience lost

---

## 📊 Routing Decision Tree

```
User Action          → Route Type        → Renders
─────────────────────────────────────────────────────
Click Link           → Intercepted       → Modal
Direct Navigation    → Full Page         → Page
Page Refresh         → Full Page         → Page
Share URL            → Full Page         → Page
Browser Back         → Previous State    → Previous
```

---

## 🎨 Best Practices

### 1. Use Route Groups for Organization
```typescript
// ✅ Good: Organized by feature
app/
├── (marketing)/
├── (services)/
└── (admin)/

// ❌ Bad: Flat structure
app/
├── home/
├── about/
├── services/
├── service-detail/
```

### 2. Generate Static Params
```typescript
// ✅ Good: Static generation
export async function generateStaticParams() {
  const services = await fetchServices();
  return services.map(s => ({ service: s.slug }));
}

// ❌ Bad: Missing static params (slower)
// No generateStaticParams function
```

### 3. Type-Safe Params
```typescript
// ✅ Good: Async params (Next.js 16)
export default async function Page({ params }) {
  const { service } = await params;  // Type-safe
}

// ❌ Bad: Synchronous params (deprecated)
export default function Page({ params: { service } }) {
  // Don't do this in Next.js 16
}
```

### 4. Default Parallel Routes
```typescript
// ✅ Good: Always provide default
// @modal/default.tsx
export default function Default() {
  return null;
}

// ❌ Bad: Missing default
// (Will cause errors)
```

---

## 🧪 Testing Routes

### Test Dynamic Routes
```bash
# Should work:
/services/ceramic-coating
/services/ceramic-coating/benefits
/services/ceramic-coating/pricing

# Should 404:
/services/invalid-service
/services/ceramic-coating/invalid-cluster
```

### Test Intercepted Routes
```typescript
// Test modal (client-side navigation)
<Link href="/booking">Book Now</Link>  // Opens modal

// Test full page (direct access)
window.location.href = '/booking'  // Full page
```

### Test Parallel Routes
```typescript
// Modal should appear alongside main content
// @modal renders in modal slot
// children renders in children slot
```

---

## 📚 Resources

- [Next.js Routing Docs](https://nextjs.org/docs/app/building-your-application/routing)
- [Dynamic Routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
- [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)

---

## 🎯 Project Routes Summary

### Static Routes
- `/` - Home (marketing group)
- `/about` - About (marketing group)
- `/contact` - Contact (marketing group)
- `/services` - Services overview

### Dynamic Routes (Static Generated)
- `/services/[service]` - 14 pillar pages
- `/services/[service]/[cluster]` - 98 cluster pages
- `/booking` - Full page or modal (intercepted)

### Parallel Routes
- `@modal` - Modal slot (renders alongside main content)

### Intercepted Routes
- `/(.)booking` - Booking modal (intercepts /booking)

**Total Static Pages:** 112+ (14 pillars + 98 clusters + static pages)

---

*Last Updated: 2025-11-30*
