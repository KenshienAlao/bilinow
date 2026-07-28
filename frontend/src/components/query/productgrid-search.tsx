import { PAGE_SIZE } from "@/config/product.config";
import { Button } from "../ui/button";
import { ProductInfo } from "@/model/product";
import { ProductGrid } from "../home/product-grid";
import { ProductGridSkeleton } from "../ui/skeleton";
import { RefObject } from "react";

export function ProducGridSearch({
  products,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  loadMore,
  sentinelRef,
}: {
  products: ProductInfo[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
  loadMore: () => void;
  sentinelRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      {isLoading ? (
        <ProductGridSkeleton count={PAGE_SIZE} />
      ) : products.length > 0 ? (
        <>
          <ProductGrid products={products} />
          {isFetchingNextPage && (
            <ProductGridSkeleton count={PAGE_SIZE} className="mt-4" />
          )}
          <div ref={sentinelRef} aria-hidden className="h-px w-full" />
          <div className="flex justify-center pt-8">
            {hasNextPage ? (
              <Button
                variant="outline"
                className="rounded-xl"
                disabled={isFetchingNextPage}
                onClick={loadMore}
              >
                {isFetchingNextPage ? "Loading\u2026" : "Load more"}
              </Button>
            ) : (
              <p className="text-sm text-muted-foreground">
                You have reached the end
              </p>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
          <h3 className="text-lg font-semibold">No products found</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We couldn&apos;t find any products matching your criteria.
          </p>
        </div>
      )}
    </>
  );
}
