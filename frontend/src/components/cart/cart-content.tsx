"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { finalPrice } from "@/lib/shop";
import { EmptyState } from "@/components/cart/empty-state";
import { CartItem } from "@/components/cart/cart-item";
import { FiShoppingCart, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import { ROUTES } from "@/config/routes.config";
import { CartSummary } from "@/components/cart/cart-summary";
import {
  useCartIds,
  useRemoveCart,
  useSearchProductsByIds,
} from "@/hooks/use-product";

export function CartContent() {
  const { data: cart } = useCartIds();
  const { mutate: removeCart } = useRemoveCart();
  const [selected, setSelected] = useState<number[]>([]);
  const cartLength = cart?.length ?? 0;

  const effective = selected.filter((id) => cart?.includes(id));
  const allSelected = cartLength > 0 && effective.length === cartLength;

  const handleSelectAll = (checked: boolean) => {
    if (!cart) return;
    setSelected(checked ? [...cart] : []);
  };

  const handleRemoveSelected = () => {
    effective.forEach((id) => removeCart(id));
    setSelected([]);
  };

  const { products } = useSearchProductsByIds(cart ?? []);

  const total = products
    .filter((p) => effective.includes(p.id))
    .reduce((sum, p) => sum + finalPrice(p), 0);

  if (cartLength === 0) {
    return (
      <EmptyState
        icon={<FiShoppingCart className="h-7 w-7" />}
        title="Your cart is empty"
        description="Browse products and add items to your cart."
        action={
          <Button asChild>
            <Link href={ROUTES.HOME}>Discover products</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3">
          <label className="flex items-center gap-3 text-sm font-medium">
            <Checkbox
              checked={allSelected}
              onCheckedChange={handleSelectAll}
              aria-label="Select all cart items"
            />
            Select all ({cartLength})
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={!effective.length}
              onClick={handleRemoveSelected}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-destructive disabled:opacity-40"
            >
              <FiTrash2 className="h-4 w-4" /> Remove selected
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {cart?.map((itemId) => (
            <CartItem
              key={itemId}
              id={itemId}
              selected={effective.includes(itemId)}
              onSelect={(checked) =>
                setSelected((s) =>
                  checked
                    ? [...new Set([...s, itemId])]
                    : s.filter((x) => x !== itemId),
                )
              }
              onRemove={() => {
                removeCart(itemId);
              }}
            />
          ))}
        </div>
      </div>

      <CartSummary
        cartLength={cartLength}
        effective={effective}
        total={total}
      />
    </div>
  );
}
