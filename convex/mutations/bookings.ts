import { mutation } from '../_generated/server';
import { v } from 'convex/values';
import { bookingValidator } from '../lib/validators';

/**
 * Create a new booking
 */
export const create = mutation({
  args: bookingValidator,
  handler: async (ctx, args) => {
    const now = Date.now();

    const bookingId = await ctx.db.insert('bookings', {
      ...args,
      createdAt: now,
      updatedAt: now,
    });

    return bookingId;
  },
});

/**
 * Update booking status
 */
export const updateStatus = mutation({
  args: {
    bookingId: v.id('bookings'),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    const booking = await ctx.db.get(args.bookingId);

    if (!booking) {
      throw new Error('Booking not found');
    }

    await ctx.db.patch(args.bookingId, {
      status: args.status,
      updatedAt: Date.now(),
    });

    return args.bookingId;
  },
});

/**
 * Cancel a booking
 */
export const cancel = mutation({
  args: {
    bookingId: v.id('bookings'),
  },
  handler: async (ctx, args) => {
    const booking = await ctx.db.get(args.bookingId);

    if (!booking) {
      throw new Error('Booking not found');
    }

    await ctx.db.patch(args.bookingId, {
      status: 'cancelled',
      updatedAt: Date.now(),
    });

    return args.bookingId;
  },
});
