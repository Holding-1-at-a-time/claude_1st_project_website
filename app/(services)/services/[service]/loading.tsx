/**
 * Loading UI for service pillar pages
 * Shown during navigation and streaming with PPR
 */
export default function PillarLoading(): JSX.Element {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Breadcrumbs skeleton */}
      <div className="mb-8 h-4 w-64 animate-pulse rounded bg-muted"></div>

      {/* Hero skeleton */}
      <div className="mb-12 space-y-4">
        <div className="h-12 w-3/4 animate-pulse rounded bg-muted"></div>
        <div className="h-6 w-1/2 animate-pulse rounded bg-muted"></div>
      </div>

      {/* Cluster navigation skeleton */}
      <div className="mb-16 space-y-4">
        <div className="h-8 w-48 animate-pulse rounded bg-muted"></div>
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 animate-pulse rounded-lg bg-muted"></div>
          ))}
        </div>
      </div>

      {/* CTA skeleton */}
      <div className="h-48 animate-pulse rounded-lg bg-muted"></div>
    </div>
  );
}
