import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Section } from "@/components/Section";
import { ServiceCardMedia } from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Leistungen`,
  description: `Innenanstrich, Fassade, Lack- und Holzschutz, Tapezieren und Wärmedämmung. Alle Maler- und Lackiererarbeiten Ihres Meisterbetriebs in ${site.region} im Überblick.`,
  alternates: { canonical: "/leistungen" },
  openGraph: {
    title: `Leistungen | ${site.name}`,
    description: `Alle Maler- und Lackiererarbeiten in ${site.region} im Überblick.`,
    url: "/leistungen",
  },
};

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Unsere Leistungen"
        intro="Von der einzelnen Wand bis zur kompletten Fassade. Hier finden Sie alles, was wir für Sie erledigen. Wählen Sie eine Leistung für Details, oder fragen Sie direkt Ihr Angebot an."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCardMedia key={s.slug} service={s} />
          ))}
          <div className="reveal flex flex-col items-start justify-center rounded-[var(--radius-md)] border border-dashed border-brand/40 bg-brand-tint/40 p-8">
            <h2 className="text-2xl">Ihre Leistung nicht dabei?</h2>
            <p className="mt-3 text-ink-soft">
              Fragen Sie einfach nach. Wir sagen Ihnen ehrlich, ob und wie wir
              Ihr Vorhaben umsetzen können.
            </p>
            <Link
              href="/kontakt"
              className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-brand px-6 py-3 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-brand-strong"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Noch unsicher, was Sie brauchen?"
        text="Wir beraten Sie gern und schauen bei Bedarf vor Ort vorbei."
      />
    </>
  );
}
