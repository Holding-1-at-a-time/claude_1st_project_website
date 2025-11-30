/**
 * Navigation Configuration
 * Centralized config for header and footer links
 */

export const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
] as const;

export const POPULAR_SERVICES = [
  { href: '/services/auto-detailing', label: 'Auto Detailing' },
  { href: '/services/ceramic-coating', label: 'Ceramic Coating' },
  { href: '/services/paint-correction', label: 'Paint Correction' },
  { href: '/services/interior-deep-cleansing', label: 'Interior Detailing' },
] as const;

export const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/reviews', label: 'Customer Reviews' },
  { href: '/contact', label: 'Contact' },
  { href: '/booking', label: 'Book Appointment' },
] as const;

export const LEGAL_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
] as const;
