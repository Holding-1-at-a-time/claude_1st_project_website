import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

/**
 * Services Layout using Next.js 16 LayoutProps helper
 * Supports @modal parallel route slot for intercepted routes
 * Includes Header and Footer
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
