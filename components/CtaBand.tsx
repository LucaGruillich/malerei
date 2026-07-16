import type { ReactNode } from "react";
import Container from "./Container";
import Button from "./Button";

/*
  Abschluss-Aufruf. Setzt die Markenfarbe bewusst als Flaeche ein, aber
  nur an dieser einen, wiederkehrenden Stelle, damit der Akzent wirkt.
*/
export default function CtaBand({
  title,
  text,
  primary = { label: "Angebot anfragen", href: "/kontakt" },
  secondary,
}: {
  title: string;
  text?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="on-dark relative overflow-hidden rounded-[var(--radius-lg)] bg-brand px-6 py-14 text-white shadow-[var(--shadow-lg)] sm:px-12 sm:py-16">
          {/* dezente Lichtstimmung als Tiefe, rein dekorativ */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl leading-tight text-white sm:text-4xl">
              {title}
            </h2>
            {text ? (
              <p className="mt-4 text-lg leading-relaxed text-white/85">
                {text}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={primary.href}
                className="bg-white text-brand hover:bg-white/90 hover:text-brand-strong"
              >
                {primary.label}
              </Button>
              {secondary ? (
                <Button
                  href={secondary.href}
                  variant="secondary"
                  className="border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 hover:text-white"
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
