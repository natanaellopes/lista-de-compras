import { Skeleton } from "@/components/ui/skeleton";

export const ProductListSkeleton = () => (
  <div className="flex flex-col gap-4">
    <Skeleton className="w-100 h-[100px] rounded" />
    <Skeleton className="w-100 h-[100px] rounded" />
    <Skeleton className="w-100 h-[100px] rounded" />
    <Skeleton className="w-100 h-[100px] rounded" />
  </div>
);
