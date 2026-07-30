"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchProductById } from "@/hooks/use-product";
import { formatPrice } from "@/lib/shop";
import Image from "next/image";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";
import { ROUTES } from "@/config/routes.config";

interface CartItemProps {
  id: number;
  selected: boolean;
  onSelect: (checked: boolean) => void;
  onRemove: () => void;
}

export function CartItem({ id, selected, onSelect, onRemove }: CartItemProps) {
  const { data: product, isLoading } = useSearchProductById(id);

  if (isLoading || !product) {
    return (
      <div className="flex h-24 animate-pulse items-center gap-4 rounded-xl border border-border bg-card p-3">
        <div className="h-16 w-16 shrink-0 rounded-lg bg-secondary" />
        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 rounded bg-secondary" />
          <div className="h-4 w-1/4 rounded bg-secondary" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/20">
      <Checkbox
        checked={selected}
        onCheckedChange={(checked) => onSelect(checked as boolean)}
        aria-label={`Select ${product.title}`}
      />

      <Link
        href={`${ROUTES.PRODUCT}/${product.id}`}
        className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-secondary/50"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain p-1"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <Link
          href={`${ROUTES.PRODUCT}/${product.id}`}
          className="truncate text-sm font-medium hover:text-primary"
        >
          {product.title}
        </Link>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="font-semibold text-primary">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onRemove}
        className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
        aria-label="Remove item"
      >
        <FiTrash2 className="h-4 w-4" />
      </button>
    </div>
  );
}
