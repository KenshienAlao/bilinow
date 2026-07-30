import { AppShell } from "@/components/layout/app-layout";
import { CartHeader } from "@/components/cart/cart-header";
import { CartContent } from "@/components/cart/cart-content";

export default function CartPage() {
  return (
    <AppShell>
      <CartHeader />
      <CartContent />
    </AppShell>
  );
}
