"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProductInfo } from "@/model/product";
import { finalPrice, formatPrice } from "@/lib/shop";
import { useToggleCart } from "@/hooks/use-togglecart";
import { FiShoppingCart, FiCheck, FiStar } from "react-icons/fi";
import { QuantityStepper } from "@/components/product/quantitystepper";

interface ProductInfoSectionProps {
  inCart: boolean;
  product: ProductInfo;
}

export function ProductInfoSection({
  product,
  inCart,
}: ProductInfoSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const toggleCart = useToggleCart();

  const price = finalPrice(product);
  const inStock = product.stock > 0;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        {product.brand && <Badge variant="secondary">{product.brand}</Badge>}
        <Badge variant="outline" className="capitalize">
          {product.category.replace(/-/g, " ")}
        </Badge>
      </div>

      <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {product.title}
      </h1>

      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-1.5">
          <FiStar className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{product.rating?.toFixed(1)}</span>
          <span className="text-muted-foreground">
            ({product.reviews?.length ?? 0} reviews)
          </span>
        </span>
        <span
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium",
            inStock
              ? "bg-success/15 text-success"
              : "bg-destructive/10 text-destructive",
          )}
        >
          {inStock ? `In stock · ${product.stock} left` : "Out of stock"}
        </span>
      </div>

      <div className="mt-5 flex items-end gap-3">
        <p className="text-3xl font-semibold text-primary">
          {formatPrice(price)}
        </p>
        {product.discountPercentage >= 1 && (
          <>
            <p className="text-base text-muted-foreground line-through">
              {formatPrice(product.price)}
            </p>
            <Badge className="bg-destructive text-destructive-foreground">
              -{Math.round(product.discountPercentage)}%
            </Badge>
          </>
        )}
      </div>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {product.description}
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <QuantityStepper
          value={quantity}
          max={product.stock || 99}
          onChange={setQuantity}
        />
        <button
          type="button"
          onClick={() => toggleCart(product.id, inCart)}
          className={cn(
            "inline-flex h-9 items-center gap-2 rounded-xl border border-border px-3 text-sm font-medium transition-colors",
            inCart
              ? "border-primary/30 text-primary"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {inCart ? (
            <FiCheck className="h-4 w-4" />
          ) : (
            <FiShoppingCart className="h-4 w-4" />
          )}
          {inCart ? "In cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

