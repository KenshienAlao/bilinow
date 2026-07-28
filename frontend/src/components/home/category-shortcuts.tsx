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
      <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
        Shop by category
      </h2>
      <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
        {CATEGORY_GROUPS.map((group) => {
          const Icon = SHORTCUT_ICONS[group.id];
          return (
            <Link
              key={group.id}
              href={{ pathname: "/q", query: { category: group.id } }}
              className="group flex w-33 shrink-0 flex-col items-center gap-3 rounded-2xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft sm:w-auto"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:gradient-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium leading-tight">
                {group.title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
