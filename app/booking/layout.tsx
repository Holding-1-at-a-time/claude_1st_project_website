import type { ReactNode } from 'react';

/**
 * Booking Layout using Next.js 16 LayoutProps helper
 */
export default function BookingLayout(props: LayoutProps<'/booking'>): JSX.Element {
  return <>{props.children}</>;
}
