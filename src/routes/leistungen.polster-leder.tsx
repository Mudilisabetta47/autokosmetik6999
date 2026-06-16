import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "polster-leder";
const title = "Polster- & Lederreinigung Auto – Lilienthal, Bremen & Umland";
const description = "Polsterreinigung und Lederpflege in Lilienthal inkl. Imprägnierung. Für Kunden aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden. Ab 70 €.";

const faqs = [
  { q: "Bekommt ihr auch alte Flecken raus?", a: "In den meisten Fällen ja. Hartnäckige Kaffee-, Cola- oder Schminkflecken behandeln wir mit Spezialreinigern. Garantieren können wir es nicht – aber das Ergebnis spricht meist für sich." },
  { q: "Wird das Leder hinterher gepflegt?", a: "Ja. Nach der Reinigung tragen wir eine pflegende Lederlotion auf, die das Material geschmeidig hält und vor dem Austrocknen schützt." },
  { q: "Wie lange dauert die Trocknung?", a: "Nach der Polsterreinigung sollten die Sitze 2–4 Stunden trocknen. Bei trockener Witterung geht es schneller, bei feuchter dauert es etwas länger." },
];

export const Route = createFileRoute("/leistungen/polster-leder")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: `https://autokosmetik-lilienthal.de/leistungen/${slug}` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `https://autokosmetik-lilienthal.de/leistungen/${slug}` }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Polster- und Lederreinigung", description, slug, priceFrom: 70 })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Polster- & Lederreinigung in Lilienthal – für Bremen & Umland"
      tagline="Frische Polster und gepflegtes Leder – Polsterreinigung, Lederpflege und Imprägnierung im Fachbetrieb in Lilienthal. Für Fahrzeuge aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Polster & Leder ab 70 €"
      badge="Polster · Leder · Imprägnierung"
      intro={`Polster und Leder sind Verschleißteile – mit der richtigen Pflege halten sie viele Jahre und sehen lange wie neu aus.\n\nWir reinigen Stoffpolster mit Sprühextraktion, behandeln Leder schonend mit speziellen Reinigern und versiegeln auf Wunsch beide Materialien gegen neue Flecken.`}
      benefits={[
        "Sichtbar saubere Sitzflächen, Lehnen und Türverkleidungen",
        "Schonende Lederreinigung ohne Austrocknung",
        "Imprägnierung schützt vor neuen Flecken",
        "Frischer Geruch im Innenraum",
        "Ideal vor Verkauf oder Leasingrückgabe",
      ]}
      process={[
        { title: "Vorreinigung", desc: "Aussaugen und Vorbehandlung der Sitzflächen." },
        { title: "Tiefenreinigung", desc: "Sprühextraktion bei Stoff, schonender Reiniger bei Leder." },
        { title: "Pflege", desc: "Lederlotion oder Polsterpflege wird einmassiert." },
        { title: "Imprägnierung", desc: "Auf Wunsch: Schutzschicht gegen neue Flecken." },
      ]}
      faqs={faqs}
      related={[
        { slug: "innenreinigung", title: "Innenreinigung" },
        { slug: "orsun-geruchsentfernung", title: "Orsun-Geruchsentfernung" },
        { slug: "verkaufsaufbereitung", title: "Verkaufsaufbereitung" },
      ]}
    />
  ),
});
