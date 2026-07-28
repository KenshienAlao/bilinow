import { useAddWishlist, useRemoveWishlist } from "./use-product";

export function useToggleWishlist() {
  const { mutate: addWishlist } = useAddWishlist();
  const { mutate: removeWishlist } = useRemoveWishlist();

  return (id: number, isWishlisted: boolean) => {
    if (isWishlisted) {
      removeWishlist(id);
    } else {
      addWishlist(id);
    }
  };
}
