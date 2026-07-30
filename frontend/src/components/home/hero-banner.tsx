"use client";

import { useProfile } from "@/hooks/use-profile";
import { SearchBar } from "@/components/home/searchbar";
import { Skeleton } from "../ui/skeleton";

export function HeroBanner() {
  const { data: profile, isPending: profilePending } = useProfile();

  return (
    <section className="overflow-hidden rounded-3xl border border-border gradient-soft p-6 sm:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-medium text-primary">
          Welcome back,{" "}
          {profilePending ? (
            <Skeleton className="h-3 w-16" />
          ) : (
            profile?.firstName
          )}
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
    </section>
  );
}
