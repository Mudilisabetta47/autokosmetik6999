import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "wohnwagen-aufbereitung";
const title = "Wohnwagen- & Wohnmobil-Aufbereitung – Lilienthal, Bremen & Umland";
const description = "Aufbereitung, Reinigung und Politur für Wohnwagen, Wohnmobile und Caravans in Lilienthal. Für Kunden aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden.";

const faqs = [
  { q: "Bekommt ihr die typischen schwarzen Streifen weg?", a: "Ja. Die schwarzen Streifen an Wohnwagen und Wohnmobilen lassen sich mit der richtigen Vorgehensweise sehr gut entfernen. In hartnäckigen Fällen kombinieren wir Reinigung und leichte Politur." },
  { q: "Wird auch der Innenraum aufbereitet?", a: "Auf Wunsch ja. Polster, Kunststoffe, Küche, Bad und Boden – wir besprechen den Umfang individuell." },
  { q: "Was kostet die Aufbereitung?", a: "Wohnwagen und Wohnmobile sind sehr unterschiedlich groß. Wir geben Ihnen nach kurzer Begutachtung einen Festpreis." },
];

export const Route = createFileRoute("/leistungen/wohnwagen-aufbereitung")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Wohnwagen-Aufbereitung", description, slug })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Wohnwagen- & Wohnmobil-Aufbereitung in Lilienthal – für Bremen & Umland"
      tagline="Aufbereitung, Reinigung und Politur für Caravan, Wohnwagen und Reisemobil – im Fachbetrieb in Lilienthal für Kunden aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Wohnwagen-Aufbereitung – Festpreis nach Größe und Zustand"
      badge="Caravan · Wohnmobil · Reisemobil"
      intro={`Wohnwagen und Wohnmobile stehen oft monatelang im Freien – Algen, Grünspan, schwarze Streifen und matte Oberflächen sind die Folge.\n\nWir bringen Außenhaut und Innenraum wieder auf Vordermann: Reinigung der Außenhülle, Entfernen von Streifen und Algen, leichte Politur und auf Wunsch die komplette Innenraumaufbereitung.`}
      benefits={[
        "Außenhülle wieder strahlend sauber",
        "Schwarze Streifen und Algen entfernt",
        "Innenraum frisch und gepflegt",
        "Werterhalt für den Wiederverkauf",
        "Festpreis nach kurzer Begutachtung",
      ]}
      process={[
        { title: "Begutachtung", desc: "Zustand außen und innen wird geprüft, Umfang besprochen." },
        { title: "Außenreinigung", desc: "Vorwäsche, Spezialreiniger gegen Streifen und Algen, Handwäsche." },
        { title: "Politur", desc: "Leichte Politur frischt matte Oberflächen wieder auf." },
        { title: "Innenraum", desc: "Auf Wunsch komplette Innenreinigung inkl. Polster, Küche und Bad." },
      ]}
      faqs={faqs}
      related={[
        { slug: "lackaufbereitung", title: "Lackaufbereitung" },
        { slug: "hochglanzversiegelung", title: "Hochglanzversiegelung" },
        { slug: "innenreinigung", title: "Innenreinigung" },
      ]}
    />
  ),
});
