import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "carnauba-wachs";
const title = "Carnauba-Wachs Versiegelung – Lilienthal, Bremen & Umland";
const description = "Klassische Carnauba-Hartwachsversiegelung in Lilienthal: warmer Tiefenglanz und natürlicher Lackschutz. Für Kunden aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr, Weyhe, Verden.";

const faqs = [
  { q: "Was ist der Unterschied zwischen Carnauba und Nano-Versiegelung?", a: "Carnauba ist ein Naturwachs mit warmem, satten Glanz und hält etwa 3–6 Monate. Nano-/Keramikversiegelungen sind synthetisch, härter und halten 1–3 Jahre, sind dafür neutraler im Look." },
  { q: "Für welche Fahrzeuge eignet sich Carnauba besonders?", a: "Für Liebhaberfahrzeuge, Oldtimer, dunkle Lacke und alle, die den klassischen, warmen Wachsglanz lieben." },
  { q: "Muss der Lack vorher poliert werden?", a: "Für das beste Ergebnis ja. Wir kombinieren Carnauba meist mit einer Lackaufbereitung, damit das Wachs auf einer makellosen Oberfläche aufgetragen wird." },
];

export const Route = createFileRoute("/leistungen/carnauba-wachs")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Carnauba-Wachs Versiegelung", description, slug })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Carnauba-Wachs Versiegelung in Lilienthal – für Bremen & Umland"
      tagline="Klassische Hartwachs-Versiegelung mit echtem Carnauba-Wachs – warmer, satter Glanz und natürlicher Lackschutz. Aufbereitet im Fachbetrieb in Lilienthal für Fahrzeuge aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Carnauba-Versiegelung individuell nach Fahrzeug"
      badge="Naturwachs · echter Carnauba-Glanz"
      intro={`Carnauba ist das härteste bekannte Naturwachs und gilt als Klassiker der Lackveredelung. Es erzeugt einen unverwechselbar warmen, fast nassen Glanz – besonders bei dunklen und metallic-Lacken.\n\nWir tragen das Carnauba-Wachs in mehreren dünnen Schichten von Hand auf, lassen es ablüften und polieren es anschließend aus. Das Ergebnis: ein satter Glanz, der Liebhaber- und Sportwagen perfekt in Szene setzt.`}
      benefits={[
        "Warmer, satter Tiefenglanz",
        "Natürlicher Lackschutz vor Wasser und UV",
        "Ideal für Liebhaberfahrzeuge und Oldtimer",
        "Schonende, handwerkliche Verarbeitung",
        "Kombinierbar mit unserer Lackaufbereitung",
      ]}
      process={[
        { title: "Lackvorbereitung", desc: "Handwäsche, Dekontamination und – falls nötig – Politur." },
        { title: "Auftrag", desc: "Mehrere dünne Carnauba-Schichten von Hand aufgetragen." },
        { title: "Ablüften", desc: "Das Wachs verbindet sich mit dem Lack und bildet die Schutzschicht." },
        { title: "Auspolieren", desc: "Sanftes Auspolieren bringt den vollen Carnauba-Glanz hervor." },
      ]}
      faqs={faqs}
      related={[
        { slug: "lackaufbereitung", title: "Lackaufbereitung" },
        { slug: "hochglanzversiegelung", title: "Hochglanzversiegelung" },
        { slug: "nano-versiegelung", title: "Nano-Versiegelung" },
      ]}
    />
  ),
});
