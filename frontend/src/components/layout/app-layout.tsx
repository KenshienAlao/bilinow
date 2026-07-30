"use client";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  FiHeart,
  FiHome,
  FiPackage,
  FiSettings,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useProfile } from "@/hooks/use-profile";

const NAV = [
  { to: "/home", label: "Home", icon: FiHome, exact: true },
  { to: "/wishlist", label: "Wishlist", icon: FiHeart },
  { to: "/cart", label: "Cart", icon: FiShoppingCart },
  { to: "/orders", label: "Orders", icon: FiPackage },
  { to: "/profile", label: "Profile", icon: FiUser },
  { to: "/settings", label: "Settings", icon: FiSettings },
] as const;

const MOBILE_NAV = NAV.filter((n) =>
  ["/home", "/wishlist", "/cart", "/profile"].includes(n.to),
);

type props = {
  children: ReactNode;
};

export function AppShell({ children }: props) {
  const pathname = usePathname();
  const { data: user } = useProfile();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center">
              <Image
                src="/favicon.png"
                alt="BiliNow logo"
                width={50}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </span>
            <span className="text-xl font-black tracking-tight text-foreground">
              Bili<span className="text-primary">Now</span>
            </span>
          </div>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => {
              const isActive =
                "exact" in item && item.exact
                  ? pathname === item.to
                  : pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  href={item.to}
                  className={cn(
                    "relative flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                  )}
                >
                  <span className="relative">
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative grid h-9 w-9 place-items-center rounded-xl border border-border text-muted-foreground"
            >
              <FiShoppingCart className="h-4 w-4" />
            </Link>
            <Link
              href="/profile"
              aria-label="Profile"
              className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-accent text-xs font-semibold text-accent-foreground"
            >
              {user?.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.firstName}
                  width={100}
                  height={100}
                  priority
                  className="h-full w-full object-cover"
                />
              ) : (
                user?.firstName.charAt(0)
              )}
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-16">
        {children}
      </main>

      <nav
        aria-label="Mobile"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur lg:hidden"
      >
        <div className="mx-auto grid max-w-lg grid-cols-4 place-items-center">
          {MOBILE_NAV.map((item) => {
            const isActive =
              "exact" in item && item.exact
                ? pathname === item.to
                : pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                href={item.to}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-2.5 text-center text-[11px] font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="relative">
                  <item.icon className="h-5 w-5" />
                </span>
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
