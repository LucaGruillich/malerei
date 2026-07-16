# Design-System: Malerbetrieb

> Ergebnis aus Session 2. Das visuelle System ist direkt als Code umgesetzt.
> Zentrale Quelle der Tokens ist `app/globals.css` (Tailwind v4, `@theme`).
> Diese Datei beschreibt die Regeln, damit spätere Sessions konsistent bleiben.

## Leitidee

Premium durch Reduktion. Viel Weissraum, klare Typo-Hierarchie, ruhige
Flächen und ein warmer Farbakzent in Terrakotta (#A25430). Die Marke
wirkt über Haltung, nicht über Fülle. Referenzniveau: Pentagram, Instrument.

## Farbsystem

Aufgebaut rund um die Markenfarbe. Das Blau ist bewusst sparsam eingesetzt:
für einen Primär-CTA, den Abschluss-Banner, Akzentlinien und aktive Zustände.
Flächen und Text bleiben neutral, damit der Akzent wirkt.

| Token | Wert | Einsatz |
|-------|------|---------|
| `--color-brand` | `#A25430` | Primär-CTA, Akzente, aktive Navigation |
| `--color-brand-strong` | `#85401F` | Hover und Active auf dem Primär-CTA |
| `--color-brand-soft` | `#D89A72` | helle Akzente |
| `--color-brand-tint` | `#F7EEE7` | zarte Flächen, Icon-Hintergründe, Hover |
| `--color-brand-tint-strong` | `#EFE0D4` | Hover auf getönten Flächen |
| `--color-ink` | `#211C18` | Fliesstext und Überschriften |
| `--color-ink-soft` | `#47403A` | Einleitungen, Sekundärtext |
| `--color-muted` | `#6E6157` | Hilfstext, Captions |
| `--color-line` | `#EAE2DB` | Trennlinien, Rahmen |
| `--color-line-strong` | `#DBD1C7` | Formularrahmen, sekundäre Buttons |
| `--color-surface` | `#FFFFFF` | Karten, Formulare, Header |
| `--color-canvas` | `#FBF7F3` | Seitenhintergrund, warmes Creme |
| `--color-canvas-alt` | `#F5EEE7` | abgesetzte Sektionen im Wechsel |

Kontraste sind auf WCAG 2.2 AA ausgelegt (Ink auf Canvas, Weiss auf Brand).

## Typografie

Zwei Schriften über `next/font/google`, self-hosted ausgeliefert.

- **Display: Bricolage Grotesque** (`--font-display`) für H1 bis H3.
  Humanistisch, charaktervoll, warm, mit leicht negativer Laufweite. Gewicht 500.
- **Text: Inter** (`--font-sans`) für Fliesstext, Navigation, Buttons, Formulare.

Hierarchie (Tailwind-Klassen, responsive):

| Ebene | Klassen | Zweck |
|-------|---------|-------|
| H1 | `text-4xl sm:text-5xl md:text-[3.4rem]` `leading-[1.08]` | Seitentitel, einmal pro Seite |
| H2 | `text-3xl sm:text-4xl` `leading-[1.12]` | Sektionstitel |
| H3 | `text-lg` bis `text-xl` | Karten, Teilüberschriften |
| Intro | `text-lg leading-relaxed text-ink-soft` | Einleitungen |
| Body | Basis, `text-ink` / `text-muted` | Fliesstext |
| Eyebrow | `uppercase tracking-[0.16em] text-brand` | Vorspann mit Akzentstrich |

`text-wrap: balance` für Überschriften, `pretty` für Absätze.

## Abstände, Radius, Schatten

- **Sektions-Rhythmus:** `py-16 sm:py-24`, großzügig und einheitlich. Inhalt
  in `Container` (max. `72rem`, seitlicher Rand `px-5 sm:px-8`).
- **Radius:** `--radius-xs` 4px, `--radius-sm` 8px, `--radius-md` 14px (Karten),
  `--radius-lg` 22px (große Bilder, Banner), `--radius-pill` für Buttons/Pills.
- **Schatten:** `--shadow-sm` (Karten), `--shadow-md` (Hover), `--shadow-lg`
  (Abschluss-Banner, leicht ins Blau getönt).

## Micro-Interactions

Subtil, nie verspielt, immer mit `--ease-out` (`cubic-bezier(.22,1,.36,1)`).

- Buttons und Karten heben sich beim Hover minimal an (`-translate-y-0.5/1`).
- Navigations- und Textlinks nutzen `.link-underline` (Unterstrich wächst ein).
- Sektionsinhalte blenden beim Scrollen sanft ein (`.reveal`), umgesetzt über
  CSS scroll-driven animations (`animation-timeline: view()`), ganz ohne JS.
- **Fallbacks:** In Browsern ohne diese Technik bleibt der Inhalt sichtbar
  (`@supports`). Bei `prefers-reduced-motion: reduce` sind alle Animationen aus.

## Komponentenbibliothek (`components/`)

| Komponente | Zweck |
|-----------|-------|
| `Header` | Sticky-Kopf, Desktop-Navigation, mobiles Menü, Telefon, CTA |
| `Footer` | Zweitnavigation, NAP, Rechtliches |
| `Container` | einheitliche Inhaltsbreite |
| `Section` / `SectionHeading` / `Eyebrow` | Sektionsraster und Köpfe |
| `Button` | Varianten `primary`, `secondary`, `ghost`; Link- oder a-Element |
| `SiteImage` | `next/image`-Wrapper mit Radius, Ratio und Alt-Text |
| `ServiceCard` (Compact/Media) | Leistungskacheln |
| `ServiceIcon` | einheitliche Strich-Icons je Leistung |
| `Steps` | nummerierter Ablauf |
| `Testimonials` | Kundenstimmen |
| `Faq` | native `details`/`summary`, tastaturbedienbar |
| `CtaBand` | Abschluss-Aufruf auf Markenfläche |
| `ContactForm` / `ApplicationForm` | barrierefreie Formulare |
| `ReferenceGallery` | Referenzen mit Filter |
| `Logo`, `JsonLd`, `PageHero` | Marke, strukturierte Daten, Seitenkopf |

## Bildsprache

Alle Visuals werden mit Higgsfield erzeugt (Fotografie-Look, ruhig, hell,
mit warmen Terrakotta-Akzenten passend zu #A25430). Bis dahin liegen gebrandete
SVG-Platzhalter mit korrektem Seitenverhältnis in `public/images/`. Sie werden
konsequent über `SiteImage` (also `next/image`) mit Alt-Text eingebunden.

**Ersetzen:** Higgsfield-Render exportieren und die Datei unter gleichem
Namen/Pfad in `public/images/` ablegen. Der Code bleibt unverändert. Die
Generierungs-Prompts stehen in `docs/higgsfield-prompts.md`.

Seitenverhältnisse: Heroes 3:2, Karten/Projekte 1:1, Team 4:5, Karten 4:3,
Siegel 1:1.

## Barrierefreiheit (BFSG, WCAG 2.2 AA)

Von Anfang an mitgebaut: semantisches HTML, genau eine H1 je Seite, Landmarks
(`header`, `main`, `footer`, `nav` mit Label), Skip-Link, sichtbare Fokusringe
(3px Brand, auf dunklen Flächen weiß), Tastaturbedienung, `aria-current` in der
Navigation, Alt-Texte, Formular-Labels mit `for`-Bezug, `prefers-reduced-motion`.

## Platzhalter (vor Livegang zu ersetzen)

Zentral gepflegt in `lib/site.ts` (Stammdaten), `lib/services.ts` (Leistungen)
und `lib/content.ts` (Referenzen, Team, Bewertungen). Alle offenen Stellen sind
mit `[eckigen Klammern]` markiert. Die Übersicht steht am Ende von Session 2.
