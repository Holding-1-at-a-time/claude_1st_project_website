import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Auto Detailing San Antonio | One Detail At A Time',
  description:
    'Expert auto detailing services in San Antonio, TX. Ceramic coating, paint correction, interior detailing & more. IDA Certified. 5-star rated. Call (726) 207-1007 for a quote.',
};

export default function HomePage(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="container px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
          One Detail At A Time LLC
        </h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Professional Auto Detailing in San Antonio, TX
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="tel:+17262071007"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Call Now: (726) 207-1007
          </a>
          <a
            href="/booking"
            className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            Book Service
          </a>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          IDA Certified • 5-Star Rated • Serving San Antonio Since 2019
        </p>
      </div>
    </main>
  );
}
