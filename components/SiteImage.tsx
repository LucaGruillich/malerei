import Image from "next/image";

/*
  Bild-Wrapper auf Basis von next/image.
  Rendert die gebrandeten Platzhalter aus /public/images mit korrektem
  Seitenverhaeltnis und Alt-Text. Sobald ein Higgsfield-Visual vorliegt,
  wird die Datei am gleichen Pfad ersetzt, der Code bleibt unveraendert.
*/
export default function SiteImage({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
  rounded = "md",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: "md" | "lg" | "pill" | "none";
}) {
  const radius =
    rounded === "none"
      ? ""
      : rounded === "pill"
        ? "rounded-[var(--radius-pill)]"
        : rounded === "lg"
          ? "rounded-[var(--radius-lg)]"
          : "rounded-[var(--radius-md)]";

  // Die aktuellen Platzhalter sind SVG-Vektorgrafiken. Sie werden direkt
  // ausgeliefert (unoptimized), nicht ueber den Bild-Optimierer. Das spart
  // den unnoetigen Optimierungs-Cache und stellt sicher, dass Farbaenderungen
  // an den SVGs sofort sichtbar sind. Echte Rasterfotos (jpg/png/webp) laufen
  // weiter ueber next/image inkl. Optimierung.
  const isSvg = src.endsWith(".svg");

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      unoptimized={isSvg}
      className={`h-auto w-full object-cover ring-1 ring-line ${radius} ${className}`}
    />
  );
}
