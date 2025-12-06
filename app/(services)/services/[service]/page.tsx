import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import { fetchQuery } from 'convex/nextjs';

/**
 * Dynamic Route: Service Pillar Page
 * Path: /services/[service]
 * Example: /services/ceramic-coating
 *
 * Features:
 * - Fetches data from Convex
 * - Static generation with generateStaticParams
 * - Dynamic metadata generation
 * - Full content display with FAQs
 * - Cluster page navigation
 */

/**
 * Generate static params for all service pages
 * Fetches all pillar pages from Convex at build time
 */
export async function generateStaticParams(): Promise<{ service: string }[]> {
  const pillarPages = await fetchQuery(api.queries.pillarPages.getAll);
  return pillarPages.map((p) => ({ service: p.slug }));
}

/**
 * Generate dynamic metadata for SEO
 * Fetches pillar page data from Convex
 */
export async function generateMetadata(
  props: PageProps<'/services/[service]'>
): Promise<Metadata> {
  const params = await props.params;
  const { service } = params;

  const pillar = await fetchQuery(api.queries.pillarPages.getBySlug, { slug: service });

  if (!pillar) {
    return {
      title: 'Service Not Found | One Detail At A Time',
      description: 'The requested service was not found.',
    };
  }

  return {
    title: pillar.title,
    description: pillar.metaDescription,
    keywords: pillar.keywords,
  };
}

/**
 * Pillar Page Component (Server Component)
 * Displays full pillar page content with clusters and FAQs
 */
export default async function PillarPage(
  props: PageProps<'/services/[service]'>
): Promise<JSX.Element> {
  const params = await props.params;
  const { service } = params;

  // Fetch pillar page and related clusters from Convex
  const { data: pillarData } = await preloadQuery(api.queries.pillarPages.getWithClusters, {
    slug: service,
  });

  if (!pillarData) {
    notFound();
  }

  const { pillar, clusters } = pillarData;

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <nav className="border-b border-border bg-slate-50 py-4">
        <div className="container px-4">
          <div className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            {' / '}
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            {' / '}
            <span className="text-foreground font-medium">{pillar.serviceName}</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {pillar.h1}
            </h1>
            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: pillar.introContent }}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <article
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: pillar.mainContent }}
            />
          </div>
        </div>
      </section>

      {/* Cluster Navigation */}
      {clusters.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                Learn More About {pillar.serviceName}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {clusters.map((cluster) => (
                  <Link
                    key={cluster._id}
                    href={`/services/${cluster.slug}`}
                    className="group rounded-lg border border-border bg-background p-6 transition-all hover:border-primary hover:shadow-md"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-primary">
                      {cluster.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {cluster.metaDescription}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary">
                      Read More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {pillar.faqs.length > 0 && (
        <section className="py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {pillar.faqs.map((faq, index) => (
                  <div key={index} className="rounded-lg border border-border bg-background p-6">
                    <h3 className="mb-3 text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Ready for {pillar.serviceName}?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Get a free quote today or book your appointment online
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="tel:+17262071007"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-primary transition-colors hover:bg-white/90"
              >
                Call (726) 207-1007
              </a>
              <Link
                href={`/booking?service=${service}`}
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                Book This Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
