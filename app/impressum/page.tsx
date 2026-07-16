import type { Metadata } from "next";
import Container from "@/components/Container";
import { Eyebrow } from "@/components/Section";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterkennzeichnung gemäß § 5 DDG.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl">
        <Eyebrow>Rechtliches</Eyebrow>
        <h1 className="text-4xl leading-[1.1] sm:text-5xl">Impressum</h1>

        <div className="mt-6 rounded-[var(--radius-sm)] border border-brand/20 bg-brand-tint px-5 py-4 text-sm text-ink-soft">
          Platzhalter. Diese Angaben sind rechtlich verpflichtend und müssen vom
          Kunden vollständig geliefert und vor Livegang geprüft werden.
        </div>

        <div className="mt-10 space-y-8 text-ink-soft">
          <section>
            <h2 className="text-xl text-ink">Angaben gemäß § 5 DDG</h2>
            <p className="mt-3 leading-relaxed">
              Malermeisterbetrieb Mario Fais
              <br />
              [Rechtsform]
              <br />
              [Straße und Hausnummer]
              <br />
              50374 Erftstadt
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">Vertreten durch</h2>
            <p className="mt-3 leading-relaxed">Mario Fais</p>
          </section>

          <section>
            <h2 className="text-xl text-ink">Kontakt</h2>
            <p className="mt-3 leading-relaxed">
              Telefon: [Nummer]
              <br />
              E-Mail: [Adresse]
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">Umsatzsteuer-ID</h2>
            <p className="mt-3 leading-relaxed">[USt-IdNr., falls vorhanden]</p>
          </section>

          <section>
            <h2 className="text-xl text-ink">
              Handwerkskammer / Aufsichtsbehörde
            </h2>
            <p className="mt-3 leading-relaxed">
              Handwerkskammer zu Köln
              <br />
              Heumarkt 12, 50667 Köln
              <br />
              Eingetragen in die Handwerksrolle bei der Handwerkskammer zu Köln.
              [Eintragungsnummer ergänzen.]
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="mt-3 leading-relaxed">
              Berufsbezeichnung: Maler und Lackierermeister, verliehen in
              Deutschland. Es gelten die Handwerksordnung (HwO) und die Satzung
              der Handwerkskammer zu Köln, einsehbar unter hwk-koeln.de.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3 leading-relaxed">
              Mario Fais, Anschrift wie oben.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">Verbraucherstreitbeilegung</h2>
            <p className="mt-3 leading-relaxed">
              Wir sind nicht bereit und nicht verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen. [Bitte prüfen und an die tatsächliche Situation des
              Betriebs anpassen.]
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
