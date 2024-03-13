import { Skeleton } from "./ui/skeleton";

const Loader = () => {
  return (
    <div className="flex flex-col gap-3 w-full mt-4 pl-12 pr-6">
      <Skeleton className="w-full h-[17px] rounded-md delay-1000" />
      <Skeleton className="w-full h-[17px] rounded-md" />
      <Skeleton className="w-2/3 h-[17px] rounded-md delay-1000" />
    </div>
  );
};

export default Loader;
