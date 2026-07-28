import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type AuthLayoutProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  contentWidth?: number;
  backgroundImg?: string;
  quote: string;
};

export function AuthLayout({
  children,
  title,
  subtitle,
  contentWidth = 440,
  backgroundImg,
  quote,
}: AuthLayoutProps) {
  const hasImagePanel = Boolean(backgroundImg);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div
        className={
          hasImagePanel ? "grid min-h-screen lg:grid-cols-2" : "min-h-screen"
        }
      >
        {hasImagePanel && (
          <div className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between">
            <Image
              src={backgroundImg!}
              alt="BiliNow illustration"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.16 0.03 265 / 0.55) 0%, oklch(0.16 0.03 265 / 0.05) 30%, oklch(0.16 0.03 265 / 0.05) 60%, oklch(0.16 0.03 265 / 0.65) 100%)",
              }}
            />
            <svg
              aria-hidden
              className="pointer-events-none absolute -right-px top-0 h-full"
              style={{
                width: 64,
                filter: "drop-shadow(-1px 0 2px oklch(0.16 0.03 265 / 0.12))",
              }}
              viewBox="0 0 56 100"
              preserveAspectRatio="none"
            >
              <path
                d="M28,0 C64,18 64,32 28,50 C-8,68 -8,82 28,100 L56,100 L56,0 Z"
                fill="var(--background)"
              />
            </svg>

            <div className="relative z-10 p-10">
              <Link href="/" className="flex items-center gap-2">
                <span className="grid h-13 w-13 place-items-center">
                  <Image
                    src="/favicon.png"
                    alt="BiliNow logo"
                    width={50}
                    height={50}
                    className="h-auto w-auto"
                    priority
                  />
                </span>
                <span className="text-4xl font-black tracking-tight text-foreground">
                  Bili<span className="text-primary">Now</span>
                </span>
              </Link>
            </div>

            <div className="relative z-10 p-10">
              <p className="max-w-md text-sm leading-relaxed text-white/80">
                {quote}
              </p>
            </div>
          </div>
        )}

        <div className="relative flex flex-col">
          <div
            className={
              hasImagePanel
                ? "flex items-center justify-between px-6 py-5 lg:hidden"
                : "flex items-center justify-between border-b border-border px-6 py-6 sm:px-10"
            }
          >
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
          </div>

          <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10">
            <div className="w-full" style={{ maxWidth: contentWidth }}>
              <div className="mb-8 space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {title}
                </h1>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </div>
              {children}
            </div>
          </div>

          <div
            className="px-6 pb-6 text-center text-xs text-muted-foreground sm:px-10"
            suppressHydrationWarning
          >
            &copy; {new Date().getFullYear()} BiliNow. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
