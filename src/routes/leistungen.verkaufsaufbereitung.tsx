import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "verkaufsaufbereitung";
const title = "Verkaufsaufbereitung Auto – Lilienthal, Bremen & Umland";
const description = "Verkaufsaufbereitung & Gebrauchtwagenaufbereitung in Lilienthal – für besseren Wiederverkaufspreis. Für Kunden aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden. Ab 260 €.";

const faqs = [
  { q: "Lohnt sich die Verkaufsaufbereitung?", a: "Erfahrungsgemäß ja. Ein professionell aufbereitetes Fahrzeug verkauft sich schneller und erzielt deutlich höhere Preise als ein ungepflegter Wagen mit gleichem technischen Zustand." },
  { q: "Ist die Aufbereitung auch für Leasingrückgabe geeignet?", a: "Ja. Wir richten die Aufbereitung gezielt darauf aus, Beanstandungen bei der Rückgabe zu vermeiden." },
  { q: "Wie lange dauert die Verkaufsaufbereitung?", a: "Je nach Zustand 1–2 Werktage. Wir besprechen den Umfang vorher gemeinsam." },
];

export const Route = createFileRoute("/leistungen/verkaufsaufbereitung")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Verkaufsaufbereitung", description, slug, priceFrom: 260 })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Verkaufsaufbereitung in Lilienthal – für Bremen & Umland"
      tagline="Komplette Rundum-Aufbereitung für Privatverkauf, Händlerabgabe oder Leasingrückgabe. Im Fachbetrieb in Lilienthal für Fahrzeuge aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Verkaufsaufbereitung ab 260 €"
      badge="Mehr Wiederverkaufswert"
      intro={`Ein gepflegtes Fahrzeug verkauft sich besser – im Schnitt schneller und zu einem deutlich höheren Preis.\n\nUnsere Verkaufsaufbereitung umfasst Außenwäsche, Felgenreinigung, Lackpflege, intensive Innenreinigung sowie kleine Korrekturen, die den ersten Eindruck entscheidend prägen. Auf Wunsch ergänzen wir Geruchsentfernung, Polsterreinigung oder Versiegelung.`}
      benefits={[
        "Höherer erzielbarer Verkaufspreis",
        "Schnellerer Verkauf durch besseren Ersteindruck",
        "Weniger Beanstandungen bei Leasingrückgabe",
        "Komplettpaket statt einzelner Leistungen",
        "Persönliche Beratung – wir passen den Umfang an",
      ]}
      process={[
        { title: "Begutachtung", desc: "Wir prüfen den Zustand und stimmen den Umfang mit Ihnen ab." },
        { title: "Außenaufbereitung", desc: "Handwäsche, Felgenreinigung, Lackpflege und Politur." },
        { title: "Innenaufbereitung", desc: "Aussaugen, Polster reinigen, Kunststoffe pflegen, Scheiben reinigen." },
        { title: "Finish", desc: "Optional Versiegelung, Geruchsentfernung und Detailarbeiten." },
      ]}
      faqs={faqs}
      related={[
        { slug: "lackaufbereitung", title: "Lackaufbereitung" },
        { slug: "innenreinigung", title: "Innenreinigung" },
        { slug: "orsun-geruchsentfernung", title: "Orsun-Geruchsentfernung" },
      ]}
    />
  ),
});
