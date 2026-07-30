"use client";

import { AppShell } from "@/components/layout/app-layout";
import { useSearchProductById, useProduct } from "@/hooks/use-product";
import { ProductCarousel } from "@/components/home/product-carousel";
import { ProductDetailSkeleton } from "@/components/product/product-detail-skeleton";
import { ProductDetailError } from "@/components/product/product-detail-error";
import { ProductBreadcrumb } from "@/components/product/product-breadcrumb";
import { ProductImageGallery } from "@/components/product/product-image-gallery";
import { ProductInfoSection } from "@/components/product/product-info-section";
import { useIsInCart } from "@/lib/shop";

interface Props {
  productId: number;
}

export function ProductDetailContent({ productId }: Props) {
  const { data: product, isLoading, isError } = useSearchProductById(productId);

  const { data: related } = useProduct({
    category: product?.category,
    limit: 12,
  });

  const { inCart, isCartLoading } = useIsInCart(product?.id);

  const relatedProducts = (related?.products ?? [])
    .filter((p) => p.id !== productId)
    .slice(0, 10);

  if (isLoading || isCartLoading) return <ProductDetailSkeleton />;
  if (isError || !product) return <ProductDetailError />;

  return (
    <AppShell>
      <ProductBreadcrumb product={product} />
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <ProductImageGallery product={product} />
        <ProductInfoSection product={product} inCart={inCart} />
      </div>
      {relatedProducts.length > 0 && (
        <div className="mt-14">
          <ProductCarousel
            title="Related products"
            subtitle="More from this category"
            products={relatedProducts}
          />
        </div>
      )}
    </AppShell>
  );
}
