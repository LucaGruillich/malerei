"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/lib/site";
import Logo from "./Logo";
import Button from "./Button";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  // Scrollen sperren, solange das mobile Menue offen ist
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Mit Escape schliessen und den Fokus zurueck auf den Schalter setzen.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="rounded-[var(--radius-xs)]"
          aria-label={`${site.name}, zur Startseite`}
        >
          <Logo />
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`link-underline text-[15px] transition-colors ${
                isActive(item.href)
                  ? "text-brand"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="text-[15px] font-medium text-ink hover:text-brand"
          >
            {site.phone}
          </a>
          <Button href="/kontakt" className="px-5 py-2.5">
            Angebot anfragen
          </Button>
        </div>

        {/* Direkter Anruf, auf dem Handy immer erreichbar */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${site.phoneHref}`}
            aria-label={`Anrufen: ${site.phone}`}
            className="inline-flex items-center justify-center rounded-[var(--radius-sm)] border border-line-strong p-2.5 text-ink hover:border-brand hover:text-brand"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 3h3l1.2 3.3-1.6 1.2a9 9 0 0 0 3.9 3.9l1.2-1.6L15 14v3a1 1 0 0 1-1.1 1A12 12 0 0 1 3 4.1 1 1 0 0 1 4 3Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          {/* Mobiler Menue-Schalter */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-line-strong px-3 py-2 text-sm font-medium"
          >
          <span className="sr-only">Menü</span>
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            {open ? (
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 5h14M2 9h14M2 13h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
            Menü
          </button>
        </div>
      </div>

      {/* Mobiles Menue */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-line bg-canvas lg:hidden"
        >
          <nav
            aria-label="Hauptnavigation mobil"
            className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-line py-3 text-lg ${
                  isActive(item.href) ? "text-brand" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 py-4">
              <a
                href={`tel:${site.phoneHref}`}
                onClick={close}
                className="text-base font-medium text-ink"
              >
                Anrufen: {site.phone}
              </a>
              <Button href="/kontakt" onClick={close}>
                Angebot anfragen
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
