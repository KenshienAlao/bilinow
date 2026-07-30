import { Suspense } from "react";
import { ProductDetailContent } from "@/components/product/product-detail-content";

type Props = {
  params: Promise<{ productId: number }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { productId } = await params;

  return (
    <Suspense>
      <ProductDetailContent productId={Number(productId)} />
    </Suspense>
  );
}
