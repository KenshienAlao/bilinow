import { ROUTES } from "@/config/routes.config";
import { cn } from "@/lib/utils";
import { ProductInfo } from "@/model/product";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";
import { useIsWishlisted } from "@/lib/shop";
import { useToggleWishlist } from "@/hooks/use-togglewishlist";
import { Button } from "../ui/button";
import { FiShoppingCart } from "react-icons/fi";
interface ProductCardProps {
  product: ProductInfo;
  className?: string;
  wished?: boolean;
}

export function ProductCard({
  product,
  className,
  wished = false,
}: ProductCardProps) {
  const price = product.price;
  const hasDiscount = product.discountPercentage >= 1;

  const toggleWishlist = useToggleWishlist();

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/30",
        className,
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-secondary/50">
        <Link
          href={`${ROUTES.PRODUCT}/${product.id}`}
          className="block h-full w-full"
          aria-label={product.title}
        >
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={200}
            height={200}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain p-4"
          />
        </Link>
        {hasDiscount && (
          <span className="absolute left-3 top-3 rounded-full bg-destructive px-2.5 py-1 text-[11px] font-semibold text-destructive-foreground">
            -{Math.round(product.discountPercentage)}%
          </span>
        )}

        <button
          type="button"
          aria-label="wishlist"
          onClick={() => {
            toggleWishlist(product.id, wished);
          }}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-border bg-background/90 text-muted-foreground transition-colors hover:text-destructive"
        >
          <FaHeart
            className={cn(
              "h-4 w-4",
              wished && "fill-destructive text-destructive",
            )}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link
          href="/product/$productId"
          className="line-clamp-2 text-sm font-medium leading-snug transition-colors hover:text-primary"
        >
          {product.title}
        </Link>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <FaStar className="h-3.5 w-3.5 fill-warning text-warning" />
          <span className="font-medium text-foreground">
            {product.rating?.toFixed(1)}
          </span>
          <span aria-hidden>·</span>
          <span className="capitalize">
            {product.category.replace(/-/g, " ")}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-primary">
              {price}
            </p>
          </div>
          {/* <Button
            size="icon"
            className="h-9 w-9 shrink-0 rounded-xl"
            aria-label={`Add ${product.title} to cart`}
            onClick={() => {
              // addToCart(product);
              // toast.success("Added to cart");
            }}
          >
            <FiShoppingCart className="h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </article>
  );
}
