import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gradient-to-r from-[#4873c9] to-[#b8b9bc]",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
