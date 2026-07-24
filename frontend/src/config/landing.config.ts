import { BiSolidZap } from "react-icons/bi";
import {
  FaBookOpen,
  FaDumbbell,
  FaGamepad,
  FaHandshake,
  FaLock,
  FaSearch,
  FaShoppingBasket,
  FaShoppingCart,
  FaStar,
  FaTruck,
} from "react-icons/fa";
import { FaHouseChimney, FaShield, FaShirt } from "react-icons/fa6";

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
    icon: FaSearch,
    title: "Browse Products",
    desc: "Find products from different categories and choose what you need.",
  },
  {
    icon: FaShoppingCart,
    title: "Add to Cart",
    desc: "Add your favorite products to your cart and review them anytime.",
  },
  {
    icon: FaLock,
    title: "Secure Checkout",
    desc: "Complete your order safely with secure payment options.",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    desc: "Track your order and receive it at your doorstep.",
  },
];

export const CATEGORIES = [
  {
    icon: FaShirt,
    name: "Fashion",
    tag: "Wear it well",
    image: "/fashion.png" as string,
  },
  {
    icon: FaStar,
    name: "Beauty",
    tag: "Everyday glow",
    image: "/beauty.png" as string,
  },
  {
    icon: FaHouseChimney,
    name: "Home & Living",
    tag: "Made for home",
    image: "/home.png" as string,
  },
  {
    icon: FaShoppingBasket,
    name: "Groceries",
    tag: "Fresh picks",
    image: "/groceries.png" as string,
  },
  {
    icon: FaGamepad,
    name: "Gaming",
    tag: "Play more",
    image: "/gaming.png" as string,
  },
  {
    icon: FaDumbbell,
    name: "Sports",
    tag: "Move daily",
    image: "/sports.png" as string,
  },
  {
    icon: FaBookOpen,
    name: "Books",
    tag: "Quiet hours",
    image: "/books.png" as string,
  },
];

export const PILLARS = [
  {
    icon: FaStar,
    title: "Simple to Use",
    desc: "Browse products, add items to your cart, and shop with an easy-to-use interface.",
  },
  {
    icon: FaShield,
    title: "Secure Checkout",
    desc: "Designed with secure authentication and safe online payment support.",
  },
  {
    icon: BiSolidZap,

    title: "Fast Performance",
    desc: "Built with modern web technologies for a smooth and responsive experience.",
  },
  {
    icon: FaHandshake,
    title: "Made for Everyone",
    desc: "A clean and user-friendly design that makes online shopping simple.",
  },
];

export const FAQS = [
  {
    q: "What is BiliNow?",
    a: "BiliNow is a modern e-commerce web application built as a portfolio project. It demonstrates a complete online shopping experience using modern web technologies.",
  },
  {
    q: "Can I browse products?",
    a: "Yes. You can browse products by category, search for items, and view product details. Product data is provided by DummyJSON for demonstration purposes.",
  },
  {
    q: "Does it support secure login?",
    a: "Yes. The backend is built with Spring Boot and Spring Security. It uses JWT authentication, BCrypt password hashing, HTTP-only cookies, refresh tokens, CORS configuration, and protected API routes to provide secure user authentication.",
  },
  {
    q: "What database does BiliNow use?",
    a: "BiliNow uses Supabase (PostgreSQL) to store user accounts, shopping carts, and other application data.",
  },
  {
    q: "Can I place an order?",
    a: "Yes. The application includes a complete shopping cart and checkout flow to demonstrate a real e-commerce experience.",
  },
  {
    q: "What technologies were used?",
    a: "BiliNow is built with Next.js, TypeScript, Tailwind CSS, TanStack Query, Spring Boot, Supabase (PostgreSQL), and DummyJSON for mock product data.",
  },
];
