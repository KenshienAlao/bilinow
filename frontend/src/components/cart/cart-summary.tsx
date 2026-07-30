import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface props {
  cartLength: number;
  effective: number[];
  total: number;
}

export function CartSummary({ cartLength, effective, total }: props) {
  const router = useRouter();
  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <h2 className="text-base font-semibold">Order summary</h2>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Items in cart</dt>
            <dd className="font-medium">{cartLength}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-muted-foreground">Selected items</dt>
            <dd className="font-medium">{effective.length}</dd>
          </div>
          <div className="flex justify-between border-t border-border pt-3 text-base">
            <dt className="font-medium">Total</dt>
            <dd className="font-semibold text-primary">
              {new Intl.NumberFormat("en-PH", {
                style: "currency",
                currency: "PHP",
              }).format(total)}
            </dd>
          </div>
        </dl>
        <Button
          size="lg"
          className="mt-5 w-full rounded-xl"
          disabled={!effective.length}
          onClick={() => {
            router.push(`/checkout?items=${effective.join(",")}`);
          }}
        >
          Checkout selected
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Shipping & taxes calculated at checkout
        </p>
      </div>
    </aside>
  );
}
