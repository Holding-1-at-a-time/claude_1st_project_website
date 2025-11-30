import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

/**
 * Dynamic Route: Service Pillar Page
 * Path: /services/[service]
 * Example: /services/ceramic-coating
 *
 * Uses:
 * - generateStaticParams for static generation
 * - generateMetadata for dynamic SEO
 * - TypeScript strict typing
 */

// This would come from Convex in production
const SERVICES = [
  'auto-detailing',
  'ceramic-coating',
  'paint-correction',
  'interior-deep-cleansing',
  'exterior-hand-wash-sealant',
  'headlight-restoration',
  'engine-detailing',
  'window-tinting',
  'odor-removal',
  'scratch-swirl-removal',
  'leather-conditioning',
  'wheel-tire-detailing',
  'rv-boat-detailing',
  'fleet-services',
] as const;

/**
 * Generate static params for all service pages
 * This enables static generation at build time
 */
export async function generateStaticParams(): Promise<{ service: string }[]> {
  // In production, fetch from Convex:
  // const pillarPages = await convex.query(api.queries.pillarPages.getAll);
  // return pillarPages.map((p) => ({ service: p.slug }));

  return SERVICES.map((service) => ({
    service,
  }));
}

/**
 * Generate dynamic metadata for SEO
 * Uses Next.js 16 PageProps helper for type inference
 */
export async function generateMetadata(
  props: PageProps<'/services/[service]'>
): Promise<Metadata> {
  const params = await props.params;
  const { service } = await params;

  // In production, fetch from Convex:
  // const pillar = await convex.query(api.queries.pillarPages.getBySlug, { slug: service });
  // if (!pillar) return { title: 'Service Not Found' };

  const serviceName = service
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${serviceName} San Antonio | One Detail At A Time`,
    description: `Professional ${serviceName.toLowerCase()} services in San Antonio, TX. Expert care, IDA certified, 5-star rated. Call (726) 207-1007 for a quote.`,
  };
}

/**
 * Pillar Page Component (Server Component)
 * Uses Next.js 16 PageProps helper with route type inference
 */
export default async function PillarPage(
  props: PageProps<'/services/[service]'>
): Promise<JSX.Element> {
  const params = await props.params;
  const { service } = params;

  // Validate service exists
  if (!SERVICES.includes(service as (typeof SERVICES)[number])) {
    notFound();
  }

  // In production, fetch from Convex:
  // const pillar = await convex.query(api.queries.pillarPages.getBySlug, { slug: service });
  // if (!pillar) notFound();
  //
  // const clusters = await convex.query(api.queries.clusterPages.getByPillar, {
  //   pillarId: pillar._id
  // });

  const serviceName = service
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Mock cluster pages
  const clusters = [
    { slug: `${service}/benefits`, title: `Benefits of ${serviceName}` },
    { slug: `${service}/process`, title: `Our ${serviceName} Process` },
    { slug: `${service}/pricing`, title: `${serviceName} Pricing` },
    { slug: `${service}/faq`, title: `${serviceName} FAQ` },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
          Home
        </Link>
        {' / '}
        <Link href="/services" className="hover:text-primary">
          Services
        </Link>
        {' / '}
        <span className="text-white">{serviceName}</span>
      </nav>

      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {serviceName} in San Antonio
        </h1>
        <p className="text-xl text-muted-foreground">
          Professional {serviceName.toLowerCase()} services from One Detail At A Time LLC
        </p>
      </div>

      {/* Cluster Navigation */}
      <div className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-white">Explore This Service</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {clusters.map((cluster) => (
            <Link
              key={cluster.slug}
              href={`/services/${cluster.slug}`}
              className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary"
            >
              <span className="font-medium text-white group-hover:text-primary">
                {cluster.title}
              </span>
              <span className="ml-2 text-primary">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="rounded-lg bg-primary/10 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Ready for {serviceName}?
        </h2>
        <p className="mb-6 text-muted-foreground">
          Get a free quote today or book your appointment online
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:+17262071007"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Call (726) 207-1007
          </a>
          <Link
            href={`/booking?service=${service}`}
            className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Book This Service
          </Link>
        </div>
      </div>
    </main>
  );
}
