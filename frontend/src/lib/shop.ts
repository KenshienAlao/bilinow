import { useCartIds } from "@/hooks/use-product";

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

export const useIsInCart = (id?: number) => {
  const { data: cartIds, isLoading } = useCartIds();
  return {
    inCart: cartIds?.includes(id ?? -1) ?? false,
    isCartLoading: isLoading,
  };
};
