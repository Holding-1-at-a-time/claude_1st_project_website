import { query } from '../_generated/server';
import { v } from 'convex/values';

/**
 * Get all published pillar pages
 */
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('pillarPages')
      .withIndex('by_published', (q) => q.eq('published', true))
      .collect();
  },
});

/**
 * Get a single pillar page by slug
 */
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const pillar = await ctx.db
      .query('pillarPages')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first();

    return pillar;
  },
});

/**
 * Get pillar page with its cluster pages
 */
export const getWithClusters = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const pillar = await ctx.db
      .query('pillarPages')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first();

    if (!pillar) {
      return null;
    }

    const clusters = await ctx.db
      .query('clusterPages')
      .withIndex('by_pillar', (q) => q.eq('pillarPageId', pillar._id))
      .filter((q) => q.eq(q.field('published'), true))
      .collect();

    return {
      pillar,
      clusters,
    };
  },
});
