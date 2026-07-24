import { Lock, Package, Search, ShoppingCart } from "lucide-react";

export const LANDING_NAVLINKS = [
  { href: "#home", label: "Home" },
  { href: "#how", label: "How It Works" },
  { href: "#categories", label: "Categories" },
  { href: "#why", label: "Why BiliNow" },
  { href: "#faq", label: "FAQ" },
];

export const SECTION_ID = {
  HOME: "home",
  HOW: "how",
  CATEGORIES: "categories",
  WHY: "why",
  FAQ: "faq",
};

export const STEPS = [
  {
    icon: Search,
    title: "Browse Products",
    desc: "Discover curated items across every category, from daily essentials to hard-to-find pieces.",
  },
  {
    icon: ShoppingCart,
    title: "Add to Cart",
    desc: "One tap and it's yours. Save favorites, compare, and decide on your own time.",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    desc: "Bank-grade encryption on every transaction. Pay the way you already prefer.",
  },
  {
    icon: Package,
    title: "Fast Delivery",
    desc: "Track your order in real time, from warehouse to the moment it lands at your door.",
  },
];
