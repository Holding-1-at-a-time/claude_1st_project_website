import type { Doc, Id } from '@/convex/_generated/dataModel';

/**
 * Type definitions for the application
 * Extends Convex generated types with additional app-specific types
 */

// Re-export Convex types
export type { Doc, Id };

// Pillar Page Types
export type PillarPage = Doc<'pillarPages'>;
export type PillarPageId = Id<'pillarPages'>;

// Cluster Page Types
export type ClusterPage = Doc<'clusterPages'>;
export type ClusterPageId = Id<'clusterPages'>;

// Booking Types
export type Booking = Doc<'bookings'>;
export type BookingId = Id<'bookings'>;

export type BookingStatus = 'pending' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled';

export interface BookingFormData {
  serviceSlug: string;
  serviceName: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress?: string;
  customerZip?: string;
  vehicleType: string;
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleYear?: number;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

// Review Types
export type Review = Doc<'reviews'>;
export type ReviewId = Id<'reviews'>;

export type ReviewSource = 'google' | 'facebook' | 'direct';

// Service Area Types
export type ServiceArea = Doc<'serviceAreas'>;
export type ServiceAreaId = Id<'serviceAreas'>;

// Lead Types
export type Lead = Doc<'leads'>;
export type LeadId = Id<'leads'>;

export type LeadSource = 'organic' | 'direct' | 'referral' | 'social';
export type LeadAction = 'phone_click' | 'form_submit' | 'email_click' | 'directions_click';

// Vehicle Types
export type VehicleType = 'sedan' | 'suv' | 'truck' | 'van' | 'rv' | 'boat';

// SEO Types
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

// Service Types (for the 14 core services)
export interface Service {
  slug: string;
  name: string;
  description: string;
  icon?: string;
}
