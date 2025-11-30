import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

/**
 * Convex Database Schema for One Detail At A Time LLC
 * Strongly typed - no 'any' types allowed
 */
export default defineSchema({
  /**
   * Pillar Pages - Main service pages (14 total)
   * One per core service (auto detailing, ceramic coating, etc.)
   */
  pillarPages: defineTable({
    slug: v.string(), // URL-friendly identifier (e.g., 'auto-detailing')
    serviceName: v.string(), // Display name (e.g., 'Auto Detailing')
    serviceType: v.string(), // For schema.org markup
    title: v.string(), // SEO title tag
    metaDescription: v.string(), // SEO meta description
    h1: v.string(), // Page H1 heading
    introContent: v.string(), // Introduction paragraph (HTML)
    mainContent: v.string(), // Main body content (HTML)
    keywords: v.array(v.string()), // Target keywords for SEO
    neighborhoods: v.array(v.string()), // Service areas mentioned
    faqs: v.array(
      v.object({
        question: v.string(),
        answer: v.string(),
      })
    ),
    published: v.boolean(), // Draft vs published
    createdAt: v.number(), // Timestamp
    updatedAt: v.number(), // Timestamp
  })
    .index('by_slug', ['slug'])
    .index('by_published', ['published']),

  /**
   * Cluster Pages - Subtopic pages (7 per service = 98 total)
   * Support pillar pages with focused long-tail content
   */
  clusterPages: defineTable({
    slug: v.string(), // Full slug path (e.g., 'auto-detailing/paint-protection')
    pillarPageId: v.id('pillarPages'), // Parent pillar page
    title: v.string(), // SEO title tag
    metaDescription: v.string(), // SEO meta description
    h1: v.string(), // Page H1 heading
    content: v.string(), // Main content (HTML)
    keywords: v.array(v.string()), // Long-tail keywords
    relatedClusterIds: v.array(v.id('clusterPages')), // Related cluster pages
    callToAction: v.string(), // CTA text/link
    published: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_slug', ['slug'])
    .index('by_pillar', ['pillarPageId'])
    .index('by_published', ['published']),

  /**
   * Bookings - Customer service appointments
   */
  bookings: defineTable({
    serviceSlug: v.string(), // Which service (links to pillar)
    serviceName: v.string(), // Service display name
    // Customer info
    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),
    customerAddress: v.optional(v.string()),
    customerZip: v.optional(v.string()),
    // Vehicle info
    vehicleType: v.string(), // sedan, suv, truck, rv, boat
    vehicleMake: v.optional(v.string()),
    vehicleModel: v.optional(v.string()),
    vehicleYear: v.optional(v.number()),
    // Scheduling
    preferredDate: v.string(), // ISO date string
    preferredTime: v.string(), // Time slot
    notes: v.optional(v.string()), // Special requests
    // Status tracking
    status: v.string(), // pending, confirmed, completed, cancelled
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index('by_status', ['status'])
    .index('by_date', ['preferredDate'])
    .index('by_email', ['customerEmail']),

  /**
   * Reviews - Customer testimonials
   */
  reviews: defineTable({
    serviceSlug: v.optional(v.string()), // Associated service (if any)
    serviceName: v.optional(v.string()),
    // Customer info
    customerName: v.string(), // Full name for internal
    customerInitial: v.string(), // Display name (e.g., 'John D.')
    // Review content
    rating: v.number(), // 1-5 stars
    title: v.string(), // Review headline
    comment: v.string(), // Review text
    // Metadata
    source: v.string(), // 'google', 'facebook', 'direct'
    verified: v.boolean(), // Verified customer
    featured: v.boolean(), // Show on homepage
    createdAt: v.number(),
    publishedAt: v.optional(v.number()), // When approved/published
  })
    .index('by_rating', ['rating'])
    .index('by_featured', ['featured'])
    .index('by_published', ['publishedAt'])
    .index('by_service', ['serviceSlug']),

  /**
   * Service Areas - Neighborhoods served in San Antonio
   */
  serviceAreas: defineTable({
    name: v.string(), // Display name (e.g., 'Stone Oak')
    slug: v.string(), // URL slug
    description: v.string(), // SEO description
    landmarks: v.array(v.string()), // Notable landmarks
    zipCodes: v.array(v.string()), // ZIP codes covered
    travelTime: v.string(), // Est. travel time from business
    active: v.boolean(), // Currently serving
  })
    .index('by_slug', ['slug'])
    .index('by_active', ['active']),

  /**
   * Leads - Analytics tracking for conversions
   */
  leads: defineTable({
    source: v.string(), // 'organic', 'direct', 'referral', 'social'
    page: v.string(), // Page where action occurred
    action: v.string(), // 'phone_click', 'form_submit', 'email_click'
    timestamp: v.number(),
    metadata: v.optional(
      v.object({
        service: v.optional(v.string()),
        neighborhood: v.optional(v.string()),
        userAgent: v.optional(v.string()),
      })
    ),
  })
    .index('by_source', ['source'])
    .index('by_timestamp', ['timestamp'])
    .index('by_action', ['action']),
});
