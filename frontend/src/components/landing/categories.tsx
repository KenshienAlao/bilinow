import { CATEGORIES } from "@/config/landing.config";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-4 md:grid-rows-3 md:auto-rows-32.5">
          <Link
            href="/"
            className="group relative col-span-1 row-span-1 min-h-70 overflow-hidden rounded-3xl shadow-elegant transition-transform hover:-translate-y-1 sm:col-span-2 sm:row-span-2 sm:min-h-0 md:col-span-2 md:row-span-2"
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
            <FaArrowRight className="absolute right-5 top-5 h-5 w-5 text-white opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex flex-row items-center gap-3 p-4 sm:flex-col sm:items-start sm:justify-between sm:gap-6 sm:p-6">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-primary/5 ring-1 ring-primary/10 transition-all duration-300 group-hover:bg-primary/10 group-hover:ring-primary/20 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="56px"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:text-base">
                    {c.name}
                  </h3>
                  <p className="mt-0.5 truncate text-xs font-medium text-muted-foreground/80 sm:text-sm">
                    {c.tag}
                  </p>
                </div>
                <FaArrowRight className="h-4 w-4 shrink-0 text-primary/50 transition-all duration-300 group-hover:text-primary sm:absolute sm:right-5 sm:top-5 sm:opacity-0 sm:group-hover:translate-x-0.5 sm:group-hover:-translate-y-0.5 sm:group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
