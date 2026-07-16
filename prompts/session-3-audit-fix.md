# Session 3: Audit & Fix (frische Session!)

> Voraussetzung: Fertig gebaute Website aus Session 2. Diese Session MUSS eine neue, frische Session sein (unabhängiger Prüfblick, volles Kontextfenster).
> Enthält deine Original-Prompts 5, 6, 7 und 8 in vollem Wortlaut als vier Audits, plus Prompt 9 integriert in die Fix-Phase. Neu sind nur der Umsetzungs-Rahmen, Phase 2 (Fixen) und Phase 3 (Restbericht).

---

Du bist Qualitätsauditor UND Entwickler. Prüfe die Website in diesem NextJS-Projekt [PROJEKTPFAD] (und falls live: [LIVE-URL]) aus vier Perspektiven.

WICHTIG – UMSETZUNGSPFLICHT, LIES DAS ZUERST: Deine Aufgabe endet NICHT mit einem Bericht. Ein Audit ohne Umsetzung ist ein gescheitertes Ergebnis dieser Session. Der Ablauf ist zwingend: (1) alle vier Audits durchführen, (2) Befunde konsolidieren, (3) alle Befunde der Schweregrade Kritisch und Hoch direkt im Code beheben, (4) Build verifizieren, (5) erst dann den Restbericht schreiben. Führe die vier Audits parallel über Subagenten aus, wo möglich.

---

## Audit A: Barrierefreiheit (Original-Prompt 5)

Nun bitte eine Barrierefreiheitsanalyse.

Bevor du mit der Analyse beginnst, recherchiere die aktuell geltenden Anforderungen für Websites in Deutschland. Berücksichtige insbesondere:
* Barrierefreiheitsstärkungsgesetz (BFSG)
* European Accessibility Act (EAA)
* EN 301 549
* WCAG 2.2 Level AA (mindestens alle relevanten Kriterien, auch wenn gesetzlich teilweise noch WCAG 2.1 referenziert wird)

Nutze diese Anforderungen als Bewertungsgrundlage und bewerte meine Website danach.

Analysiere dabei unter anderem:
* HTML-Semantik
* Überschriften-Hierarchie
* Landmark-Elemente
* Tastaturbedienbarkeit
* Fokus-Indikatoren
* Skip-Links
* Screenreader-Kompatibilität
* ARIA-Attribute (nur dort, wo sinnvoll)
* Formulare und Fehlermeldungen
* Labels und Accessible Names
* Farbkontraste
* Schriftgrößen und Zoom-Verhalten
* Responsive Verhalten
* Touch-Target-Größen
* Bilder und Alt-Texte
* Icons
* Links und Buttons
* Navigation
* Tabellen
* Dialoge/Modals
* Dropdowns
* Accordions
* Carousels
* Animationen und Motion (prefers-reduced-motion)
* Dark Mode
* Medien (Audio/Video, Untertitel etc.)
* PDF-Downloads
* Statusmeldungen (ARIA Live Regions)
* Fehlende oder doppelte IDs
* HTML-Validität
* Performance-Aspekte mit Einfluss auf Accessibility
* SEO-relevante Accessibility-Probleme

Prüfe außerdem speziell Next.js-spezifische Punkte:
* next/image
* next/link
* App Router bzw. Pages Router
* Server Components
* Client Components
* Hydration-Probleme
* Dynamisch gerenderte Inhalte
* Metadata API
* Lazy Loading
* Suspense
* Streaming

Bewerte jeden gefundenen Punkt mit:
* Schweregrad (Kritisch / Hoch / Mittel / Niedrig)
* Betroffene WCAG 2.2 Success Criteria
* Relevanz für BFSG/EN 301 549
* Erklärung des Problems
* Auswirkungen auf Nutzer
* Konkrete Lösung
* Beispielcode (falls sinnvoll)
* Priorität der Umsetzung

Unterscheide klar zwischen:
* Gesetzlich relevanten Problemen
* Best Practices
* Optionalen Verbesserungen

Falls etwas nicht geprüft werden kann, gib dies ausdrücklich an und erkläre warum.

