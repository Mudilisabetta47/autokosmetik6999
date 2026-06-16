import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "lackaufbereitung";
const title = "Lackaufbereitung in Lilienthal – Politur, Kratzer & Hologramme entfernen";
const description = "Professionelle Lackaufbereitung & Lackpolitur in Lilienthal für Kunden aus Bremen, Osterholz-Scharmbeck, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden. Hologramme, Swirls und matte Stellen entfernen.";

const faqs = [
  { q: "Wie lange dauert eine Lackaufbereitung?", a: "Je nach Lackzustand 4–8 Stunden. Bei stark verkratzten Fahrzeugen oder Mehrstufenpolitur planen wir einen ganzen Tag." },
  { q: "Können Kratzer komplett entfernt werden?", a: "Oberflächliche Kratzer, Hologramme und Swirls lassen sich durch mehrstufige Politur in der Regel vollständig entfernen. Tiefe Kratzer (bis auf die Grundierung) werden optisch deutlich reduziert." },
  { q: "Kommt ihr nach Bremen oder ins Umland?", a: "Wir arbeiten in unserem Studio in Lilienthal (Falkenberger Landstr. 75) – sehr gut erreichbar aus Bremen, Achim, Oyten, Worpswede und dem gesamten Landkreis Osterholz." },
];

export const Route = createFileRoute("/leistungen/lackaufbereitung")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Lackaufbereitung", description, slug })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Lackaufbereitung in Lilienthal – für Bremen & Umland"
      tagline="Politur, Hologramm- und Kratzerentfernung im Fachbetrieb in der Falkenberger Landstr. 75 – sichtbar tiefer Glanz für Fahrzeuge aus Lilienthal, Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Lackaufbereitung individuell – Festpreis nach Begutachtung"
      badge="Fachbetrieb Lackpflege"
      intro={`Mit der mehrstufigen Lackaufbereitung holen wir den ursprünglichen Glanz Ihres Fahrzeugs zurück. Wir entfernen Hologramme, Swirls, Waschstraßenkratzer, matte Stellen und Flugrost.\n\nIm Anschluss empfehlen wir – je nach Lackzustand – eine Versiegelung mit Hartwachs, Carnauba oder Nano-Versiegelung. So bleibt das Ergebnis lange erhalten und Ihr Lack ist vor Umwelteinflüssen geschützt.`}
      benefits={[
        "Sichtbar tieferer Glanz und satte Farbtiefe",
        "Hologramme, Swirls und Kratzer reduziert oder entfernt",
        "Werterhalt und besserer Wiederverkaufspreis",
        "Individuell abgestimmt auf Lacktyp und Zustand",
        "Persönliche Beratung in Lilienthal",
      ]}
      process={[
        { title: "Begutachtung", desc: "Wir prüfen den Lackzustand und besprechen das Ergebnis mit Ihnen." },
        { title: "Vorwäsche & Dekontamination", desc: "Schonende Handwäsche, Knete und Entfernung von Flugrost." },
        { title: "Mehrstufige Politur", desc: "Schleifpolitur und Hochglanzpolitur, abgestimmt auf Ihren Lack." },
        { title: "Versiegelung auf Wunsch", desc: "Hartwachs, Carnauba oder Nano-Versiegelung für langen Schutz." },
      ]}
      faqs={faqs}
      related={[
        { slug: "hochglanzversiegelung", title: "Hochglanzversiegelung" },
        { slug: "nano-versiegelung", title: "Nano-Versiegelung" },
        { slug: "carnauba-wachs", title: "Carnauba-Wachs" },
      ]}
    />
  ),
});
