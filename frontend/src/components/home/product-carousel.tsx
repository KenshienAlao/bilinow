"use client";
import { useRef } from "react";
import { CarouselSkeleton } from "../ui/skeleton";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { ProductInfo } from "@/model/product";
import { ProductCard } from "./product-card";
import { ROUTES } from "@/config/routes.config";

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: ProductInfo[];
  isLoading?: boolean;
  viewAllTo?: { category?: string };
}

export function ProductCarousel({
  title,
  subtitle,
  products,
  isLoading,
  viewAllTo,
}: ProductCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold tracking-tight sm:text-xl">
            {title}
          </h2>
          {subtitle && (
            <p className="truncate text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {viewAllTo && (
            <Link
              href={{
                pathname: ROUTES.SEARCH,
                query: { category: viewAllTo.category ?? "" },
              }}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-accent"
            >
              View all
            </Link>
          )}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              aria-label={`Scroll ${title} left`}
              onClick={() => scrollBy(-1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={`Scroll ${title} right`}
              onClick={() => scrollBy(1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {isLoading ? (
        <CarouselSkeleton />
      ) : (
        <div
          ref={trackRef}
          className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2"
        >
          {products.map((product) => (
            <div
              key={`${title}-${product.id}`}
              className="w-45 shrink-0 snap-start sm:w-55"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
