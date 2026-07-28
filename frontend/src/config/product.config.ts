import { FaTruck } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { FiRotateCcw } from "react-icons/fi";

export const PAGE_SIZE = 10;

export const CATEGORY_GROUPS = [
  {
    id: "electronics",
    title: "Electronics",
    subtitle: "Phones, laptops & tablets",
    categories: ["smartphones", "laptops", "tablets", "mobile-accessories"],
  },
  {
    id: "fashion",
    title: "Fashion",
    subtitle: "Clothing, shoes & accessories",
    categories: [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "tops",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
      "sunglasses",
    ],
  },
  {
    id: "beauty",
    title: "Beauty",
    subtitle: "Skincare, makeup & fragrances",
    categories: ["beauty", "skin-care", "fragrances"],
  },
  {
    id: "home-living",
    title: "Home & Living",
    subtitle: "Furniture & home essentials",
    categories: ["furniture", "home-decoration", "kitchen-accessories"],
  },
  {
    id: "sports",
    title: "Sports & Outdoors",
    subtitle: "Sports and riding gear",
    categories: ["sports-accessories", "motorcycle"],
  },
  {
    id: "automotive",
    title: "Automotive",
    subtitle: "Vehicles & accessories",
    categories: ["vehicle"],
  },
  {
    id: "groceries",
    title: "Groceries",
    subtitle: "Food & everyday essentials",
    categories: ["groceries"],
  },
];

export const PERKS = [
  {
    icon: FaTruck,
    title: "Fast Delivery",
    text: "Delivered to your doorstep",
  },
  {
    icon: FaShield,
    title: "Secure Checkout",
    text: "Shop with confidence",
  },
  {
    icon: FiRotateCcw,
    title: "Easy Returns",
    text: "Hassle-free returns",
  },
];
