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

/**
 * Submit contact form
 * Tracks contact form submission as a lead
 */
export const submitContactForm = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    // Store as a lead with contact details in metadata
    const leadId = await ctx.db.insert('leads', {
      source: 'direct',
      page: '/contact',
      action: 'contact_form_submit',
      timestamp: Date.now(),
      metadata: {
        service: undefined,
        neighborhood: undefined,
        userAgent: `Contact: ${args.name} | ${args.email} | ${args.phone} | ${args.message}`,
      },
    });

    // In production, you would also:
    // 1. Send email notification to business owner
    // 2. Send confirmation email to customer
    // 3. Integrate with CRM system

    return { success: true, leadId };
  },
});
