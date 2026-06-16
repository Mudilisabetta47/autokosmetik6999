import { Link } from "@tanstack/react-router";
import { Phone, MapPin, CheckCircle2, ArrowRight, ArrowLeft, Clock, Shield } from "lucide-react";
import logoLight from "@/assets/logo-light.png";
import amgGtFront from "@/assets/amg-gt-schwarz-front.jpg.asset.json";
import amgGtShop from "@/assets/amg-gt-schwarz-shop.jpg.asset.json";
import bmwM850Front from "@/assets/bmw-m850i-cabrio-front.jpg.asset.json";
import bmwM850Heck from "@/assets/bmw-m850i-cabrio-heck.jpg.asset.json";
import bmwM850Seite from "@/assets/bmw-m850i-cabrio-seite.jpg.asset.json";
import bmwX6m40 from "@/assets/bmw-x6-m40i-heck.jpg.asset.json";
import bmwX6Heck from "@/assets/bmw-x6-schwarz-heck.jpg.asset.json";
import g63Front from "@/assets/g63-amg-weiss-front.jpg.asset.json";
import g63HeckShop from "@/assets/g63-amg-weiss-heck-shop.jpg.asset.json";
import g63Heck from "@/assets/g63-amg-weiss-heck.jpg.asset.json";
import mercCCabrio from "@/assets/mercedes-c-cabrio-grau.jpg.asset.json";
import porsche911 from "@/assets/porsche-911-carrera-s-schwarz.jpg.asset.json";
import porsche924Seite from "@/assets/porsche-924-rot-seite.jpg.asset.json";
import porsche924 from "@/assets/porsche-924-rot.jpg.asset.json";
import porsche991 from "@/assets/porsche-991-schwarz-seite.jpg.asset.json";
import porsche997Front from "@/assets/porsche-997-turbo-front.jpg.asset.json";
import porsche997Heck from "@/assets/porsche-997-turbo-heck.jpg.asset.json";
import porscheBoxster from "@/assets/porsche-boxster-schwarz.jpg.asset.json";
import rangeRover from "@/assets/range-rover-sport-grau.jpg.asset.json";
import shopFrontPorsches from "@/assets/shop-front-porsches.png.asset.json";

const SERVICE_IMAGES: Record<string, { hero: string; gallery: string[] }> = {
  "lackaufbereitung":          { hero: porsche911.url,        gallery: [porsche997Front.url, amgGtFront.url, bmwM850Seite.url] },
  "hochglanzversiegelung":     { hero: amgGtFront.url,        gallery: [porsche991.url, bmwM850Front.url, g63Front.url] },
  "nano-versiegelung":         { hero: porsche997Front.url,   gallery: [porsche911.url, bmwX6Heck.url, amgGtShop.url] },
  "carnauba-wachs":            { hero: bmwM850Front.url,      gallery: [porsche924.url, mercCCabrio.url, porsche991.url] },
  "innenreinigung":            { hero: mercCCabrio.url,       gallery: [bmwM850Heck.url, porsche924Seite.url, rangeRover.url] },
  "polster-leder":             { hero: bmwM850Heck.url,       gallery: [mercCCabrio.url, rangeRover.url, porsche911.url] },
  "orsun-geruchsentfernung":   { hero: rangeRover.url,        gallery: [mercCCabrio.url, bmwX6m40.url, porscheBoxster.url] },
  "motorwaesche":              { hero: g63Heck.url,           gallery: [g63HeckShop.url, bmwX6m40.url, porsche997Heck.url] },
  "folienentfernung":          { hero: porsche924.url,        gallery: [porsche924Seite.url, porscheBoxster.url, amgGtShop.url] },
  "verkaufsaufbereitung":      { hero: shopFrontPorsches.url, gallery: [porsche991.url, bmwM850Seite.url, mercCCabrio.url] },
  "wohnwagen-aufbereitung":    { hero: bmwX6Heck.url,         gallery: [bmwX6m40.url, rangeRover.url, g63Front.url] },
};

const FALLBACK_IMAGES = { hero: amgGtFront.url, gallery: [porsche911.url, bmwM850Front.url, g63Front.url] };

