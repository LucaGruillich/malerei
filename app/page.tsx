import Link from "next/link";
import Container from "@/components/Container";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import Button from "@/components/Button";
import SiteImage from "@/components/SiteImage";
import { ServiceCardCompact } from "@/components/ServiceCard";
import Steps from "@/components/Steps";
import TestimonialsMarquee from "@/components/TestimonialsMarquee";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";
import { homeSteps, projects, testimonials } from "@/lib/content";
import { serviceAreas, site } from "@/lib/site";

const trustAnchors = [
  "Meisterbetrieb",
  "Innungsmitglied",
  "Aus Erftstadt",
  "Kostenlose Beratung",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>Ihr Malerbetrieb in {site.region}</Eyebrow>
              <h1 className="text-4xl leading-[1.06] sm:text-5xl md:text-[3.6rem]">
                Malermeisterbetrieb Mario Fais
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Wir übernehmen zuverlässig, sauber und termintreu Ihre
                Malerarbeiten im Innen- und Außenbereich. Eine kostenlose
                Beratung ist nur einen Anruf entfernt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/kontakt">Angebot anfragen</Button>
                <Button href={`tel:${site.phoneHref}`} variant="secondary">
                  Anrufen: {site.phone}
                </Button>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                {trustAnchors.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      className="text-brand"
                    >
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal">
              <SiteImage
                src="/images/hero-home.svg"
                alt="Maler bei der Arbeit in einem hellen, frisch gestrichenen Raum"
                width={1200}
                height={800}
                priority
                rounded="lg"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Leistungen */}
      <Section labelledBy="leistungen-titel">
        <SectionHeading
          eyebrow="Unsere Leistungen"
          id="leistungen-titel"
          title="Alles rund um Farbe, innen wie außen"
          intro="Von der einzelnen Wand bis zur kompletten Fassade. Wählen Sie eine Leistung für Details."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCardCompact key={s.slug} service={s} />
          ))}
          <Link
            href="/leistungen"
            className="group reveal flex flex-col justify-between rounded-[var(--radius-md)] border border-dashed border-brand/40 bg-brand-tint/40 p-7 transition-colors hover:bg-brand-tint"
          >
            <div>
              <h3 className="text-xl text-brand">Alle Leistungen</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                Verschaffen Sie sich einen Überblick über unser gesamtes
                Angebot.
              </p>
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
              Zur Übersicht
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 9h12M10 4l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </Section>

      {/* Ausgewaehlte Arbeiten */}
      <Section alt labelledBy="arbeiten-titel">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Referenzen"
            id="arbeiten-titel"
            title="Ausgewählte Arbeiten"
            intro="Ein Eindruck von dem, was wir für unsere Kundinnen und Kunden umsetzen."
          />
          <Button href="/referenzen" variant="secondary">
            Alle Referenzen ansehen
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <figure key={p.caption} className="reveal">
              <SiteImage
                src={p.image}
                alt={`Referenz: ${p.caption}`}
                width={900}
                height={900}
                rounded="md"
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
              />
              <figcaption className="mt-3 text-sm text-muted">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* So arbeiten wir */}
      <Section labelledBy="ablauf-titel">
        <SectionHeading
          eyebrow="So arbeiten wir"
          id="ablauf-titel"
          title="Von der Anfrage bis zur fertigen Wand"
          intro="Vier klare Schritte, damit Sie jederzeit wissen, woran Sie sind."
        />
        <div className="mt-12">
          <Steps steps={homeSteps} />
        </div>
      </Section>

      {/* Kundenstimmen */}
      <Section alt labelledBy="stimmen-titel">
        <SectionHeading
          eyebrow="Das sagen Kunden"
          id="stimmen-titel"
          title="Vertrauen, das aus guter Arbeit wächst"
        />
        <div className="mt-12">
          <TestimonialsMarquee items={testimonials} />
        </div>
      </Section>

      {/* Einzugsgebiet */}
      <Section labelledBy="gebiet-titel">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal order-last lg:order-first">
            <SiteImage
              src="/images/karte-einzugsgebiet.svg"
              alt={`Karte des Einzugsgebiets rund um ${site.city}`}
              width={1000}
              height={750}
              rounded="lg"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="In Ihrer Nähe im Einsatz"
              id="gebiet-titel"
              title="Wir arbeiten in Ihrer Region"
              intro={`Wir sind für Sie da in ${site.city} und der Umgebung. Liegt Ihr Zuhause im Einzugsgebiet?`}
            />
            <ul className="mt-6 flex flex-wrap gap-2">
              {serviceAreas.slice(0, 4).map((ort) => (
                <li
                  key={ort}
                  className="rounded-[var(--radius-pill)] border border-line bg-surface px-4 py-1.5 text-sm text-ink-soft"
                >
                  {ort}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/einzugsgebiet" variant="secondary">
                Zum Einzugsgebiet
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Bereit für frische Farbe?"
        text="Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns zeitnah mit einem unverbindlichen Angebot."
        secondary={{ label: "Rückruf anfordern", href: `tel:${site.phoneHref}` }}
      />
    </>
  );
}
