'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

/**
 * Intercepted Route: Booking Modal
 * Path: /@modal/(.)booking
 *
 * This intercepts navigation to /booking and shows a modal instead.
 * Direct navigation to /booking still works (shows full page).
 *
 * Features:
 * - Intercepted route pattern (.)
 * - Modal overlay
 * - URL-based modal state
 * - Escape key to close
 * - Click outside to close
 */

export default function BookingModal(): JSX.Element {
  const router = useRouter();
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get('service');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (): void => {
    router.back();
  };

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-lg border border-border bg-background p-8 shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-white"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="mb-6 text-3xl font-bold text-white">Book Your Service</h2>

        {serviceParam && (
          <div className="mb-4 rounded-lg bg-primary/10 p-4">
            <p className="text-sm text-muted-foreground">Selected Service:</p>
            <p className="font-semibold text-primary">
              {serviceParam
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <p className="text-muted-foreground">
            This is an <strong>intercepted route modal</strong>. When you click "Book Service"
            links throughout the site, this modal appears instead of navigating to a new page.
          </p>

          <p className="text-muted-foreground">
            However, if you navigate directly to <code className="text-primary">/booking</code>{' '}
            or refresh the page, you'll see the full booking page instead.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleClose}
              className="rounded-lg border border-border px-6 py-2 text-white transition-colors hover:border-primary"
            >
              Cancel
            </button>
            <button className="rounded-lg bg-primary px-6 py-2 text-white transition-colors hover:bg-primary/90">
              Continue to Booking Form
            </button>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-card p-4">
          <p className="text-xs text-muted-foreground">
            <strong>Try this:</strong> Click Cancel or press Escape to close. Then try
            navigating to{' '}
            <a href="/booking" className="text-primary hover:underline">
              /booking
            </a>{' '}
            directly to see the full page.
          </p>
        </div>
      </div>
    </div>
  );
}
