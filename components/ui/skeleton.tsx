import { cn } from "@/lib/utils"

/**
 * Render a div styled as a pulsing skeleton placeholder.
 *
 * @param className - Additional CSS classes to merge with the component's default classes
 * @param props - Remaining HTMLDivElement attributes which are applied to the rendered div
 * @returns A div element with pulsing animation, rounded corners, and a light primary background; merged `className` and any other provided attributes are applied
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }