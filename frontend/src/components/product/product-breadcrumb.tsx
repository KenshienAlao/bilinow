import Link from "next/link";
import { ROUTES } from "@/config/routes.config";
import { CATEGORY_GROUPS } from "@/config/product.config";
import { FiChevronRight } from "react-icons/fi";
import { ProductInfo } from "@/model/product";

interface ProductBreadcrumbProps {
  product: ProductInfo;
}

export function ProductBreadcrumb({ product }: ProductBreadcrumbProps) {
  const parentGroup = CATEGORY_GROUPS.find((g) =>
    g.categories.includes(product.category),
  );

  const searchUrl = parentGroup
    ? `${ROUTES.SEARCH}?category=${parentGroup.id}&subcategory=${product.category}`
    : `${ROUTES.SEARCH}?category=${product.category}`;

  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground"
    >
      <Link
        href={ROUTES.HOME}
        className="transition-colors hover:text-foreground"
      >
        Home
      </Link>
      <FiChevronRight className="h-3.5 w-3.5" />
      <Link
        href={searchUrl}
        className="capitalize transition-colors hover:text-foreground"
      >
        {product.category.replace(/-/g, " ")}
      </Link>
      <FiChevronRight className="h-3.5 w-3.5" />
      <span className="truncate text-foreground">{product.title}</span>
    </nav>
  );
}