Erstelle am Ende zusätzlich:
1. Eine Zusammenfassung aller Probleme.
2. Eine priorisierte To-do-Liste.
3. Einen geschätzten BFSG-/WCAG-Compliance-Score in Prozent.
4. Eine Einschätzung, ob die Website nach aktuellem Stand voraussichtlich BFSG-konform wäre oder welche Punkte einer Konformität entgegenstehen.

Sei kritisch und suche aktiv nach Problemen. Gehe nicht davon aus, dass bestehender Code korrekt ist.

---

## Audit B: SEO & SEA (Original-Prompt 6)

Du bist ein erfahrener SEO- und SEA-Berater mit Next.js-Kenntnissen. Analysiere das Next.js-Projekt unter [PROJEKTPFAD] gründlich (Code-Ebene) und – falls vorhanden – zusätzlich die live erreichbare Version unter [LIVE-URL]. Erstelle daraus einen strukturierten Aktionsplan.

Gehe dabei wie folgt vor:

1. CODE-ANALYSE (Next.js-spezifisch)
   * Prüfe, ob und wie `next/head` bzw. die Metadata API (`generateMetadata` / `metadata`-Export, App Router) für Title, Meta-Description und Open-Graph-Tags genutzt wird – pro Seite/Route.
   * Prüfe Überschriftenstruktur (H1-H3) in den Komponenten/Seiten.
   * Prüfe interne Verlinkung (`next/link`), URL-/Routing-Struktur (App Router vs. Pages Router), dynamische Routen und deren SEO-Freundlichkeit (sprechende URLs, Slugs).
   * Prüfe Bildoptimierung (`next/image`, Alt-Texte, Lazy Loading).
   * Prüfe, ob `sitemap.xml` und `robots.txt` vorhanden/korrekt generiert werden (z. B. über `app/sitemap.ts` / `app/robots.ts` oder statische Dateien).
   * Prüfe strukturierte Daten (Schema.org / JSON-LD), Canonical-Tags und Sprachauszeichnung (hreflang, falls mehrsprachig).
   * Prüfe Rendering-Strategie (SSR, SSG, ISR, CSR) pro Seite und deren Auswirkung auf Crawlbarkeit und Ladezeit.
   * Identifiziere fehlende oder schwache SEO-Grundlagen im Code.

2. LIVE-ANALYSE (falls [LIVE-URL] vorhanden)
   * Rufe die Startseite und relevante Unterseiten auf.
   * Prüfe, ob die im Code definierten Meta-Daten tatsächlich korrekt ausgeliefert werden.
   * Prüfe Ladezeit-Hinweise, Mobile-Freundlichkeit, SSL und Indexierbarkeit (z. B. `noindex`-Fehler).

3. AI-CRAWLER-ZUGÄNGLICHKEIT (llms.txt, robots.txt & Co.)
   * Prüfe, ob eine `llms.txt` (und ggf. `llms-full.txt`) im Root existiert. Ordne realistisch ein: Diese Datei ist aktuell vor allem für Developer-Tools/APIs/Doku-Seiten relevant, da IDE-Agenten wie Cursor, Claude Code oder GitHub Copilot sie abrufen. Große LLM-Crawler von OpenAI, Google und Anthropic nutzen sie bisher kaum, und Google hat öffentlich erklärt, sie nicht als Ranking-Signal zu werten.
   * Prüfe `robots.txt` auf explizite User-Agent-Regeln für relevante KI-Bots (z. B. GPTBot, ChatGPT-User, ClaudeBot, Google-Extended, PerplexityBot) – das hat aktuell höhere praktische Relevanz als llms.txt.
   * Falls eine `llms.txt` sinnvoll erscheint: Schlage eine minimale Struktur vor (H1 mit Projekt-/Markenname, kurze Zusammenfassung als Blockquote, strukturierte Linkliste zu den 5-10 wichtigsten Seiten).
   * Bewerte den Aufwand-Nutzen klar: geringer Umsetzungsaufwand (ca. halber Tag), aber Stand heute kein nachgewiesener Einfluss auf Sichtbarkeit in ChatGPT/Google AI Overviews. Als „Nice-to-have mit Optionalitätswert" einstufen, nicht als Priorität Nr. 1.

