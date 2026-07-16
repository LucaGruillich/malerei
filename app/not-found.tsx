import Container from "@/components/Container";
import Button from "@/components/Button";
import { Eyebrow } from "@/components/Section";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <div className="max-w-xl">
        <Eyebrow>Seite nicht gefunden</Eyebrow>
        <h1 className="text-4xl leading-[1.1] sm:text-5xl">
          Hier ist wohl die Farbe abgeblättert
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          Die gewünschte Seite gibt es nicht mehr oder sie ist umgezogen. Kehren
          Sie zur Startseite zurück oder sehen Sie sich unsere Leistungen an.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Zur Startseite</Button>
          <Button href="/leistungen" variant="secondary">
            Zu den Leistungen
          </Button>
        </div>
      </div>
    </Container>
  );
}
