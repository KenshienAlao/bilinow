import { useAddCart, useRemoveCart } from "./use-product";

export function useToggleCart() {
  const { mutate: addCart } = useAddCart();
  const { mutate: removeCart } = useRemoveCart();

  return (id: number, inCart: boolean) => {
    if (inCart) {
      removeCart(id);
    } else {
      addCart(id);
    }
  };
}
