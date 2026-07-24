import { PILLARS } from "@/config/landing.config";
import Image from "next/image";

export function WhyBiliNow() {
  return (
    <section id="why" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/blue-orb.png"
          alt=""
          aria-hidden
          priority
          width={1200}
          height={1200}
          className="absolute left-1/2 top-1/2 h-175 w-175 -translate-x-1/2 -translate-y-1/2 object-cover opacity-[0.18] mix-blend-screen mask-[radial-gradient(circle,black_30%,transparent_70%)]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Why Choose
            <span className="text-gradient"> BiliNow?</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            BiliNow is a modern e-commerce web application. It focuses on
            providing a simple, fast, and secure online shopping experience.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:gap-5 sm:grid-cols-2">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-5 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elegant"
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="grid h-11 w-11 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold tracking-widest text-primary/60">
                        0{i + 1}
                      </span>
                      <span className="h-px w-6 bg-primary/30" />
                    </div>
                    <h3 className="mt-2 text-base sm:text-lg font-bold text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-5 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Portfolio Project.
            </span>{" "}
            BiliNow was built to demonstrate modern full-stack web development
            using current tools and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
