import { query } from '../_generated/server';
import { v } from 'convex/values';

/**
 * Get featured reviews
 */
export const getFeatured = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 10;

    return await ctx.db
      .query('reviews')
      .withIndex('by_featured', (q) => q.eq('featured', true))
      .filter((q) => q.neq(q.field('publishedAt'), undefined))
      .order('desc')
      .take(limit);
  },
});

/**
 * Get reviews by service
 */
export const getByService = query({
  args: { serviceSlug: v.string(), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 20;

    return await ctx.db
      .query('reviews')
      .withIndex('by_service', (q) => q.eq('serviceSlug', args.serviceSlug))
      .filter((q) => q.neq(q.field('publishedAt'), undefined))
      .order('desc')
      .take(limit);
  },
});

/**
 * Get recent reviews
 */
export const getRecent = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 10;

    return await ctx.db
      .query('reviews')
      .withIndex('by_published')
      .filter((q) => q.neq(q.field('publishedAt'), undefined))
      .order('desc')
      .take(limit);
  },
});

/**
 * Get all reviews (for reviews page)
 */
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('reviews')
      .filter((q) => q.neq(q.field('publishedAt'), undefined))
      .order('desc')
      .collect();
  },
});

/**
 * Get reviews by minimum rating
 */
export const getByRating = query({
  args: { minRating: v.number(), limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 20;

    return await ctx.db
      .query('reviews')
      .withIndex('by_rating')
      .filter((q) =>
        q.and(
          q.gte(q.field('rating'), args.minRating),
          q.neq(q.field('publishedAt'), undefined)
        )
      )
      .order('desc')
      .take(limit);
  },
});
