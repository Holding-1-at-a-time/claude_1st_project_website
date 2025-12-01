import { api } from '@/convex/_generated/api';
import { preloadQuery } from 'convex/nextjs';
import { MapPin, CheckCircle2 } from 'lucide-react';

/**
 * Service Areas Section
 * Displays map and list of service areas
 * Server Component - fetches data from Convex
 */
export async function ServiceAreas(): Promise<JSX.Element> {
  const { data: serviceAreas } = await preloadQuery(api.queries.serviceAreas.getAll);

  return (
    <section className="bg-background py-24">
      <div className="container px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Map Placeholder */}
          <div className="relative overflow-hidden rounded-lg bg-slate-100">
            <div className="flex aspect-square items-center justify-center lg:aspect-auto lg:h-full">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-16 w-16 text-primary" />
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Serving Greater San Antonio
                </h3>
                <p className="text-muted-foreground">
                  Mobile detailing service available throughout the area
                </p>
              </div>
            </div>
          </div>

          {/* Right: Service Areas List */}
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              We Serve Your Area
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Professional mobile auto detailing across San Antonio and surrounding communities.
              We bring our premium services directly to your home or office.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <div key={area._id} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{area.name}</p>
                    <p className="text-sm text-muted-foreground">{area.zipCode}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-primary/5 p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Don't see your area?</strong> We may still serve your location!
                Contact us at{' '}
                <a href="tel:+17262071007" className="font-semibold text-primary hover:underline">
                  (726) 207-1007
                </a>{' '}
                to confirm availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
