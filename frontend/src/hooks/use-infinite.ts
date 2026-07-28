import { useInfiniteQuery } from "@tanstack/react-query";
import type { ApiReponse } from "@/lib/response";
import type { Product } from "@/model/product";
import { ProductService } from "@/service/product.service";
import { PAGE_SIZE } from "@/config/product.config";

export function useInfiniteProducts(
  opts: { limit?: number; sort?: string; category?: string; q?: string } = {},
) {
  const limit = opts.limit ?? PAGE_SIZE;

  return useInfiniteQuery<ApiReponse<Product>, Error>({
    queryKey: [
      "products",
      "infinite",
      limit,
      opts.sort ?? "relevance",
      opts.category,
      opts.q,
    ],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      ProductService.get({
        limit,
        skip: pageParam as number,
        sort: opts.sort,
        category: opts.category,
        q: opts.q,
      }),
    getNextPageParam: (lastPage) => {
      const data = lastPage.data;
      if (!data) return undefined;
      const nextSkip = data.skip + data.limit;
      return nextSkip < data.total ? nextSkip : undefined;
    },
    staleTime: 5 * 60_000,
    refetchOnWindowFocus: false,
  });
}
