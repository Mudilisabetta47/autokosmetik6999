import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "nano-versiegelung";
const title = "Nano-Versiegelung Auto – Lilienthal, Bremen & Umland";
const description = "Nano-Versiegelung in Lilienthal: Premium-Lackschutz mit Abperleffekt für 1–3 Jahre. Optional inkl. Felgen- und Ozonbehandlung. Für Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe, Verden. Ab 350 €.";

const faqs = [
  { q: "Wie lange hält eine Nano-Versiegelung?", a: "Je nach Pflege und Nutzung 1–3 Jahre. Regelmäßige Handwäsche und schonende Pflegeprodukte verlängern die Standzeit deutlich." },
  { q: "Ist Nano-Versiegelung das Gleiche wie Keramikversiegelung?", a: "Die Begriffe werden oft synonym verwendet. Wir setzen hochwertige, keramikbasierte Nano-Versiegelungen ein, die eine harte, glasartige Schutzschicht bilden." },
  { q: "Kann ich die Felgen mitversiegeln lassen?", a: "Ja, auf Wunsch versiegeln wir Felgen mit. Bremsstaub und Schmutz haften deutlich schlechter und die Reinigung wird einfacher." },
];

export const Route = createFileRoute("/leistungen/nano-versiegelung")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Nano-Versiegelung", description, slug, priceFrom: 350 })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Nano-Versiegelung in Lilienthal – für Bremen & Umland"
      tagline="Premium-Lackschutz mit Abperleffekt für 1–3 Jahre, im Fachbetrieb in Lilienthal aufgetragen. Auf Wunsch inkl. Felgen und Ozonbehandlung. Für Kunden aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Nano-Versiegelung ab 350 €"
      badge="Premium · 1–3 Jahre Schutz"
      intro={`Die Nano-/Keramikversiegelung bildet eine harte, glasartige Schutzschicht auf dem Lack. Schmutz, Wasser, Streusalz und UV-Strahlung perlen ab statt einzuziehen.\n\nWir arbeiten mit hochwertigen, professionellen Versiegelungen, die nur im Fachbetrieb verarbeitet werden dürfen. Auf Wunsch kombinieren wir das Paket mit Felgenversiegelung und einer Ozonbehandlung für den Innenraum.`}
      benefits={[
        "1–3 Jahre Schutz bei normaler Pflege",
        "Starker Abperleffekt – Lack bleibt länger sauber",
        "Schutz vor UV, Vogelkot, Insekten und Streusalz",
        "Optional Felgen- und Innenraumpaket",
        "Werterhalt für hochwertige Fahrzeuge",
      ]}
      process={[
        { title: "Lackvorbereitung", desc: "Handwäsche, Dekontamination, Politur." },
        { title: "Reinigung", desc: "IPA-Wäsche entfernt letzte Rückstände – wichtig für die Haftung." },
        { title: "Auftrag", desc: "Nano-Versiegelung wird Panel für Panel aufgetragen und einmassiert." },
        { title: "Aushärtung", desc: "Versiegelung härtet aus – das Fahrzeug bleibt 12–24 h trocken stehen." },
      ]}
      faqs={faqs}
      related={[
        { slug: "lackaufbereitung", title: "Lackaufbereitung" },
        { slug: "hochglanzversiegelung", title: "Hochglanzversiegelung" },
        { slug: "carnauba-wachs", title: "Carnauba-Wachs" },
      ]}
    />
  ),
});
