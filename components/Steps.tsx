type Step = { title: string; text: string };

/* Ablauf in klaren Schritten, durchnummeriert. */
export default function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="reveal rounded-[var(--radius-md)] border border-line bg-surface p-6 shadow-[var(--shadow-sm)]"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-tint font-display text-lg text-brand"
            aria-hidden="true"
          >
            {i + 1}
          </span>
          <h3 className="mt-4 text-lg">{step.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
