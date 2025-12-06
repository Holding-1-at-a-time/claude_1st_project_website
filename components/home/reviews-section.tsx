import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import { ReviewsCarousel } from './reviews-carousel';

/**
 * Reviews Section - Server Component Wrapper
 * Fetches featured reviews and passes to client carousel
 */
export async function ReviewsSection(): Promise<JSX.Element> {
  const { data: reviews } = await preloadQuery(api.queries.reviews.getFeatured, { limit: 6 });

  return <ReviewsCarousel reviews={reviews} />;
}
