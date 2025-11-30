/**
 * Marketing Layout using Next.js 16 LayoutProps helper
 * Wraps home, about, and contact pages
 */
export default function MarketingLayout(props: LayoutProps<'/'>): JSX.Element {
  return <>{props.children}</>;
}
