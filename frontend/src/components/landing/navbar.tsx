"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { LANDING_NAVLINKS } from "@/config/landing.config";
import { CiMenuBurger } from "react-icons/ci";
import { FaX } from "react-icons/fa6";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    requestAnimationFrame(onScroll);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60 shadow-soft"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
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
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LANDING_NAVLINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" className="font-semibold">
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button
            asChild
            className="gradient-primary font-semibold text-primary-foreground shadow-soft hover:opacity-90"
          >
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? (
            <FaX className="h-5 w-5" />
          ) : (
            <CiMenuBurger className="h-5 w-5" />
          )}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden border-t border-border/60 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
          {LANDING_NAVLINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-2">
            <Button asChild variant="outline" className="font-semibold">
              <Link href="/signin">Sign in</Link>
            </Button>
            <Button
              asChild
              className="gradient-primary font-semibold text-primary-foreground"
            >
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
