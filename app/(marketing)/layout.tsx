import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

/**
 * Layout component that wraps marketing pages with a header, main content area, and footer.
 *
 * @returns A JSX element containing the Header, a `main` element that renders the layout's children, and the Footer.
 */
export default function MarketingLayout(props: LayoutProps<'/'>): JSX.Element {
  return (
    <>
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </>
  );
}