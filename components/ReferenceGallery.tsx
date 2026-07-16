"use client";

import { useState } from "react";
import SiteImage from "./SiteImage";
import { projects, referenceFilters } from "@/lib/content";

export default function ReferenceGallery() {
  const [active, setActive] = useState("Alle");

  const visible =
    active === "Alle"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Referenzen nach Leistung filtern"
        className="flex flex-wrap gap-2.5"
      >
        {referenceFilters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={isActive}
              className={`rounded-[var(--radius-pill)] border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-brand bg-brand text-white"
                  : "border-line-strong bg-surface text-ink-soft hover:border-brand hover:text-brand"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {visible.length}{" "}
        {visible.length === 1 ? "Projekt" : "Projekte"} in der Auswahl
        {active === "Alle" ? "" : ` für ${active}`}.
      </p>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li
            key={p.caption}
            className="overflow-hidden rounded-[var(--radius-md)] border border-line bg-surface shadow-[var(--shadow-sm)]"
          >
            <SiteImage
              src={p.image}
              alt={`Referenz: ${p.caption}`}
              width={900}
              height={900}
              rounded="none"
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
            />
            <div className="flex items-center justify-between gap-3 px-5 py-4">
              <p className="text-sm text-ink-soft">{p.caption}</p>
              <span className="rounded-[var(--radius-pill)] bg-brand-tint px-3 py-1 text-xs font-medium text-brand">
                {p.category}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
