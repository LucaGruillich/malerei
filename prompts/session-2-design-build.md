# Session 2: Design-System & Build

> Voraussetzung: Freigegebene Wireframes und Konzept aus Session 1 (docs/konzept.md, docs/wireframes/).
> Enthält deine Original-Prompts 4 und 3 – bewusst in dieser Reihenfolge: erst Design-System definieren, dann damit bauen. So wird nichts doppelt gebaut. Prompt 4 wurde minimal angepasst (statt „bestehende Website verbessern" jetzt „Design-System vorab definieren"), alle Design-Anforderungen sind im Original-Wortlaut erhalten. Prompt 9 (Schreibregeln) ist über die CLAUDE.md integriert.

---

WICHTIG – UMSETZUNGSPFLICHT: Am Ende dieser Session ist die Website vollständig gebaut und lauffähig (`npm run build` ohne Fehler). Kein Konzeptpapier, keine Vorschlagsliste. Jede Design-Entscheidung wird direkt im Code umgesetzt.

## Teil 1: Design-System (Original-Prompt 4, angepasst auf „vor dem Build")

Du bist ein Senior Web-Designer einer High-End Digitalagentur. Deine Aufgabe ist es, das visuelle Design auf das Niveau einer Premium-Agentur zu heben – vergleichbar mit Studios wie Pentagram, Instrument oder Resn.

KONTEXT:
* Struktur, Inhalte und Sektionen sind durch die freigegebenen Wireframes final – NICHT die Informationsarchitektur verändern, sondern ausschließlich das visuelle Design definieren
* Logo liegt im Asset-Ordner und muss konsistent eingebunden werden
* Primärfarbe: #01008C (als Akzentfarbe gezielt einsetzen, nicht überall)
* Visuals/Bilder/Grafiken sollen mit Higgsfield generiert werden

DESIGN-ANFORDERUNGEN:
1. Typografie: Definiere eine klare Schrift-Hierarchie (Headline, Subheadline, Body) mit großzügigem Zeilenabstand und bewusster Skalierung
2. Farbsystem: Baue eine durchdachte Palette rund um #01008C auf (Neutraltöne, Kontrastfarben, Hover-/Active-States)
3. Whitespace: Nutze großzügige Abstände statt Fülle – Premium-Wirkung entsteht durch Reduktion
4. Micro-Interactions: Sanfte Hover-Effekte, Scroll-Animationen, Transitions (subtil, nicht verspielt)
5. Bildsprache: Erstelle mit Higgsfield hochwertige, stilistisch einheitliche Visuals (Fotografie-Look, Illustrationen oder 3D – Stil siehe CLAUDE.md), die zur Markenfarbe passen
6. Konsistenz: Einheitliche Border-Radius-Werte, Schatten, Button-Styles und Icon-Sprache über alle Sektionen hinweg
7. Responsive Feinschliff: Achte auf saubere Umbrüche und Proportionen auf Mobile/Tablet/Desktop

VORGEHEN:
* Gehe Sektion für Sektion durch die bestehenden Wireframes
* Definiere für jede Sektion konkret Layout, Bildeinsatz, Typografie und Farbeinsatz
* Für jedes benötigte Visual: Lege einen Platzhalter mit korrektem Seitenverhältnis an und schreibe einen fertigen Higgsfield-Generierungs-Prompt in `docs/higgsfield-prompts.md` (stilistisch einheitlich, passend zur Markenfarbe und zum jeweiligen Kontext)
* Achte darauf, dass das Logo und die Markenfarbe als roter Faden erkennbar bleiben, ohne aufdringlich zu wirken

ZIEL: Eine Website, die wie das Ergebnis einer erfahrenen Kreativagentur wirkt – hochwertig, reduziert, markant, mit klarer visueller Identität.

UMSETZUNG: Implementiere das Design-System direkt als Code-Grundlage (z. B. Tailwind-Config, CSS-Variablen, Basis-Komponenten für Buttons, Cards, Sektionen) und dokumentiere es kurz in `docs/design-system.md`.

## Teil 2: Build (Original-Prompt 3)

Erstelle eine Website basierend auf den Wireframes in `docs/wireframes/` im vorhandenen NextJS-Projekt.

Dabei gilt:
* Nutze für jede Seite und Sektion konsequent das in Teil 1 definierte Design-System.
* Schreibe alle Texte final und vollständig (keine Lorem-Ipsum-Reste), streng nach den Schreibregeln der CLAUDE.md, und beantworte die im Konzept definierten Kundenfragen je Seite.
* Baue technische Grundlagen von Anfang an mit: semantisches HTML, korrekte Überschriften-Hierarchie, Landmarks, Skip-Link, sichtbare Fokus-Indikatoren, Tastaturbedienbarkeit, `prefers-reduced-motion`-Fallbacks, Metadata API pro Route (Title, Description, Open Graph), `app/sitemap.ts`, `app/robots.ts`, Canonical-Tags, LocalBusiness-Schema (JSON-LD), `next/image` mit Alt-Texten, `next/link` für interne Links, sprechende URLs.
* Lege Seiten für Impressum und Datenschutz an (Angaben aus der CLAUDE.md, fehlende Angaben als [PLATZHALTER] markieren).

## Abschluss

1. Führe `npm run build` aus und behebe alle Fehler.
2. Liste kurz: alle erstellten Routen, offene [PLATZHALTER], benötigte Higgsfield-Bilder.
3. Kein weiterer Analyse-Output. Die Prüfung erfolgt in Session 3.
