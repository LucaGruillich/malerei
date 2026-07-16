# SEO- & SEA-Analyse: Malerbetrieb

> Ergebnis aus Session 3, Audit B. Stand: 16.07.2026.
> Grundlage ist die Code-Analyse des Next.js-Projekts. Eine Live-Analyse war
> nicht möglich, da die Seite noch nicht öffentlich erreichbar ist
> (Platzhalter-Domain `www.malerbetrieb.example`). Alle marktbezogenen Angaben
> sind als Annahme gekennzeichnet, solange keine echten Kundendaten und keine
> Live-URL vorliegen.

## 1. Executive Summary

Die technische SEO-Grundlage ist für einen lokalen Handwerksbetrieb bereits sehr
solide. Next.js App Router, saubere Metadata pro Route, eine korrekte Sitemap,
eine robots-Route, strukturierte Daten (LocalBusiness/HousePainter und FAQ) sowie
durchgängige Alt-Texte sind vorhanden. Der größte Hebel liegt nicht in der Technik,
sondern in den Inhalten: Sobald echte Ortsnamen, echte Referenzen mit Ortsbezug und
echte Bewertungen eingepflegt sind, kann die Seite lokal ranken.

In Session 3 wurden im Zuge des Audits zwei SEO-relevante Punkte direkt behoben:

1. Die strukturierten Daten haben zuvor Platzhalterwerte ausgegeben (z. B.
   `aggregateRating` mit `[X,X]`). Das ist jetzt abgesichert: Solange Werte
   Platzhalter sind, werden die betroffenen Felder gar nicht erst ausgegeben.
   Das verhindert Rich-Result-Fehler und ein mögliches Risiko wegen erfundener
   Bewertungen.
2. Impressum und Datenschutz (beide `noindex`) wurden aus der Sitemap entfernt,
   damit die Sitemap nur indexierbare Seiten listet.

Zusätzlich wurde auf den Leistungs-Detailseiten ein `BreadcrumbList`-JSON-LD
ergänzt, passend zur bereits vorhandenen Brotkrumen-Navigation.

Einschätzung technische SEO-Reife nach den Fixes: rund 85 von 100. Die restlichen
Punkte hängen an echten Inhalten und am Livegang (echte Domain, Google Business
Profile, echte Bewertungen).

## 2. Code-Analyse (Next.js Status Quo)

### Positiv (bereits gut gelöst)

- **Metadata API konsequent genutzt.** `app/layout.tsx` setzt `metadataBase`,
  einen Title-Template (`%s | [Firmenname]`), Default-Description, Open-Graph und
  `robots`. Jede Unterseite liefert einen eigenen `metadata`-Export mit Title,
  Description und Canonical. Die Leistungs-Detailseite nutzt `generateMetadata`
  dynamisch pro Slug.
- **Saubere URL-Struktur.** Sprechende, deutsche Slugs (`/leistungen/fassade`,
  `/einzugsgebiet`, `/karriere`). Dynamische Route `leistungen/[slug]` mit
  `generateStaticParams` und `dynamicParams = false`, wird also statisch
  vorgerendert (SSG). Gut für Crawlbarkeit und Ladezeit.
- **Überschriftenstruktur.** Pro Seite genau eine H1, danach H2/H3 in sinnvoller
  Hierarchie. Auf den Leistungsseiten enthält die H1 den Regionsbezug
  (`Fassade & Außenanstrich in [Region]`), was für lokale Suche ideal ist.
- **Interne Verlinkung.** `next/link` durchgängig, klare Verweise zwischen
  Startseite, Leistungsübersicht, Detailseiten, Referenzen und Kontakt.
  Leistungs-Detailseiten verlinken untereinander über den `related`-Verweis.
- **Bilder.** Alle über `next/image` (`components/SiteImage.tsx`) mit `width`,
  `height`, `sizes` und aussagekräftigen Alt-Texten. `priority` nur auf den
  Hero-Bildern. Aktuell noch SVG-Platzhalter, die später durch echte Visuals am
  selben Pfad ersetzt werden.
- **Sitemap & robots.** `app/sitemap.ts` und `app/robots.ts` generieren beides
  dynamisch aus den zentralen Daten. Sitemap mit sinnvollen Prioritäten
  (Startseite 1.0, Kontakt 0.9, Leistungen 0.8).
- **Strukturierte Daten.** `HousePainter` (erweitert `LocalBusiness`) global im
  Layout, `FAQPage` auf den Leistungsseiten, jetzt zusätzlich `BreadcrumbList`.

### Behoben in Session 3

- **Strukturierte Daten mit Platzhaltern (vorher Hoch).** `components/JsonLd.tsx`
  gab `aggregateRating`, `foundingDate` und `areaServed` auch mit Platzhaltern
  wie `[X,X]` oder `[Ort 1]` aus. Jetzt filtert eine Prüffunktion Platzhalter,
  betroffene Felder erscheinen erst mit echten Werten. Datei: `components/JsonLd.tsx`.
- **Sitemap listete noindex-Seiten (vorher Mittel).** Impressum und Datenschutz
  sind nicht mehr enthalten. Datei: `app/sitemap.ts`.
