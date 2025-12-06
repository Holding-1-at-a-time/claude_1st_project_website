import { mutation } from '../_generated/server';
import { v } from 'convex/values';

/**
 * Create a new review
 */
export const create = mutation({
  args: {
    serviceSlug: v.optional(v.string()),
    serviceName: v.optional(v.string()),
    customerName: v.string(),
    customerInitial: v.string(),
    rating: v.number(),
    title: v.string(),
    comment: v.string(),
    source: v.string(), // 'google', 'facebook', 'direct'
    verified: v.boolean(),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    // Validate rating is between 1 and 5
    if (args.rating < 1 || args.rating > 5) {
      throw new Error('Rating must be between 1 and 5');
    }

    const reviewId = await ctx.db.insert('reviews', {
      ...args,
      featured: args.featured ?? false,
      createdAt: now,
      publishedAt: now, // Auto-publish for now, can add approval flow later
    });

    return reviewId;
  },
});

/**
 * Toggle featured status of a review
 */
export const toggleFeatured = mutation({
  args: {
    reviewId: v.id('reviews'),
  },
  handler: async (ctx, args) => {
    const review = await ctx.db.get(args.reviewId);

    if (!review) {
      throw new Error('Review not found');
    }

    await ctx.db.patch(args.reviewId, {
      featured: !review.featured,
    });

    return args.reviewId;
  },
});

/**
 * Publish a review (set publishedAt timestamp)
 */
export const publish = mutation({
  args: {
    reviewId: v.id('reviews'),
  },
  handler: async (ctx, args) => {
    const review = await ctx.db.get(args.reviewId);

    if (!review) {
      throw new Error('Review not found');
    }

    await ctx.db.patch(args.reviewId, {
      publishedAt: Date.now(),
    });

    return args.reviewId;
  },
});

/**
 * Unpublish a review (remove publishedAt timestamp)
 */
export const unpublish = mutation({
  args: {
    reviewId: v.id('reviews'),
  },
  handler: async (ctx, args) => {
    const review = await ctx.db.get(args.reviewId);

    if (!review) {
      throw new Error('Review not found');
    }

    await ctx.db.patch(args.reviewId, {
      publishedAt: undefined,
    });

    return args.reviewId;
  },
});
