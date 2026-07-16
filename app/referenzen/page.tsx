import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import ReferenceGallery from "@/components/ReferenceGallery";
import CtaBand from "@/components/CtaBand";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Referenzen",
  description: `Ein Eindruck unserer Arbeit in ${site.region}: Innenanstriche, Fassaden, Lackierungen, Wandgestaltung und Wärmedämmung. Filtern Sie nach Leistung.`,
  alternates: { canonical: "/referenzen" },
  openGraph: {
    title: `Referenzen | ${site.name}`,
    description: `Ausgewählte Arbeiten unseres Malerbetriebs in ${site.region}.`,
    url: "/referenzen",
  },
};

export default function ReferenzenPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenzen"
        title="Referenzen"
        intro="Ein Bild sagt mehr als jede Beschreibung. Hier sehen Sie eine Auswahl unserer Arbeiten. Filtern Sie nach Leistung, oder stöbern Sie einfach."
      />

      <Section labelledBy="galerie-titel">
        <h2 id="galerie-titel" className="sr-only">
          Galerie unserer Projekte
        </h2>
        <ReferenceGallery />
      </Section>

      <Section alt labelledBy="stimmen-titel">
        <SectionHeading
          eyebrow="Was Kunden sagen"
          id="stimmen-titel"
          title="Ehrliches Feedback von echten Aufträgen"
        />
        <div className="mt-12">
          <Testimonials items={testimonials} />
        </div>
      </Section>

      <CtaBand title="Ihr Projekt als nächstes?" />
    </>
  );
}
