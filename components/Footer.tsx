import Link from "next/link";
import { legalNav, mainNav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.claim} Sauber, termintreu und persönlich, vom ersten
              Gespräch bis zur letzten Ecke.
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <h2 className="text-sm font-semibold text-ink">Seiten</h2>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold text-ink">Kontakt</h2>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-muted">
              <p>
                {site.street}
                <br />
                {site.postalCode} {site.city}
              </p>
              <p>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="hover:text-brand"
                >
                  {site.phone}
                </a>
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-brand"
                >
                  {site.email}
                </a>
              </p>
              <p>{site.openingHours}</p>
            </address>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-ink">Rechtliches</h2>
            <ul className="mt-4 space-y-2.5">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted hover:text-brand"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <p>Meisterbetrieb für Maler- und Lackiererarbeiten in {site.region}.</p>
        </div>
      </div>
    </footer>
  );
}
