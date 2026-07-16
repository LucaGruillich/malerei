# Audit-Bericht: Malerbetrieb-Website

> Ergebnis aus Session 3 (Audit & Fix). Stand: 16.07.2026.
> Geprüft wurde die in Session 2 gebaute Next.js-Website aus vier Perspektiven:
> Barrierefreiheit (A), SEO/SEA (B), Rechtliches (C) und Kundensicht (D).
> Alle Befunde der Schweregrade Kritisch und Hoch wurden direkt im Code behoben,
> ebenso die Mittel-Befunde mit geringem Aufwand. Der Build läuft fehlerfrei
> (`npm run build`), ESLint ist sauber.

## Rahmenbedingungen

Die Website ist noch nicht live. Die Stammdaten in `lib/site.ts` und die
rechtlichen Angaben sind bewusst Platzhalter, die der Kunde vor Livegang füllt.
Deshalb bleiben viele inhaltliche und rechtliche Endpunkte offen und sind unten
als `[PLATZHALTER]` gekennzeichnet. Das ist kein Mangel der Umsetzung, sondern
der erwartete Zustand vor Übergabe der Kundendaten.

Verifiziert wurde im laufenden Dev-Server unter anderem: Formularvalidierung
greift jetzt, Datenschutz- und Impressumsseite rendern korrekt, mobiles Menü
schließt per Escape mit Fokusrückgabe, mobiler Anruf-Button ist erreichbar,
keine horizontale Scrollleiste auf dem Handy, strukturierte Daten geben keine
Platzhalter mehr aus, keine Konsolenfehler.

## 1. Was wurde behoben

### Kritisch

| Befund | Quelle | Lösung | Dateien |
|--------|--------|--------|---------|
| Datenschutzerklärung war nur ein Gerüst aus Überschriften, keine gültige DSGVO-Erklärung | C | Vollständige, belastbare Datenschutzerklärung mit echtem Standardtext geschrieben: Verantwortlicher, Betroffenenrechte (Art. 15 bis 21, Widerruf, Beschwerde), Server-Logfiles, Hosting (Art. 28), Kontaktformular und Bewerbung mit Rechtsgrundlage und Speicherdauer, Cookies/TDDDG, selbst gehostete Schriften, Drittland. Kundenspezifisches als `[PLATZHALTER]`. | `app/datenschutz/page.tsx` |

### Hoch

| Befund | Quelle | Lösung | Dateien |
|--------|--------|--------|---------|
| Formulare mit `noValidate` und leerem Submit-Handler zeigten auch bei leeren Feldern „Danke". Pflichtfelder und Datenschutz-Einwilligung wurden nicht erzwungen, keine Fehlermeldung (WCAG 3.3.1/3.3.2/3.3.3) | A, D | `noValidate` entfernt, native Validierung greift jetzt und blockiert leeres/unvollständiges Absenden mit zugänglicher Meldung. Sichtbare Pflichtfeld-Markierung („*" plus Screenreader-Text „Pflichtfeld"), Hinweiszeile im Formular. Fokus springt nach Absenden auf die Bestätigung. | `components/ContactForm.tsx`, `components/ApplicationForm.tsx` |
| Strukturierte Daten (JSON-LD) gaben Platzhalter aus, u. a. `aggregateRating` mit `[X,X]`. Ungültige/erfundene Bewertungen sind ein Rich-Result-Fehler und ein Richtlinienrisiko | B | Prüffunktion filtert Platzhalter. `aggregateRating`, `foundingDate` und Platzhalter-Orte in `areaServed` werden nur bei echten Werten ausgegeben. | `components/JsonLd.tsx` |

### Mittel (mit geringem Aufwand direkt behoben)

