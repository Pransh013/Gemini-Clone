import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-[#4f75c2] to-[#929395]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
