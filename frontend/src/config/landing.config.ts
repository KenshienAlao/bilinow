import {
  BookOpen,
  Dumbbell,
  Gamepad2,
  HeartHandshake,
  Lock,
  Package,
  Search,
  ShieldCheck,
  Shirt,
  ShoppingBasket,
  ShoppingCart,
  Sofa,
  Sparkles,
  Zap,
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

export const PILLARS = [
  {
    icon: Sparkles,
    title: "Simple to Use",
    desc: "Browse products, add items to your cart, and shop with an easy-to-use interface.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    desc: "Designed with secure authentication and safe online payment support.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    desc: "Built with modern web technologies for a smooth and responsive experience.",
  },
  {
    icon: HeartHandshake,
    title: "Made for Everyone",
    desc: "A clean and user-friendly design that makes online shopping simple.",
  },
];
