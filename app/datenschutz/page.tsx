import type { Metadata } from "next";
import Container from "@/components/Container";
import { Eyebrow } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Pflichtinformationen zum Datenschutz nach DSGVO und TDDDG.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: true },
};

/*
  Datenschutzerklaerung mit belastbarem Standardtext. Kundenspezifische
  Angaben (Name, Anschrift, Hoster, Ansprechpartner) sind als [PLATZHALTER]
  gekennzeichnet und vor Livegang zu ergaenzen. Der Text bildet den aktuellen
  Stand der Website ab: Kontakt- und Bewerbungsformular, selbst ausgelieferte
  Schriften, keine Tracking-Cookies und keine eingebetteten Drittdienste.
  Sobald Dienste wie Google Maps, Analyse-Tools oder ein Bewertungs-Widget
  hinzukommen, ist dieser Text entsprechend zu erweitern und in aller Regel
  ein Einwilligungsbanner noetig.
*/
export default function DatenschutzPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl">
        <Eyebrow>Rechtliches</Eyebrow>
        <h1 className="text-4xl leading-[1.1] sm:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="mt-6 rounded-[var(--radius-sm)] border border-brand/20 bg-brand-tint px-5 py-4 text-sm text-ink-soft">
          Der folgende Text ist ein belastbarer Standard für den aktuellen Stand
          der Website. Die mit eckigen Klammern markierten Angaben ergänzt der
          Betrieb vor dem Livegang. Bitte lassen Sie den Text vor der
          Veröffentlichung von einer geprüften Rechtsquelle abschließend
          kontrollieren.
        </div>

        <div className="mt-10 space-y-10 text-ink-soft">
          <section>
            <h2 className="text-xl text-ink">
              1. Verantwortlicher im Sinne der DSGVO
            </h2>
            <p className="mt-3 leading-relaxed">
              Verantwortlich für die Verarbeitung Ihrer Daten auf dieser Website
              ist:
            </p>
            <p className="mt-3 leading-relaxed">
              Malermeisterbetrieb Mario Fais
              <br />
              [Straße und Hausnummer]
              <br />
              50374 Erftstadt
              <br />
              Telefon: {site.phone}
              <br />
              E-Mail: {site.email}
            </p>
            <p className="mt-3 leading-relaxed">
              Einen gesonderten Datenschutzbeauftragten haben wir nicht
              bestellt, da wir dazu gesetzlich nicht verpflichtet sind. Bei
              Fragen zum Datenschutz erreichen Sie uns über die oben genannten
              Kontaktdaten.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">
              2. Ihre Rechte als betroffene Person
            </h2>
            <p className="mt-3 leading-relaxed">
              Sie haben jederzeit das Recht, sich über die zu Ihrer Person
              gespeicherten Daten zu informieren und diese berichtigen oder
              löschen zu lassen. Im Einzelnen stehen Ihnen folgende Rechte zu:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>
                Einschränkung der Verarbeitung (Art. 18 DSGVO)
              </li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>
                Widerspruch gegen die Verarbeitung (Art. 21 DSGVO), soweit die
                Verarbeitung auf einem berechtigten Interesse beruht
              </li>
              <li>
                Widerruf einer erteilten Einwilligung mit Wirkung für die
                Zukunft (Art. 7 Abs. 3 DSGVO)
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Außerdem haben Sie das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO).
              Zuständig ist in der Regel die Behörde Ihres Bundeslandes. Für
              unseren Betrieb in Nordrhein-Westfalen ist dies die
              Landesbeauftragte für Datenschutz und Informationsfreiheit
              Nordrhein-Westfalen (LDI NRW), Kavalleriestraße 2 bis 4,
              40213 Düsseldorf.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">
              3. Aufruf der Website und Server-Logfiles
            </h2>
            <p className="mt-3 leading-relaxed">
              Beim Besuch unserer Website übermittelt Ihr Browser aus technischen
              Gründen automatisch Daten an den Server unseres Hosters. Erfasst
              werden dabei unter anderem die aufgerufene Seite, Datum und Uhrzeit
              des Abrufs, der verwendete Browser und dessen Version, das
              Betriebssystem, die zuvor besuchte Seite und die IP-Adresse.
            </p>
            <p className="mt-3 leading-relaxed">
              Diese Daten sind für uns nicht einzelnen Personen zuordenbar und
              werden nicht mit anderen Datenquellen zusammengeführt. Die
              Verarbeitung erfolgt zur Auslieferung der Website, zur
              Gewährleistung der Stabilität und Sicherheit sowie zur Abwehr von
              Angriffen. Rechtsgrundlage ist unser berechtigtes Interesse an
              einem sicheren und funktionierenden Auftritt (Art. 6 Abs. 1 lit. f
              DSGVO). Die Logfiles werden nach [Speicherdauer, z. B. 7 Tage]
              gelöscht, soweit sie nicht ausnahmsweise zur Aufklärung eines
              konkreten Vorfalls länger benötigt werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">4. Hosting</h2>
            <p className="mt-3 leading-relaxed">
              Unsere Website wird bei einem externen Dienstleister gehostet:
              [Name und Anschrift des Hosters]. Der Hoster verarbeitet die
              vorgenannten Daten in unserem Auftrag und ausschließlich zur
              Bereitstellung der Website. Wir haben mit dem Hoster einen Vertrag
              zur Auftragsverarbeitung nach Art. 28 DSGVO geschlossen.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">
              5. Kontaktformular und Angebotsanfrage
            </h2>
            <p className="mt-3 leading-relaxed">
              Wenn Sie uns über das Kontaktformular eine Anfrage senden,
              verarbeiten wir die von Ihnen angegebenen Daten, um Ihre Anfrage zu
              bearbeiten und Ihnen ein Angebot zu machen. Pflichtangaben sind
              Ihr Name und eine Kontaktmöglichkeit, damit wir uns bei Ihnen
              melden können. Weitere Angaben wie die Beschreibung des Vorhabens
              oder ein Foto sind freiwillig und helfen uns bei der Einschätzung.
            </p>
            <p className="mt-3 leading-relaxed">
              Rechtsgrundlage ist die Anbahnung oder Durchführung eines Vertrags
              (Art. 6 Abs. 1 lit. b DSGVO) sowie unser berechtigtes Interesse an
              der Beantwortung allgemeiner Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
              Wir speichern die Daten, bis Ihr Anliegen abschließend bearbeitet
              ist. Danach werden sie gelöscht, sofern keine gesetzlichen
              Aufbewahrungspflichten entgegenstehen.
            </p>
            <p className="mt-3 leading-relaxed">
              Wenn Sie uns stattdessen direkt per Telefon oder E-Mail
              kontaktieren, verarbeiten wir Ihre Angaben ausschließlich zur
              Bearbeitung Ihres Anliegens auf derselben Rechtsgrundlage.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">6. Bewerbungen</h2>
            <p className="mt-3 leading-relaxed">
              Über das Formular auf der Karriereseite können Sie sich bei uns
              bewerben. Die dabei übermittelten Daten und Unterlagen verarbeiten
              wir ausschließlich zur Durchführung des Bewerbungsverfahrens.
              Rechtsgrundlage ist die Anbahnung eines Beschäftigungsverhältnisses
              (Art. 6 Abs. 1 lit. b DSGVO und § 26 BDSG). Kommt es nicht zu einer
              Einstellung, löschen wir Ihre Bewerbungsunterlagen spätestens
              [Speicherdauer, z. B. 6 Monate] nach Abschluss des Verfahrens,
              sofern Sie keiner längeren Speicherung zugestimmt haben.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">
              7. Cookies und Einwilligung nach TDDDG
            </h2>
            <p className="mt-3 leading-relaxed">
              Unsere Website setzt derzeit keine Tracking- oder Marketing-Cookies
              ein und bindet keine Analyse-Dienste ein. Es werden nur solche
              Informationen auf Ihrem Gerät gespeichert oder ausgelesen, die für
              den Betrieb der Website technisch notwendig sind. Dafür ist nach
              § 25 Abs. 2 TDDDG keine Einwilligung erforderlich.
            </p>
            <p className="mt-3 leading-relaxed">
              Sollten wir künftig Dienste einsetzen, die nicht notwendige Cookies
              verwenden oder Daten an Dritte übermitteln, holen wir vorab Ihre
              Einwilligung über ein Einwilligungsbanner mit datenschutzfreundlicher
              Voreinstellung ein (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG).
              Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
              widerrufen.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">8. Schriften und externe Inhalte</h2>
            <p className="mt-3 leading-relaxed">
              Die auf dieser Website verwendeten Schriften werden lokal von
              unserem eigenen Server ausgeliefert. Beim Laden der Seite wird
              dadurch keine Verbindung zu Servern Dritter aufgebaut und keine
              IP-Adresse an externe Anbieter übertragen. Karten werden derzeit
              als statische Grafiken eingebunden, es findet kein Abruf von
              interaktiven Kartendiensten statt.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">
              9. Weitergabe an Dritte und Drittlandübermittlung
            </h2>
            <p className="mt-3 leading-relaxed">
              Eine Übermittlung Ihrer Daten an Dritte findet nur statt, soweit
              dies zur Bearbeitung Ihres Anliegens erforderlich ist, Sie
              eingewilligt haben oder wir gesetzlich dazu verpflichtet sind. Eine
              Übermittlung in Länder außerhalb der Europäischen Union ist derzeit
              nicht vorgesehen. Sollte sich dies ändern, informieren wir hier
              über die Empfänger und die zugrunde liegenden Garantien nach
              Art. 44 ff. DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-ink">10. Aktualität dieser Erklärung</h2>
            <p className="mt-3 leading-relaxed">
              Wir passen diese Datenschutzerklärung an, sobald sich die
              Datenverarbeitung auf unserer Website ändert oder neue rechtliche
              Vorgaben dies erfordern. Es gilt jeweils die hier veröffentlichte
              Fassung. Stand: [Monat und Jahr der letzten Aktualisierung].
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
}
