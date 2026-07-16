import type { ReactNode } from "react";
import Container from "./Container";

/* Einheitlicher Sektionsrahmen mit grosszuegigem, konsistentem Weissraum. */
export function Section({
  children,
  alt = false,
  className = "",
  id,
  labelledBy,
}: {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 sm:py-24 ${alt ? "bg-canvas-alt" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/* Kleiner Vorspann ueber der Ueberschrift, setzt Markenakzent gezielt ein. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.16em] text-brand">
      <span className="h-px w-6 bg-brand" aria-hidden="true" />
      {children}
    </span>
  );
}

/* Standardisierter Sektionskopf: Eyebrow, Ueberschrift, optionaler Text. */
export function SectionHeading({
  eyebrow,
  title,
  id,
  intro,
  as: As = "h2",
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  id?: string;
  intro?: ReactNode;
  as?: "h1" | "h2";
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <As
        id={id}
        className={
          As === "h1"
            ? "text-4xl leading-[1.08] sm:text-5xl md:text-[3.4rem]"
            : "text-3xl leading-[1.12] sm:text-4xl"
        }
      >
        {title}
      </As>
      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">{intro}</p>
      ) : null}
    </div>
  );
}
