/*
  Inhalte der fuenf Leistungsseiten.
  Texte sind final formuliert, nach den Schreibregeln der CLAUDE.md
  (Sie-Ansprache, keine Gedankenstriche, natuerlicher Ton).
  Bilder verweisen auf Platzhalter, die spaeter durch Higgsfield-Visuals
  ersetzt werden (siehe docs/higgsfield-prompts.md).
*/

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  navTitle: string; // kurzer Titel fuer Kacheln und Navigation
  title: string; // Titel ohne Ort
  h1: string; // H1 inklusive Region (SEO)
  metaTitle: string;
  metaDescription: string;
  teaser: string; // 2 Zeilen Nutzen fuer Uebersicht
  hero: string; // Einleitung auf der Detailseite
  heroImage: { src: string; alt: string };
  includes: string[];
  steps: { title: string; text: string }[];
  faq: Faq[];
  closingTitle: string;
  closingText: string; // vor dem Verweis
  related: { slug: string; label: string };
};

const standardSteps = (variant: {
  anfrage: string;
  schritt2Titel: string;
  schritt2: string;
  angebot: string;
  ausfuehrung: string;
}) => [
  { title: "Anfrage", text: variant.anfrage },
  { title: variant.schritt2Titel, text: variant.schritt2 },
  { title: "Angebot", text: variant.angebot },
  { title: "Ausführung", text: variant.ausfuehrung },
];

