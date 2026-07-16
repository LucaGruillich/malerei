import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import SiteImage from "@/components/SiteImage";
import ApplicationForm from "@/components/ApplicationForm";
import { benefits, jobs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Karriere & Ausbildung",
  description: `Arbeiten im Handwerk mit Perspektive: Ausbildung und Stellen im Malerbetrieb in ${site.region}. Jetzt unkompliziert bewerben.`,
  alternates: { canonical: "/karriere" },
  openGraph: {
    title: `Karriere & Ausbildung | ${site.name}`,
    description: `Ausbildung und Stellen im Malerbetrieb in ${site.region}.`,
    url: "/karriere",
  },
};

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="Karriere"
        title="Werden Sie Teil unseres Teams"
        intro="Sie mögen Handwerk, wollen etwas Sichtbares schaffen und suchen einen Betrieb, der Sie ernst nimmt? Dann passen Sie vielleicht gut zu uns. Wir bilden aus und freuen uns über Verstärkung."
        image={{
          src: "/images/karriere-team.svg",
          alt: "Team des Malerbetriebs im Arbeitsalltag",
        }}
      >
        <Button href="#stellen">Offene Stellen</Button>
      </PageHero>

      {/* Benefits */}
      <Section labelledBy="benefits-titel">
        <SectionHeading
          eyebrow="Das bieten wir"
          id="benefits-titel"
          title="Gute Gründe, bei uns anzufangen"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="reveal rounded-[var(--radius-md)] border border-line bg-surface p-7 shadow-[var(--shadow-sm)]"
            >
              <h3 className="text-lg">{b.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">
                {b.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Offene Stellen */}
      <Section alt id="stellen" labelledBy="stellen-titel">
        <SectionHeading
          eyebrow="Offene Stellen"
          id="stellen-titel"
          title="Aktuell suchen wir"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="reveal flex flex-col rounded-[var(--radius-md)] border border-line bg-surface p-8 shadow-[var(--shadow-sm)]"
            >
              <h3 className="text-xl">{job.title}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
                {job.text}
              </p>
              <div className="mt-6">
                <Button href="#bewerbung" variant="secondary">
                  Jetzt bewerben
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Bewerbung */}
      <Section id="bewerbung" labelledBy="bewerbung-titel">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Kurz bewerben"
              id="bewerbung-titel"
              title="In wenigen Zeilen zu uns"
              intro="Ein Anschreiben ist kein Muss. Erzählen Sie uns kurz, wer Sie sind. Alles Weitere klären wir im Gespräch."
            />
            <div className="mt-8">
              <ApplicationForm />
            </div>
          </div>
          <div>
            <div className="rounded-[var(--radius-md)] border border-line bg-surface p-8 shadow-[var(--shadow-sm)]">
              <h2 className="text-xl">Ihr Ansprechpartner</h2>
              <div className="mt-6 flex items-center gap-4">
                <SiteImage
                  src="/images/ansprechpartner.svg"
                  alt="Porträt des Ansprechpartners für Bewerbungen"
                  width={800}
                  height={1000}
                  rounded="md"
                  className="!w-24 shrink-0"
                  sizes="96px"
                />
                <div>
                  <p className="font-display text-lg text-ink">Mario Fais</p>
                  <p className="text-sm text-muted">Inhaber</p>
                </div>
              </div>
              <div className="mt-6 space-y-1.5 text-sm text-ink-soft">
                <p>
                  <a
                    href={`tel:${site.phoneHref}`}
                    className="hover:text-brand"
                  >
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-brand"
                  >
                    {site.email}
                  </a>
                </p>
              </div>
              <p className="mt-6 text-sm text-muted">
                Lieber persönlich? Rufen Sie einfach an.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
