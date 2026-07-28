"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProductInfo } from "@/model/product";
import { finalPrice, formatPrice, useIsWishlisted } from "@/lib/shop";
import { useToggleWishlist } from "@/hooks/use-togglewishlist";
import { FiHeart, FiPackage, FiShield, FiStar, FiTruck } from "react-icons/fi";
import { QuantityStepper } from "@/components/product/quantitystepper";

interface ProductInfoSectionProps {
  product: ProductInfo;
}

export function ProductInfoSection({ product }: ProductInfoSectionProps) {
  const [quantity, setQuantity] = useState(1);
  const wished = useIsWishlisted(product.id);
  const toggleWishlist = useToggleWishlist();

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
          <FiStar className="h-4 w-4 fill-warning text-warning" />
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

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          {
            icon: FiTruck,
            text: product.shippingInformation ?? "Ships in 2–4 days",
          },
          {
            icon: FiShield,
            text: product.warrantyInformation ?? "1 year warranty",
          },
          {
            icon: FiPackage,
            text: product.returnPolicy ?? "30 days return policy",
          },
        ].map((f) => (
          <div
            key={f.text}
            className="flex items-center gap-2 rounded-2xl border border-border bg-card px-3 py-2.5"
          >
            <f.icon className="h-4 w-4 shrink-0 text-primary" />
            <span className="min-w-0 truncate text-xs text-muted-foreground">
              {f.text}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <QuantityStepper
          value={quantity}
          max={product.stock || 99}
          onChange={setQuantity}
        />
        <button
          type="button"
          onClick={() => toggleWishlist(product.id, wished)}
          className={cn(
            "inline-flex h-9 items-center gap-2 rounded-xl border border-border px-3 text-sm font-medium transition-colors",
            wished
              ? "border-destructive/30 text-destructive"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <FiHeart className={cn("h-4 w-4", wished && "fill-destructive")} />
          {wished ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}