- **Breadcrumb ohne strukturierte Daten (vorher Niedrig).** `BreadcrumbList`-JSON-LD
  ergänzt. Datei: `app/leistungen/[slug]/page.tsx`.

### Offene technische Punkte (nicht kritisch)

- **Open-Graph-Bild fehlt.** Es ist kein `openGraph.images` gesetzt. Beim Teilen
  in Messengern und sozialen Netzen fehlt damit das Vorschaubild. Sinnvoll, sobald
  ein echtes Marken- oder Projektbild vorliegt (Format 1200x630 px, als Raster,
  nicht SVG). Impact mittel, Aufwand gering.
- **Platzhalter-Domain.** `lib/site.ts` nutzt `www.malerbetrieb.example`. Vor
  Livegang auf die echte Domain setzen, damit `metadataBase`, Canonicals, Sitemap
  und JSON-LD korrekt sind.
- **`robots.ts` ohne KI-Bot-Regeln.** Aktuell `allow: "/"` für alle. Siehe
  Abschnitt 4.

## 3. Live-Analyse

Nicht durchführbar. Die Seite ist noch nicht öffentlich erreichbar. Nach dem
Livegang zu prüfen:

- Werden die im Code definierten Meta-Daten korrekt ausgeliefert (Title,
  Description, Canonical, OG)?
- Kein versehentliches `noindex` auf indexierbaren Seiten.
- SSL aktiv, sauberes Weiterleiten von `http` auf `https` und ggf. `www`-Variante.
- Core Web Vitals prüfen (LCP der Hero-Bilder, sobald echte Fotos statt SVG
  ausgeliefert werden). Bildgrößen und Formate (AVIF/WebP über `next/image`)
  kontrollieren.
- Rich-Result-Test und Schema-Validator für die JSON-LD-Ausgabe.

## 4. AI-Crawler-Zugänglichkeit (llms.txt, robots.txt & Co.)

- **`llms.txt`.** Nicht vorhanden. Realistische Einordnung: Diese Datei ist heute
  vor allem für Developer-Tools und Doku-Seiten relevant. Für einen lokalen
  Malerbetrieb ist der nachgewiesene Nutzen für die Sichtbarkeit in ChatGPT oder
  Google AI Overviews gering. Einstufung als „Nice-to-have mit Optionalitätswert",
  nicht als Priorität. Empfehlung: erst nach Livegang mit echten Inhalten anlegen,
  falls überhaupt. Struktur dann: H1 mit Betriebsname, kurze Zusammenfassung als
  Blockquote, Linkliste zu den 5 bis 10 wichtigsten Seiten.
- **`robots.txt` und KI-Bots.** Die generierte robots-Route erlaubt aktuell allen
  Bots alles. Das ist für maximale Sichtbarkeit in Ordnung. Wenn der Betrieb das
  Training von KI-Modellen auf den eigenen Inhalten einschränken möchte, lassen
  sich gezielt Regeln für `GPTBot`, `ClaudeBot`, `Google-Extended`,
  `CCBot` und `PerplexityBot` ergänzen. Das ist eine Geschäftsentscheidung des
  Kunden, kein technischer Mangel. Höhere praktische Relevanz als `llms.txt`.

## 5. Keyword- & Wettbewerbsrecherche

> Annahme: lokaler, inhabergeführter Maler- und Lackiererbetrieb mit begrenztem
> Einzugsgebiet. Ohne echte Region und ohne Keyword-Tool-Zugang sind Suchvolumina
> nicht seriös bezifferbar. Die folgende Struktur ist auf die echte Region
> anzuwenden.

### Suchintention und Keyword-Cluster

- **Transaktional, lokal (höchste Priorität).** „Maler [Ort]", „Malerbetrieb
  [Ort]", „Maler in der Nähe", „Fassade streichen [Ort]", „Wohnung streichen
  lassen [Ort]", „Malerkosten [Ort]". Genau darauf zahlen die Leistungs- und
  Ortsseiten ein. Die H1-Struktur mit `... in [Region]` ist dafür passend.
- **Leistungsspezifisch.** „Wärmedämmung WDVS [Ort]", „Tapezieren lassen [Ort]",
  „Türen lackieren lassen", „Fassadenanstrich Kosten". Die fünf Leistungsseiten
  decken diese Cluster ab.
- **Informational (Content-Chance).** „Wie oft Fassade streichen", „Wann Fassade
  streichen Jahreszeit", „Raufaser oder Vlies", „Kosten Wohnung streichen pro qm",
  „lohnt sich Wärmedämmung". Die FAQ-Blöcke greifen einige davon bereits auf.
- **Karriere.** „Maler Ausbildung [Ort]", „Malerhelfer Job [Ort]". Die
  Karriereseite bedient das.

### Wettbewerb und Content-Lücken

- Lokaler Wettbewerb sind andere Malerbetriebe der Region plus Portale
  (MyHammer, Check24 Profis, Handwerkskammer-Verzeichnisse). Gegen Portale gewinnt
  man mit Vertrauen und Ortsbezug, nicht mit Masse.
