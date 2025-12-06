import type { Metadata } from 'next';
import { Suspense } from 'react';
import { BookingFormWrapper } from './booking-form-wrapper';

export const metadata: Metadata = {
  title: 'Book Auto Detailing Service | One Detail At A Time',
  description:
    'Schedule your auto detailing appointment online. Quick and easy booking for all services in San Antonio.',
};

/**
 * Full Booking Page with searchParams support
 * Path: /booking
 *
 * Supports ?service=slug for pre-selecting a service
 */
export default async function BookingPage(
  props: PageProps<'/booking'>
): Promise<JSX.Element> {
  const searchParams = await props.searchParams;
  const serviceParam = searchParams.service;
  const serviceSlug = typeof serviceParam === 'string' ? serviceParam : undefined;

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
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

          {/* Booking Form */}
          <div className="rounded-lg border border-border bg-card p-8 shadow-lg">
            <Suspense fallback={<div className="text-center">Loading form...</div>}>
              <BookingFormWrapper preselectedService={serviceSlug} />
            </Suspense>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>IDA Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
