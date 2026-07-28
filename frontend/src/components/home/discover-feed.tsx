"use client";
import { PAGE_SIZE } from "@/config/product.config";
import { useInfiniteProducts } from "@/hooks/use-infinite";
import { useEffect, useRef } from "react";
import { ProductGridSkeleton } from "../ui/skeleton";
import { ProductGrid } from "./product-grid";
import { Button } from "../ui/button";

export function DiscoverFeed() {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteProducts({ limit: PAGE_SIZE });
  const sentinelRef = useRef<HTMLDivElement>(null);

  const products = () =>
    (data?.pages ?? []).flatMap((p) => p.data?.products ?? []);

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) void fetchNextPage();
  };

  useEffect(() => {
    const node = sentinelRef.current;

    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && hasNextPage && !isFetchingNextPage) {
          void fetchNextPage();
        }
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          Discover more
        </h2>
        <p className="text-sm text-muted-foreground">
          Discover products you might like.
        </p>
      </div>

      {isLoading ? (
        <ProductGridSkeleton count={PAGE_SIZE} />
      ) : (
        <>
          <ProductGrid products={products()} />
          {isFetchingNextPage && (
            <ProductGridSkeleton count={PAGE_SIZE} className="mt-4" />
          )}
          <div ref={sentinelRef} aria-hidden className="h-px w-full" />
          <div className="flex justify-center pt-2">
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
      )}
    </section>
  );
}
