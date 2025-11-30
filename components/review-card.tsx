import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  customerName: string;
  customerInitial: string;
  rating: number;
  title?: string;
  comment: string;
  date?: Date;
  featured?: boolean;
  className?: string;
}

/**
 * Review Card Component
 * Displays customer review with star rating
 */
export function ReviewCard({
  customerName,
  customerInitial,
  rating,
  title,
  comment,
  date,
  featured = false,
  className,
}: ReviewCardProps): JSX.Element {
  return (
    <Card className={cn('h-full', featured && 'border-primary/50', className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
              {customerInitial}
            </div>
            <div>
              <p className="font-semibold text-foreground">{customerName}</p>
              {date && (
                <p className="text-xs text-muted-foreground">
                  {date.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </p>
              )}
            </div>
          </div>
          {/* Star Rating */}
          <StarRating rating={rating} />
        </div>
      </CardHeader>
      <CardContent>
        {title && <h3 className="mb-2 font-semibold text-foreground">{title}</h3>}
        <p className="text-sm text-muted-foreground">{comment}</p>
      </CardContent>
    </Card>
  );
}

/**
 * Star Rating Component with accessibility
 */
function StarRating({ rating }: { rating: number }): JSX.Element {
  // Clamp rating between 0 and 5
  const clampedRating = Math.max(0, Math.min(5, rating));

  return (
    <div className="flex gap-0.5" role="img" aria-label={`Rated ${clampedRating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            'h-4 w-4',
            star <= clampedRating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/**
 * Review Card Skeleton
 * Uses Skeleton primitive for consistency
 */
export function ReviewCardSkeleton(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </CardContent>
    </Card>
  );
}
