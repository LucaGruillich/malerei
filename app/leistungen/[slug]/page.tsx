import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import Button from "@/components/Button";
import SiteImage from "@/components/SiteImage";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { getService, services } from "@/lib/services";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/leistungen/${service.slug}` },
    openGraph: {
      title: `${service.metaTitle} | ${site.name}`,
      description: service.metaDescription,
      url: `/leistungen/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Leistungen",
        item: `${site.url}/leistungen`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: `${site.url}/leistungen/${service.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <Container className="py-16 sm:py-24">
          <nav aria-label="Brotkrumen" className="mb-8 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/leistungen" className="hover:text-brand">
                  Leistungen
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-soft" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>Leistung</Eyebrow>
              <h1 className="text-4xl leading-[1.08] sm:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                {service.hero}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/kontakt">Angebot anfragen</Button>
                <Button href={`tel:${site.phoneHref}`} variant="secondary">
                  Anrufen
                </Button>
              </div>
            </div>
            <div className="reveal">
              <SiteImage
                src={service.heroImage.src}
                alt={service.heroImage.alt}
                width={1200}
                height={800}
                priority
                rounded="lg"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Leistungsumfang */}
      <Section labelledBy="umfang-titel">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Leistungsumfang"
            id="umfang-titel"
            title="Das übernehmen wir für Sie"
          />
          <ul className="space-y-4">
            {service.includes.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <span
                  className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-tint text-brand"
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 16 16">
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
                <span className="text-lg leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Ablauf */}
      <Section alt labelledBy="ablauf-titel">
        <SectionHeading
          eyebrow="Ablauf"
          id="ablauf-titel"
          title="So läuft es ab"
        />
        <div className="mt-12">
          <Steps steps={service.steps} />
        </div>
      </Section>

      {/* Beispiele */}
      <Section labelledBy="beispiele-titel">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Referenzen"
            id="beispiele-titel"
            title="Beispiele aus unserer Arbeit"
          />
          <Button href="/referenzen" variant="secondary">
            Mehr Referenzen
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <figure key={p.caption} className="reveal">
              <SiteImage
                src={p.image}
                alt={`Referenz: ${p.caption}`}
                width={900}
                height={900}
                rounded="md"
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw"
              />
              <figcaption className="mt-3 text-sm text-muted">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section alt labelledBy="faq-titel">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Häufige Fragen"
            id="faq-titel"
            title="Gut zu wissen"
          />
          <Faq items={service.faq} />
        </div>
      </Section>

      <CtaBand
        title={service.closingTitle}
        text={
          <>
            {service.closingText}{" "}
            <Link
              href={`/leistungen/${service.related.slug}`}
              className="font-medium text-white underline underline-offset-4"
            >
              {service.related.label}
            </Link>
            .
          </>
        }
      />
    </>
  );
}
