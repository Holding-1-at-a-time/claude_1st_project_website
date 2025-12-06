import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Calendar, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Booking Confirmed | One Detail At A Time',
  description: 'Your auto detailing appointment has been confirmed.',
};

/**
 * Booking Confirmation Page
 * Shown after successful booking submission
 */
export default async function BookingConfirmationPage(
  props: PageProps<'/booking/confirmation'>
): Promise<JSX.Element> {
  const searchParams = await props.searchParams;
  const bookingId = searchParams.id;

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl">
          {/* Success Icon */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for choosing One Detail At A Time LLC
            </p>
          </div>

          {/* Confirmation Details */}
          <div className="mb-8 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">What's Next?</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-semibold text-primary">1</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">We'll Call You</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will contact you within 24 hours to confirm your appointment details
                    and answer any questions you may have.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-semibold text-primary">2</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Service Day</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll arrive at your preferred time and location ready to transform your
                    vehicle with professional-grade products and techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <span className="font-semibold text-primary">3</span>
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">Enjoy the Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Relax while our IDA certified technicians deliver exceptional results that
                    exceed your expectations.
                  </p>
                </div>
              </div>
            </div>

            {bookingId && (
              <div className="mt-6 rounded-lg bg-primary/5 p-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Confirmation Number:</strong>{' '}
                  <code className="text-primary">{bookingId}</code>
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="mb-8 rounded-lg border border-border bg-card p-8">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              Need to Make Changes?
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Call us:</p>
                  <a
                    href="tel:+17262071007"
                    className="font-semibold text-primary hover:underline"
                  >
                    (726) 207-1007
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email us:</p>
                  <a
                    href="mailto:contact@onedetailatatime.com"
                    className="font-semibold text-primary hover:underline"
                  >
                    contact@onedetailatatime.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Business Hours:</p>
                  <p className="font-semibold text-foreground">Mon-Sat: 8am - 6pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="flex-1">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <Link href="/services">Browse Services</Link>
            </Button>
          </div>

          {/* Add to Calendar Placeholder */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              We'll send you a calendar invite after we confirm your appointment
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
