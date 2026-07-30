import { useWishlistIds } from "@/hooks/use-product";

const phpFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
});

export const finalPrice = (p: {
  price: number;
  discountPercentage: number;
}) => {
  return p.price * (1 - p.discountPercentage / 100);
};

export const formatPrice = (value: number) => phpFormatter.format(value);

export const useIsWishlisted = (id?: number) => {
  const { data: wishlistIds, isLoading } = useWishlistIds();
  return {
    wished: wishlistIds?.includes(id ?? -1) ?? false,
    isWishlistLoading: isLoading,
  };
};
