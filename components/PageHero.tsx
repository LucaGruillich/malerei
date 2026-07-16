import type { ReactNode } from "react";
import Container from "./Container";
import { Eyebrow } from "./Section";
import SiteImage from "./SiteImage";

/*
  Seitenkopf fuer Unterseiten. Optional mit Bild (zweispaltig) oder
  ohne Bild (schmale Textspalte). H1 wird pro Seite genau einmal gesetzt.
*/
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-surface">
      <Container className="py-16 sm:py-24">
        {image ? (
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
              <h1 className="text-4xl leading-[1.08] sm:text-5xl md:text-[3.4rem]">
                {title}
              </h1>
              {intro ? (
                <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                  {intro}
                </p>
              ) : null}
              {children ? <div className="mt-8">{children}</div> : null}
            </div>
            <div className="reveal">
              <SiteImage
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                priority
                rounded="lg"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-2xl">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h1 className="text-4xl leading-[1.08] sm:text-5xl md:text-[3.4rem]">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                {intro}
              </p>
            ) : null}
            {children ? <div className="mt-8">{children}</div> : null}
          </div>
        )}
      </Container>
    </section>
  );
}
