/**
 * Business NAP (Name, Address, Phone) Constants
 * CRITICAL: These must be IDENTICAL everywhere for local SEO
 */
export const BUSINESS_INFO = {
  name: 'One Detail At A Time LLC',
  owner: 'Ricardo Romeo Jr.',
  phone: '(726) 207-1007',
  phoneRaw: '7262071007',
  email: 'rromerojr1@gmail.com',
  address: {
    street: '11692 Bricken Circle',
    city: 'San Antonio',
    state: 'TX',
    stateShort: 'TX',
    zip: '78233',
    country: 'United States',
    full: '11692 Bricken Circle, San Antonio, TX 78233',
  },
  geo: {
    latitude: 29.6199,
    longitude: -98.4738,
  },
  established: 2019,
  certification: 'IDA Certified',
  serviceRadius: 25, // miles
} as const;

/**
 * Service areas / neighborhoods in San Antonio
 */
export const SERVICE_AREAS = [
  {
    name: 'Stone Oak',
    slug: 'stone-oak',
    description: 'Serving Stone Oak residents since 2019',
    landmarks: ['Stone Oak Parkway', 'Sonterra', 'The Rim'],
  },
  {
    name: 'Alamo Heights',
    slug: 'alamo-heights',
    description: 'Professional auto detailing in Alamo Heights',
    landmarks: ['Broadway', 'Alamo Heights High School'],
  },
  {
    name: 'Medical Center',
    slug: 'medical-center',
    description: 'Auto detailing near Medical Center',
    landmarks: ['UT Health San Antonio', 'South Texas Medical Center'],
  },
  {
    name: 'Northwest Side',
    slug: 'northwest-side',
    description: 'Serving Northwest San Antonio',
    landmarks: ['Culebra Road', 'Bandera Road'],
  },
  {
    name: 'Northeast Side',
    slug: 'northeast-side',
    description: 'Auto detailing for Northeast San Antonio',
    landmarks: ['Fort Sam Houston', 'Windcrest'],
  },
  {
    name: 'Downtown',
    slug: 'downtown',
    description: 'Downtown San Antonio auto detailing',
    landmarks: ['Riverwalk', 'Alamo', 'Tower of the Americas'],
  },
  {
    name: 'North Side',
    slug: 'north-side',
    description: 'North San Antonio auto detailing services',
    landmarks: ['San Antonio International Airport', 'The Quarry'],
  },
] as const;

/**
 * Business hours
 */
export const BUSINESS_HOURS = [
  {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    open: '08:00',
    close: '18:00',
    display: 'Mon-Fri: 8:00 AM - 6:00 PM',
  },
  {
    days: ['Saturday'],
    open: '09:00',
    close: '15:00',
    display: 'Sat: 9:00 AM - 3:00 PM',
  },
  {
    days: ['Sunday'],
    open: null,
    close: null,
    display: 'Sun: Closed',
  },
] as const;

/**
 * Review/rating information
 */
export const RATING_INFO = {
  averageRating: 5.0,
  totalReviews: 28,
  platform: 'Google',
} as const;

/**
 * Social media links
 */
export const SOCIAL_LINKS = {
  google: '', // To be added: Google Business Profile URL
  facebook: '', // To be added if available
  instagram: '', // To be added if available
} as const;

/**
 * Site configuration
 */
export const SITE_CONFIG = {
  name: 'One Detail At A Time LLC',
  domain: 'odaat1.com',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  description:
    'Professional auto detailing in San Antonio, TX. IDA Certified. Ceramic coating, paint correction, interior detailing & more. 5-star rated. Call (726) 207-1007.',
  keywords: [
    'auto detailing',
    'San Antonio',
    'ceramic coating',
    'paint correction',
    'car detailing',
    'mobile detailing',
    'interior detailing',
    'exterior detailing',
  ],
} as const;

/**
 * Vehicle types for booking
 */
export const VEHICLE_TYPES = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV' },
  { value: 'truck', label: 'Truck' },
  { value: 'van', label: 'Van' },
  { value: 'rv', label: 'RV' },
  { value: 'boat', label: 'Boat' },
] as const;

/**
 * Booking status types
 */
export const BOOKING_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;
