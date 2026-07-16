import { services } from "@/lib/services";
import { serviceAreas, site } from "@/lib/site";

/*
  Strukturierte Daten fuer lokale Sichtbarkeit.
  HousePainter erweitert LocalBusiness und passt fachlich zum Malerbetrieb.

  Wichtig: Solange die Stammdaten noch Platzhalter enthalten (z. B. "[Jahr]"
  oder "[X,X]"), werden die betroffenen Felder NICHT ausgegeben. Ungueltige
  oder erfundene Werte in aggregateRating koennten sonst als Rich-Result-Fehler
  oder als Verstoss gegen die Google-Richtlinien gewertet werden.
*/

// true, wenn der Wert noch ein Platzhalter in eckigen Klammern ist oder leer.
function istPlatzhalter(wert?: string): boolean {
  return !wert || wert.includes("[") || wert.includes("]");
}

export default function JsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: `${site.claim} Maler- und Lackiererarbeiten für Innen und Außen in ${site.region}.`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.postalCode,
      addressLocality: site.city,
      addressCountry: "DE",
    },
    areaServed: serviceAreas
      .filter((name) => !istPlatzhalter(name))
      .map((name) => ({ "@type": "Place", name })),
    openingHours: "Mo-Fr",
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  };

  // Gruendungsjahr nur bei echtem Wert setzen.
  if (!istPlatzhalter(site.foundingYear)) {
    data.foundingDate = site.foundingYear;
  }

  // Bewertungen nur ausgeben, wenn echte, numerische Werte vorliegen.
  if (!istPlatzhalter(site.ratingValue) && !istPlatzhalter(site.ratingCount)) {
    data.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: site.ratingValue,
      reviewCount: site.ratingCount,
    };
  }

  return (
    <script
      type="application/ld+json"
      // Serverseitig gerendert, Inhalt aus vertrauenswuerdiger eigener Quelle
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
