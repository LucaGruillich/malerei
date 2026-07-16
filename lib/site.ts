/*
  Zentrale Stammdaten des Betriebs.
  Platzhalter in eckigen Klammern werden vom Kunden vor dem Livegang
  mit echten Angaben ersetzt (siehe docs/design-system.md, Abschnitt Platzhalter).
*/

export const site = {
  name: "Malermeisterbetrieb Mario Fais",
  shortName: "Malermeisterbetrieb",
  // Kompakte Wortmarke fuers Logo, damit der lange volle Name den Header
  // nicht umbrechen laesst. Der volle Name steht in Titel, Footer und JSON-LD.
  owner: "Mario Fais",
  legalName: "Malermeisterbetrieb Mario Fais",
  claim: "Malerarbeiten aus Meisterhand für Erftstadt und Umgebung.",
  region: "Erftstadt",
  foundingYear: "[Jahr]",
  // Platzhalter-Domain (reservierte .example-TLD). Vor Livegang auf die
  // echte Domain setzen. Wird fuer Metadata, Canonical und Sitemap genutzt.
  url: "https://www.malerbetrieb.example",
  email: "info@[betrieb].de",
  phone: "0123 456789",
  // Maschinenlesbar fuer tel:-Links, Platzhalter im internationalen Format
  phoneHref: "+4912345678900",
  street: "[Straße und Hausnummer]",
  postalCode: "50374",
  city: "Erftstadt",
  openingHours: "Mo bis Fr, 7:30 bis 16:30 Uhr",
  ratingValue: "[X,X]",
  ratingCount: "[X]",
} as const;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Einzugsgebiet", href: "/einzugsgebiet" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/kontakt" },
];

export const legalNav: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
];

// Orte im Einzugsgebiet: Stadtteile von Erftstadt und angrenzende Orte im
// Rhein-Erft-Kreis. Bei Bedarf ergaenzt der Betrieb weitere Orte.
export const serviceAreas: string[] = [
  "Erftstadt",
  "Lechenich",
  "Liblar",
  "Kierdorf",
  "Köttingen",
  "Gymnich",
  "Friesheim",
  "Weilerswist",
  "Brühl",
  "Hürth",
  "Kerpen",
  "Rhein-Erft-Kreis",
];
