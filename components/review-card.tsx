import { Card, CardContent, CardHeader } from '@/components/ui/card';
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
 * Render a card displaying a customer review with avatar, metadata, star rating, and comment.
 *
 * @param customerName - Reviewer display name.
 * @param customerInitial - Initials shown inside the circular avatar.
 * @param rating - Number of filled stars (expected on a 1–5 scale).
 * @param title - Optional review title rendered as a bold heading when provided.
 * @param comment - Review text content.
 * @param date - Optional date; when provided it is formatted as "Month Year" in the en-US locale.
 * @param featured - When true, applies a highlighted primary border to the card.
 * @param className - Optional additional CSS classes applied to the outer card.
 * @returns The rendered review card JSX element.
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
 * Render a five-star visual rating.
 *
 * Stars with index less than or equal to `rating` are shown filled; higher-index stars are shown muted.
 *
 * @param rating - Number of stars to fill (expected 1–5; values outside this range will compare directly to star indices)
 * @returns A JSX element containing five star icons with up to `rating` filled. 
 */
function StarRating({ rating }: { rating: number }): JSX.Element {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            'h-4 w-4',
            star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted'
          )}
        />
      ))}
    </div>
  );
}

/**
 * Render a skeleton placeholder that mirrors the ReviewCard layout for loading states.
 *
 * Renders animated avatar and text bars to indicate where the review header and content will appear.
 *
 * @returns A JSX element containing the review card skeleton used while review data is loading.
 */
export function ReviewCardSkeleton(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 animate-pulse rounded-full bg-muted"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 w-24 animate-pulse rounded bg-muted"></div>
            <div className="h-3 w-16 animate-pulse rounded bg-muted"></div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
          <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
          <div className="h-4 w-3/4 animate-pulse rounded bg-muted"></div>
        </div>
      </CardContent>
    </Card>
  );
}