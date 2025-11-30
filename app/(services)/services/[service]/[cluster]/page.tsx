import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

/**
 * Dynamic Nested Route: Cluster Page
 * Path: /services/[service]/[cluster]
 * Example: /services/ceramic-coating/benefits
 *
 * Features:
 * - Nested dynamic params
 * - Static generation with generateStaticParams
 * - Links back to pillar page
 * - Links to related clusters
 */

/**
 * Generate static params for all cluster pages
 */
export async function generateStaticParams(): Promise<
  { service: string; cluster: string }[]
> {
  // In production, fetch from Convex:
  // const clusterPages = await convex.query(api.queries.clusterPages.getAll);
  // return clusterPages.map((c) => {
  //   const [service, cluster] = c.slug.split('/');
  //   return { service, cluster };
  // });

  const services = ['auto-detailing', 'ceramic-coating', 'paint-correction'];
  const clusters = ['benefits', 'process', 'pricing', 'faq'];

  return services.flatMap((service) =>
    clusters.map((cluster) => ({
      service,
      cluster,
    }))
  );
}

/**
 * Generate dynamic metadata
 * Uses Next.js 16 PageProps helper for nested dynamic routes
 */
export async function generateMetadata(
  props: PageProps<'/services/[service]/[cluster]'>
): Promise<Metadata> {
  const params = await props.params;
  const { service, cluster } = params;

  // In production, fetch from Convex:
  // const clusterPage = await convex.query(api.queries.clusterPages.getBySlug, {
  //   slug: `${service}/${cluster}`
  // });

  const serviceName = service
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const clusterName = cluster
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${serviceName} ${clusterName} | San Antonio | One Detail At A Time`,
    description: `Learn about ${serviceName.toLowerCase()} ${clusterName.toLowerCase()} in San Antonio. Expert insights from One Detail At A Time LLC.`,
  };
}

/**
 * Cluster Page Component (Server Component)
 * Uses Next.js 16 PageProps helper with nested dynamic segments
 */
export default async function ClusterPage(
  props: PageProps<'/services/[service]/[cluster]'>
): Promise<JSX.Element> {
  const params = await props.params;
  const { service, cluster } = params;

  // In production, validate with Convex:
  // const clusterPage = await convex.query(api.queries.clusterPages.getBySlug, {
  //   slug: `${service}/${cluster}`
  // });
  // if (!clusterPage) notFound();

  const serviceName = service
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const clusterName = cluster
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Breadcrumbs with Schema.org markup */}
      <nav
        className="mb-8 text-sm text-muted-foreground"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
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
            <span itemProp="name">{serviceName}</span>
          </Link>
          <meta itemProp="position" content="3" />
        </span>
        {' / '}
        <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span itemProp="name" className="text-white">
            {clusterName}
          </span>
          <meta itemProp="position" content="4" />
        </span>
      </nav>

      {/* Back to Pillar */}
      <Link
        href={`/services/${service}`}
        className="mb-8 inline-flex items-center text-primary hover:underline"
      >
        ← Back to {serviceName}
      </Link>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          {serviceName}: {clusterName}
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            This is the cluster page for <strong>{clusterName}</strong> related to{' '}
            <strong>{serviceName}</strong> in San Antonio.
          </p>
          <p>
            Content here would be pulled from Convex database and rendered as HTML. This page
            is statically generated at build time for optimal performance and SEO.
          </p>
          <p>
            As a cluster page, this targets long-tail keywords and links back to the pillar
            page ({serviceName}) and to other related cluster pages.
          </p>
        </div>
      </article>

      {/* Related Clusters */}
      <div className="mt-16">
        <h2 className="mb-4 text-2xl font-semibold text-white">Related Topics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {['benefits', 'process', 'pricing', 'faq']
            .filter((c) => c !== cluster)
            .map((relatedCluster) => {
              const relatedName = relatedCluster
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

              return (
                <Link
                  key={relatedCluster}
                  href={`/services/${service}/${relatedCluster}`}
                  className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary"
                >
                  <span className="font-medium text-white group-hover:text-primary">
                    {serviceName}: {relatedName}
                  </span>
                  <span className="ml-2 text-primary">→</span>
                </Link>
              );
            })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 rounded-lg bg-primary/10 p-8 text-center">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          Book {serviceName} Today
        </h2>
        <Link
          href={`/booking?service=${service}`}
          className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Schedule Appointment
        </Link>
      </div>
    </main>
  );
}
