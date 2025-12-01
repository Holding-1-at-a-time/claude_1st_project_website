import type { Metadata } from 'next';
import { Award, Calendar, Target, Heart, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | One Detail At A Time LLC | IDA Certified Auto Detailing',
  description:
    'Learn about Ricardo Romeo Jr. and One Detail At A Time LLC. IDA certified auto detailing professionals serving San Antonio since 2019 with passion and precision.',
};

/**
 * About Page
 * Business story, owner bio, credentials, mission, and values
 */
export default function AboutPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              About One Detail At A Time
            </h1>
            <p className="text-xl text-slate-300">
              Delivering exceptional auto detailing services with passion, precision, and professional certification.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Bio Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image Placeholder */}
            <div className="relative overflow-hidden rounded-lg bg-slate-100">
              <div className="flex aspect-square items-center justify-center lg:aspect-auto lg:h-full">
                <div className="text-center">
                  <Users className="mx-auto mb-4 h-20 w-20 text-primary" />
                  <p className="text-lg font-semibold text-foreground">Ricardo Romeo Jr.</p>
                  <p className="text-muted-foreground">Owner & Lead Detailer</p>
                </div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Award className="h-4 w-4" />
                IDA Certified Professional
              </div>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                Meet Ricardo Romeo Jr.
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2019, One Detail At A Time LLC represents more than just a business—it's a commitment to excellence in automotive care. Owner Ricardo Romeo Jr. turned his passion for vehicles and meticulous attention to detail into a thriving auto detailing service that San Antonio has come to trust.
                </p>
                <p>
                  As an International Detailing Association (IDA) certified professional, Ricardo brings industry-leading knowledge and techniques to every vehicle. His dedication to continuous learning ensures that clients receive the most advanced and effective detailing services available.
                </p>
                <p>
                  "My philosophy is simple," Ricardo explains. "Every vehicle deserves to be treated with care and precision. I take pride in delivering results that exceed expectations, one detail at a time."
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Since 2019</p>
                    <p className="text-sm text-muted-foreground">Serving San Antonio</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="mt-1 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">IDA Certified</p>
                    <p className="text-sm text-muted-foreground">Industry recognized</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-slate-50 py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Target className="mx-auto mb-6 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              To provide San Antonio vehicle owners with unparalleled auto detailing services that protect their investment, enhance their pride of ownership, and exceed their expectations through professional-grade techniques, premium products, and unwavering attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground">
              Our Core Values
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Value 1: Excellence */}
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We never settle for "good enough." Every service is performed to the highest professional standards with IDA-certified techniques.
                </p>
              </div>

              {/* Value 2: Integrity */}
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  Honest recommendations, transparent pricing, and ethical business practices. We treat your vehicle as if it were our own.
                </p>
              </div>

              {/* Value 3: Passion */}
              <div className="text-center">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">Passion</h3>
                <p className="text-muted-foreground">
                  Auto detailing isn't just our business—it's our craft. We genuinely love what we do, and it shows in every result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDA Certification Highlight */}
      <section className="bg-primary py-16 text-white">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Award className="mx-auto mb-6 h-16 w-16" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              IDA Certified Excellence
            </h2>
            <p className="mb-6 text-lg text-white/90">
              The International Detailing Association (IDA) is the industry's leading organization for professional detailers. IDA certification demonstrates our commitment to ongoing education, industry best practices, and exceptional service standards.
            </p>
            <p className="text-white/80">
              When you choose One Detail At A Time, you're choosing a certified professional who adheres to the highest standards in the automotive detailing industry.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Experience the Difference
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Join the growing number of satisfied San Antonio vehicle owners who trust One Detail At A Time with their automotive care.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/booking"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Book Your Service
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-primary px-8 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
