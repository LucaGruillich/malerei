import type { Metadata } from "next";
import Container from "@/components/Container";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import SiteImage from "@/components/SiteImage";
import ContactForm from "@/components/ContactForm";
import Steps from "@/components/Steps";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt & Angebotsanfrage",
  description: `Angebot anfragen oder anrufen. Ihr Malerbetrieb in ${site.region} meldet sich zeitnah und unverbindlich. Kurzes Formular oder direkter Draht per Telefon.`,
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: `Kontakt | ${site.name}`,
    description: `Angebot anfragen oder anrufen. Wir melden uns zeitnah und unverbindlich.`,
    url: "/kontakt",
  },
};

const nextSteps = [
  { title: "Wir melden uns", text: "Meist innerhalb von ein bis zwei Werktagen." },
  { title: "Wir schauen es an", text: "Bei Bedarf ein Termin vor Ort." },
  {
    title: "Sie erhalten Ihr Angebot",
    text: "Klar und ohne versteckte Kosten.",
  },
];

export default function KontaktPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Kontakt</Eyebrow>
            <h1 className="text-4xl leading-[1.08] sm:text-5xl md:text-[3.4rem]">
              Angebot anfragen oder anrufen
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns zeitnah
              und unverbindlich. Wenn es schnell gehen soll, rufen Sie einfach
              an.
            </p>
          </div>
        </Container>
      </section>

      <Section labelledBy="anliegen-titel">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <h2 id="anliegen-titel" className="text-2xl">
              Ihr Anliegen
            </h2>
            <p className="mt-2 text-muted">
              Wir brauchen nur das Nötigste. Pflichtfelder sind im Formular mit
              einem Stern gekennzeichnet.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-2xl">Direkt erreichbar</h2>
            <dl className="mt-6 space-y-5 rounded-[var(--radius-md)] border border-line bg-surface p-7 shadow-[var(--shadow-sm)]">
              <div>
                <dt className="text-sm font-semibold text-ink">Telefon</dt>
                <dd className="mt-0.5">
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="text-ink-soft hover:text-brand"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink">E-Mail</dt>
                <dd className="mt-0.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink-soft hover:text-brand"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink">Adresse</dt>
                <dd className="mt-0.5 text-ink-soft">
                  {site.street}, {site.postalCode} {site.city}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-ink">
                  Öffnungszeiten
                </dt>
                <dd className="mt-0.5 text-ink-soft">{site.openingHours}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <SiteImage
                src="/images/karte-standort.svg"
                alt={`Karte mit dem Standort in ${site.city}`}
                width={1000}
                height={750}
                rounded="md"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section alt labelledBy="weiter-titel">
        <SectionHeading
          eyebrow="Wie es weitergeht"
          id="weiter-titel"
          title="Vom Kontakt bis zum Angebot"
        />
        <div className="mt-12">
          <Steps steps={nextSteps} />
        </div>
      </Section>
    </>
  );
}
