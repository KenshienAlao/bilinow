import { ApiReponse } from "@/lib/response";
import { Product, ProductInfo } from "@/model/product";
import { ProductService } from "@/service/product.service";
import {
  useMutation,
  useQuery,
  useQueryClient,
  useQueries,
} from "@tanstack/react-query";

export const productKey = ["product"];
export const cartKey = ["cart"];

interface useProductMutationProps<TData, TVariables> {
  mutationFn: (data: TVariables) => Promise<ApiReponse<TData>>;
  mutationKey: string[];
}

function useProductMutation<TData, TVariables>({
  mutationFn,
  mutationKey,
}: useProductMutationProps<TData, TVariables>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey,
    mutationFn,
    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: cartKey });

      const previous = queryClient.getQueryData(cartKey);

      const targetId =
        typeof newData === `number` ? newData : (newData as { id: number }).id;
      const isAdding = mutationKey.includes("add-cart");

      queryClient.setQueryData(
        cartKey,
        (old: ApiReponse<number[]> | undefined) => {
          if (!old || !old.data)
            return { message: "Success", data: isAdding ? [targetId] : [] };

          const currentIds = old.data;
          if (isAdding) {
            return {
              ...old,
              data: currentIds.includes(targetId)
                ? currentIds
                : [...currentIds, targetId],
            };
          } else {
            return { ...old, data: currentIds.filter((id) => id !== targetId) };
          }
        },
      );

      return { previous };
    },

    onError: (_err, _variables, context) => {
      if (context?.previous) {
        queryClient.setQueryData(cartKey, context.previous);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartKey });
    },
  });
}

export function useCartIds() {
  return useQuery<ApiReponse<number[]>, Error, number[]>({
    queryKey: cartKey,
    queryFn: () => ProductService.getCartIds(),
    select: (res) => res.data!,
    staleTime: 1000 * 60 * 5,
  });
}

export function useProduct(
  opts: {
    limit?: number;
    skip?: number;
    sort?: string;
    category?: string;
    q?: string;
  } = {},
) {
  return useQuery<ApiReponse<Product>, Error, Product>({
    queryKey: [...productKey, opts],
    queryFn: () => ProductService.get(opts),
    select: (res) => res.data!,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
}

export function useSearchProduct(debounced: string) {
  return useQuery<ApiReponse<Product>, Error, Product>({
    queryKey: [...productKey, "search", debounced],
    queryFn: () => ProductService.get({ q: debounced, limit: 10 }),
    select: (res) => res.data!,
    enabled: debounced.length > 1,
    staleTime: 1000 * 60 * 5,
  });
}

export function useSearchProductById(id: number) {
  return useQuery<ApiReponse<ProductInfo>, Error, ProductInfo>({
    queryKey: [...productKey, "searched", id],
    queryFn: () => ProductService.getById({ id: id }),
    select: (res) => res.data!,
    staleTime: 1000 * 60 * 5,
  });
}

export function useSearchProductsByIds(ids: number[]) {
  const productQueries = useQueries({
    queries: ids.map((id) => ({
      queryKey: [...productKey, "searched", id],
      queryFn: () => ProductService.getById({ id }),
      select: (res: ApiReponse<ProductInfo>) => res.data!,
      staleTime: 1000 * 60 * 5,
    })),
  });

  const products: ProductInfo[] = [];
  let isLoading = false;

  for (const q of productQueries) {
    if (q.data) {
      products.push(q.data);
    }

    if (!isLoading && q.isLoading) {
      isLoading = true;
    }
  }
  return { products, isLoading };
}

export const useAddCart = () => {
  return useProductMutation({
    mutationFn: (id: number) => ProductService.addCart(id),
    mutationKey: [...productKey, "add-cart"],
  });
};

export const useRemoveCart = () => {
  return useProductMutation({
    mutationFn: (id: number) => ProductService.removeCart(id),
    mutationKey: [...productKey, "remove-cart"],
  });
};
