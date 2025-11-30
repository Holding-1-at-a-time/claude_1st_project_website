import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { BUSINESS_INFO, SERVICE_AREAS, BUSINESS_HOURS } from '@/lib/constants';
import { formatPhoneHref } from '@/lib/utils';

/**
 * Footer links configuration
 */
const FOOTER_LINKS = {
  services: [
    { href: '/services/auto-detailing', label: 'Auto Detailing' },
    { href: '/services/ceramic-coating', label: 'Ceramic Coating' },
    { href: '/services/paint-correction', label: 'Paint Correction' },
    { href: '/services/interior-deep-cleansing', label: 'Interior Detailing' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/reviews', label: 'Customer Reviews' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book Appointment' },
  ],
} as const;

/**
 * Footer Component (Server Component)
 * Includes NAP (Name, Address, Phone) for local SEO
 */
export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info with NAP */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional auto detailing services in San Antonio. {BUSINESS_INFO.certification}.
            </p>

            {/* NAP - Critical for Local SEO */}
            <address
              className="not-italic"
              itemScope
              itemType="https://schema.org/LocalBusiness"
            >
              <meta itemProp="name" content={BUSINESS_INFO.name} />

              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">{BUSINESS_INFO.address.street}</span>
                    <br />
                    <span itemProp="addressLocality">{BUSINESS_INFO.address.city}</span>,{' '}
                    <span itemProp="addressRegion">{BUSINESS_INFO.address.state}</span>{' '}
                    <span itemProp="postalCode">{BUSINESS_INFO.address.zip}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                  <a
                    href={formatPhoneHref(BUSINESS_INFO.phoneRaw)}
                    itemProp="telephone"
                    className="hover:text-primary"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    itemProp="email"
                    className="hover:text-primary"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </div>
            </address>
          </div>

          {/* Popular Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Popular Services
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas & Hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Service Areas
            </h3>
            <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
              {SERVICE_AREAS.slice(0, 4).map((area) => (
                <li key={area.slug}>{area.name}</li>
              ))}
              <li className="text-primary">
                <Link href="/contact" className="hover:underline">
                  + More Areas
                </Link>
              </li>
            </ul>

            <h4 className="mb-2 text-sm font-semibold text-foreground">Hours</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {BUSINESS_HOURS.map((hours, index) => (
                <li key={index}>{hours.display}</li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* SEO Credit */}
        <div className="mt-4 text-center text-xs text-muted-foreground/60">
          <p>
            Serving San Antonio: {SERVICE_AREAS.map((area) => area.name).join(', ')}
          </p>
        </div>
      </div>
    </footer>
  );
}
