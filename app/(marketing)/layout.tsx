import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

/**
 * Marketing Layout using Next.js 16 LayoutProps helper
 * Wraps home, about, and contact pages
 * Includes Header and Footer
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
