"use client";
import { CATEGORY_GROUPS } from "@/config/product.config";
import { productKey } from "@/hooks/use-product";
import { ApiReponse } from "@/lib/response";
import { Product } from "@/model/product";
import { ProductService } from "@/service/product.service";
import { useQueries } from "@tanstack/react-query";
import { ProductCarousel } from "./product-carousel";
import { useIsWishlisted } from "@/lib/shop";

function interleave<T>(arrays: T[][]): T[] {
  const result: T[] = [];
  const maxLen = Math.max(...arrays.map((a) => a.length));

  for (let i = 0; i < maxLen; i++) {
    for (const arr of arrays) {
      if (i < arr.length) {
        result.push(arr[i]);
      }
    }
  }

  return result;
}
export function GroupCarousel({
  group,
}: {
  group: (typeof CATEGORY_GROUPS)[number];
}) {
  const categories: readonly string[] = group.categories;

  const queries = useQueries({
    queries: categories.map((category) => ({
      queryKey: [...productKey, { limit: 8, category }],
      queryFn: () => ProductService.get({ limit: 8, category }),
      select: (res: ApiReponse<Product>) => res.data!,
    })),
  });

  const isLoading = queries.some((q) => q.isLoading);

  const arrays = [];

  for (const q of queries) {
    const products = q.data?.products;
    if (products?.length) {
      arrays.push(products);
    }
  }
  const interleaved = interleave(arrays);

  const unique = [];
  const seen = new Set();

  for (const p of interleaved) {
    if (!seen.has(p.id)) {
      seen.add(p.id);
      unique.push(p);
    }
  }

  const products = unique.slice(0, 16);

  return (
    <ProductCarousel
      title={group.title}
      subtitle={group.subtitle}
      products={products}
      isLoading={isLoading}
      viewAllTo={{ category: group.id }}
    />
  );
}
