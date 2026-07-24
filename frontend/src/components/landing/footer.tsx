"use client";
import { Button } from "@/components/ui/button";
import { CONTACTS } from "@/config/contacts.config";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how" },
  { label: "Categories", href: "#categories" },
  { label: "FAQ", href: "#faq" },
];

const CATEGORIES = ["Fashion", "Beauty", "Home & Living", "Gaming", "Sports"];

const SOCIALS = [
  { Icon: FaGithub, label: "GitHub", href: CONTACTS.github },
  { Icon: FaFacebook, label: "Facebook", href: CONTACTS.facebook },
  { Icon: FaLinkedin, label: "LinkedIn", href: CONTACTS.linkedin },
] as const;

export function Footer() {
  return (
    <footer
      className="border-t border-border"
      style={{ background: "var(--foreground)", color: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-0 lg:px-8">
        <div
          className="rounded-2xl p-6 sm:p-10"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-md">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "oklch(0.99 0.005 265 / 0.6)" }}
              >
                Open source
              </p>
              <h3
                className="mt-1 text-2xl font-black tracking-tight sm:text-3xl"
                style={{ color: "var(--primary-foreground)" }}
              >
                Explore BiliNow
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "oklch(0.99 0.005 265 / 0.75)" }}
              >
                A full-stack e-commerce demo — secure auth, cart, checkout, and
                responsive design.
              </p>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-fit shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
              style={{
                borderColor: "oklch(0.99 0.005 265 / 0.35)",
                background: "oklch(0.99 0.005 265 / 0.08)",
                color: "var(--primary-foreground)",
              }}
            >
              <Link
                href={`${CONTACTS.github}/bilinow`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 h-4 w-4" />
                View source
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-lg"
                style={{ background: "oklch(0.99 0.005 265 / 0.08)" }}
              >
                <Image
                  src="/favicon.png"
                  alt="BiliNow logo"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                  priority
                />
              </span>
              <span
                className="text-lg font-black tracking-tight"
                style={{ color: "var(--background)" }}
              >
                Bili
                <span style={{ color: "var(--primary-glow)" }}>Now</span>
              </span>
            </Link>

            <p
              className="mt-4 max-w-xs text-sm leading-relaxed"
              style={{ color: "oklch(0.99 0.005 265 / 0.55)" }}
            >
              Modern e-commerce for effortless shopping. Millions of products,
              secure checkout, delivered fast.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-full border border-background/15 text-background/55 transition-colors hover:bg-background/10 hover:text-background"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol title="Quick links">
            {NAV_LINKS.map(({ label, href }) => (
              <FooterLink key={label} href={href}>
                {label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Categories">
            {CATEGORIES.map((cat) => (
              <FooterLink key={cat} href="#categories">
                {cat}
              </FooterLink>
            ))}
          </FooterCol>
          <FooterCol title="Contact">
            <li className="flex items-start gap-2.5">
              <SiGmail
                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                style={{ color: "var(--primary-glow)" }}
              />
              <span
                className="break-all text-sm"
                style={{ color: "oklch(0.99 0.005 265 / 0.55)" }}
              >
                {CONTACTS.gmail}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <FaPhone
                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                style={{ color: "var(--primary-glow)" }}
              />
              <span
                className="text-sm"
                style={{ color: "oklch(0.99 0.005 265 / 0.55)" }}
              >
                {CONTACTS.phone}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <FaMapLocation
                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                style={{ color: "var(--primary-glow)" }}
              />
              <span
                className="text-sm"
                style={{ color: "oklch(0.99 0.005 265 / 0.55)" }}
              >
                {CONTACTS.location}
              </span>
            </li>
          </FooterCol>
        </div>
        <div
          className="mt-12 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderColor: "oklch(0.99 0.005 265 / 0.1)" }}
        >
          <p
            className="text-xs"
            style={{ color: "oklch(0.99 0.005 265 / 0.35)" }}
            suppressHydrationWarning
          >
            &copy; {new Date().getFullYear()} BiliNow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p
        className="text-xs font-semibold uppercase tracking-[0.15em]"
        style={{ color: "oklch(0.99 0.005 265 / 0.4)" }}
      >
        {title}
      </p>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-background/55 transition-colors hover:text-background"
      >
        {children}
      </a>
    </li>
  );
}
