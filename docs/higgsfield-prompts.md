# Bildwelt Malermeisterbetrieb Mario Fais

Dieses Dokument ist die verbindliche Grundlage für alle Visuals der Website.
Teil 1 beschreibt den Style-Guide, Teil 2 enthält die fertigen Prompts.
Jeder Prompt setzt sich zusammen aus dem STYLE-Block und dem Motiv-Block, damit
alle Bilder wirken, als kämen sie aus einem einzigen Fotoshooting mit einem
einzigen Fotografen an einem einzigen Tag.

Generiert wird mit Higgsfield, Modell `gpt_image_2`, Qualität high.
Ablage als WebP unter `public/images/`, Dateiname wie im Code referenziert.

**Stand 16.07.2026:** Alle 19 Bilder sind generiert und liegen im Projekt.
Heroes 1600 px breit, Projekte 1200 x 1200, Porträts 800 x 1000. Jede Datei
unter 150 KB. Wer ein Bild neu generieren will, nimmt den Prompt aus Teil 2 und
konvertiert danach mit
`magick bild.png -resize 1600x -quality 82 -define webp:method=6 ziel.webp`.

---

## Teil 1: Style-Guide

### Grundidee

Kein Handwerker-Stock. Die Bilder erzählen ein ruhiges, sauberes Ergebnis und
einen Betrieb, dem man den Schlüssel zur Wohnung gibt. Vertrauen entsteht durch
Ordnung im Bild, nicht durch Lächeln in die Kamera. Deshalb: aufgeräumte Szenen,
klare Kanten, viel Luft, wenig Requisiten.

### Licht

Weiches, indirektes Tageslicht aus einer klar erkennbaren Richtung, meist von
links seitlich durch ein Fenster. Kontrast niedrig bis mittel, Schatten offen
und weich, keine harten Kanten. Außenaufnahmen bei leicht bedecktem Himmel oder
in der Stunde vor Sonnenuntergang, nie in praller Mittagssonne. Kein Blitz, kein
Kunstlicht-Mischlicht.

### Farbwelt

Basis: warmes Creme, gebrochenes Weiß, heller Kalkputz, natürliches Holz.
Akzent: Terrakotta #A25430, sparsam gesetzt, ein bis zwei Flächen pro Bild.
Sekundär: ein tiefes, entsättigtes Blau in der Arbeitskleidung, als ruhiger
Gegenpol zum Terrakotta.
Keine Signalfarben, kein Neon, keine bunten Eimer und Verpackungen im Bild.

### Kamera, Brennweite, Perspektive

Vollformat, gerechnet auf Blende f/2.8 bis f/4.
- Räume und Fassaden: 35 mm, Kamera auf Augenhöhe, Linien senkrecht gehalten
- Menschen bei der Arbeit: 50 mm, leicht seitlich, nie frontal posiert
- Details und Handwerk: 85 mm, nah, Schärfe auf der Materialkante
- Porträts: 85 mm, Brusthöhe, Augenhöhe

Immer ein natürlicher Beobachterstandpunkt. Keine Froschperspektive, keine
Drohnenansicht, kein Weitwinkel unter 35 mm, keine gekippten Horizonte.

### Komposition

Motiv sitzt außermittig auf einer Drittellinie. Mindestens ein Drittel der
Fläche bleibt ruhige, fast leere Wand oder Himmel, das ist die Luft, in die
später Typo gesetzt werden kann. Vordergrund frei, keine angeschnittenen
Objekte am unteren Rand. Bei Personen bleibt Blickrichtung ins Bild hinein.

### Bildsprache und Casting

Menschen sind Handwerker, keine Models. Alter gemischt 20 bis 55, echte
Gesichter, Gebrauchsspuren erlaubt, saubere schlichte Arbeitskleidung ohne
Aufdrucke. Kein Blick in die Kamera außer bei Porträts. Kein Daumen hoch, keine
verschränkten Arme, keine gestellte Teamaufstellung. Hände immer plausibel am
Werkzeug.

### Nachbearbeitung

Sanfter Filmlook: leicht angehobene Schwarzwerte, milde Highlight-Rolloff,
feines Korn, natürliche Hauttöne, keine Klarheits- oder HDR-Anhebung, keine
Vignette, keine Sättigungsspitzen. Weißabgleich leicht warm.

### STYLE-Block (wörtlich in jeden Prompt)

```
STYLE: editorial architectural photography, single cohesive photo shoot, full-frame
camera, f/2.8-f/4, soft indirect daylight from one clear side window direction, low
contrast, open soft shadows, warm cream and off-white base palette, terracotta accent
#A25430 used sparingly on one or two surfaces, deep desaturated blue workwear as
secondary accent, subject placed off-centre on a third, at least one third of the frame
left as calm empty wall or sky for headline space, vertical lines kept straight, natural
observer eye-level viewpoint, gentle film grade with lifted blacks and soft highlight
rolloff, fine grain, natural skin tones, warm white balance, photorealistic, no text, no
logos, no watermark, no signage.
```

### NEGATIVE-Block (wörtlich in jeden Prompt)

```
NEGATIVE: cartoon, illustration, 3d render, cgi, hdr, oversaturated, neon colours,
cluttered scene, colourful buckets or packaging, harsh flash, midday sun, wide-angle
distortion, tilted horizon, drone view, low angle, posed team lineup, thumbs up, crossed
arms, looking at camera (except portraits), stock photo smile, text, watermark, logo,
brand names, distorted hands, extra fingers, low quality.
```

