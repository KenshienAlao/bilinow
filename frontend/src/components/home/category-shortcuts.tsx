import Link from "next/link";
import { CATEGORY_GROUPS } from "@/config/product.config";
import {
  FaDumbbell,
  FaLaptop,
  FaStar,
  FaShoppingBasket,
  FaCar,
} from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { GiSofa } from "react-icons/gi";
import { ROUTES } from "@/config/routes.config";

const SHORTCUT_ICONS: Record<string, React.ElementType> = {
  electronics: FaLaptop,
  fashion: FaShirt,
  beauty: FaStar,
  "home-living": GiSofa,
  sports: FaDumbbell,
  automotive: FaCar,
  groceries: FaShoppingBasket,
};

export function CategoryShortcuts() {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold tracking-tight">Shop by category</h2>

      <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
        {CATEGORY_GROUPS.map((group) => {
          const Icon = SHORTCUT_ICONS[group.id];

          return (
            <Link
              key={group.id}
              href={{ pathname: ROUTES.SEARCH, query: { category: group.id } }}
              className="group flex w-20 shrink-0 flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 transition-all duration-200 hover:border-primary/20 hover:bg-accent/40 sm:w-auto"
            >
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </div>

              <span className="text-center text-xs font-medium text-foreground">
                {group.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
