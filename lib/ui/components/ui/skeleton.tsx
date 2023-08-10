import { cn } from "netzo/ui/utils/mod.ts";

function Skeleton({
  className,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };