import { v } from 'convex/values';

/**
 * Convex validators for type-safe database operations
 * These align with the schema but provide additional runtime validation
 */

export const pillarPageValidator = {
  slug: v.string(),
  serviceName: v.string(),
  serviceType: v.string(),
  title: v.string(),
  metaDescription: v.string(),
  h1: v.string(),
  introContent: v.string(),
  mainContent: v.string(),
  keywords: v.array(v.string()),
  neighborhoods: v.array(v.string()),
  faqs: v.array(
    v.object({
      question: v.string(),
      answer: v.string(),
    })
  ),
  published: v.boolean(),
  createdAt: v.number(),
  updatedAt: v.number(),
};

export const clusterPageValidator = {
  slug: v.string(),
  pillarPageId: v.id('pillarPages'),
  title: v.string(),
  metaDescription: v.string(),
  h1: v.string(),
  content: v.string(),
  keywords: v.array(v.string()),
  relatedClusterIds: v.array(v.id('clusterPages')),
  callToAction: v.string(),
  published: v.boolean(),
  createdAt: v.number(),
  updatedAt: v.number(),
};

export const bookingValidator = {
  serviceSlug: v.string(),
  serviceName: v.string(),
  customerName: v.string(),
  customerEmail: v.string(),
  customerPhone: v.string(),
  customerAddress: v.optional(v.string()),
  customerZip: v.optional(v.string()),
  vehicleType: v.string(),
  vehicleMake: v.optional(v.string()),
  vehicleModel: v.optional(v.string()),
  vehicleYear: v.optional(v.number()),
  preferredDate: v.string(),
  preferredTime: v.string(),
  notes: v.optional(v.string()),
  status: v.string(),
};

export const reviewValidator = {
  serviceSlug: v.optional(v.string()),
  serviceName: v.optional(v.string()),
  customerName: v.string(),
  customerInitial: v.string(),
  rating: v.number(),
  title: v.string(),
  comment: v.string(),
  source: v.string(),
  verified: v.boolean(),
  featured: v.boolean(),
};
