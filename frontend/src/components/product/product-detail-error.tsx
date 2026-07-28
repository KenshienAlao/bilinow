import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/layout/app-layout";
import Link from "next/link";
import { ROUTES } from "@/config/routes.config";

export function ProductDetailError() {
  return (
    <AppShell>
      <div className="rounded-3xl border border-dashed border-border p-16 text-center">
        <h1 className="text-xl font-semibold">Product unavailable</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          We couldn&apos;t load this product. It may have been removed.
        </p>
        <Button asChild className="mt-6">
          <Link href={ROUTES.HOME}>Back to home</Link>
        </Button>
      </div>
    </AppShell>
  );
}
