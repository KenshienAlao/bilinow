"use client";

import { useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CATEGORY_GROUPS, PAGE_SIZE } from "@/config/product.config";
import { AppShell } from "@/components/layout/app-layout";
import { useInfiniteProducts } from "@/hooks/use-infinite";
import { QueryHeader } from "@/components/query/query-header";
import { SubcategoryFilter } from "@/components/query/subcategory-filter";
import { ProducGridSearch } from "@/components/query/productgrid-search";
import { ROUTES } from "@/config/routes.config";

export function QueryContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const q = searchParams.get("q") ?? "";
  const categoryId = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");

  useEffect(() => {
    if (!q && !categoryId) {
      router.replace(ROUTES.HOME);
    }
  }, [q, categoryId, router]);

  const group = (() => {
    return CATEGORY_GROUPS.find((g) => g.id === categoryId);
  })();

  const activeSubcategory =
    subcategory ?? (group?.categories.length ? group.categories[0] : undefined);

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteProducts({
      limit: PAGE_SIZE,
      category: activeSubcategory,
      q: q || undefined,
    });

  const sentinelRef = useRef<HTMLDivElement>(null);

  const products = (data?.pages ?? []).flatMap((p) => p.data?.products ?? []);

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
    }
  };

  const updateSubcategory = (newSubcategory: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("subcategory", newSubcategory);
    router.push(`${ROUTES.SEARCH}?${params.toString()}`);
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
    <AppShell>
      <div className="py-6 sm:py-10">
        <QueryHeader q={q} group={group} />

        <SubcategoryFilter
          group={group}
          activeSubcategory={activeSubcategory}
          onSelect={updateSubcategory}
        />

        <ProducGridSearch
          products={products}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          loadMore={loadMore}
          sentinelRef={sentinelRef}
        />
      </div>
    </AppShell>
  );
}
