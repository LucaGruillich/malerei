type Testimonial = { quote: string; author: string };

function QuoteMark() {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      aria-hidden="true"
      className="text-brand/25"
    >
      <path
        d="M0 24V13.2C0 5.9 4.3 1.1 12 0l1.2 3.6C9 4.8 6.9 7.1 6.6 10.2H12V24H0Zm18 0V13.2C18 5.9 22.3 1.1 30 0l1.2 3.6C27 4.8 24.9 7.1 24.6 10.2H30V24H18Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Einzelne Karte, feste Breite, damit die Marquee gleichmaessig laeuft. */
function Card({ t }: { t: Testimonial }) {
  return (
    <div className="mr-5 flex w-[300px] shrink-0 flex-col rounded-[var(--radius-md)] border border-line bg-surface p-7 shadow-[var(--shadow-sm)] sm:w-[360px]">
      <QuoteMark />
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">
        {t.quote}
      </blockquote>
      <p className="mt-5 text-sm font-medium text-muted">{t.author}</p>
    </div>
  );
}

/*
  Kundenstimmen als endlos laufende Marquee. Der Inhalt wird zweimal
  gerendert und die Spur um genau die Haelfte verschoben, das ergibt einen
  nahtlosen Loop. Die zweite Haelfte ist aria-hidden, damit Screenreader die
  Stimmen nicht doppelt vorlesen. Bewegung pausiert bei Hover und Fokus und
  wird bei prefers-reduced-motion ganz gestoppt (siehe globals.css).
*/
export default function TestimonialsMarquee({
  items,
}: {
  items: Testimonial[];
}) {
  return (
    <div
      className="marquee group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_7%,#000_93%,transparent)]"
      role="region"
      aria-label="Kundenstimmen"
    >
      <div className="marquee-track flex w-max">
        <ul className="flex">
          {items.map((t) => (
            <li key={t.author}>
              <Card t={t} />
            </li>
          ))}
        </ul>
        <ul className="flex" aria-hidden="true">
          {items.map((t) => (
            <li key={`dup-${t.author}`}>
              <Card t={t} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