4. RECHERCHE (bei Bedarf Websuche nutzen)
   * Recherchiere die Branche und wichtigsten Wettbewerber der Website.
   * Finde relevante Keywords (Haupt- und Nebenkeywords) inkl. Suchintention (informational, transactional, navigational).
   * Prüfe, wie stark der Wettbewerb um diese Keywords ist und ob Content-Lücken bestehen.
   * Recherchiere aktuelle SEO-Best-Practices und Google-Ranking-Faktoren, die für diese Branche relevant sind.

5. SEO-EMPFEHLUNGEN
   * Erstelle konkrete On-Page-Optimierungsvorschläge (Title, Meta, Content, interne Links, technische SEO).
   * Schlage Content-Ideen vor, die auf identifizierten Keyword-Lücken basieren.
   * Nenne technische Verbesserungen (Ladezeit, Mobile, Crawling/Indexierung, strukturierte Daten).
   * Priorisiere die Empfehlungen nach Aufwand und erwartetem Impact (niedrig/mittel/hoch).

6. SEA-EMPFEHLUNGEN
   * Schlage passende Kampagnentypen vor (Search, Shopping, Display, Performance Max – je nach Geschäftsmodell).
   * Liste relevante Keyword-Vorschläge für bezahlte Kampagnen inkl. geschätzter Wettbewerbsintensität.
   * Gib Hinweise zu Anzeigentexten, Zielgruppenansprache und Landingpage-Optimierung für höhere Conversion-Raten.
   * Nenne eine grobe Budget- und Prioritätenempfehlung für den Einstieg.

7. ZUSAMMENFASSUNG & ROADMAP
   * Fasse die wichtigsten Erkenntnisse in einer kurzen Executive Summary zusammen.
   * Erstelle eine priorisierte Roadmap mit konkreten nächsten Schritten (kurzfristig / mittelfristig / langfristig).

WICHTIG:
* Schreibe das komplette Ergebnis in eine Markdown-Datei (.md) mit klarer Gliederung (Überschriften, Listen, ggf. Tabellen).
* Nutze folgende Struktur für die .md-Datei:

SEO- & SEA-Analyse: [PROJEKTNAME]
1. Executive Summary
2. Code-Analyse (Next.js Status Quo)
3. Live-Analyse (falls verfügbar)
4. AI-Crawler-Zugänglichkeit (llms.txt, robots.txt & Co.)
5. Keyword- & Wettbewerbsrecherche
6. SEO-Empfehlungen
7. SEA-Empfehlungen
8. Priorisierte Roadmap

* Sei konkret und handlungsorientiert, keine allgemeinen Plattitüden.
* Zitiere bei Code-Empfehlungen die betroffene Datei bzw. Route.
* Kennzeichne Annahmen klar, falls Daten nicht öffentlich einsehbar sind (z. B. genaue Traffic-Zahlen, Ad-Budgets, oder falls das Projekt noch nicht live ist).

---

## Audit C: Rechtliches (Original-Prompt 7)

Führe eine rechtliche Plausibilitäts- und Vollständigkeitsprüfung für die Seiten „Impressum" und „Datenschutzerklärung" meiner Website durch.

Beziehe dich dabei auf die aktuell in Deutschland geltenden Anforderungen, insbesondere:
* § 5 DDG (Digitale-Dienste-Gesetz) für das Impressum
* DSGVO (insbesondere Art. 5, 6, 13, 14, 24, 32, 35)
* TTDSG bzw. TDDDG (insbesondere Cookie- und Tracking-Regelungen)
* ePrivacy-Richtlinie (sofern relevant)
* Aktuelle Rechtsprechung in Deutschland und EU im Bereich Online-Datenschutz und Informationspflichten

