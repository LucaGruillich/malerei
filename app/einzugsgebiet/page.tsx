import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import CtaBand from "@/components/CtaBand";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Einzugsgebiet",
  description: `Wir arbeiten in ${site.city} und im Umkreis. Sehen Sie hier, in welchen Orten unser Malerbetrieb in ${site.region} für Sie im Einsatz ist.`,
  alternates: { canonical: "/einzugsgebiet" },
  openGraph: {
    title: `Einzugsgebiet | ${site.name}`,
    description: `Malerarbeiten in ${site.city} und Umgebung.`,
    url: "/einzugsgebiet",
  },
};

export default function EinzugsgebietPage() {
  return (
    <>
      <PageHero
        eyebrow="Einzugsgebiet"
        title={`Unser Einzugsgebiet in ${site.region}`}
        intro={`Wir sind für Sie da in ${site.city} und im Umkreis von rund 20 Kilometern. Ob Privathaushalt, Hausverwaltung oder Bauprojekt, wenn Sie in unserem Gebiet liegen, kommen wir gern vorbei.`}
        image={{
          src: "/images/karte-einzugsgebiet.svg",
          alt: `Karte des Einzugsgebiets rund um ${site.city} mit markiertem Umkreis`,
        }}
      >
        <p className="text-muted">
          Nicht sicher, ob Ihr Ort dabei ist? Fragen Sie einfach kurz an.
        </p>
      </PageHero>

      <Section labelledBy="orte-titel">
        <SectionHeading
          eyebrow="Wo wir arbeiten"
          id="orte-titel"
          title="Orte, in denen wir im Einsatz sind"
          intro="Die folgende Liste ergänzt der Betrieb um die tatsächlich bedienten Orte und PLZ."
        />
        <ul className="mt-10 flex flex-wrap gap-2.5">
          {serviceAreas.map((ort) => (
            <li
              key={ort}
              className="rounded-[var(--radius-pill)] border border-line bg-surface px-5 py-2 text-[15px] text-ink-soft shadow-[var(--shadow-sm)]"
            >
              {ort}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt labelledBy="rand-titel">
        <div className="max-w-2xl">
          <SectionHeading
            eyebrow="Am Rand des Gebiets?"
            id="rand-titel"
            title="Ihr Ort ist nicht dabei?"
            intro="Auch außerhalb der Liste lohnt sich oft eine kurze Anfrage. Wir sagen Ihnen ehrlich, ob wir es einrichten können."
          />
        </div>
      </Section>

      <CtaBand title="Kurze Anfrage, klare Antwort" primary={{ label: "Anfrage senden", href: "/kontakt" }} />
    </>
  );
}
