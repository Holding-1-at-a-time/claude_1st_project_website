import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

/**
 * Homepage Hero Section
 * H1: "Professional Auto Detailing San Antonio"
 * Subheading with USPs
 * CTA buttons (Book Now, Call Now)
 * Background image (optimized)
 */
export function Hero(): JSX.Element {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

      <div className="container relative z-10 px-4 py-24 text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          IDA Certified • 5-Star Rated • Serving San Antonio Since 2019
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Professional Auto Detailing
          <span className="block text-primary">San Antonio</span>
        </h1>

        {/* Subheading with USPs */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 md:text-xl">
          Expert ceramic coating, paint correction, and interior detailing.
          <span className="block mt-2 font-semibold text-white">
            Mobile service • Premium products • Certified technicians
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link href="/booking">
              <Calendar className="mr-2 h-5 w-5" />
              Book Now
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <a href="tel:+17262071007">
              <Phone className="mr-2 h-5 w-5" />
              Call (726) 207-1007
            </a>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>4.9/5 Average Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>100+ Happy Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Same-Day Service Available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
