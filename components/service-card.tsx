import type { ReactNode } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  slug: string;
  name: string;
  description: string;
  icon?: ReactNode;
  featured?: boolean;
  className?: string;
}

/**
 * Renders a service card with an optional icon, title, description, and a "Learn More" link.
 *
 * Renders a Card containing an optional icon area, the service name, a short description,
 * and a full-width button linking to `/services/{slug}`. When `featured` is true the card
 * and button receive emphasized styling.
 *
 * @param slug - Path segment used to construct the service URL (appended to `/services/`)
 * @param name - Visible title of the service
 * @param description - Short descriptive text shown under the title
 * @param icon - Optional icon node displayed above the title
 * @param featured - When true, applies featured styling to the card and primary button
 * @param className - Optional additional CSS classes applied to the outer Card
 * @returns A Card element representing the service with a "Learn More" link to the service page
 */
export function ServiceCard({
  slug,
  name,
  description,
  icon,
  featured = false,
  className,
}: ServiceCardProps): JSX.Element {
  return (
    <Card
      className={cn(
        'group transition-all hover:shadow-lg',
        featured && 'border-primary/50 bg-primary/5',
        className
      )}
    >
      <CardHeader>
        {icon && (
          <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        <CardTitle className="group-hover:text-primary">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant={featured ? 'default' : 'outline'} className="w-full">
          <Link href={`/services/${slug}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

/**
 * Service Card Skeleton for loading states
 * Uses Skeleton primitive for consistency
 */
export function ServiceCardSkeleton(): JSX.Element {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="mb-2 h-12 w-12 rounded-lg" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-10 w-full" />
      </CardContent>
    </Card>
  );
}