| Befund | Quelle | Lösung | Dateien |
|--------|--------|--------|---------|
| Kontaktseite behauptete Sternchen-Markierung, die es nicht gab | A, D | Hinweistext an die jetzt vorhandene Markierung angepasst | `app/kontakt/page.tsx` |
| Impressum ohne inhaltlich Verantwortlichen nach § 18 Abs. 2 MStV | C | Abschnitt ergänzt, Verbraucherstreitbeilegung mit belastbarem Standardtext (Platzhalter zum Prüfen) | `app/impressum/page.tsx` |
| Sitemap listete die noindex-Seiten Impressum und Datenschutz | B | Rechtsseiten aus der Sitemap entfernt | `app/sitemap.ts` |
| Mobiles Menü ohne Escape und ohne Fokusrückgabe; keine schnelle Anrufmöglichkeit im mobilen Header | A, D | Escape schließt das Menü und gibt den Fokus zurück. Anruf-Button (Icon, mit Label „Anrufen: Nummer") dauerhaft im mobilen Header, ohne horizontale Überlaufkante | `components/Header.tsx` |
| Leistungsseiten mit Brotkrumen, aber ohne BreadcrumbList-Daten | B | `BreadcrumbList`-JSON-LD ergänzt | `app/leistungen/[slug]/page.tsx` |
| Filter-Galerie ohne Rückmeldung an Screenreader | A | `role="status"` mit Live-Region, die die Trefferzahl je Filter ansagt | `components/ReferenceGallery.tsx` |

Alle neuen und geänderten Texte folgen den Schreibregeln aus der CLAUDE.md
(Sie-Ansprache, keine Gedankenstriche, natürlicher Ton). Die bestehenden Texte
enthielten bereits keine Gedankenstriche.

## 2. Was bleibt offen und warum

Offen ist im Kern alles, was echte Kundendaten braucht. Ohne diese Angaben lässt
sich der Punkt nicht seriös abschließen.

### Muss der Kunde liefern (blockiert Livegang)

- **Stammdaten** in `lib/site.ts`: `[Firmenname]`, `[Rechtsform]`, `[Straße]`,
  `[PLZ]`, `[Ort]`, `[Region]`, echte Telefonnummer und E-Mail, `[Jahr]`,
  Öffnungszeiten, echte Bewertungen (`ratingValue`, `ratingCount`).
- **Einzugsgebiet**: echte Orte und PLZ statt `[Ort 1]` bis `[PLZ-Gebiet]`.
- **Impressum** (`app/impressum/page.tsx`): alle `[PLATZHALTER]`, insbesondere
  ladungsfähige Anschrift, Vertretungsberechtigte, Kontakt, ggf. USt-IdNr.,
  zuständige Handwerkskammer und Berufsbezeichnung, inhaltlich Verantwortlicher
  nach § 18 Abs. 2 MStV, Aussage zur Verbraucherstreitbeilegung prüfen.
- **Datenschutz** (`app/datenschutz/page.tsx`): `[PLATZHALTER]` füllen, v. a.
  Name/Anschrift des Hosters, zuständige Landesdatenschutzbehörde, Speicherfristen
  für Logfiles und Bewerbungen, Datum der letzten Aktualisierung. Text vor
  Veröffentlichung von einer geprüften Rechtsquelle abschließend kontrollieren
  lassen.
- **Domain**: `lib/site.ts` von `www.malerbetrieb.example` auf die echte Domain.
- **Inhalte mit Platzhalter**: Teammitglieder (`[Name]`), Ansprechpartner,
  Referenz-Ortsangaben, Gründungsgeschichte auf „Über uns", Reaktionszeitraum auf
  der Kontaktseite, Ausbildungs-Startjahr, Umkreis-Kilometer im Einzugsgebiet.

### Empfohlen, aber nicht blockierend

- **Formular-Backend**: Beide Formulare bestätigen aktuell nur, es werden noch
  keine Daten übertragen. Vor Livegang an Mailversand oder ein Backend anbinden,
  inkl. serverseitiger Validierung und Spam-Schutz.
- **Open-Graph-Bild** (1200x630, Raster) für Vorschau beim Teilen.
- **Echte Bild-Visuals** statt der SVG-Platzhalter (Pfad bleibt gleich).
- **Google Business Profile** anlegen, NAP konsistent zur Website.
- **KI-Bot-Regeln** in `robots.ts`: Geschäftsentscheidung des Kunden.
- **`llms.txt`**: optional, geringer nachgewiesener Nutzen (Details in
  `docs/seo-sea-analyse.md`).

### Inhaltliche Punkte aus der Kundensicht (Audit D)

Diese Seite ist inhaltlich schon rund: klare Leistungen, Ablauf in vier Schritten,
FAQ, Referenzen, Team, klarer CTA „Angebot anfragen" plus Telefon. Was die
Conversion weiter stärken würde, sobald Daten da sind:

- **Preistransparenz/Orientierung**: Kunden erwarten oft eine grobe Einordnung.
  Ein Hinweis „kostenloses, unverbindliches Angebot" ist vorhanden, eine grobe
  Kostenorientierung pro Leistung wäre ein Plus (nur mit echten Zahlen des Betriebs).
- **Reaktionszeit** konkret benennen (Kontaktseite `[Zeitraum]`).
- **Vertrauensanker echt machen**: echte Bewertungen, echte Referenzen mit Ort,
  echte Siegel/Nachweise statt Platzhalter.

## 3. Priorisierte To-do-Liste der offenen Punkte

1. **Sofort, blockiert Livegang**: Stammdaten, Impressum, Datenschutz, echte
   Domain, Einzugsgebiet füllen. Datenschutz und Impressum rechtlich prüfen lassen.
2. **Vor Livegang**: Formulare an Versand/Backend anbinden (mit serverseitiger
   Validierung und Spam-Schutz). Google Business Profile einrichten.
3. **Zum bzw. kurz nach Livegang**: echte Bilder und OG-Bild, Search Console und
   Sitemap, Rich-Result-Test.
4. **Mittelfristig**: Bewertungen sammeln, SEA-Einstieg mit Conversion-Tracking,
   Ratgeberinhalte. Details in `docs/seo-sea-analyse.md`.
5. **Optional**: Ortsseiten-Strategie, KI-Bot-Regeln, `llms.txt`.

## 4. Scores und Einschätzung nach den Fixes

Bewertet wird der Zustand des Codes und der Umsetzung nach den Fixes. Punkte, die
nur an fehlenden Kundendaten hängen, sind nicht als handwerkliche Mängel gewertet,
werden aber bei der Live-Reife klar benannt.

### Barrierefreiheit (BFSG / WCAG 2.2 AA)

- **Technische Umsetzung: rund 92 % konform.** Semantisches HTML, eine H1 pro
  Seite, saubere Landmarks (`header`, `main`, `nav` mit Labels, `footer`),
  Skip-Link, sichtbare und kontraststarke Fokus-Indikatoren (3 px Outline),
  `prefers-reduced-motion` berücksichtigt, `html lang="de"`, Alt-Texte überall,
  Icons konsequent `aria-hidden`, native `details/summary`-FAQ, `aria-current`
  in der Navigation. Formulare haben jetzt echte Validierung, sichtbare
  Pflichtfeldmarkierung und Fokusführung. Mobiles Menü mit Escape und
  Fokusrückgabe. Keine horizontale Scrollleiste auf dem Handy (Reflow, 1.4.10).
- **Einschätzung BFSG-Konformität**: Aus technischer Sicht ist die Basis konform.
  Eine förmliche Konformität setzt zusätzlich voraus, dass eine
  Barrierefreiheitserklärung ergänzt wird und echte Inhalte (Bilder, Kontaktdaten)
  vorliegen. Kontraste sind laut Design-System auf AA ausgelegt; nach Einsetzen der
  echten Farben/Bilder final gegenzuprüfen.
- **Offen**: Barrierefreiheitserklärung als eigene Seite ergänzen (Kundenangaben
  zur Feedback-Möglichkeit nötig). Finaler Kontrast-Check mit echten Assets.

### Rechtliche Konformität (0 bis 100)

- **Struktur und Standardtext nach den Fixes: rund 70 von 100.** Die
  Datenschutzerklärung ist jetzt inhaltlich belastbar und bildet den echten Stand
  der Seite ab (Formulare, self-hosted Fonts, keine Tracking-Cookies, daher aktuell
  kein Einwilligungsbanner nötig). Impressum-Struktur ist vollständig inklusive
  § 18 MStV.
- **Abmahnrisiko im aktuellen Zustand: hoch, solange nicht live.** Sobald die Seite
  mit gefüllten Platzhaltern online geht, sinkt das Risiko deutlich. Kritisch wäre
  ein Livegang mit leeren Platzhaltern in Impressum/Datenschutz, das ist zu
  vermeiden.
- **Wichtiger Hinweis**: Kommt später ein Drittdienst dazu (Google Maps-Embed,
  Analyse, Bewertungs-Widget), sind Einwilligungsbanner und ein erweiterter
  Datenschutztext zwingend. Das ist im Datenschutztext bereits vermerkt.
- Die endgültige rechtliche Bewertung ersetzt keine anwaltliche Prüfung.

### Kundensicht (0 bis 100)

- **Nach den Fixes: rund 80 von 100** für die Struktur und Führung. Klarer roter
  Faden von der Startseite über Leistungen zum Kontakt, durchgängige CTAs, Telefon
  auf dem Handy jetzt mit einem Tipp erreichbar, funktionierendes Formular ohne
  falsche Erfolgsmeldung. Das schafft Vertrauen statt Verwirrung.
- **Conversion-Einschätzung**: Mit echten Referenzen, echten Bewertungen und
  gefüllten Kontaktdaten ist eine gute Anfrage-Wahrscheinlichkeit realistisch. Mit
  Platzhaltern würde ein Erstbesucher zögern, weil Name, Adresse und Belege fehlen.
  Der begrenzende Faktor ist also nicht die Umsetzung, sondern das Einpflegen echter,
  vertrauensbildender Inhalte.

## 5. Weiterführende Dokumente

Die vollständige SEO- und SEA-Analyse aus Audit B liegt separat unter
`docs/seo-sea-analyse.md` und bleibt als eigenständiges Dokument erhalten.
