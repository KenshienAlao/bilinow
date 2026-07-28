import { cn } from "@/lib/utils";
import type { CATEGORY_GROUPS } from "@/config/product.config";

type Group = (typeof CATEGORY_GROUPS)[number];

export function SubcategoryFilter({
  group,
  activeSubcategory,
  onSelect,
}: {
  group?: Group;
  activeSubcategory?: string;
  onSelect: (subcategory: string) => void;
}) {
  if (!group || group.categories.length <= 1) return null;

  return (
    <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">
      {group.categories.map((cat) => (
        <button
          type="button"
          key={cat}
          onClick={() => onSelect(cat)}
          className={cn(
            "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors hover:cursor-pointer",
            activeSubcategory === cat
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          )}
        >
          {cat.replace(/-/g, " ")}
        </button>
      ))}
    </div>
  );
}
