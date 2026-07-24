"use client";
import { useState } from "react";
import { Plus, MessageCircle } from "lucide-react";
import { FAQS } from "@/config/landing.config";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-linear-to-b from-primary/4 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-base text-muted-foreground">
            Learn more about BiliNow, its features, and the technologies used to
            build it.
          </p>
        </div>

        <div className="mt-14 grid gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary/30 bg-card shadow-soft"
                    : "border-border bg-card/50 hover:border-primary/20 hover:bg-card"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:gap-4 sm:px-6 sm:py-5"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-2.5 sm:gap-4">
                    <span className="text-sm font-semibold text-foreground sm:text-lg">
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${
                      isOpen
                        ? "rotate-45 border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-primary"
                    }`}
                  >
                    <Plus
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                      strokeWidth={2.4}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 pl-10 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:pl-15 sm:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-border bg-card p-6 text-center sm:flex-row sm:p-8 sm:text-left">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
            <MessageCircle className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold text-foreground">
              Want to know more?
            </h3>

            <p className="text-sm text-muted-foreground">
              Feel free to contact me if you have questions about this project
              or would like to discuss my work.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
