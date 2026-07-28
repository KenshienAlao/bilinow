"use client";

import { useProfile } from "@/hooks/use-profile";
import { PERKS } from "@/config/product.config";
import { SearchBar } from "@/components/home/searchbar";

export function HeroBanner() {
  const { data: profile } = useProfile();

  return (
    <section className="overflow-hidden rounded-3xl border border-border gradient-soft p-6 sm:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary">
          Welcome back, {profile?.firstName}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Find what you&apos;re looking for.
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Browse products from different categories, search for items, save your
          favorites, and add products to your cart.
        </p>
        <div className="mt-6 max-w-xl">
          <SearchBar size="lg" />
        </div>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {PERKS.map((perk) => (
          <div
            key={perk.title}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-4 py-3"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <perk.icon className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium">
                {perk.title}
              </span>
              <span className="block truncate text-xs text-muted-foreground">
                {perk.text}
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