Schritt 1 – Impressum prüfen
Prüfe das Impressum auf Vollständigkeit, Korrektheit und rechtliche Konformität.
Kontrolliere insbesondere:
* Vollständiger Name des Anbieters
* Rechtsform des Unternehmens
* Vertretungsberechtigte Person(en)
* Anschrift (ladungsfähige Adresse, keine Postfachlösung)
* Kontaktmöglichkeiten (E-Mail, ggf. Telefon)
* Registereintrag (Handelsregister, Vereinsregister etc. inkl. Nummer)
* Umsatzsteuer-ID oder Wirtschafts-ID (falls vorhanden)
* Berufsrechtliche Angaben (falls relevant, z. B. bei freien Berufen)
* Aufsichtsbehörde (falls erforderlich)
* Inhaltliche Verantwortlichkeit nach § 18 MStV
* Haftungsausschlüsse (nur soweit zulässig und sinnvoll)
* Klarheit und Auffindbarkeit des Impressums
* Konsistenz mit anderen Website-Daten (Footer, Kontaktseite etc.)

Gib an:
* Welche Pflichtangaben fehlen
* Welche Angaben unklar oder potenziell fehlerhaft sind
* Welche Angaben rechtlich problematisch sein könnten
* Welche Formulierungen überarbeitet werden sollten

Schritt 2 – Datenschutzerklärung prüfen
Analysiere die Datenschutzerklärung vollständig auf DSGVO-Konformität.
Prüfe insbesondere:

Allgemeine Anforderungen
* Transparenz und Verständlichkeit (Art. 12 DSGVO)
* Vollständigkeit der Informationspflichten (Art. 13/14 DSGVO)
* Rechtsgrundlagen der Verarbeitung
* Speicherfristen
* Zwecke der Datenverarbeitung
* Datenminimierung

Technische und organisatorische Datenverarbeitung
* Server-Logfiles
* Hosting-Anbieter
* CDN-Nutzung
* E-Mail-Verarbeitung
* Formularübermittlungen
* Datenbank- und CRM-Systeme

Tracking und Analytics
* Google Analytics / Matomo / andere Tracking-Tools
* IP-Anonymisierung
* Cookie-Consent-Management
* Einwilligungsmanagement (Opt-in / Opt-out)
* Rechtsgrundlage für Tracking

Marketing & externe Dienste
* Newsletter-Systeme
* CRM-Tools
* Zahlungsdienstleister
* Social Media Plugins
* Embeds (YouTube, Maps etc.)

Cookies & Consent
* Cookie-Kategorisierung (notwendig / funktional / marketing / statistisch)
* Einwilligungsmechanismen
* Widerrufsmöglichkeiten
* Speicherdauer von Cookies

Betroffenenrechte
* Auskunft
* Löschung
* Berichtigung
* Einschränkung der Verarbeitung
* Datenübertragbarkeit
* Widerspruchsrecht
* Beschwerderecht bei Aufsichtsbehörde

Internationale Datenübermittlung
* Drittlandtransfers (insb. USA)
* Angemessenheitsbeschluss oder Standardvertragsklauseln

Schritt 3 – Risikoanalyse
Bewerte alle gefundenen Probleme nach:
* Kritisch (rechtlich hohes Risiko / Abmahngefahr)
* Hoch
* Mittel
* Niedrig

Erkläre jeweils:
* Warum es ein Problem ist
* Welche rechtliche Grundlage betroffen ist
* Welche Risiken bestehen (z. B. Abmahnung, Bußgeld, Unwirksamkeit von Einwilligungen)
* Wie es konkret behoben werden kann

Schritt 4 – Abgleich mit tatsächlicher Website
Falls möglich, prüfe zusätzlich:
* Ob Impressum und Datenschutz auf jeder Seite erreichbar sind
* Ob Cookie-Banner korrekt implementiert ist
* Ob Tracking erst nach Einwilligung erfolgt
* Ob externe Skripte korrekt eingebunden sind

Ausgabeformat
1. Impressum-Check:
   * Fehlerliste
   * fehlende Pflichtangaben
   * konkrete Korrekturvorschläge
2. Datenschutz-Check:
   * strukturierte Analyse nach Kategorien
   * identifizierte Lücken
   * problematische Passagen
3. Risikoübersicht:
   * priorisierte Liste aller rechtlichen Risiken
