'use client';

import { useState, useEffect } from 'react';
import { ReviewCard } from '@/components/review-card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Id } from '@/convex/_generated/dataModel';

interface Review {
  _id: Id<'reviews'>;
  customerName: string;
  customerInitial: string;
  rating: number;
  title?: string;
  comment: string;
  publishedAt?: number;
  featured: boolean;
}

interface ReviewsCarouselProps {
  reviews: Review[];
}

/**
 * Reviews Carousel - Client Component
 * Auto-scrolling carousel with manual navigation
 */
export function ReviewsCarousel({ reviews }: ReviewsCarouselProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying || reviews.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const handlePrevious = (): void => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = (): void => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  if (reviews.length === 0) {
    return (
      <section className="bg-slate-50 py-24">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground">No reviews available yet.</p>
        </div>
      </section>
    );
  }

  // Show 1 on mobile, 2 on tablet, 3 on desktop
  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  if (visibleReviews.length < 3 && reviews.length >= 3) {
    const remaining = 3 - visibleReviews.length;
    visibleReviews.push(...reviews.slice(0, remaining));
  }

  return (
    <section className="bg-slate-50 py-24">
      <div className="container px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Don't just take our word for it. See what satisfied customers have to say about our auto detailing services.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Reviews Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review, index) => (
              <div
                key={`${review._id}-${index}`}
                className="transition-opacity duration-500"
              >
                <ReviewCard
                  customerName={review.customerName}
                  customerInitial={review.customerInitial}
                  rating={review.rating}
                  title={review.title}
                  comment={review.comment}
                  date={review.publishedAt ? new Date(review.publishedAt) : undefined}
                  featured={review.featured}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {reviews.length > 3 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrevious}
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {Array.from({ length: reviews.length }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'bg-muted-foreground/30'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>

        {/* View All Reviews Link */}
        <div className="mt-12 text-center">
          <a
            href="/reviews"
            className="inline-flex items-center text-lg font-semibold text-primary hover:underline"
          >
            Read All Reviews
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
