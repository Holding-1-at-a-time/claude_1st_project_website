import type { Metadata } from 'next';
import { Hero } from '@/components/home/hero';
import { ServicesGrid } from '@/components/home/services-grid';
import { ReviewsSection } from '@/components/home/reviews-section';
import { ServiceAreas } from '@/components/home/service-areas';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { FinalCTA } from '@/components/home/final-cta';

export const metadata: Metadata = {
  title: 'Professional Auto Detailing San Antonio | One Detail At A Time',
  description:
    'Expert auto detailing services in San Antonio, TX. Ceramic coating, paint correction, interior detailing & more. IDA Certified. 5-star rated. Call (726) 207-1007 for a quote.',
};

/**
 * Homepage - Marketing Page
 * Complete landing page with all sections
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ReviewsSection />
      <ServiceAreas />
      <WhyChooseUs />
      <FinalCTA />
    </>
  );
}
