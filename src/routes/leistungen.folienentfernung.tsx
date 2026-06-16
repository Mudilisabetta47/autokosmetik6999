import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "folienentfernung";
const title = "Folienentfernung Auto – Lilienthal, Bremen & Umland";
const description = "Folie und Werbefolie rückstandslos entfernen in Lilienthal – auch bei alter, eingebrannter Folierung. Für Kunden aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden.";

const faqs = [
  { q: "Bleiben Klebereste auf dem Lack?", a: "Wir entfernen sowohl Folie als auch Kleberreste rückstandslos – auch bei älteren Folierungen, die viele Jahre auf dem Lack waren." },
  { q: "Was kostet die Folienentfernung?", a: "Das hängt vom Umfang ab. Eine kleine Schriftzug-Entfernung kostet weniger als eine komplette Werbebeklebung eines Transporters. Wir geben Ihnen nach kurzer Begutachtung einen Festpreis." },
  { q: "Wird der Lack hinterher behandelt?", a: "Auf Wunsch frischen wir den Lack im Bereich der Folierung auf und versiegeln ihn, damit der Übergang nicht sichtbar bleibt." },
];

export const Route = createFileRoute("/leistungen/folienentfernung")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Folienentfernung", description, slug })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Folienentfernung in Lilienthal – für Bremen & Umland"
      tagline="Werbe-, Schutz- oder Designfolien rückstandslos entfernen – auch bei alter, eingebrannter Folierung. Im Fachbetrieb in Lilienthal für Fahrzeuge aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Folienentfernung – Festpreis nach Begutachtung"
      badge="Werbefolie · Schutzfolie · Vollfolierung"
      intro={`Egal ob Werbebeklebung auf dem Transporter, Schutzfolie an der Stoßstange oder eine alte Vollfolierung – wir entfernen Folien und Kleberreste schonend und rückstandslos.\n\nAuf Wunsch frischen wir den Lack im Anschluss auf und versiegeln ihn, damit das Fahrzeug wieder wie aus einem Guss wirkt.`}
      benefits={[
        "Folien und Klebereste rückstandslos entfernt",
        "Schonende Erwärmung – kein Schaden am Lack",
        "Auch bei alter, eingebrannter Folierung",
        "Optional Lackpflege und Versiegelung im Anschluss",
        "Ideal vor Verkauf oder Leasingrückgabe",
      ]}
      process={[
        { title: "Begutachtung", desc: "Folientyp, Alter und Untergrund werden geprüft." },
        { title: "Erwärmen", desc: "Folie wird kontrolliert erwärmt und schonend abgezogen." },
        { title: "Kleberreste entfernen", desc: "Spezialreiniger entfernt verbleibenden Kleber rückstandslos." },
        { title: "Finish", desc: "Optional Politur und Versiegelung für ein gleichmäßiges Lackbild." },
      ]}
      faqs={faqs}
      related={[
        { slug: "lackaufbereitung", title: "Lackaufbereitung" },
        { slug: "hochglanzversiegelung", title: "Hochglanzversiegelung" },
        { slug: "verkaufsaufbereitung", title: "Verkaufsaufbereitung" },
      ]}
    />
  ),
});
