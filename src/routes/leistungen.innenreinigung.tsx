import { createFileRoute } from "@tanstack/react-router";
import { ServiceLanding, serviceJsonLd, faqJsonLd } from "@/components/ServiceLanding";

const slug = "innenreinigung";
const title = "Innenreinigung & Innenaufbereitung Auto – Lilienthal, Bremen & Umland";
const description = "Professionelle Innenreinigung in Lilienthal: Polster, Teppich, Himmel und Armaturen werden gründlich aufbereitet. Für Kunden aus Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden.";

const faqs = [
  { q: "Werden auch Tierhaare entfernt?", a: "Ja. Wir entfernen Tierhaare aus Polstern, Teppichen und Kofferraum mit Spezialwerkzeug und gründlicher Tiefenreinigung." },
  { q: "Hilft die Innenreinigung gegen Gerüche?", a: "Frische Verschmutzungen ja. Für hartnäckige Zigaretten- oder Tiergerüche empfehlen wir zusätzlich unsere Orsun-Geruchsentfernung ab 100 €." },
  { q: "Wie lange dauert die Innenaufbereitung?", a: "Eine Standard-Innenreinigung dauert 3–5 Stunden, eine intensive Aufbereitung mit Polster- und Himmelreinigung einen ganzen Tag." },
];

export const Route = createFileRoute("/leistungen/innenreinigung")({
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
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd({ name: "Innenreinigung Auto", description, slug, priceFrom: 60 })) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
    ],
  }),
  component: () => (
    <ServiceLanding
      slug={slug}
      title="Innenreinigung Auto in Lilienthal – für Bremen & Umland"
      tagline="Gründliche Innenraumpflege im Fachbetrieb in Lilienthal – Polster, Teppich, Himmel, Leder und Armaturen wieder wie neu. Für Fahrzeuge aus Bremen, Osterholz, Achim, Oyten, Delmenhorst, Stuhr und Weyhe."
      priceLabel="Innenaufbereitung ab 60 €"
      badge="Innenreinigung & Hygiene"
      intro={`Eine professionelle Innenreinigung entfernt nicht nur sichtbaren Schmutz, sondern auch Pollen, Staub und Bakterien aus Polstern und Teppichen.\n\nWir saugen Ihr Fahrzeug gründlich aus, reinigen alle Kunststoffflächen, behandeln Polster oder Leder und reinigen den Dachhimmel auf Wunsch. So entsteht wieder ein hygienischer Innenraum, in dem man gerne sitzt.`}
      benefits={[
        "Saubere, hygienische Polster und Teppiche",
        "Entfernung von Tierhaaren und Krümeln",
        "Frische Kunststoff- und Lederflächen",
        "Bessere Luftqualität im Fahrzeug",
        "Ideal vor Verkauf, Leasingrückgabe oder Familienurlaub",
      ]}
      process={[
        { title: "Ausräumen & Aussaugen", desc: "Komplette Entnahme von Fußmatten, Aussaugen aller Bereiche inklusive Kofferraum." },
        { title: "Polster & Teppich", desc: "Reinigung mit Sprühextraktion, Entfernung von Flecken und Tierhaaren." },
        { title: "Kunststoff & Leder", desc: "Reinigung und Pflege aller Flächen, Türverkleidungen, Mittelkonsole, Armaturen." },
        { title: "Finish", desc: "Scheiben innen reinigen, Duftbaum auf Wunsch – Ihr Auto fühlt sich wieder neu an." },
      ]}
      faqs={faqs}
      related={[
        { slug: "polster-leder", title: "Polster & Leder" },
        { slug: "orsun-geruchsentfernung", title: "Orsun-Geruchsentfernung" },
        { slug: "verkaufsaufbereitung", title: "Verkaufsaufbereitung" },
      ]}
    />
  ),
});
