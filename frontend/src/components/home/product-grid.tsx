import { cn } from "@/lib/utils";
import { ProductInfo } from "@/model/product";
import { ProductCard } from "./product-card";
import { useWishlistIds } from "@/hooks/use-product";

export function ProductGrid({
  products,
  className,
}: {
  products: ProductInfo[];
  className?: string;
}) {
  const { data: wishlistIds } = useWishlistIds();

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
        className,
      )}
    >
      {products.map((p) => (
        <ProductCard
          key={`${p.meta}-${p.id}`}
          product={p}
          wished={wishlistIds?.includes(p.id)}
        />
      ))}
    </div>
  );
}