---

## Teil 2: Prompts je Bild

Aufbau je Bild: `STYLE-Block` + `SHOT:` + `SCENE:` + `NEGATIVE-Block`.

### Heroes, 3:2

| Datei | SHOT | SCENE |
|---|---|---|
| `hero-home` | 50mm, slightly from the side, painter on the left third | A painter in deep desaturated blue workwear rolling fresh off-white paint onto a smooth interior wall, mid-motion, bright empty room, one terracotta wall visible in the background, soft daylight from the left window, calm and unhurried |
| `leistung-innenanstrich` | 35mm, eye level, room corner on the right third | A freshly painted bright living room, crisp clean edge where wall meets ceiling, a roller and a clean paint tray resting neatly on a covered floor, warm soft daylight, serene and tidy, no people |
| `leistung-fassade` | 35mm, eye level, facade on the right two thirds, sky on the left | A newly painted residential house facade in a calm warm neutral tone, evenly rendered surface, a small section of clean scaffolding at the far edge, soft overcast daylight, open sky above |
| `leistung-lack-holzschutz` | 85mm, close, door edge running diagonally | Close-up of a smoothly lacquered wooden interior door with a flawless even finish, a fine brush and a small plain paint can beside it, soft natural light grazing across the surface, craftsmanship detail |
| `leistung-tapezieren-wandgestaltung` | 35mm, eye level, accent wall on the right third | Elegant calm living room with one tastefully wallpapered accent wall in a subtle tone-on-tone pattern, restrained interior styling, soft daylight, generous empty space |
| `leistung-waermedaemmung` | 50mm, slightly from the side, worker on the right third | A worker in deep desaturated blue workwear smoothing fresh render onto an insulated exterior facade, clean modern building, soft overcast daylight, plain sky above |
| `ueber-uns-team` | 35mm, eye level, group loosely on the right | Three painters in clean workwear pausing between tasks in a bright freshly painted room, natural candid conversation, nobody posing, tools set down, soft daylight from the left |
| `karriere-team` | 50mm, from the side, both figures on the left third | A young apprentice and an experienced painter working side by side on a wall, a real teaching moment, hands on tools, bright interior, warm encouraging atmosphere |

### Projekte, 1:1

Ergebnisbilder, keine Menschen, ruhig und sauber.

| Datei | SHOT | SCENE |
|---|---|---|
| `projekt-1` | 35mm, eye level | Freshly painted bright apartment room, clean off-white walls, tidy finished result, soft daylight |
| `projekt-2` | 35mm, eye level | Renovated residential house facade with a fresh even warm neutral coat, clean exterior, soft overcast light |
| `projekt-3` | 85mm, close | Newly lacquered white interior doors, flawless finish, clean frame edge, soft grazing light |
| `projekt-4` | 35mm, eye level | Calm living room with a subtle tone-on-tone wallpapered accent wall, restrained styling |
| `projekt-5` | 35mm, eye level | Freshly painted stairwell with a clean handrail and bright walls, daylight from above |
| `projekt-6` | 35mm, eye level | Insulated and newly rendered house facade, modern and tidy, plain sky |

### Porträts, 3:4

SHOT für alle: `85mm, chest up, eye level, subject on a third, looking calmly at camera`

> GPT Image 2 kennt kein 4:5. Porträts laufen deshalb auf 3:4, das kommt dem
> gewünschten Hochformat am nächsten.

| Datei | Rolle | SCENE |
|---|---|---|
| `team-1` | Mario Fais, Inhaber, Malermeister | Authentic portrait of a master painter in his late forties, clean plain workwear, calm confident expression, soft daylight, plain warm cream background |
| `team-2` | Andreas Berg, Vorarbeiter | Authentic portrait of a foreman painter in his forties, clean plain workwear, friendly grounded expression, soft daylight, plain warm cream background |
| `team-3` | Kevin Roth, Maler | Authentic portrait of a painter in his late twenties, clean plain workwear, open natural expression, soft daylight, plain warm cream background |
| `team-4` | Lena Faber, Auszubildende | Authentic portrait of a female apprentice painter in her early twenties, clean plain workwear, attentive natural expression, soft daylight, plain warm cream background |
| `ansprechpartner` | Karriere-Kontakt | Nicht separat generieren. Der Ansprechpartner auf der Karriereseite ist Mario Fais, also dieselbe Person wie `team-1`. Zwei verschiedene Gesichter für einen Namen fliegen sofort auf. `ansprechpartner.webp` ist deshalb eine Kopie von `team-1.webp`. |

> Generierte Gesichter sind eine Übergangslösung. Sobald echte Aufnahmen des
> Teams vorliegen, ersetzen. Ein erfundenes Gesicht mit echtem Namen unter der
> Rubrik "Unser Team" ist auf Dauer nicht haltbar.

---

## Nicht generieren

**Siegel** (`siegel-meisterbetrieb`, `siegel-innung`, `siegel-zertifikat`):
Hier gehören die echten offiziellen Logos hin. Generierte Siegel wären eine
erfundene Qualifikation, also eine Falschangabe. Kunde liefert Vektor oder PNG.

**Karten** (`karte-einzugsgebiet`, `karte-standort`): Eine erfundene Karte hilft
niemandem bei der Orientierung. Besser eine echte statische Karte mit
markiertem Gebiet, eingebunden mit datenschutzkonformer Einwilligung. Die
aktuellen SVG-Platzhalter bleiben so lange bestehen.
