import { mutation } from '../_generated/server';
import { v } from 'convex/values';

/**
 * Track a lead action (analytics)
 */
export const track = mutation({
  args: {
    source: v.string(),
    page: v.string(),
    action: v.string(),
    metadata: v.optional(
      v.object({
        service: v.optional(v.string()),
        neighborhood: v.optional(v.string()),
        userAgent: v.optional(v.string()),
      })
    ),
  },
  handler: async (ctx, args) => {
    const leadId = await ctx.db.insert('leads', {
      ...args,
      timestamp: Date.now(),
    });

    return leadId;
  },
});
