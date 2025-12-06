'use client';

import { BookingForm } from '@/components/booking/booking-form';

interface BookingFormWrapperProps {
  preselectedService?: string;
}

/**
 * Client wrapper for BookingForm
 * Allows us to use the client component in a server component page
 */
export function BookingFormWrapper({ preselectedService }: BookingFormWrapperProps): JSX.Element {
  return <BookingForm preselectedService={preselectedService} />;
}