4. Konkrete To-do-Liste:
   * sofortige Maßnahmen
   * mittelfristige Anpassungen
   * optionale Optimierungen
5. Gesamtbewertung:
   * grobe Einschätzung der rechtlichen Konformität (0–100)
   * Einschätzung des Abmahnrisikos

Arbeite strikt kritisch, detailliert und ohne Annahmen zugunsten der Website. Gehe davon aus, dass jede Unklarheit potenziell ein rechtliches Risiko darstellen kann.

---

## Audit D: Kundensicht (Original-Prompt 8)

Analysiere meine gesamte Website Seite für Seite aus der Perspektive eines potenziellen Kunden, der mein Unternehmen und meine Leistungen zum ersten Mal besucht.

Versetze dich vollständig in die Rolle eines echten Besuchers. Hinterfrage jede Seite kritisch und bewerte, ob sie logisch aufgebaut, verständlich und überzeugend ist.

Prüfe jede einzelne Unterseite separat und gehe dabei systematisch vor.

Für jede Seite analysiere unter anderem:
* Ist sofort klar, worum es auf dieser Seite geht?
* Wird der Zweck der Seite innerhalb weniger Sekunden verständlich?
* Sind alle Inhalte logisch aufgebaut?
* Gibt es Informationen, die fehlen?
* Entstehen Fragen, die unbeantwortet bleiben?
* Muss der Besucher Annahmen treffen?
* Gibt es unklare Formulierungen?
* Wird Fachsprache verwendet, die ein Kunde möglicherweise nicht versteht?
* Werden wichtige Begriffe erklärt?
* Sind die Inhalte vollständig?
* Gibt es widersprüchliche Aussagen?
* Sind Aussagen nachvollziehbar?
* Werden Behauptungen ausreichend begründet?
* Ist der Nutzen für den Kunden klar erkennbar?
* Werden Vorteile konkret erklärt oder nur behauptet?
* Gibt es Informationen, die Kunden typischerweise erwarten würden, aber nicht finden?
* Ist klar, was der nächste Schritt sein soll?
* Sind Call-to-Actions sinnvoll platziert?
* Gibt es Stellen, an denen Besucher abspringen könnten?
* Gibt es Unsicherheiten oder Vertrauensprobleme?
* Fehlen Beispiele, Referenzen oder andere vertrauensbildende Inhalte?
* Gibt es Stellen, an denen zusätzliche Erklärungen hilfreich wären?
* Ist die Navigation zur nächsten relevanten Seite logisch?
* Gibt es doppelte Informationen oder unnötige Wiederholungen?
* Ist die Informationsmenge angemessen oder fehlen wichtige Details?
* Ist die Reihenfolge der Inhalte sinnvoll?
* Werden mögliche Einwände des Kunden beantwortet?
* Welche Informationen würden Kauf- oder Kontaktentscheidungen erleichtern?

Denke bei jeder Seite bewusst darüber nach:
* Welche Fragen hätte ich als Erstbesucher?
* Welche Zweifel hätte ich?
* Was würde mich verunsichern?
* Was müsste ich noch wissen, bevor ich Kontakt aufnehme oder kaufe?
* Welche Informationen suche ich instinktiv als Nächstes?
* An welcher Stelle würde ich die Website möglicherweise verlassen?
* Welche Inhalte wirken überflüssig?
* Welche Inhalte fehlen vollständig?

Berücksichtige unterschiedliche Besuchertypen, z. B.:
* Interessenten mit wenig Vorwissen
* Informierte Kunden
* Preisbewusste Kunden
* Skeptische Kunden
* Kunden, die verschiedene Anbieter vergleichen
* Kunden, die möglichst schnell eine Entscheidung treffen möchten

Für jede Unterseite liefere:
1. Kurze Zusammenfassung der Seite.
2. Was ein Erstbesucher wahrscheinlich versteht.
3. Welche Fragen offen bleiben.
4. Welche Informationen fehlen.
5. Welche Inhalte missverständlich sind.
6. Welche Inhalte Vertrauen schaffen.
7. Welche Inhalte Vertrauen kosten.
8. Welche Stellen verbessert werden sollten.
9. Konkrete Verbesserungsvorschläge.
10. Falls sinnvoll konkrete Textvorschläge.
11. Priorität der Verbesserung (Kritisch / Hoch / Mittel / Niedrig).

