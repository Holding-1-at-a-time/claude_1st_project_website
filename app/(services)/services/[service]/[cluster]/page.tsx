import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/convex/_generated/api';
import { preloadQuery, fetchQuery } from 'convex/nextjs';

/**
 * Dynamic Nested Route: Cluster Page
 * Path: /services/[service]/[cluster]
 * Example: /services/ceramic-coating/what-is-ceramic-coating
 *
 * Features:
 * - Nested dynamic params
 * - Static generation with generateStaticParams
 * - Fetches data from Convex
 * - Links back to pillar page
 * - Links to related clusters
 * - Schema.org breadcrumb markup
 */

/**
 * Generate static params for all cluster pages
 * Fetches all cluster pages from Convex at build time
 */
export async function generateStaticParams(): Promise<
  { service: string; cluster: string }[]
> {
  const pillarPages = await fetchQuery(api.queries.pillarPages.getAll);

  const params: { service: string; cluster: string }[] = [];

  // For each pillar, get its clusters
  for (const pillar of pillarPages) {
    const clusters = await fetchQuery(api.queries.clusterPages.getByPillar, {
      pillarId: pillar._id,
    });

    for (const cluster of clusters) {
      // Cluster slug format: "parent-service/cluster-name"
      const [service, clusterName] = cluster.slug.split('/');
      if (service && clusterName) {
        params.push({ service, cluster: clusterName });
      }
    }
  }

  return params;
}

/**
 * Generate dynamic metadata
 * Fetches cluster page data from Convex
 */
export async function generateMetadata(
  props: PageProps<'/services/[service]/[cluster]'>
): Promise<Metadata> {
  const params = await props.params;
  const { service, cluster } = params;

  const fullSlug = `${service}/${cluster}`;
  const clusterPage = await fetchQuery(api.queries.clusterPages.getBySlug, {
    slug: fullSlug,
  });

  if (!clusterPage) {
    return {
      title: 'Page Not Found | One Detail At A Time',
      description: 'The requested page was not found.',
    };
  }

  return {
    title: clusterPage.title,
    description: clusterPage.metaDescription,
    keywords: clusterPage.keywords,
  };
}

/**
 * Cluster Page Component (Server Component)
 * Displays full cluster page content
 */
export default async function ClusterPage(
  props: PageProps<'/services/[service]/[cluster]'>
): Promise<JSX.Element> {
  const params = await props.params;
  const { service, cluster } = params;

  const fullSlug = `${service}/${cluster}`;

  // Fetch cluster page from Convex
  const { data: clusterPage } = await preloadQuery(api.queries.clusterPages.getBySlug, {
    slug: fullSlug,
  });

  if (!clusterPage) {
    notFound();
  }

  // Fetch parent pillar page
  const { data: pillar } = await preloadQuery(api.queries.pillarPages.getBySlug, {
    slug: service,
  });

  if (!pillar) {
    notFound();
  }

  // Fetch related clusters (sibling clusters in the same pillar)
  const { data: relatedClusters } = await preloadQuery(api.queries.clusterPages.getByPillar, {
    pillarId: clusterPage.pillarPageId,
  });

  // Filter out current cluster from related
  const otherClusters = relatedClusters.filter((c) => c._id !== clusterPage._id);

  return (
    <main className="min-h-screen bg-background">
      {/* Breadcrumbs with Schema.org markup */}
      <nav
        className="border-b border-border bg-slate-50 py-4"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <div className="container px-4">
          <div className="text-sm text-muted-foreground">
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" itemProp="item" className="hover:text-primary">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </span>
            {' / '}
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/services" itemProp="item" className="hover:text-primary">
                <span itemProp="name">Services</span>
              </Link>
              <meta itemProp="position" content="2" />
            </span>
            {' / '}
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link
                href={`/services/${service}`}
                itemProp="item"
                className="hover:text-primary"
              >
                <span itemProp="name">{pillar.serviceName}</span>
              </Link>
              <meta itemProp="position" content="3" />
            </span>
            {' / '}
            <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name" className="text-foreground font-medium">
                {clusterPage.h1}
              </span>
              <meta itemProp="position" content="4" />
            </span>
          </div>
        </div>
      </nav>

      {/* Back to Pillar */}
      <div className="container px-4 pt-8">
        <Link
          href={`/services/${service}`}
          className="inline-flex items-center text-primary hover:underline"
        >
          ← Back to {pillar.serviceName}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              {clusterPage.h1}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <article
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: clusterPage.content }}
            />

            {/* Call to Action from cluster data */}
            {clusterPage.callToAction && (
              <div className="mt-12 rounded-lg bg-primary/5 p-6 text-center">
                <p className="text-lg font-semibold text-foreground">
                  {clusterPage.callToAction}
                </p>
                <Link
                  href={`/booking?service=${service}`}
                  className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Book Now
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Clusters */}
      {otherClusters.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="container px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
                Related Topics
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {otherClusters.slice(0, 6).map((related) => {
                  const [, relatedCluster] = related.slug.split('/');
                  return (
                    <Link
                      key={related._id}
                      href={`/services/${related.slug}`}
                      className="group rounded-lg border border-border bg-background p-4 transition-all hover:border-primary hover:shadow-sm"
                    >
                      <span className="font-medium text-foreground group-hover:text-primary">
                        {related.title}
                      </span>
                      <span className="ml-2 text-primary">→</span>
                    </Link>
                  );
                })}
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
              Book {pillar.serviceName} Today
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Get professional service from IDA certified technicians
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
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
