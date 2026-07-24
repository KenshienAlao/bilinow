import { STEPS } from "@/config/landing.config";

export function HowItWorks() {
  return (
    <section id="how" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              How it works
            </span>
            <h2 className="mt-3 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              From "I want it" to
              <span className="text-gradient"> "it's here" </span>
              in four moves.
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              A checkout flow designed to disappear. Every step tuned to remove
              friction, so shopping feels less like a task and more like a
              breath.
            </p>
          </div>

          <ol className="relative space-y-6">
            <span
              aria-hidden
              className="absolute left-6 top-2 bottom-2 hidden w-px bg-linear-to-b from-primary/40 via-border to-transparent sm:block"
            />
            {STEPS.map((s, i) => {
              return (
                <li
                  key={s.title}
                  className="group relative rounded-3xl border border-border bg-card p-6 pl-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elegant sm:pl-20"
                >
                  <div className="mb-4 flex items-center gap-4 sm:absolute sm:left-0 sm:top-6 sm:mb-0 sm:-translate-x-1/2 sm:pl-6">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft ring-8 ring-background transition-transform group-hover:scale-110">
                      <s.icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono font-bold tracking-widest text-primary/60">
                      STEP {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-1 text-xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
