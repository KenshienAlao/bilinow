import type { CATEGORY_GROUPS } from "@/config/product.config";

type Group = (typeof CATEGORY_GROUPS)[number];

export function QueryHeader({ group, q }: { group?: Group; q: string }) {
  if (group) {
    return (
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {group.title}
        </h1>
        {group.subtitle && (
          <p className="mt-2 text-lg text-muted-foreground">{group.subtitle}</p>
        )}
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {q ? `Results for "${q}"` : "All Products"}
      </h1>
    </div>
  );
}
