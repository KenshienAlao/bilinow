import { CATEGORIES } from "@/config/landing.config";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(var(--foreground) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Shop by category
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              A shelf for every corner of your life.
            </h2>
          </div>
          <Link
            href="/"
            className="story-link text-sm font-semibold text-primary"
          >
            Explore all categories
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:grid-rows-3 md:auto-rows-32.5">
          <Link
            href="/"
            className="group relative col-span-2 row-span-2 overflow-hidden rounded-3xl shadow-elegant transition-transform hover:-translate-y-1"
          >
            <Image
              src="/electronics.png"
              alt="electronics"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            <ArrowUpRight className="absolute right-5 top-5 h-5 w-5 text-white opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Featured
              </p>
              <h3 className="mt-1 text-3xl font-black leading-tight text-white">
                Electronics
              </h3>
              <p className="mt-2 max-w-xs text-sm text-white/75">
                Phones, laptops, audio and the accessories that finish the
                setup.
              </p>
            </div>
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.name}
              href="#"
              className="group relative overflow-hidden rounded-[2rem] border border-border/50 bg-background/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-primary opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/10 group-hover:ring-primary/20">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover drop-shadow-sm transition-transform duration-500"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground/80">
                    {c.tag}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
