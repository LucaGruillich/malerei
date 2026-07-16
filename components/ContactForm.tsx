"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/services";
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

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  // Nach dem Absenden den Fokus auf die Bestaetigung setzen, damit
  // Screenreader- und Tastaturnutzer der Bestaetigung folgen koennen.
  useEffect(() => {
    if (sent) successRef.current?.focus();
  }, [sent]);

  // Hinweis: Der Versand wird spaeter an ein Backend bzw. einen Mailversand
  // angebunden. Aktuell wird die Eingabe nur bestaetigt, es werden keine
  // Daten uebertragen. Die Pflichtfelder werden vom Browser validiert
  // (kein noValidate), sodass leere Felder das Absenden verhindern.
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
        <h2
          ref={successRef}
          tabIndex={-1}
          className="text-2xl focus-visible:outline-3 focus-visible:outline-offset-4"
        >
          Vielen Dank für Ihre Anfrage
        </h2>
        <p className="mt-3 text-ink-soft">
          Wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen.
          Wenn es schnell gehen soll, erreichen Sie uns telefonisch unter{" "}
          <a
            href={`tel:${site.phoneHref}`}
            className="font-medium text-brand"
          >
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
        <label htmlFor="name" className={labelBase}>
          Name <Pflicht />
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="kontakt" className={labelBase}>
          Telefon oder E-Mail <Pflicht />
        </label>
        <input
          id="kontakt"
          name="kontakt"
          type="text"
          required
          autoComplete="tel"
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="leistung" className={labelBase}>
          Um welche Leistung geht es?
        </label>
        <select
          id="leistung"
          name="leistung"
          defaultValue=""
          className={fieldBase}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label htmlFor="nachricht" className={labelBase}>
          Beschreiben Sie kurz Ihr Vorhaben <Pflicht />
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          rows={5}
          required
          className={fieldBase}
        />
      </div>

      <div>
        <label htmlFor="foto" className={labelBase}>
          Foto anhängen{" "}
          <span className="font-normal text-muted">
            (optional, hilft uns bei der Einschätzung)
          </span>
        </label>
        <input
          id="foto"
          name="foto"
          type="file"
          accept="image/*"
          className="mt-1.5 w-full text-sm text-muted file:mr-4 file:rounded-[var(--radius-pill)] file:border-0 file:bg-brand-tint file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand hover:file:bg-brand-tint-strong"
        />
      </div>

      <div>
        <label htmlFor="weg" className={labelBase}>
          Wie möchten Sie kontaktiert werden?
        </label>
        <select id="weg" name="weg" defaultValue="rueckruf" className={fieldBase}>
          <option value="anruf">Anruf</option>
          <option value="rueckruf">Rückruf</option>
          <option value="email">E-Mail</option>
        </select>
      </div>

      <div className="flex items-start gap-3">
        <input
          id="datenschutz"
          name="datenschutz"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0 rounded border-line-strong text-brand accent-[var(--color-brand)]"
        />
        <label htmlFor="datenschutz" className="text-sm text-ink-soft">
          Ich habe die{" "}
          <a href="/datenschutz" className="font-medium text-brand underline">
            Datenschutzhinweise
          </a>{" "}
          gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung
          der Anfrage einverstanden. <Pflicht />
        </label>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-brand px-6 py-3 text-[15px] font-medium text-white shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-strong hover:shadow-[var(--shadow-md)] focus-visible:outline-3 focus-visible:outline-offset-2"
        >
          Anfrage senden
        </button>
        <a
          href={`tel:${site.phoneHref}`}
          className="inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-line-strong bg-surface px-6 py-3 text-[15px] font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:text-brand"
        >
          Lieber anrufen
        </a>
      </div>
    </form>
  );
}
