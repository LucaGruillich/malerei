import Link from "next/link";
import type { Service } from "@/lib/services";
import SiteImage from "./SiteImage";
import ServiceIcon from "./ServiceIcon";

function Arrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 ease-[var(--ease-out)] group-hover:translate-x-1"
    >
      <path
        d="M3 9h12M10 4l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Kompakte Kachel (Startseite): Icon, Titel, kurzer Nutzen. */
export function ServiceCardCompact({ service }: { service: Service }) {
  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className="group reveal flex flex-col rounded-[var(--radius-md)] border border-line bg-surface p-7 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-brand/30 hover:shadow-[var(--shadow-md)]"
    >
      <span className="grid h-12 w-12 place-items-center rounded-[var(--radius-sm)] bg-brand-tint text-brand transition-colors group-hover:bg-brand group-hover:text-white">
        <ServiceIcon slug={service.slug} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl">{service.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">
        {service.teaser}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
        Mehr erfahren <Arrow />
      </span>
    </Link>
  );
}

/* Grosse Kachel (Leistungsuebersicht): Bild, Titel, Nutzen. */
export function ServiceCardMedia({ service }: { service: Service }) {
  return (
    <Link
      href={`/leistungen/${service.slug}`}
      className="group reveal flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-line bg-surface shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
    >
      <div className="overflow-hidden">
        <SiteImage
          src={service.heroImage.src}
          alt={service.heroImage.alt}
          width={1200}
          height={800}
          rounded="none"
          className="ring-0 transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <span className="text-brand">
            <ServiceIcon slug={service.slug} className="h-5 w-5" />
          </span>
          <h2 className="text-xl">{service.title}</h2>
        </div>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted">
          {service.teaser}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
          Zur Leistung <Arrow />
        </span>
      </div>
    </Link>
  );
}
