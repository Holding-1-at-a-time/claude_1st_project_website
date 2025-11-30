import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

/**
 * Render the Services layout with a Header, a main content area for children, a Footer, and an optional modal slot.
 *
 * @param props - Layout props for the '/services' route; provides `children` to render in the main area and an optional `modal` parallel-route slot used for intercepted/modal routes.
 * @returns The root JSX element containing the Header, main content wrapper, Footer, and the modal slot when present.
 */
export default function ServicesLayout(props: LayoutProps<'/services'>): JSX.Element {
  const { children, modal } = props;
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {modal}
    </>
  );
}