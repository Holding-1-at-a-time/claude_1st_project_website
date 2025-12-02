import type { Metadata } from 'next';
import Link from 'next/link';
import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import { ServiceCard } from '@/components/service-card';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Auto Detailing Services San Antonio | One Detail At A Time',
  description:
    'Comprehensive auto detailing services in San Antonio. Ceramic coating, paint correction, interior detailing, and more. Expert care for your vehicle.',
};

/**
 * Services Overview Page - Server Component
 * Displays all available services fetched from Convex
 */
export default async function ServicesPage(): Promise<JSX.Element> {
  // Fetch all published pillar pages from Convex
  const { data: pillarPages } = await preloadQuery(api.queries.pillarPages.getAll);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Professional Auto Detailing Services
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Auto Detailing Services in San Antonio
            </h1>
            <p className="text-xl text-slate-300">
              Professional auto detailing services tailored to your vehicle's needs. IDA Certified
              with over 5 years of experience serving San Antonio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Choose from our comprehensive range of professional auto detailing services
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillarPages.map((pillar) => (
              <ServiceCard
                key={pillar._id}
                slug={pillar.slug}
                name={pillar.serviceName}
                description={pillar.metaDescription}
                featured={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Book your service online or call us for a free quote
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+17262071007"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Call (726) 207-1007
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
