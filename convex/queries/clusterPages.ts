import { query } from '../_generated/server';
import { v } from 'convex/values';

/**
 * Get a single cluster page by slug
 */
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const cluster = await ctx.db
      .query('clusterPages')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first();

    return cluster;
  },
});

/**
 * Get all cluster pages for a pillar
 */
export const getByPillar = query({
  args: { pillarId: v.id('pillarPages') },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('clusterPages')
      .withIndex('by_pillar', (q) => q.eq('pillarPageId', args.pillarId))
      .filter((q) => q.eq(q.field('published'), true))
      .collect();
  },
});

/**
 * Get related cluster pages
 */
export const getRelated = query({
  args: { clusterIds: v.array(v.id('clusterPages')) },
  handler: async (ctx, args) => {
    const clusters = await Promise.all(
      args.clusterIds.map((id) => ctx.db.get(id))
    );

    // Filter out null values and unpublished
    return clusters.filter((c) => c !== null && c.published);
  },
});
