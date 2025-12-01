'use client';

import { MapPin } from 'lucide-react';

/**
 * Google Map Component - Client Component
 * Embedded Google Map with business location
 */
export function GoogleMap(): JSX.Element {
  // Business location - San Antonio, TX
  // In production, replace with actual business address coordinates
  const businessAddress = 'San Antonio, TX 78201';
  const mapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}&q=${encodeURIComponent(businessAddress)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessAddress)}`;

  return (
    <div className="rounded-lg bg-background shadow-lg overflow-hidden">
      {/* Map Embed */}
      <div className="relative h-[400px] w-full bg-slate-100">
        {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="One Detail At A Time LLC Location"
          />
        ) : (
          // Fallback when API key is not set
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 h-16 w-16 text-primary" />
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                We're Located in San Antonio
              </h3>
              <p className="mb-4 text-muted-foreground">
                Mobile detailing service available throughout the area
              </p>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                <MapPin className="h-5 w-5" />
                Get Directions
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Map Info */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="mb-2 text-lg font-semibold text-foreground">
            One Detail At A Time LLC
          </h3>
          <p className="text-muted-foreground">
            {businessAddress}
          </p>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:underline"
        >
          <MapPin className="h-4 w-4" />
          Get Directions
        </a>

        <div className="mt-6 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Mobile Service:</strong> We come to you!
            Serving all of San Antonio and surrounding areas.
          </p>
        </div>
      </div>
    </div>
  );
}
