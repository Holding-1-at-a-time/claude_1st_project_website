import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/contact-form';
import { GoogleMap } from '@/components/contact/google-map';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';

export const metadata: Metadata = {
  title: 'Contact Us | Auto Detailing San Antonio | One Detail At A Time',
  description:
    'Get in touch with One Detail At A Time LLC. Call (726) 207-1007, send us a message, or book your auto detailing service online. Serving San Antonio and surrounding areas.',
};

/**
 * Contact Page
 * Contact form, NAP display, Google Map, hours, and service areas
 */
export default async function ContactPage(): Promise<JSX.Element> {
  // Fetch service areas for display
  const { data: serviceAreas } = await preloadQuery(api.queries.serviceAreas.getAll);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300">
              Have questions? We're here to help. Reach out to discuss your auto detailing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Phone */}
            <div className="rounded-lg bg-background p-6 shadow-md text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Call Us</h3>
              <a
                href="tel:+17262071007"
                className="text-lg font-bold text-primary hover:underline"
              >
                (726) 207-1007
              </a>
              <p className="mt-2 text-sm text-muted-foreground">Mon-Sat: 8am - 6pm</p>
            </div>

            {/* Email */}
            <div className="rounded-lg bg-background p-6 shadow-md text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Email Us</h3>
              <a
                href="mailto:contact@onedetailatatime.com"
                className="text-lg font-bold text-primary hover:underline break-all"
              >
                contact@onedetailatatime.com
              </a>
              <p className="mt-2 text-sm text-muted-foreground">We'll respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="rounded-lg bg-background p-6 shadow-md text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Location</h3>
              <p className="text-lg font-bold text-foreground">San Antonio, TX</p>
              <p className="mt-2 text-sm text-muted-foreground">Mobile service available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Form and Map */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <GoogleMap />

              {/* Hours of Operation */}
              <div className="rounded-lg bg-background p-6 shadow-md">
                <div className="mb-4 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Hours of Operation</h2>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Monday - Friday</span>
                    <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Saturday</span>
                    <span className="text-muted-foreground">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-foreground">Sunday</span>
                    <span className="text-muted-foreground">By Appointment Only</span>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-primary/5 p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Emergency service available.</strong> Call
                    us for same-day or after-hours appointments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-slate-50 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                We Serve Your Area
              </h2>
              <p className="text-lg text-muted-foreground">
                Professional mobile auto detailing throughout San Antonio and surrounding communities
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {serviceAreas.map((area) => (
                <div
                  key={area._id}
                  className="rounded-lg bg-background p-4 shadow-sm"
                >
                  <h3 className="mb-1 font-semibold text-foreground">{area.name}</h3>
                  <p className="text-sm text-muted-foreground">{area.zipCode}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    ~{area.travelTime} from base
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-primary/5 p-6 text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Don't see your area?</strong> We may still
                serve your location! Contact us at{' '}
                <a href="tel:+17262071007" className="font-semibold text-primary hover:underline">
                  (726) 207-1007
                </a>{' '}
                to confirm availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Ready to Book?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Skip the contact form and book your service directly online.
            </p>
            <a
              href="/booking"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Book Your Service Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
