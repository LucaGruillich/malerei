/*
  Wiederkehrende Inhalte fuer mehrere Seiten. Texte final formuliert nach
  den Schreibregeln der CLAUDE.md. Personen- und ortsbezogene Angaben sind
  als Platzhalter markiert und vom Kunden zu ergaenzen.
*/

export type Project = {
  image: string;
  caption: string;
  category: string; // fuer Filter auf der Referenzseite
};

export const projects: Project[] = [
  { image: "/images/projekt-1.svg", caption: "Wohnung streichen, Liblar", category: "Innen" },
  { image: "/images/projekt-2.svg", caption: "Fassade erneuern, Lechenich", category: "Fassade" },
  { image: "/images/projekt-3.svg", caption: "Türen lackieren, Kierdorf", category: "Lack" },
  { image: "/images/projekt-4.svg", caption: "Akzentwand, Gymnich", category: "Tapezieren" },
  { image: "/images/projekt-5.svg", caption: "Treppenhaus, Weilerswist", category: "Innen" },
  { image: "/images/projekt-6.svg", caption: "Wärmedämmung, Brühl", category: "Dämmung" },
];

export const referenceFilters = [
  "Alle",
  "Innen",
  "Fassade",
  "Lack",
  "Tapezieren",
  "Dämmung",
];

export type Testimonial = { quote: string; author: string };

export const testimonials: Testimonial[] = [
  {
    quote: "Pünktlich, freundlich und wirklich saubere Arbeit. Gerne wieder.",
    author: "Familie M., Lechenich",
  },
  {
    quote: "Die Fassade sieht aus wie neu. Faire Beratung von Anfang an.",
    author: "Herr K., Liblar",
  },
  {
    quote: "Schnelle Rückmeldung und ein klares Angebot ohne Überraschungen.",
    author: "Frau S., Weilerswist",
  },
];

export const homeSteps = [
  { title: "Anfrage", text: "Sie schildern Ihr Vorhaben." },
  { title: "Besichtigung", text: "Wir schauen es uns vor Ort an." },
  { title: "Angebot", text: "Sie erhalten einen klaren Kostenrahmen." },
  { title: "Ausführung", text: "Wir arbeiten sauber und termintreu." },
];

export const values = [
  {
    title: "Saubere Arbeit",
    text: "Wir gehen mit Ihrem Zuhause um wie mit unserem eigenen.",
  },
  { title: "Termintreue", text: "Zugesagt ist zugesagt." },
  {
    title: "Ehrliche Beratung",
    text: "Wir empfehlen nur, was wirklich sinnvoll ist.",
  },
  {
    title: "Handwerk aus der Region",
    text: "Kurze Wege, feste Ansprechpartner.",
  },
];

export type TeamMember = { image: string; name: string; role: string };

// Der Inhaber ist Mario Fais. Die weiteren Namen sind Beispielangaben und
// vom Betrieb durch die echten Teammitglieder zu ersetzen.
export const team: TeamMember[] = [
  { image: "/images/team-1.svg", name: "Mario Fais", role: "Inhaber, Malermeister" },
  { image: "/images/team-2.svg", name: "Andreas Berg", role: "Vorarbeiter" },
  { image: "/images/team-3.svg", name: "Kevin Roth", role: "Maler" },
  { image: "/images/team-4.svg", name: "Lena Faber", role: "Auszubildende" },
];

export const certifications = [
  { image: "/images/siegel-meisterbetrieb.svg", label: "Meisterbetrieb" },
  { image: "/images/siegel-innung.svg", label: "Mitglied der Innung" },
  { image: "/images/siegel-zertifikat.svg", label: "Zertifikat / Siegel" },
];

export const benefits = [
  {
    title: "Sicherer Job",
    text: "Volle Auftragsbücher, langfristige Perspektive.",
  },
  { title: "Gutes Team", text: "Kollegial, hilfsbereit, ehrlich." },
  { title: "Weiterbildung", text: "Wir fördern Ihre Entwicklung." },
  {
    title: "Moderne Ausstattung",
    text: "Gutes Werkzeug, gepflegte Fahrzeuge.",
  },
];

export const jobs = [
  {
    title: "Ausbildung zum Maler und Lackierer (m/w/d)",
    text: "Start jederzeit möglich. Lernen Sie das Handwerk von Grund auf bei uns.",
  },
  {
    title: "Maler / Geselle (m/w/d)",
    text: "Voll- oder Teilzeit. Erfahrung willkommen, Motivation zählt.",
  },
];
