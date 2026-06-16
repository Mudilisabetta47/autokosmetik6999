import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "orsun-geruchsentfernung";
const title = "Orsun-Geruchsentfernung Auto – Lilienthal, Bremen & Umland";
const description = "Orsun-Behandlung in Lilienthal: dauerhafte Geruchsentfernung gegen Zigaretten-, Nikotin- und Tiergerüche. Für Kunden aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr, Weyhe, Verden. Ab 100 €.";

const faqs = [
  { q: "Was ist die Orsun-Behandlung?", a: "Orsun ist ein professionelles Verfahren zur dauerhaften Geruchsneutralisation. Es wirkt tief im Innenraum – inklusive Lüftung, Polster, Himmel und Verkleidungen – und entfernt Gerüche, statt sie nur zu überdecken." },
  { q: "Hilft das gegen Zigarettenrauch?", a: "Ja, sehr gut. Die Behandlung ist speziell für hartnäckige Gerüche wie Zigarettenrauch, Nikotin, Tiergerüche oder muffigen Schimmelgeruch entwickelt." },
  { q: "Wie lange dauert die Behandlung?", a: "Die Behandlung selbst dauert wenige Stunden, das Fahrzeug bleibt aber idealerweise einen Tag im Studio, damit sich der Wirkstoff vollständig verteilt." },
];

export const Route = createFileRoute("/leistungen/orsun-geruchsentfernung")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Orsun-Geruchsentfernung", description, slug, priceFrom: 100 })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Orsun-Geruchsentfernung in Lilienthal – für Bremen & Umland"
      tagline="Dauerhafte Geruchsneutralisation bei Zigaretten-, Nikotin-, Tier- und Schimmelgeruch. Speziell für geruchsempfindliche Kundinnen und Kunden – im Fachbetrieb in Lilienthal für Fahrzeuge aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden."
      priceLabel="Orsun-Behandlung ab 100 €"
      badge="Geruchsentfernung für Empfindliche"
      intro={`Die Orsun-Behandlung ist die richtige Wahl, wenn herkömmliche Innenreinigung an Grenzen stößt. Sie wirkt tief im gesamten Innenraum – auch in Lüftung, Polstern, Himmel und Verkleidungen – und neutralisiert Gerüche dauerhaft, statt sie nur zu übertünchen.\n\nIdeal für Fahrzeuge, in denen geraucht wurde, für Tierhalter, nach Schimmelbildung oder bei stark riechendem Gebrauchtwagenkauf.`}
      benefits={[
        "Wirkt gegen Zigaretten- und Nikotingeruch",
        "Entfernt Tier- und Hundegeruch dauerhaft",
        "Hilft bei muffigem oder Schimmelgeruch",
        "Wirkt auch in Lüftung und Klimaanlage",
        "Geruch wird neutralisiert, nicht überdeckt",
      ]}
      process={[
        { title: "Innenreinigung", desc: "Gründliche Reinigung als Grundlage für die Behandlung." },
        { title: "Vorbereitung", desc: "Lüftung und Klimaanlage werden für die Behandlung vorbereitet." },
        { title: "Orsun-Anwendung", desc: "Der Wirkstoff verteilt sich im gesamten Innenraum und neutralisiert Gerüche." },
        { title: "Auslüften", desc: "Das Fahrzeug bleibt für die Aushärtung stehen – danach riecht es wieder frisch." },
      ]}
      faqs={faqs}
      related={[
        { slug: "innenreinigung", title: "Innenreinigung" },
        { slug: "polster-leder", title: "Polster & Leder" },
        { slug: "verkaufsaufbereitung", title: "Verkaufsaufbereitung" },
      ]}
    />
  ),
});
