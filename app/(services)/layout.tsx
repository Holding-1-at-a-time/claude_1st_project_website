/**
 * Services Layout using Next.js 16 LayoutProps helper
 * Supports @modal parallel route slot for intercepted routes
 */
export default function ServicesLayout(props: LayoutProps<'/services'>): JSX.Element {
  const { children, modal } = props;
  return (
    <>
      {children}
      {modal}
    </>
  );
}
