import type { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Book Auto Detailing Service | One Detail At A Time',
  description:
    'Schedule your auto detailing appointment online. Quick and easy booking for all services in San Antonio.',
};

/**
 * Full Booking Page
 * Path: /booking
 *
 * This page is shown when:
 * 1. User navigates directly to /booking
 * 2. User refreshes while on /booking
 * 3. User shares /booking URL
 *
 * When navigating from other pages via Link, the intercepted
 * route at @modal/(.)booking shows a modal instead.
 */

function BookingContent(): JSX.Element {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
          Book Your Service
        </h1>
        <p className="text-lg text-muted-foreground">
          Schedule your auto detailing appointment online or call us at{' '}
          <a
            href="tel:+17262071007"
            className="font-semibold text-primary hover:underline"
          >
            (726) 207-1007
          </a>
        </p>
      </div>

      <div className="rounded-lg border border-border bg-card p-8">
        <h2 className="mb-6 text-2xl font-semibold text-white">
          Full Booking Page
        </h2>

        <div className="space-y-4 text-muted-foreground">
          <p>
            This is the <strong>full booking page</strong> shown when you navigate directly
            to <code className="text-primary">/booking</code> or refresh the page.
          </p>

          <p>
            When you navigate here from other pages (like service pages), you'll see a
            modal instead thanks to the <strong>intercepted route</strong> pattern.
          </p>

          <div className="mt-8 rounded-lg bg-primary/10 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Routing Patterns Demonstrated:
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                ✅ <strong>Full Page:</strong> <code>/booking/page.tsx</code>
              </li>
              <li>
                ✅ <strong>Modal Intercept:</strong>{' '}
                <code>/@modal/(.)booking/page.tsx</code>
              </li>
              <li>
                ✅ <strong>Parallel Route:</strong> <code>@modal</code> slot
              </li>
              <li>
                ✅ <strong>Route Groups:</strong> <code>(services)</code>,{' '}
                <code>(marketing)</code>
              </li>
              <li>
                ✅ <strong>Dynamic Routes:</strong>{' '}
                <code>/services/[service]/[cluster]</code>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="mb-4 font-semibold text-white">Try These:</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/ceramic-coating"
                className="rounded-lg border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
              >
                Go to Service Page
              </Link>
              <Link
                href="/services/ceramic-coating/benefits"
                className="rounded-lg border border-primary px-4 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
              >
                Go to Cluster Page
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-border px-4 py-2 text-sm text-white transition-colors hover:border-primary"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Placeholder */}
      <div className="mt-8 rounded-lg border border-dashed border-border p-8 text-center">
        <p className="text-muted-foreground">
          Full booking form component will be implemented here with:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>Service selection</li>
          <li>Customer information</li>
          <li>Vehicle details</li>
          <li>Date/time picker</li>
          <li>Form validation with Zod</li>
          <li>Submission to Convex</li>
        </ul>
      </div>
    </div>
  );
}

export default function BookingPage(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-16">
      <Suspense fallback={<div>Loading...</div>}>
        <BookingContent />
      </Suspense>
    </main>
  );
}
