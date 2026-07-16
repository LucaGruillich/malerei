/* Einheitliche Strich-Icons je Leistung, konsistente Linienstaerke. */
const paths: Record<string, React.ReactNode> = {
  innenanstrich: (
    <>
      <rect x="4" y="4" width="10" height="6" rx="1.2" />
      <path d="M9 10v3M9 13h3v6H6v-4a3 3 0 0 1 3-3Z" />
    </>
  ),
  fassade: (
    <>
      <path d="M4 20V9l7-5 7 5v11" />
      <path d="M4 20h16M9 20v-5h4v5" />
    </>
  ),
  "lack-holzschutz": (
    <>
      <path d="M14 4l4 4-8 8-4 1 1-4 7-9Z" />
      <path d="M12 6l4 4" />
    </>
  ),
  "tapezieren-wandgestaltung": (
    <>
      <rect x="4" y="4" width="14" height="16" rx="1.4" />
      <path d="M8 4v16M13 4v16M4 9h14M4 15h14" />
    </>
  ),
  waermedaemmung: (
    <>
      <path d="M4 20V9l7-5 7 5v11" />
      <path d="M8 20v-6h6v6M8 14c0-2 6-2 6 0" />
    </>
  ),
};

export default function ServiceIcon({
  slug,
  className = "",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 22 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[slug] ?? null}
    </svg>
  );
}
