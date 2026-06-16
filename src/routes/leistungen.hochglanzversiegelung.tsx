import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "hochglanzversiegelung";
const title = "Hochglanzversiegelung Auto – Lilienthal, Bremen & Umland";
const description = "Hochglanzversiegelung in Lilienthal für tiefen Glanz und langanhaltenden Lackschutz. Für Kunden aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden. Ab 250 €.";

const faqs = [
  { q: "Wie lange hält die Hochglanzversiegelung?", a: "Je nach Pflege und Witterung 6–12 Monate. Regelmäßige Handwäsche verlängert die Standzeit." },
  { q: "Reicht die Versiegelung allein oder brauche ich Politur?", a: "Bei jungen, gepflegten Fahrzeugen reicht die Versiegelung. Bei matten oder verkratzten Lacken empfehlen wir eine vorherige Lackaufbereitung." },
  { q: "Darf das Auto direkt in die Waschstraße?", a: "Wir empfehlen mindestens 1–2 Wochen zu warten und anschließend lieber von Hand zu waschen oder eine Portalwaschanlage mit weichen Bürsten zu nutzen." },
];

export const Route = createFileRoute("/leistungen/hochglanzversiegelung")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Hochglanzversiegelung", description, slug, priceFrom: 250 })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Hochglanzversiegelung in Lilienthal – für Bremen & Umland"
      tagline="Intensiver Tiefenglanz und langanhaltender Schutz für Ihren Lack – im Fachbetrieb in der Falkenberger Landstr. 75 in Lilienthal. Für Fahrzeuge aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Hochglanzversiegelung ab 250 €"
      badge="Lackschutz · Tiefenglanz"
      intro={`Mit unserer Hochglanzversiegelung kombinieren wir Politur und schützende Versiegelung in einem Arbeitsgang.\n\nDer Lack wird gereinigt, dekontaminiert und anschließend mit einer hochwertigen Versiegelung versehen, die UV-Strahlung, Vogelkot, Insekten und Streusalz für viele Monate fernhält.`}
      benefits={[
        "Tiefer, gleichmäßiger Hochglanz",
        "6–12 Monate Lackschutz bei normaler Pflege",
        "Wasser perlt sichtbar ab",
        "Leichter zu reinigen, weniger Schmutzanhaftung",
        "Werterhalt für Privat- und Verkaufsfahrzeuge",
      ]}
      process={[
        { title: "Vorwäsche", desc: "Schonende Handwäsche und Vorreinigung." },
        { title: "Dekontamination", desc: "Knete und Spezialreiniger entfernen Flugrost und Industriestaub." },
        { title: "Politur", desc: "Leichte Politur sorgt für glatte Oberfläche und Tiefenglanz." },
        { title: "Versiegelung", desc: "Aufgetragen, ablüften lassen, auspolieren – fertig ist der Hochglanzschutz." },
      ]}
      faqs={faqs}
      related={[
        { slug: "lackaufbereitung", title: "Lackaufbereitung" },
        { slug: "nano-versiegelung", title: "Nano-Versiegelung" },
        { slug: "carnauba-wachs", title: "Carnauba-Wachs" },
      ]}
    />
  ),
});
