import type { Faq as FaqItem } from "@/lib/services";

/*
  Haeufige Fragen als native details/summary. Voll tastaturbedienbar
  und ohne JavaScript aufklappbar.
*/
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-line rounded-[var(--radius-md)] border border-line bg-surface">
      {items.map((item) => (
        <details key={item.q} className="group px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium text-ink marker:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line-strong text-brand transition-transform duration-300 ease-[var(--ease-out)] group-open:rotate-45"
            >
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path
                  d="M7 2v10M2 7h10"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </summary>
          <p className="pb-5 pr-10 text-[15px] leading-relaxed text-ink-soft">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
