import type { ReactNode } from 'react';

interface ServicesLayoutProps {
  children: ReactNode;
  modal?: ReactNode; // Parallel route slot for modals
}

/**
 * Services Layout with Parallel Route Support
 * Supports @modal slot for intercepted routes
 */
export default function ServicesLayout({ children, modal }: ServicesLayoutProps): JSX.Element {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
