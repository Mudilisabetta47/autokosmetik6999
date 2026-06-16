import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const TEL = "+4915234551063";
const TEL_DISPLAY = "0152 / 345 510 63";

const services = [
  { slug: "lackaufbereitung", title: "Lackaufbereitung", desc: "Politur, Kratzer- und Hologramm-Entfernung für tiefen Glanz." },
  { slug: "hochglanzversiegelung", title: "Hochglanzversiegelung", desc: "Langanhaltender Schutz und intensiver Tiefenglanz für Ihren Lack." },
  { slug: "nano-versiegelung", title: "Nano-Versiegelung", desc: "Premium-Schutz mit Abperleffekt – inkl. Felgen und Ozonbehandlung möglich." },
  { slug: "carnauba-wachs", title: "Carnauba-Wachs", desc: "Klassische Hartwachsversiegelung mit warmem, satten Glanz." },
  { slug: "innenreinigung", title: "Innenreinigung", desc: "Intensive Innenraumpflege – Aussaugen, Reinigen, Aufbereiten." },
  { slug: "polster-leder", title: "Polster & Leder", desc: "Polsterreinigung, Lederpflege und Imprägnierung." },
  { slug: "orsun-geruchsentfernung", title: "Orsun-Geruchsentfernung", desc: "Neutralisiert Zigaretten-, Nikotin- und Tiergerüche dauerhaft." },
  { slug: "motorwaesche", title: "Motorwäsche", desc: "Gründliche Motorraumreinigung inklusive Versiegelung." },
  { slug: "verkaufsaufbereitung", title: "Verkaufsaufbereitung", desc: "Komplette Rundum-Aufbereitung für den besten Wiederverkaufswert." },
  { slug: "folienentfernung", title: "Folienentfernung", desc: "Werbe- und Schutzfolien rückstandslos entfernen." },
  { slug: "wohnwagen-aufbereitung", title: "Wohnwagen & Wohnmobil", desc: "Aufbereitung und Politur für Caravan und Reisemobil." },
];

export const Route = createFileRoute("/leistungen/")({
  head: () => ({
    meta: [
      { title: "Leistungen – Autokosmetik & KFZ-Aufbereitung Lilienthal | Bremen & Umland" },
      { name: "description", content: "Alle Leistungen unserer KFZ-Aufbereitung in Lilienthal auf einen Blick – Lackaufbereitung, Versiegelung, Innenreinigung, Geruchsentfernung. Für Kunden aus Lilienthal, Bremen, Achim, Oyten, Delmenhorst, Stuhr, Weyhe, Verden." },
      { property: "og:title", content: "Leistungen – Autokosmetik Lilienthal" },
      { property: "og:description", content: "Lackpflege, Versiegelung, Innenreinigung & mehr – Fahrzeugaufbereitung in Lilienthal für Bremen und Umland." },
      { property: "og:url", content: "https://autokosmetik-lilienthal.de/leistungen" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://autokosmetik-lilienthal.de/leistungen" }],
  }),
  component: LeistungenIndex,
});

function LeistungenIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      <header className="sticky top-0 z-40">
        <div className="bg-primary text-white/85 text-xs">
          <div className="container-x flex items-center justify-between gap-x-4 py-2 font-medium tracking-wide">
            <span className="hidden sm:inline-flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-accent-foreground" /> FALKENBERGER LANDSTR. 75, LILIENTHAL</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-accent-foreground" /> TERMINE NACH VEREINBARUNG</span>
          </div>
        </div>
        <div className="bg-background border-b border-border shadow-sm">
          <div className="container-x flex items-center justify-between gap-4 py-3">
            <Link to="/" className="flex items-center"><img src={logoLight} alt="autokosmetik Lilienthal" className="h-14 md:h-20 w-auto" /></Link>
            <a href={`tel:${TEL}`} className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2.5 text-sm font-display font-bold tracking-wide shadow-md"><Phone className="h-4 w-4" /> {TEL_DISPLAY}</a>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-x">
          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-white leading-tight max-w-4xl">
            Unsere Leistungen – Fahrzeugaufbereitung in Lilienthal, Bremen & Umland
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl">
            Von Lackaufbereitung bis Geruchsentfernung: alle Aufbereitungs-Leistungen
            für Kundinnen und Kunden aus Lilienthal, Bremen, Osterholz-Scharmbeck,
            Worpswede, Ritterhude, Achim, Oyten, Delmenhorst, Stuhr, Weyhe und Verden.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <a key={s.slug} href={`/leistungen/${s.slug}`} className="group rounded-3xl bg-card p-7 border border-border hover:border-accent transition flex flex-col" style={{ boxShadow: "var(--shadow-card)" }}>
                <h2 className="text-xl font-bold text-primary">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground">
                  Mehr erfahren <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white/80 py-10">
        <div className="container-x text-sm text-center">© autokosmetik Lilienthal · Falkenberger Landstr. 75 · 28865 Lilienthal</div>
      </footer>
    </div>
  );
}
