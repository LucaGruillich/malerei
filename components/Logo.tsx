import { site } from "@/lib/site";

/*
  Wortmarke mit dezentem Farbtropfen-Zeichen. Nutzt die Markenfarbe
  als Akzent. Solange kein finales Kundenlogo vorliegt, dient dies als
  konsistenter Platzhalter (Pfad spaeter: /public/assets/logo.svg).
*/
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M13 2c3.6 4.2 6.4 7.9 6.4 11.3A6.4 6.4 0 0 1 13 19.7a6.4 6.4 0 0 1-6.4-6.4C6.6 9.9 9.4 6.2 13 2Z"
          fill="var(--color-brand)"
        />
        <circle cx="10.7" cy="12" r="1.6" fill="#fff" fillOpacity="0.85" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-display text-[17px] font-medium tracking-tight text-ink">
          {site.owner}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          Maler & Lackierer
        </span>
      </span>
    </span>
  );
}
