"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProductInfo } from "@/model/product";
import Image from "next/image";

interface ProductImageGalleryProps {
  product: ProductInfo;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const [activeImage, setActiveImage] = useState(0);
  const images = product.images?.length ? product.images : [product.thumbnail];

  return (
    <div>
      <div className="overflow-hidden rounded-3xl border border-border bg-secondary/40">
        <Image
          src={images[activeImage]}
          alt={product.title}
          width={800}
          height={800}
          loading="lazy"
          className="aspect-square w-full object-contain p-8"
        />
      </div>
      {images.length > 1 && (
        <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveImage(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-card p-2 transition-all",
                i === activeImage
                  ? "border-primary ring-4 ring-primary/10"
                  : "border-border hover:border-primary/30",
              )}
            >
              <Image
                src={src}
                alt=""
                width={80}
                height={80}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
