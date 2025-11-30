import { query } from '../_generated/server';
import { v } from 'convex/values';

/**
 * Get all active service areas
 */
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query('serviceAreas')
      .withIndex('by_active', (q) => q.eq('active', true))
      .collect();
  },
});

/**
 * Check if a ZIP code is in our service area
 */
export const checkZipCode = query({
  args: { zipCode: v.string() },
  handler: async (ctx, args) => {
    const areas = await ctx.db
      .query('serviceAreas')
      .withIndex('by_active', (q) => q.eq('active', true))
      .collect();

    const serviceArea = areas.find((area) =>
      area.zipCodes.includes(args.zipCode)
    );

    return {
      isServiced: !!serviceArea,
      area: serviceArea ?? null,
    };
  },
});

/**
 * Get service area by slug
 */
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('serviceAreas')
      .withIndex('by_slug', (q) => q.eq('slug', args.slug))
      .first();
  },
});
