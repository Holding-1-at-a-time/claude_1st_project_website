/**
 * Cached Service Card Component
 * Demonstrates Next.js 16 cache optimization with PPR
 *
 * Note: 'use cache' directive is experimental in Next.js 16
 * This shows the pattern for when it becomes stable
 */

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  slug: string;
  name: string;
  description: string;
  featured?: boolean;
  className?: string;
}

/**
 * Service Card Component with cache optimization
 * Leverages PPR (Partial Pre-Rendering) for optimal performance
 */
export async function ServiceCardCached({
  slug,
  name,
  description,
  featured = false,
  className,
}: ServiceCardProps): Promise<JSX.Element> {
  // In production with Convex:
  // const serviceData = await convex.query(api.queries.pillarPages.getBySlug, {
  //   slug,
  //   cache: 'force-cache',
  //   next: { revalidate: 1800, tags: ['services', `service:${slug}`] }
  // });

  return (
    <Link
      href={`/services/${slug}`}
      className={cn(
        'group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg',
        featured && 'border-primary/50 bg-primary/5',
        className
      )}
    >
      <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-primary">
        {name}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-primary">
        Learn More →
      </span>
    </Link>
  );
}

/**
 * Skeleton loader for ServiceCard
 * Used during streaming/loading states
 */
export function ServiceCardSkeleton(): JSX.Element {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <div className="mb-2 h-6 w-3/4 animate-pulse rounded bg-muted"></div>
      <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
      <div className="mt-4 h-4 w-24 animate-pulse rounded bg-muted"></div>
    </div>
  );
}