const TEL = "+4915234551063";
const TEL_DISPLAY = "0152 / 345 510 63";

export const SERVICE_AREAS = [
  "Lilienthal", "Bremen", "Bremen-Nord", "Bremen-Borgfeld", "Bremen-Horn",
  "Bremen-Oberneuland", "Bremen-Vahr", "Bremen-Schwachhausen", "Bremen-Findorff",
  "Bremen-Walle", "Bremen-Vegesack", "Bremen-Hemelingen", "Bremen-Osterholz",
  "Osterholz-Scharmbeck", "Worpswede", "Ritterhude", "Grasberg", "Schwanewede",
  "Lemwerder", "Achim", "Oyten", "Ottersberg", "Tarmstedt", "Delmenhorst",
  "Stuhr", "Weyhe", "Syke", "Verden", "Rotenburg", "Zeven",
];

export type ServiceLandingProps = {
  slug: string;
  title: string;
  tagline: string;
  intro: string;
  priceLabel: string;
  badge?: string;
  benefits: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: { slug: string; title: string }[];
};

export function ServiceLanding(p: ServiceLandingProps) {
  const imgs = SERVICE_IMAGES[p.slug] ?? FALLBACK_IMAGES;
  return (
    <div className="min-h-screen bg-background text-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Top bar */}
      <header className="sticky top-0 z-40">
        <div className="bg-primary text-white/85 text-xs">
          <div className="container-x flex items-center justify-between gap-x-4 py-2 font-medium tracking-wide">
            <span className="hidden sm:inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-accent-foreground" /> FALKENBERGER LANDSTR. 75, LILIENTHAL
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-accent-foreground" /> TERMINE NACH VEREINBARUNG
            </span>
          </div>
        </div>
        <div className="bg-background border-b border-border shadow-sm">
          <div className="container-x flex items-center justify-between gap-4 py-3">
            <Link to="/" className="flex items-center shrink-0" aria-label="autokosmetik Lilienthal Startseite">
              <img src={logoLight} alt="autokosmetik Lilienthal" className="h-14 md:h-20 w-auto" />
            </Link>
            <nav className="hidden lg:flex items-center gap-8 font-display text-[15px] font-semibold tracking-tight text-primary">
              <Link to="/" className="hover:text-accent-foreground">Startseite</Link>
              <Link to="/leistungen" className="hover:text-accent-foreground">Leistungen</Link>
              <Link to="/galerie" className="hover:text-accent-foreground">Galerie</Link>
            </nav>
            <a href={`tel:${TEL}`} className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2.5 text-sm font-display font-bold tracking-wide hover:bg-[oklch(0.2_0.06_255)] transition shadow-md">
              <Phone className="h-4 w-4" /> {TEL_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-x relative py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Link to="/leistungen" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold">
              <ArrowLeft className="h-4 w-4" /> Alle Leistungen
            </Link>
            {p.badge && (
              <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white border border-white/20">
                <Shield className="h-3.5 w-3.5" /> {p.badge}
              </span>
            )}
            <h1 className="mt-4 font-display font-extrabold text-3xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
              {p.title}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85">{p.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-primary shadow-[var(--shadow-glow)]" style={{ background: "var(--gradient-accent)" }}>
                <Phone className="h-5 w-5" /> Termin in Lilienthal vereinbaren
              </a>
              <span className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold text-white border border-white/30">
                {p.priceLabel}
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src={imgs.hero}
              alt={`${p.title} – Referenz aus unserem Studio in Lilienthal`}
              className="w-full h-[280px] md:h-[420px] object-cover rounded-3xl border border-white/15"
              style={{ boxShadow: "var(--shadow-card)" }}
              loading="eager"
            />
          </div>
        </div>
      </section>


      {/* Intro + benefits */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Was wir machen</h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{p.intro}</p>
          </div>
          <aside className="rounded-3xl bg-secondary border border-border p-6" style={{ boxShadow: "var(--shadow-card)" }}>
            <h3 className="text-lg font-bold text-primary">Ihre Vorteile</h3>
            <ul className="mt-4 space-y-3">
              {p.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent-foreground" /> {b}
                </li>
              ))}
            </ul>
            <a href={`tel:${TEL}`} className="mt-6 inline-flex items-center justify-between w-full gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold">
              Jetzt anrufen <ArrowRight className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="pb-4 bg-background">
        <div className="container-x grid sm:grid-cols-3 gap-4">
          {imgs.gallery.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${p.title} – Beispiel ${i + 1} aus Lilienthal`}
              className="w-full h-48 md:h-56 object-cover rounded-2xl border border-border"
              style={{ boxShadow: "var(--shadow-card)" }}
              loading="lazy"
            />
          ))}
        </div>
      </section>


      {/* Process */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">So läuft es ab</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {p.process.map((step, i) => (
              <div key={step.title} className="rounded-2xl bg-card p-6 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Schritt {i + 1}</div>
                <h3 className="mt-1 text-lg font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">
            {p.title.split(" in ")[0]} für Lilienthal, Bremen & Umland
          </h2>
          <p className="mt-3 text-muted-foreground max-w-3xl">
            Unser Studio in der Falkenberger Landstraße 75 in Lilienthal ist Anlaufstelle für Kundinnen
            und Kunden aus ganz Bremen, dem Landkreis Osterholz und dem Umland. Wir bereiten Fahrzeuge
            aus folgenden Orten regelmäßig auf:
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {SERVICE_AREAS.map((city) => (
              <span key={city} className="inline-flex items-center rounded-full bg-secondary border border-border px-3 py-1.5 text-xs font-medium text-foreground">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Häufige Fragen</h2>
          <div className="mt-8 space-y-4">
            {p.faqs.map((f) => (
              <details key={f.q} className="rounded-2xl bg-card p-5 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
                <summary className="cursor-pointer font-semibold text-primary">{f.q}</summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {p.related.length > 0 && (
        <section className="py-16 md:py-20 bg-background">
          <div className="container-x">
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary">Weitere Leistungen</h2>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {p.related.map((r) => (
                <a key={r.slug} href={`/leistungen/${r.slug}`} className="group rounded-2xl bg-card p-6 border border-border hover:border-accent transition flex items-center justify-between" style={{ boxShadow: "var(--shadow-card)" }}>
                  <span className="font-semibold text-primary">{r.title}</span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground transition" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-x text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Bereit für ein gepflegtes Fahrzeug?</h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Rufen Sie uns an – wir beraten Sie persönlich und finden den passenden Termin in Lilienthal.
          </p>
          <a href={`tel:${TEL}`} className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-primary" style={{ background: "var(--gradient-accent)" }}>
            <Phone className="h-5 w-5" /> {TEL_DISPLAY}
          </a>
        </div>
      </section>

      <footer className="bg-primary text-white/80 py-10">
        <div className="container-x flex flex-col md:flex-row gap-4 items-center justify-between text-sm">
          <span>© autokosmetik Lilienthal · Falkenberger Landstr. 75 · 28865 Lilienthal</span>
          <div className="flex gap-5">
            <Link to="/" className="hover:text-white">Startseite</Link>
            <Link to="/leistungen" className="hover:text-white">Leistungen</Link>
            <Link to="/impressum" className="hover:text-white">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function serviceJsonLd(p: { name: string; description: string; slug: string; priceFrom?: number }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.name,
    description: p.description,
    serviceType: p.name,
    url: `https://autokosmetik-lilienthal.de/leistungen/${p.slug}`,
    provider: {
      "@type": "AutoRepair",
      name: "autokosmetik Lilienthal",
      telephone: "+4915234551063",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Falkenberger Landstraße 75",
        postalCode: "28865",
        addressLocality: "Lilienthal",
        addressCountry: "DE",
      },
    },
    areaServed: SERVICE_AREAS.map((c) => ({ "@type": "City", name: c })),
    ...(p.priceFrom
      ? { offers: { "@type": "Offer", price: p.priceFrom, priceCurrency: "EUR" } }
      : {}),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
