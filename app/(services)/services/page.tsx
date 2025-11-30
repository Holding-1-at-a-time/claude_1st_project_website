import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Auto Detailing Services San Antonio | One Detail At A Time',
  description:
    'Comprehensive auto detailing services in San Antonio. Ceramic coating, paint correction, interior detailing, and more. Expert care for your vehicle.',
};

// Core services for the business
const SERVICES = [
  {
    slug: 'auto-detailing',
    name: 'Auto Detailing',
    description: 'Complete interior and exterior detailing for your vehicle',
  },
  {
    slug: 'ceramic-coating',
    name: 'Ceramic Coating',
    description: 'Long-lasting paint protection with hydrophobic properties',
  },
  {
    slug: 'paint-correction',
    name: 'Paint Correction',
    description: 'Remove swirls, scratches, and imperfections from your paint',
  },
  {
    slug: 'interior-deep-cleansing',
    name: 'Interior Deep Cleansing',
    description: 'Deep cleaning for upholstery, carpets, and all interior surfaces',
  },
  {
    slug: 'exterior-hand-wash-sealant',
    name: 'Exterior Hand Wash & Sealant',
    description: 'Hand wash with protective sealant application',
  },
  {
    slug: 'headlight-restoration',
    name: 'Headlight Restoration',
    description: 'Restore clarity and brightness to oxidized headlights',
  },
  {
    slug: 'engine-detailing',
    name: 'Engine Detailing',
    description: 'Professional engine bay cleaning and detailing',
  },
  {
    slug: 'window-tinting',
    name: 'Window Tinting',
    description: 'Professional window tinting for heat and UV protection',
  },
  {
    slug: 'odor-removal',
    name: 'Odor Removal',
    description: 'Eliminate stubborn odors with professional treatment',
  },
  {
    slug: 'scratch-swirl-removal',
    name: 'Scratch & Swirl Removal',
    description: 'Specialized treatment for scratches and swirl marks',
  },
  {
    slug: 'leather-conditioning',
    name: 'Leather Conditioning',
    description: 'Restore and protect leather surfaces',
  },
  {
    slug: 'wheel-tire-detailing',
    name: 'Wheel & Tire Detailing',
    description: 'Complete wheel and tire cleaning and protection',
  },
  {
    slug: 'rv-boat-detailing',
    name: 'RV & Boat Detailing',
    description: 'Specialized detailing for RVs and boats',
  },
  {
    slug: 'fleet-services',
    name: 'Fleet Services',
    description: 'Commercial fleet detailing and maintenance programs',
  },
] as const;

export default function ServicesPage(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Auto Detailing Services in San Antonio
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Professional auto detailing services tailored to your vehicle's needs. IDA Certified
          with over 5 years of experience serving San Antonio.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
          >
            <h2 className="mb-2 text-xl font-semibold text-white group-hover:text-primary">
              {service.name}
            </h2>
            <p className="text-sm text-muted-foreground">{service.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary">
              Learn More →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-white">Ready to Get Started?</h2>
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
    </main>
  );
}
