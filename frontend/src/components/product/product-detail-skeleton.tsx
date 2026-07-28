import { Skeleton } from "@/components/ui/skeleton";
import { AppShell } from "@/components/layout/app-layout";

export function ProductDetailSkeleton() {
  return (
    <AppShell>
      <div className="grid gap-8 lg:grid-cols-2">
        <Skeleton className="aspect-square w-full rounded-3xl" />
        <div className="space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </AppShell>
  );
}
