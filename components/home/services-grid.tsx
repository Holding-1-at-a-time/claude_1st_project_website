import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import { ServiceCard } from '@/components/service-card';
import { Sparkles, Shield, Palette } from 'lucide-react';

/**
 * Services Grid for Homepage
 * Displays featured services (top 3 pillars)
 * Server Component - fetches data from Convex
 */
export async function ServicesGrid(): Promise<JSX.Element> {
  // Fetch all pillar pages from Convex
  const { data: pillarPages } = await preloadQuery(api.queries.pillarPages.getAll);

  // Featured services (top 3)
  const featuredServices = [
    {
      slug: 'auto-detailing',
      name: 'Auto Detailing',
      icon: <Sparkles className="h-6 w-6" />,
    },
    {
      slug: 'ceramic-coating',
      name: 'Ceramic Coating',
      icon: <Shield className="h-6 w-6" />,
    },
    {
      slug: 'paint-correction',
      name: 'Paint Correction',
      icon: <Palette className="h-6 w-6" />,
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our Premium Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From complete auto detailing to specialized ceramic coating and paint correction,
            we offer comprehensive services to keep your vehicle looking its best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const pillar = pillarPages.find((p) => p.slug === service.slug);
            if (!pillar) return null;

            return (
              <ServiceCard
                key={pillar.slug}
                slug={pillar.slug}
                name={service.name}
                description={pillar.metaDescription}
                icon={service.icon}
                featured={true}
              />
            );
          })}
        </div>

        {/* View All Services Link */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-flex items-center text-lg font-semibold text-primary hover:underline"
          >
            View All Services
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