export const services: Service[] = [
  {
    slug: "innenanstrich",
    navTitle: "Innenanstrich",
    title: "Innenanstrich & Malerarbeiten",
    h1: "Innenanstrich & Malerarbeiten in Erftstadt",
    metaTitle: "Innenanstrich & Malerarbeiten in Erftstadt",
    metaDescription:
      "Wände und Decken in frischen Farben, sauber abgedeckt und zügig fertig. Ihr Malerbetrieb für Innenanstriche in Erftstadt. Jetzt Angebot anfragen.",
    teaser:
      "Wände und Decken in frischen Farben. Sauber abgedeckt, zügig fertig.",
    hero: "Frische Farbe für Wohnzimmer, Flur oder das ganze Haus. Wir decken sauber ab, arbeiten zügig und hinterlassen einen Raum, in dem Sie sich sofort wohlfühlen.",
    heroImage: {
      src: "/images/leistung-innenanstrich.svg",
      alt: "Frisch gestrichener, heller Innenraum mit sauberen Kanten",
    },
    includes: [
      "Wände und Decken streichen, ein- oder mehrfarbig",
      "Untergrund prüfen, ausbessern und grundieren",
      "Kleine Risse und Löcher spachteln",
      "Möbel und Böden sorgfältig abdecken und schützen",
      "Farbberatung, falls Sie sich noch unsicher sind",
    ],
    steps: standardSteps({
      anfrage: "Sie sagen, was gestrichen werden soll.",
      schritt2Titel: "Besichtigung",
      schritt2: "Wir schauen vor Ort und beraten.",
      angebot: "Klarer Preis, kein Kleingedrucktes.",
      ausfuehrung: "Sauber, pünktlich, besenrein übergeben.",
    }),
    faq: [
      {
        q: "Wie lange dauert das Streichen einer Wohnung?",
        a: "Das hängt von Größe und Zustand ab. Beim Termin vor Ort nennen wir Ihnen einen realistischen Zeitraum.",
      },
      {
        q: "Muss ich die Möbel selbst rausräumen?",
        a: "Nein. Wir rücken zusammen, decken ab und schützen alles Wichtige.",
      },
      {
        q: "Beraten Sie auch bei der Farbwahl?",
        a: "Gern. Wir helfen Ihnen, den passenden Ton für Ihren Raum zu finden.",
      },
    ],
    closingTitle: "Frische Farbe gefällig?",
    closingText:
      "Fragen Sie Ihr unverbindliches Angebot an. Gut kombinieren lässt sich das mit",
    related: {
      slug: "tapezieren-wandgestaltung",
      label: "Tapezieren & Wandgestaltung",
    },
  },
  {
    slug: "fassade",
    navTitle: "Fassade",
    title: "Fassade & Außenanstrich",
    h1: "Fassade & Außenanstrich in Erftstadt",
    metaTitle: "Fassade & Außenanstrich in Erftstadt",
    metaDescription:
      "Eine gepflegte Fassade schützt Ihr Haus und macht optisch etwas her. Fachgerechter Außenanstrich in Erftstadt, wetterfest und langlebig. Angebot anfragen.",
    teaser:
      "Schützt vor Wetter und macht Ihr Haus wieder ansehnlich.",
    hero: "Eine gepflegte Fassade schützt Ihr Haus vor Wind und Wetter und macht optisch sofort etwas her. Wir bereiten den Untergrund vor und bringen einen Anstrich auf, der viele Jahre hält.",
    heroImage: {
      src: "/images/leistung-fassade.svg",
      alt: "Frisch gestrichene Hausfassade in ruhigem Farbton",
    },
    includes: [
      "Fassade reinigen und auf Schäden prüfen",
      "Risse und schadhafte Stellen ausbessern",
      "Grundierung und wetterfester Anstrich",
      "Fenster, Türen und Boden sauber abdecken",
      "Gerüststellung nach Absprache",
    ],
    steps: standardSteps({
      anfrage: "Sie beschreiben Ihr Objekt.",
      schritt2Titel: "Besichtigung",
      schritt2: "Wir begutachten die Fassade.",
      angebot: "Fester Preis inklusive Vorbereitung.",
      ausfuehrung: "Wetterfest und sauber ausgeführt.",
    }),
    faq: [
      {
        q: "Wann ist die beste Zeit für einen Fassadenanstrich?",
        a: "Meist in der wärmeren Jahreshälfte bei trockener Witterung. Wir stimmen den Termin passend ab.",
      },
      {
        q: "Kümmern Sie sich auch um das Gerüst?",
        a: "Ja, das organisieren wir auf Wunsch mit.",
      },
      {
        q: "Wie lange hält ein Fassadenanstrich?",
        a: "Bei fachgerechter Ausführung viele Jahre. Der genaue Zeitraum hängt von Untergrund und Lage ab.",
      },
    ],
    closingTitle: "Fassade wieder in Form bringen?",
    closingText:
      "Fragen Sie Ihr Angebot an. Oft sinnvoll in Kombination mit",
    related: { slug: "waermedaemmung", label: "Wärmedämmung (WDVS)" },
  },
  {
    slug: "lack-holzschutz",
    navTitle: "Lack & Holzschutz",
    title: "Lack- & Holzschutzarbeiten",
    h1: "Lack- & Holzschutzarbeiten in Erftstadt",
    metaTitle: "Lack- & Holzschutzarbeiten in Erftstadt",
    metaDescription:
      "Türen, Zargen und Holzbauteile fachgerecht lackiert und geschützt. Langlebige Oberflächen vom Malerbetrieb in Erftstadt. Jetzt Angebot anfragen.",
    teaser: "Türen, Zargen und Holzbauteile, langlebig behandelt.",
    hero: "Türen, Zargen, Fensterrahmen und Holzbauteile brauchen ab und zu eine Auffrischung. Wir bereiten die Oberflächen vor und lackieren so, dass es lange schön bleibt und geschützt ist.",
    heroImage: {
      src: "/images/leistung-lack-holzschutz.svg",
      alt: "Sauber lackierte Zimmertür mit gleichmäßiger Oberfläche",
    },
    includes: [
      "Türen, Zargen und Fensterrahmen lackieren",
      "Holzbauteile schleifen, grundieren und streichen",
      "Holzschutz gegen Feuchtigkeit und Witterung",
      "Heizkörper und Metallteile beschichten",
      "Farb- und Glanzgrad nach Ihrem Wunsch",
    ],
    steps: standardSteps({
      anfrage: "Sie nennen die Bauteile.",
      schritt2Titel: "Besichtigung",
      schritt2: "Wir prüfen den Zustand.",
      angebot: "Klarer Preis je Umfang.",
      ausfuehrung: "Saubere, gleichmäßige Oberflächen.",
    }),
    faq: [
      {
        q: "Lohnt sich Lackieren statt Austausch?",
        a: "Oft ja. Eine gut erhaltene Tür sieht neu lackiert wieder top aus und spart Kosten.",
      },
      {
        q: "Riecht das lange nach?",
        a: "Wir arbeiten mit modernen, geruchsarmen Lacken. Die Räume sind zügig wieder nutzbar.",
      },
      {
        q: "Können Sie einen bestimmten Farbton treffen?",
        a: "Ja, wir mischen nach Wunsch oder Vorlage.",
      },
    ],
    closingTitle: "Holz und Lack auffrischen?",
    closingText: "Fragen Sie Ihr Angebot an. Passt oft dazu:",
    related: { slug: "innenanstrich", label: "Innenanstrich & Malerarbeiten" },
  },
  {
    slug: "tapezieren-wandgestaltung",
    navTitle: "Tapezieren",
    title: "Tapezieren & Wandgestaltung",
    h1: "Tapezieren & Wandgestaltung in Erftstadt",
    metaTitle: "Tapezieren & Wandgestaltung in Erftstadt",
    metaDescription:
      "Von schlichter Raufaser bis zur besonderen Wandtechnik. Tapezieren und kreative Wandgestaltung vom Fachbetrieb in Erftstadt. Jetzt Angebot anfragen.",
    teaser: "Von schlicht bis kreativ, passend zu Ihrem Raum.",
    hero: "Von der schlichten Raufaser bis zur ausgefallenen Mustertapete oder einer besonderen Wandtechnik. Wir setzen Ihre Wand genau so um, wie Sie sie sich vorstellen.",
    heroImage: {
      src: "/images/leistung-tapezieren-wandgestaltung.svg",
      alt: "Wohnraum mit gestalteter Akzentwand und Tapete",
    },
    includes: [
      "Raufaser, Vlies- und Mustertapeten anbringen",
      "Alte Tapeten entfernen und Untergrund vorbereiten",
      "Dekorative Techniken wie Spachtel- oder Wischoptik",
      "Fototapeten und Akzentwände",
      "Beratung zu Muster, Farbe und Wirkung im Raum",
    ],
    steps: standardSteps({
      anfrage: "Sie schildern Ihre Idee.",
      schritt2Titel: "Beratung",
      schritt2: "Wir zeigen Möglichkeiten.",
      angebot: "Klarer Preis je Wandfläche.",
      ausfuehrung: "Passgenau und faltenfrei.",
    }),
    faq: [
      {
        q: "Entfernen Sie auch die alte Tapete?",
        a: "Ja, das gehört bei uns dazu. Wir bereiten die Wand sauber vor.",
      },
      {
        q: "Können Sie bei der Musterauswahl helfen?",
        a: "Gern. Wir schauen gemeinsam, was zu Raum und Licht passt.",
      },
      {
        q: "Geht auch eine einzelne Akzentwand?",
        a: "Klar, das ist eine schöne und günstige Möglichkeit, einen Raum aufzuwerten.",
      },
    ],
    closingTitle: "Ihre Wand neu gestalten?",
    closingText: "Fragen Sie Ihr Angebot an. Passt gut dazu:",
    related: { slug: "innenanstrich", label: "Innenanstrich & Malerarbeiten" },
  },
  {
    slug: "waermedaemmung",
    navTitle: "Wärmedämmung",
    title: "Wärmedämmung (WDVS)",
    h1: "Wärmedämmung (WDVS) in Erftstadt",
    metaTitle: "Wärmedämmung (WDVS) in Erftstadt",
    metaDescription:
      "Ein Wärmedämm-Verbundsystem senkt die Heizkosten und steigert den Wohnkomfort. Fachgerechte Dämmung mit frischem Fassadenanstrich in Erftstadt.",
    teaser: "WDVS für weniger Heizkosten und mehr Wohnkomfort.",
    hero: "Ein Wärmedämm-Verbundsystem hält die Wärme im Haus und senkt die Heizkosten. Wir bringen die Dämmung fachgerecht an und geben der Fassade gleich einen frischen Anstrich.",
    heroImage: {
      src: "/images/leistung-waermedaemmung.svg",
      alt: "Gedämmte Hausfassade mit sauber verputzter Oberfläche",
    },
    includes: [
      "Beratung zum passenden Dämmsystem",
      "Anbringen der Dämmplatten und Armierung",
      "Ober- und Schlussputz sowie Fassadenanstrich",
      "Sauberer Anschluss an Fenster und Türen",
      "Hinweis auf mögliche Fördermittel, ganz allgemein und ohne Rechtsberatung",
    ],
    steps: standardSteps({
      anfrage: "Sie beschreiben Ihr Haus.",
      schritt2Titel: "Besichtigung",
      schritt2: "Wir prüfen die Fassade.",
      angebot: "Klarer Umfang und Preis.",
      ausfuehrung: "Fachgerecht und sauber.",
    }),
    faq: [
      {
        q: "Wie viel spare ich mit einer Dämmung?",
        a: "Das hängt stark vom Haus ab. Beim Termin vor Ort schätzen wir das Potenzial realistisch ein.",
      },
      {
        q: "Gibt es Fördermittel?",
        a: "Für energetische Sanierungen bestehen häufig Förderprogramme. Die genauen Bedingungen klären Sie am besten mit einem Energieberater.",
      },
      {
        q: "Machen Sie auch gleich die Fassade neu?",
        a: "Ja, Dämmung und Anstrich lassen sich in einem Zug erledigen.",
      },
    ],
    closingTitle: "Heizkosten senken?",
    closingText: "Fragen Sie Ihr Angebot an. Passt direkt dazu:",
    related: { slug: "fassade", label: "Fassade & Außenanstrich" },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
