"use client";

import { useState } from "react";
import { useProduct } from "@/hooks/use-product";
import { PAGE_SIZE } from "@/config/product.config";
import { ProductCarousel } from "@/components/home/product-carousel";
import type { ProductInfo } from "@/model/product";

function shuffle<T>(array: T[], seed: number): T[] {
  let m = array.length,
    t,
    i;
  let currentSeed = seed;
  const random = () => {
    const x = Math.sin(currentSeed++) * 10000;
    return x - Math.floor(x);
  };
  const result = [...array];
  while (m) {
    i = Math.floor(random() * m--);
    t = result[m];
    result[m] = result[i];
    result[i] = t;
  }
  return result;
}

export function RecommendedCarousel() {
  const [seed] = useState(() => Math.floor(Math.random() * 100000) + 1);

  const { data: product, isLoading } = useProduct({ limit: PAGE_SIZE });

  const recommended: ProductInfo[] = product
    ? shuffle(product.products, seed)
    : [];

  return (
    <ProductCarousel
      title="Recommended for you"
      subtitle="Products picked just for you."
      products={recommended}
      isLoading={isLoading}
    />
  );
}
