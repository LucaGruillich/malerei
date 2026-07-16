"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const fieldBase =
  "mt-1.5 w-full rounded-[var(--radius-sm)] border border-line-strong bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 transition-colors focus:border-brand focus-visible:outline-3 focus-visible:outline-offset-2";
const labelBase = "block text-sm font-medium text-ink";

/* Kennzeichnet ein Pflichtfeld sichtbar und fuer Screenreader verstaendlich. */
function Pflicht() {
  return (
    <span className="text-danger">
      <span aria-hidden="true">*</span>
      <span className="sr-only"> Pflichtfeld</span>
    </span>
  );
}

export default function ApplicationForm() {
  const [sent, setSent] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  // Nach dem Absenden den Fokus auf die Bestaetigung setzen.
  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  // Hinweis: Der Versand wird spaeter an ein Backend angebunden. Aktuell wird
  // die Eingabe nur bestaetigt, es werden keine Daten uebertragen. Die
  // Pflichtfelder werden vom Browser validiert (kein noValidate).
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-[var(--radius-md)] border border-brand/20 bg-brand-tint p-8"
      >
        <h3
          ref={successRef}
          tabIndex={-1}
          className="text-xl focus-visible:outline-3 focus-visible:outline-offset-4"
        >
          Danke für Ihre Bewerbung
        </h3>
        <p className="mt-3 text-ink-soft">
          Wir schauen sie uns an und melden uns bei Ihnen. Bei Fragen erreichen
          Sie uns unter{" "}
          <a href={`tel:${site.phoneHref}`} className="font-medium text-brand">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-muted">
        Mit <span className="text-danger">*</span> markierte Felder sind
        Pflichtfelder.
      </p>

      <div>
        <label htmlFor="bname" className={labelBase}>
          Name <Pflicht />
        </label>
        <input
          id="bname"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="bkontakt" className={labelBase}>
          Telefon oder E-Mail <Pflicht />
        </label>
        <input
          id="bkontakt"
          name="kontakt"
          type="text"
          required
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="btext" className={labelBase}>
          Ein paar Worte zu Ihnen
        </label>
        <textarea
          id="btext"
          name="text"
          rows={4}
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="unterlagen" className={labelBase}>
          Unterlagen{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <input
          id="unterlagen"
          name="unterlagen"
          type="file"
          accept=".pdf,.doc,.docx,image/*"
          className="mt-1.5 w-full text-sm text-muted file:mr-4 file:rounded-[var(--radius-pill)] file:border-0 file:bg-brand-tint file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand hover:file:bg-brand-tint-strong"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="bdatenschutz"
          name="datenschutz"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0 rounded border-line-strong accent-[var(--color-brand)]"
        />
        <label htmlFor="bdatenschutz" className="text-sm text-ink-soft">
          Ich habe die{" "}
          <a href="/datenschutz" className="font-medium text-brand underline">
            Datenschutzhinweise
          </a>{" "}
          gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung
          der Bewerbung einverstanden. <Pflicht />
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-brand px-6 py-3 text-[15px] font-medium text-white shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[var(--shadow-md)] focus-visible:outline-3 focus-visible:outline-offset-2"
      >
        Bewerbung senden
      </button>
    </form>
  );
}
