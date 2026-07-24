import { ArrowRight, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SECTION_ID } from "@/config/landing.config";

export function Hero() {
  return (
    <section
      id={SECTION_ID.HOME}
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-125 w-125 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -top-20 right-0 h-100 w-100 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Shop Online with <span className="text-gradient">BiliNow</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Buy your favorite products from trusted sellers across the
            Philippines. Enjoy secure payments, affordable prices, and fast
            delivery in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="gradient-primary h-12 gap-2 px-6 text-base font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative aspect-square w-full">
            <div className="absolute inset-8 rounded-[3rem] gradient-primary opacity-20 blur-2xl" />
            <Image
              src="/hero.png"
              alt="BiliNow shopping experience"
              width={1200}
              height={1200}
              className="relative h-full w-full object-contain"
              priority
            />

            <div className="absolute left-0 top-16 hidden animate-fade-in rounded-2xl border border-border bg-background/90 p-4 shadow-elegant backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Fast Delivery</p>
                  <p className="text-sm font-bold text-foreground">
                    Nationwide Shipping
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-0 hidden animate-fade-in rounded-2xl border border-border bg-background/90 p-4 shadow-elegant backdrop-blur-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">
                    Secure Checkout
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    Safe Online Payments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
