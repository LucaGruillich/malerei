import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Erlaubt das Ausliefern der ersten eigenen SVG-Platzhalter ueber next/image.
    // Gehaertet nach Next.js-Empfehlung: strikte CSP und Download-Disposition,
    // damit ein ausgeliefertes SVG kein Skript ausfuehren kann.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
