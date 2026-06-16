import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "motorwaesche";
const title = "Motorwäsche & Motorraumreinigung – Lilienthal, Bremen & Umland";
const description = "Professionelle Motorwäsche in Lilienthal mit anschließender Versiegelung. Für Kunden aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden. Ab 80 €.";

const faqs = [
  { q: "Ist die Motorwäsche schädlich für die Elektronik?", a: "Nein, wenn sie fachgerecht durchgeführt wird. Wir decken empfindliche Bauteile ab, arbeiten mit kontrolliertem Druck und prüfen das Ergebnis sorgfältig." },
  { q: "Warum sollte ich den Motor überhaupt waschen lassen?", a: "Ein sauberer Motorraum erleichtert die Werkstattarbeit, lässt Öl- oder Flüssigkeitslecks früh erkennen und macht beim Fahrzeugverkauf einen deutlich besseren Eindruck." },
  { q: "Wird der Motorraum nach der Wäsche behandelt?", a: "Ja. Auf Wunsch versiegeln wir Kunststoffteile, sodass sie wieder satt aussehen und Schmutz schlechter haftet." },
];

export const Route = createFileRoute("/leistungen/motorwaesche")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Motorwäsche", description, slug, priceFrom: 80 })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Motorwäsche & Motorraumreinigung in Lilienthal – für Bremen & Umland"
      tagline="Schonende, fachgerechte Motorwäsche mit anschließender Kunststoffpflege im Fachbetrieb in Lilienthal. Für Fahrzeuge aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Motorwäsche ab 80 €"
      badge="Motorraum · sauber & versiegelt"
      intro={`Ein sauberer Motorraum macht nicht nur beim Verkauf einen guten Eindruck – er erleichtert auch die Werkstattarbeit und hilft, Öl- oder Flüssigkeitslecks früh zu erkennen.\n\nWir arbeiten mit kontrolliertem Wasserdruck, decken empfindliche Bauteile vorher ab und pflegen Kunststoffteile im Anschluss.`}
      benefits={[
        "Sauberer, gepflegter Motorraum",
        "Lecks und Verschleißspuren früh erkennbar",
        "Kunststoffteile wirken wieder satt und neuwertig",
        "Pluspunkt beim Fahrzeugverkauf",
        "Fachgerecht und schonend durchgeführt",
      ]}
      process={[
        { title: "Abkleben", desc: "Empfindliche Bauteile wie Steuergeräte und Lufteinlässe werden abgedeckt." },
        { title: "Vorreiniger", desc: "Spezialreiniger löst Öl, Fett und Staub im Motorraum." },
        { title: "Schonende Wäsche", desc: "Mit kontrolliertem Druck wird alles sauber abgespült." },
        { title: "Pflege", desc: "Kunststoffteile werden eingelegt – das Ergebnis: sauberer, gepflegter Motorraum." },
      ]}
      faqs={faqs}
      related={[
        { slug: "verkaufsaufbereitung", title: "Verkaufsaufbereitung" },
        { slug: "lackaufbereitung", title: "Lackaufbereitung" },
        { slug: "innenreinigung", title: "Innenreinigung" },
      ]}
    />
  ),
});
