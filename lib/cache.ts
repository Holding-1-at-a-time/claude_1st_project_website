/**
 * Cache utilities for Next.js 16 with PPR (Partial Pre-Rendering)
 * Demonstrates use of cache directives for optimal performance
 */

/**
 * Cache configuration for different data types
 * Next.js 16 supports granular cache control
 */
export const cacheConfig = {
  // Static content that rarely changes
  static: {
    revalidate: 3600, // 1 hour
    tags: ['static-content'],
  },

  // Service data (pillars and clusters)
  services: {
    revalidate: 1800, // 30 minutes
    tags: ['services'],
  },

  // Reviews and testimonials
  reviews: {
    revalidate: 900, // 15 minutes
    tags: ['reviews'],
  },

  // Bookings (more dynamic)
  bookings: {
    revalidate: 60, // 1 minute
    tags: ['bookings'],
  },

  // Real-time data (leads, analytics)
  realtime: {
    revalidate: 0, // No cache
    tags: ['realtime'],
  },
} as const;

/**
 * Type-safe cache tag helper
 */
export type CacheTag =
  | 'static-content'
  | 'services'
  | 'reviews'
  | 'bookings'
  | 'realtime'
  | `service:${string}`
  | `review:${string}`;

/**
 * Helper to generate service-specific cache tags
 */
export function getServiceCacheTags(serviceSlug: string): CacheTag[] {
  return ['services', `service:${serviceSlug}` as CacheTag];
}

/**
 * Helper to generate review-specific cache tags
 */
export function getReviewCacheTags(reviewId?: string): CacheTag[] {
  const tags: CacheTag[] = ['reviews'];
  if (reviewId) {
    tags.push(`review:${reviewId}` as CacheTag);
  }
  return tags;
}
