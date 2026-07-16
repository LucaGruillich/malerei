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

/* Kundenstimmen als schlichte Karten. */
export default function Testimonials({
  items,
}: {
  items: Testimonial[];
}) {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {items.map((t) => (
        <li
          key={t.author}
          className="reveal flex flex-col rounded-[var(--radius-md)] border border-line bg-surface p-7 shadow-[var(--shadow-sm)]"
        >
          <QuoteMark />
          <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">
            {t.quote}
          </blockquote>
          <p className="mt-5 text-sm font-medium text-muted">{t.author}</p>
        </li>
      ))}
    </ul>
  );
}
