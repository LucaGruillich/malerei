import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import SiteImage from "@/components/SiteImage";
import CtaBand from "@/components/CtaBand";
import { certifications, team, values } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns & Team",
  description: `Lernen Sie unseren Malerbetrieb in ${site.region} kennen: unsere Geschichte, unsere Werte und das Team hinter der sauberen Arbeit.`,
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: `Über uns & Team | ${site.name}`,
    description: `Der Malerbetrieb hinter der sauberen Arbeit in ${site.region}.`,
    url: "/ueber-uns",
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title="Ein Betrieb mit Handschrift"
        intro="In Erftstadt zu Hause und im ganzen Rhein-Erft-Kreis für Sie im Einsatz. Aus einem kleinen Familienbetrieb ist ein eingespieltes Team geworden, das sein Handwerk liebt und Wert auf saubere, ehrliche Arbeit legt."
        image={{
          src: "/images/ueber-uns-team.svg",
          alt: "Das Team des Malerbetriebs bei der Arbeit",
        }}
      />

      {/* Werte */}
      <Section labelledBy="werte-titel">
        <SectionHeading
          eyebrow="Wofür wir stehen"
          id="werte-titel"
          title="Werte, die man am Ergebnis sieht"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="reveal rounded-[var(--radius-md)] border border-line bg-surface p-7 shadow-[var(--shadow-sm)]"
            >
              <h3 className="text-lg">{v.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section alt labelledBy="team-titel">
        <SectionHeading
          eyebrow="Das Team"
          id="team-titel"
          title="Feste Gesichter statt Anonymität"
          intro="Bei uns wissen Sie, wer bei Ihnen zu Hause arbeitet."
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.role} className="reveal">
              <SiteImage
                src={member.image}
                alt={`Porträt: ${member.name}, ${member.role}`}
                width={800}
                height={1000}
                rounded="md"
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
              />
              <p className="mt-4 font-display text-lg text-ink">
                {member.name}
              </p>
              <p className="text-sm text-muted">{member.role}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Qualifikation */}
      <Section labelledBy="quali-titel">
        <SectionHeading
          eyebrow="Qualifikation & Mitgliedschaften"
          id="quali-titel"
          title="Fachlich abgesichert"
          intro="Meisterbetrieb, Innungszugehörigkeit und geprüfte Qualität. Die konkreten Nachweise liefert der Betrieb vor Livegang."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {certifications.map((c) => (
            <li
              key={c.label}
              className="reveal flex items-center gap-4 rounded-[var(--radius-md)] border border-line bg-surface p-6 shadow-[var(--shadow-sm)]"
            >
              <SiteImage
                src={c.image}
                alt={c.label}
                width={400}
                height={400}
                rounded="md"
                className="!w-16 shrink-0"
                sizes="64px"
              />
              <span className="font-medium text-ink">{c.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Lernen Sie uns kennen"
        text="Ob als Kundin, Kunde oder künftiges Teammitglied. Wir freuen uns auf Sie."
        secondary={{ label: "Zur Karriereseite", href: "/karriere" }}
      />
    </>
  );
}
