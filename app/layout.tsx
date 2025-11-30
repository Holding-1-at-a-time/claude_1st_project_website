import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { BUSINESS_INFO, SITE_CONFIG } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${BUSINESS_INFO.name} | Professional Auto Detailing San Antonio`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: BUSINESS_INFO.owner }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} | Professional Auto Detailing San Antonio`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-google-verification-code',
  },
};

/**
 * Root Layout using Next.js 16 LayoutProps helper
 * Supports parallel route slot @modal
 */
export default function RootLayout(props: LayoutProps<'/'>): JSX.Element {
  const { children, modal } = props;
  // Organization Schema.org JSON-LD
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: BUSINESS_INFO.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'San Antonio',
        '@id': 'https://www.wikidata.org/wiki/Q975',
      },
      {
        '@type': 'Place',
        name: 'Stone Oak, San Antonio',
      },
      {
        '@type': 'Place',
        name: 'Alamo Heights, San Antonio',
      },
      {
        '@type': 'Place',
        name: 'Medical Center, San Antonio',
      },
      {
        '@type': 'Place',
        name: 'Northwest Side, San Antonio',
      },
      {
        '@type': 'Place',
        name: 'Northeast Side, San Antonio',
      },
      {
        '@type': 'Place',
        name: 'Downtown San Antonio',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '15:00',
      },
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
          {modal}
        </Providers>
      </body>
    </html>
  );
}
