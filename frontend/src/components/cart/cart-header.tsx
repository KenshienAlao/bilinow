"use client";
import { useCartIds } from "@/hooks/use-product";

export function CartHeader() {
  const { data: cart } = useCartIds();
  const cartLength = cart?.length ?? 0;

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold tracking-tight">Cart</h1>
      {cartLength > 0 && (
        <p className="text-muted-foreground">
          {cartLength} item{cartLength > 1 ? "s" : ""} in your cart
        </p>
      )}
    </div>
  );
}