- **Content-Lücken (Annahme):** Ratgeber-Inhalte zu Kosten und Ablauf, echte
  Referenzen mit Ortsnamen, eine echte Ortsseiten-Strategie, wenn mehrere klar
  abgegrenzte Orte bedient werden. Die aktuelle Einzugsgebietsseite ist eine gute
  Basis, ließe sich pro Kernort zu eigenständigen Landingpages ausbauen, sobald
  Bedarf und Kapazität da sind.

## 6. SEO-Empfehlungen (priorisiert)

| Prio | Maßnahme | Impact | Aufwand | Status |
|------|----------|--------|---------|--------|
| Hoch | Echte Stammdaten in `lib/site.ts` (Name, Adresse, Ort, PLZ, Bewertungen, Gründungsjahr) einpflegen. Erst damit greifen LocalBusiness-Schema und lokale Rankings. | hoch | gering | offen (Kundendaten) |
| Hoch | Google Business Profile anlegen/verknüpfen, NAP-Daten (Name, Adresse, Telefon) identisch zur Website halten. | hoch | mittel | offen (Kunde) |
| Hoch | Echte Referenzfotos mit Ortsbezug statt SVG-Platzhalter. Alt-Texte mit Ort. | hoch | mittel | offen (Kunde) |
| Mittel | OG-Bild (1200x630) ergänzen und in `layout.tsx` als Default `openGraph.images` setzen. | mittel | gering | offen |
| Mittel | Echte Bewertungen einsammeln; dann greift `aggregateRating` automatisch. | mittel | mittel | offen (Kunde) |
| Mittel | Ratgeber-/FAQ-Inhalte zu Kosten und Ablauf ausbauen (informational Keywords). | mittel | mittel | offen |
| Niedrig | Pro Kernort eigene Ortsseite, falls mehrere Orte strategisch wichtig sind. | mittel | hoch | optional |
| Niedrig | Entscheidung zu KI-Bot-Regeln in `robots.ts`. | niedrig | gering | optional |

## 7. SEA-Empfehlungen

> Annahmen, da weder Budget noch Region noch Conversion-Daten vorliegen.

- **Kampagnentyp.** Für einen lokalen Dienstleister ist **Google Search** der
  Einstieg, ergänzt um **Performance Max** mit Standorterweiterung, sobald erste
  Conversion-Daten vorliegen. Shopping entfällt (kein Produktverkauf). Display nur
  als Remarketing, nachrangig.
- **Keywords (Search, exakt/Phrase).** „maler [ort]", „malerbetrieb [ort]",
  „fassade streichen [ort]", „wohnung streichen lassen [ort]", „wärmedämmung
  [ort]". Wettbewerb lokal meist mittel, CPCs für Handwerksleistungen regional
  moderat bis erhöht. Negativ-Keywords: „job", „gehalt", „selber", „anleitung",
  „stellenangebote" (außer für eine separate Recruiting-Kampagne).
- **Anzeigentexte.** Nutzen und Vertrauen betonen: „Meisterbetrieb", „sauber &
  termintreu", „kostenloses Angebot", Ortsbezug in Überschrift 1. Sitelinks zu
  Leistungen, Referenzen, Kontakt. Anruf-Erweiterung mit der Telefonnummer, da
  viele Handwerksanfragen telefonisch laufen.
- **Landingpage.** Für Search-Anzeigen direkt auf die passende Leistungsseite oder
  auf `/kontakt` leiten, nicht auf die Startseite. Das kurze Formular und der
  sichtbare Anruf-Button unterstützen die Conversion. Der in Session 3 ergänzte
  Anruf-Button im mobilen Header hilft hier zusätzlich.
- **Budget & Priorität (Einstieg).** Klein starten, z. B. eine Search-Kampagne mit
  begrenztem Tagesbudget auf die zwei stärksten Leistungen und den Kernort,
  Conversion-Tracking (Formularabsendung und Klick auf Telefonnummer) von Anfang an
  einrichten. Erst nach belastbaren Daten skalieren. Genaue Beträge erst mit
  echten Region- und Wettbewerbsdaten festlegen.

## 8. Priorisierte Roadmap

**Kurzfristig (vor bzw. direkt zum Livegang)**

1. Echte Stammdaten in `lib/site.ts`, echte Domain setzen.
2. Impressum und Datenschutz mit echten Angaben füllen (siehe Rechts-Audit).
3. Google Business Profile einrichten, NAP konsistent.
4. Nach Livegang: Search Console und Sitemap einreichen, Rich-Result-Test,
   Indexierung prüfen.

**Mittelfristig (erste Wochen/Monate)**

5. Echte Referenzfotos mit Ortsbezug, OG-Bild ergänzen.
6. Bewertungen aktiv einsammeln (dann greift `aggregateRating`).
7. Google-Ads-Einstieg mit Conversion-Tracking, klein und messbar.
8. Ratgeber-/FAQ-Inhalte ausbauen.

**Langfristig (laufend)**

9. Bei Bedarf Ortsseiten-Strategie, weitere Ratgeberinhalte.
10. Laufendes Monitoring von Rankings, CWV und Ads-Performance, iterativ optimieren.
