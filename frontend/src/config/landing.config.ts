import {
  BookOpen,
  Dumbbell,
  Gamepad2,
  Lock,
  Package,
  Search,
  Shirt,
  ShoppingBasket,
  ShoppingCart,
  Sofa,
  Sparkles,
} from "lucide-react";

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
    desc: "Find products from different categories and choose what you need.",
  },
  {
    icon: ShoppingCart,
    title: "Add to Cart",
    desc: "Add your favorite products to your cart and review them anytime.",
  },
  {
    icon: Lock,
    title: "Secure Checkout",
    desc: "Complete your order safely with secure payment options.",
  },
  {
    icon: Package,
    title: "Fast Delivery",
    desc: "Track your order and receive it at your doorstep.",
  },
];

export const CATEGORIES = [
  {
    icon: Shirt,
    name: "Fashion",
    tag: "Wear it well",
    image: "/fashion.png" as string,
  },
  {
    icon: Sparkles,
    name: "Beauty",
    tag: "Everyday glow",
    image: "/beauty.png" as string,
  },
  {
    icon: Sofa,
    name: "Home & Living",
    tag: "Made for home",
    image: "/home.png" as string,
  },
  {
    icon: ShoppingBasket,
    name: "Groceries",
    tag: "Fresh picks",
    image: "/groceries.png" as string,
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    tag: "Play more",
    image: "/gaming.png" as string,
  },
  {
    icon: Dumbbell,
    name: "Sports",
    tag: "Move daily",
    image: "/sports.png" as string,
  },
  {
    icon: BookOpen,
    name: "Books",
    tag: "Quiet hours",
    image: "/books.png" as string,
  },
];
