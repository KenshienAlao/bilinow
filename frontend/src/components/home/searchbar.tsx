"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FiLoader, FiSearch, FiX } from "react-icons/fi";
import Image from "next/image";
import { ROUTES } from "@/config/routes.config";
import { useSearchProduct } from "@/hooks/use-product";
import { finalPrice, formatPrice } from "@/lib/shop";

export function SearchBar({
  autoFocus,
  initialValue = "",
  size = "md",
  className,
}: {
  autoFocus?: boolean;
  initialValue?: string;
  size?: "md" | "lg";
  className?: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const [debounced, setDebounced] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const { data: productSearched, isFetching } = useSearchProduct(debounced);
  const suggestions = (productSearched?.products ?? []).slice(0, 6);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value.trim()), 250);
    return () => clearTimeout(t);
  }, [value]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const search = (q: string) => {
    if (!q.trim()) return;
    setOpen(false);
    router.push(`${ROUTES.SEARCH}?q=${encodeURIComponent(q)}`);
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search(value.trim());
  };

  return (
    <div ref={wrapRef} className={cn("relative w-full", className)}>
      <form role="search" onSubmit={submit}>
        <label htmlFor="site-search" className="sr-only">
          Search products
        </label>
        <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted-foreground" />
        <input
          id="site-search"
          value={value}
          autoFocus={autoFocus}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search for products, brands and more"
          className={cn(
            "w-full rounded-2xl border border-border bg-card pl-11 pr-11 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary/50 focus:ring-4 focus:ring-primary/10",
            size === "lg" ? "h-14 text-base" : "h-11",
          )}
        />
        {value && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setValue("");
              setOpen(false);
            }}
            className="absolute right-3 top-1/2 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary"
          >
            <FiX className="h-4 w-4" />
          </button>
        )}
      </form>

      {open && debounced.length > 1 && (
        <div className="absolute inset-x-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-2xl border border-border bg-popover shadow-soft animate-fade-in-up">
          {isFetching && !suggestions.length ? (
            <div className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
              <FiLoader className="h-4 w-4 animate-spin" /> Searching…
            </div>
          ) : suggestions.length ? (
            <ul className="max-h-88 overflow-y-auto py-1.5">
              {suggestions.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`${ROUTES.PRODUCT}/${p.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-accent"
                  >
                    <Image
                      src={p.thumbnail}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      width={44}
                      height={44}
                      className="h-11 w-11 shrink-0 rounded-xl bg-secondary object-contain"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">
                        {p.title}
                      </span>
                      <span className="block truncate text-xs capitalize text-muted-foreground">
                        {p.category.replace(/-/g, " ")}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-primary">
                      {formatPrice(finalPrice(p))}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="border-t border-border">
                <button
                  type="button"
                  onClick={() => search(debounced)}
                  className="w-full px-4 py-3 text-left text-sm font-medium text-primary transition-colors hover:bg-accent"
                >
                  See all results for &ldquo;{debounced}&rdquo;
                </button>
              </li>
            </ul>
          ) : (
            <p className="p-4 text-sm text-muted-foreground">
              No matches for &ldquo;{debounced}&rdquo;.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