Betrachte anschließend zusätzlich die gesamte Website als Customer Journey.
Analysiere dabei:
* Ist die Navigation logisch?
* Fehlen Verknüpfungen zwischen Seiten?
* Wird der Besucher sinnvoll durch die Website geführt?
* Ist jederzeit klar, wo er sich befindet?
* Gibt es Informationslücken zwischen einzelnen Seiten?
* Werden Inhalte unnötig wiederholt?
* Gibt es Sackgassen?
* Sind wichtige Seiten schwer auffindbar?
* Ist der Weg bis zur Kontaktaufnahme oder Conversion möglichst einfach?

Erstelle am Ende zusätzlich:
1. Die 20 wichtigsten offenen Kundenfragen, die aktuell nicht ausreichend beantwortet werden.
2. Die größten Verständlichkeitsprobleme.
3. Die größten Vertrauensprobleme.
4. Die größten Informationslücken.
5. Eine priorisierte To-do-Liste aller Verbesserungen.
6. Eine Gesamtbewertung der Website aus Kundensicht (0–100).
7. Eine Einschätzung, wie wahrscheinlich ein Erstbesucher nach dem Lesen aller Seiten Vertrauen fasst und eine Kontaktaufnahme oder Conversion erfolgt.

Sei konsequent kritisch. Gehe nicht davon aus, dass Inhalte vollständig oder verständlich sind. Suche aktiv nach Unklarheiten, Informationslücken, unausgesprochenen Annahmen und potenziellen Kundenfragen.

---

## Phase 2: Konsolidieren & Fixen (PFLICHT – nicht überspringen)

1. Führe alle Befunde aus den Audits A–D in einer Tabelle zusammen: Befund, Quelle, Schweregrad, betroffene Datei/Route.
2. Dedupliziere (z. B. fehlende Alt-Texte tauchen in A und B auf).
3. **Behebe JEDEN Befund mit Schweregrad Kritisch oder Hoch direkt im Code.** Dazu gehören auch Text- und Inhaltsänderungen aus Audit D. Rechtliche Angaben, die nur der Kunde liefern kann, als [PLATZHALTER: was fehlt] einbauen.
4. Überarbeite dabei alle Texte der Seite zusätzlich mit einem Ziel (Original-Prompt 9): Entferne alle typischen KI-Schreibmuster, die durch Gedankenstriche, Bindestrich-Einschübe oder ähnliche Satzkonstruktionen entstehen. Regeln: Entferne Gedankenstriche (– oder —) vollständig. Ersetze sie durch natürliche Satzstrukturen, Kommas oder neue Sätze. Verwende keine künstlich wirkenden Einschübe. Erhalte Bedeutung, Tonalität und Aussage zu 100 %. Schreibe flüssig, menschlich und natürlich. Vermeide unnötig perfekte oder werbliche Formulierungen. Lass den Text so wirken, als hätte ihn ein erfahrener Mensch spontan geschrieben. Verändere keine fachlichen Inhalte.
5. Mittlere Befunde: beheben, wenn der Aufwand gering ist, sonst dokumentieren.
6. Führe `npm run build` aus und stelle sicher, dass alles fehlerfrei läuft.

## Phase 3: Restbericht (docs/audit-bericht.md)

Erst NACH den Fixes. Inhalt:
1. Was wurde behoben (kompakte Liste mit Dateien).
2. Was bleibt offen und warum (inkl. aller [PLATZHALTER] für den Kunden).
3. Priorisierte To-do-Liste der offenen Punkte.
4. Die von den Audits geforderten Scores und Einschätzungen, bewertet NACH den Fixes (BFSG-/WCAG-Compliance in %, rechtliche Konformität 0–100 mit Abmahnrisiko, Kundensicht 0–100 mit Conversion-Einschätzung).
5. Die SEO-/SEA-Analyse-Datei aus Audit B bleibt als separates Dokument erhalten.
