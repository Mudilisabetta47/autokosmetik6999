import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, Clock, Sparkles, Shield, Droplets, Car, Wrench,
  Sofa, Wind, Gem, CheckCircle2, ArrowRight, Star, Menu, X, Scissors, Caravan,
} from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import detailing from "@/assets/detailing.jpg";
import interior from "@/assets/interior.jpg";
import wax from "@/assets/wax.jpg";
import beforePaint from "@/assets/before-paint.jpg";
import afterPaint from "@/assets/after-paint.jpg";
import beforeInterior from "@/assets/before-interior.jpg";
import beforeSeal from "@/assets/before-seal.jpg";
import galleryTaycan from "@/assets/gallery-porsche-taycan.jpg";
import galleryLambo from "@/assets/gallery-lambo.jpg";
import gallery911 from "@/assets/gallery-porsche-911.jpg";
import galleryMustang from "@/assets/gallery-mustang.webp";
import shopFront from "@/assets/shop-front.png.asset.json";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";
import { BeforeAfter } from "@/components/BeforeAfter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Autokosmetik Lilienthal | KFZ-Aufbereitung Osterholz-Scharmbeck & Bremen" },
      { name: "description", content: "Professionelle Autokosmetik & KFZ-Aufbereitung in Lilienthal – Lackaufbereitung, Versiegelung, Innenreinigung und Komplettpflege. Für Kunden aus Lilienthal, Osterholz-Scharmbeck, Bremen und Umgebung. Preise ab 29 €. Jetzt Termin sichern." },
      { name: "keywords", content: "Autokosmetik Lilienthal, KFZ-Aufbereitung Lilienthal, Fahrzeugaufbereitung Lilienthal, Autoaufbereitung Lilienthal, Autopflege Lilienthal, Fahrzeugpflege Lilienthal, KFZ-Aufbereitung Osterholz-Scharmbeck, Autoaufbereitung Osterholz-Scharmbeck, Fahrzeugaufbereitung Osterholz, Autoaufbereitung Bremen, KFZ-Aufbereitung Bremen, Fahrzeugaufbereitung Bremen, Autopflege Bremen, Autoaufbereitung Worpswede, Autoaufbereitung Ritterhude, Autoaufbereitung Grasberg, Autoaufbereitung Schwanewede, Autoaufbereitung Lemwerder, Autoaufbereitung Landkreis Osterholz, Lackaufbereitung Lilienthal, Lackpolitur Lilienthal, Lackversiegelung Lilienthal, Hochglanzversiegelung, Hochglanzpolitur, Nano Versiegelung, Nanoversiegelung Auto, Keramikversiegelung, Keramik Coating, Carnauba Wachs, Hartwachsversiegelung, Lackschutz, Kratzer entfernen Auto, Hologramme entfernen, Swirls entfernen, Innenreinigung Auto, Innenaufbereitung Auto, Innenraumreinigung, Autositze reinigen, Polsterreinigung Auto, Polsteraufbereitung, Lederpflege Auto, Lederreinigung, Lederaufbereitung, Sitzreinigung, Teppichreinigung Auto, Himmelreinigung Auto, Geruchsentfernung Auto, Ozonbehandlung Auto, Geruchsneutralisation, Nikotingeruch entfernen, Tiergeruch entfernen, Motorwäsche, Motorraumreinigung, Motorraum aufbereiten, Felgenreinigung, Felgenaufbereitung, Felgenversiegelung, Cabrio Verdeck Pflege, Cabrio Verdeck Reinigung, Cabrioverdeck Imprägnierung, Verkaufsaufbereitung Auto, Gebrauchtwagenaufbereitung, Leasingrückgabe Aufbereitung, Neuwagenaufbereitung, Jahreswagenaufbereitung, Folienentfernung Auto, Folie entfernen Lilienthal, Werbefolie entfernen, Wohnwagen Aufbereitung, Wohnmobil Aufbereitung, Caravan Reinigung, Wohnwagen Reinigung, Wohnwagen Politur, LKW Aufbereitung, Transporter Aufbereitung, Handwäsche Auto, professionelle Autowäsche, KFZ Detailing, Auto Detailing Lilienthal, Car Detailing Bremen, Fahrzeugkosmetik, Autoreinigung Lilienthal, Komplettaufbereitung Auto, Fahrzeugaufbereitung in der Nähe, Autoaufbereiter in der Nähe, mobile Autoaufbereitung Lilienthal" },
      { property: "og:title", content: "Autokosmetik Lilienthal | KFZ-Aufbereitung Osterholz-Scharmbeck & Bremen" },
      { property: "og:description", content: "Professionelle Fahrzeugaufbereitung in Lilienthal – Lack, Innenraum, Versiegelung. Wir pflegen Fahrzeuge aus Lilienthal, Osterholz-Scharmbeck, Bremen und Umgebung." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:site_name", content: "autokosmetik Lilienthal" },
      { property: "og:url", content: "https://autokosmetik-lilienthal.de/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Autokosmetik Lilienthal | KFZ-Aufbereitung" },
      { name: "twitter:description", content: "Professionelle Fahrzeugaufbereitung in Lilienthal für Kunden aus Lilienthal, Osterholz-Scharmbeck, Bremen und Umgebung." },
      { name: "geo.region", content: "DE-NI" },
      { name: "geo.placename", content: "Lilienthal" },
      { name: "geo.position", content: "53.1480;8.9000" },
      { name: "ICBM", content: "53.1480, 8.9000" },
    ],
    links: [{ rel: "canonical", href: "https://autokosmetik-lilienthal.de/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "AutoRepair"],
          "@id": "https://autokosmetik-lilienthal.de/#business",
          name: "autokosmetik Lilienthal",
          alternateName: "KFZ-Aufbereitung Lilienthal",
          description:
            "Professionelle Autokosmetik und KFZ-Aufbereitung in Lilienthal – Lackaufbereitung, Versiegelung, Polsterreinigung, Innenraumpflege und Verkaufsaufbereitung.",
          image: "https://autokosmetik-lilienthal.de/og.jpg",
          url: "https://autokosmetik-lilienthal.de/",
          telephone: "+4915234551063",
          email: "info@autokosmetik-lilienthal.de",
          priceRange: "€€",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Falkenberger Landstraße 77",
            postalCode: "28865",
            addressLocality: "Lilienthal",
            addressRegion: "Niedersachsen",
            addressCountry: "DE",
          },
          geo: { "@type": "GeoCoordinates", latitude: 53.148, longitude: 8.9 },
          areaServed: [
            { "@type": "City", name: "Lilienthal" },
            { "@type": "City", name: "Osterholz-Scharmbeck" },
            { "@type": "City", name: "Bremen" },
            { "@type": "City", name: "Worpswede" },
            { "@type": "City", name: "Ritterhude" },
            { "@type": "City", name: "Grasberg" },
            { "@type": "City", name: "Schwanewede" },
            { "@type": "City", name: "Lemwerder" },
            { "@type": "AdministrativeArea", name: "Landkreis Osterholz" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "17:00",
            },
          ],
          paymentAccepted: ["Bargeld", "EC-Karte", "Überweisung"],
          currenciesAccepted: "EUR",
          hasMap: "https://www.google.com/maps?q=Falkenberger+Landstraße+77,+28865+Lilienthal",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "47",
            bestRating: "5",
            worstRating: "1",
          },
          sameAs: [],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.text },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const TEL = "+4915234551063";
const TEL_DISPLAY = "0152 / 345 510 63";

type Service = {
  icon: typeof Sparkles;
  title: string;
  price: number | null;
  desc: string;
};

const services: Service[] = [
  { icon: Star, title: "Verkaufsaufbereitung", price: 260, desc: "Rundumreinigung für den Fahrzeugverkauf – für den besten ersten Eindruck." },
  { icon: Sofa, title: "Innenaufbereitung", price: 60, desc: "Intensive Innenraumpflege nach Absprache, individuell auf Ihr Fahrzeug abgestimmt." },
  { icon: Sofa, title: "Polster & Leder", price: 70, desc: "Polsterreinigung und Lederpflege inklusive Imprägnierung." },
  { icon: Shield, title: "Hochglanzversiegelung", price: 250, desc: "Intensiver Tiefenglanz und langanhaltender Schutz für Ihren Lack." },
  { icon: Gem, title: "Nano-Versiegelung", price: 350, desc: "Premium-Schutz für den Lack inkl. Felgenreparatur und Ozonbehandlung möglich." },
  { icon: Scissors, title: "Folienentfernung", price: null, desc: "Individueller Preis je nach Fahrzeug und Größe der Folierung." },
  { icon: Wrench, title: "Motorwäsche", price: 80, desc: "Gründliche Motorwäsche mit anschließender Versiegelung." },
  { icon: Caravan, title: "Wohnwagen-Aufbereitung", price: null, desc: "Individueller Preis je nach Größe und Zustand des Wohnwagens." },
];

const trustItems = [
  { icon: Sparkles, label: "Professionelle KFZ-Aufbereitung" },
  { icon: Shield, label: "Faire Preise ab 29 €" },
  { icon: Car, label: "Innen- & Außenpflege" },
  { icon: Phone, label: "Persönliche Terminvereinbarung" },
  { icon: MapPin, label: "Standort in Lilienthal" },
  { icon: Star, label: "Privat- & Verkaufsfahrzeuge" },
];

const benefits = [
  "Werterhalt Ihres Fahrzeugs",
  "Intensiver, tiefer Lackglanz",
  "Gepflegter, hygienischer Innenraum",
  "Höhere Verkaufschancen beim Fahrzeugverkauf",
  "Langfristiger Schutz durch Versiegelung & Wachs",
  "Schutz vor Umwelteinflüssen & Korrosion",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <Why />
      <Gallery />
      <Reviews />
      <SalesPrep />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { href: "#leistungen", label: "Leistungen" },
    { href: "#warum", label: "Warum wir" },
    { href: "#galerie", label: "Vorher / Nachher" },
    { href: "/galerie", label: "Galerie" },
    { href: "#bewertungen", label: "Bewertungen" },
    { href: "#faq", label: "Wissen & FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40">
        {/* Top info bar */}
        <div className="bg-primary text-white/85 text-xs">
          <div className="container-x flex items-center justify-between gap-x-4 py-2 font-medium tracking-wide">
            <div className="flex items-center gap-x-4 overflow-hidden">
              <span className="hidden sm:inline-flex items-center gap-2 shrink-0">
                <MapPin className="h-3.5 w-3.5 text-accent-foreground shrink-0" />
                <span className="truncate">FALKENBERGER LANDSTR. 77, LILIENTHAL</span>
              </span>
              <span className="inline-flex items-center gap-2 shrink-0">
                <Clock className="h-3.5 w-3.5 text-accent-foreground shrink-0" />
                TERMINE NACH VEREINBARUNG
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 shrink-0">
              <Shield className="h-3.5 w-3.5 text-accent-foreground shrink-0" />
              FACHBETRIEB FÜR FAHRZEUGAUFBEREITUNG
            </span>
          </div>
        </div>

        {/* Main nav */}
        <div className="bg-background border-b border-border shadow-sm">
          <div className="container-x flex items-center justify-between gap-4 py-3">
            <a href="#top" className="flex items-center shrink-0" aria-label="autokosmetik Lilienthal Startseite">
              <img src={logoLight} alt="autokosmetik Lilienthal" className="h-14 md:h-20 w-auto" />
            </a>

            {/* Desktop nav — H1-style font, small size */}
            <nav className="hidden lg:flex items-center gap-8 font-display text-[15px] font-semibold tracking-tight text-primary">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-accent-foreground transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-secondary text-primary"
                aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              <a href={`tel:${TEL}`} className="hidden sm:inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2.5 text-sm font-display font-bold tracking-wide hover:bg-[oklch(0.2_0.06_255)] transition shadow-md">
                <Phone className="h-4 w-4 shrink-0" />
                {TEL_DISPLAY}
              </a>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-border bg-background">
              <nav className="container-x py-3 flex flex-col gap-1 font-display text-[15px] font-semibold tracking-tight text-primary">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 px-4 rounded-xl hover:bg-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Sticky mobile call bar — fixed bottom, always visible on scroll */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-primary border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
          <div className="container-x py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <a
              href={`tel:${TEL}`}
              className="flex items-center justify-center gap-3 rounded-xl bg-white/10 text-white font-display font-bold tracking-wide py-3.5 hover:bg-white/20 active:bg-white/30 transition"
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span className="text-base">{TEL_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-40">
        <img src={heroCar} alt="" width={1920} height={1080} className="w-full h-full object-cover mix-blend-luminosity" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.06_258)] via-transparent to-transparent" />
      <div className="container-x relative py-24 md:py-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold text-white border border-white/20">
            <MapPin className="h-3.5 w-3.5" /> Lilienthal · gegenüber Opel Meyer
          </span>
          <h1 className="mt-6 font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05]">
            Professionelle <span style={{ background: "var(--gradient-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Autokosmetik</span> in Lilienthal
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Lackaufbereitung, Innenreinigung, Versiegelung und komplette Fahrzeugpflege –
            sauber, gründlich und zuverlässig.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-primary shadow-[var(--shadow-glow)] hover:scale-[1.02] transition" style={{ background: "var(--gradient-accent)" }}>
              <Phone className="h-5 w-5" /> Jetzt Termin vereinbaren
            </a>
            <a href="#leistungen" className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition">
              Leistungen ansehen <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8 text-sm text-white/70">
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mo–Fr 8:00–17:00</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[oklch(0.82_0.15_210)]" /> Faire Preise ab 29 €</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[oklch(0.82_0.15_210)]" /> Persönliche Beratung</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-card border border-border hover:border-accent transition" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="h-11 w-11 rounded-xl grid place-items-center" style={{ background: "var(--gradient-accent)" }}>
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="leistungen" className="py-20 md:py-28 bg-secondary">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">Unsere Leistungen</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-primary">Pflege auf höchstem Niveau</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Vom schnellen Innen-Service bis zur kompletten Lackaufbereitung – wir bieten alles für Ihr Fahrzeug aus einer Hand.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="group relative flex flex-col rounded-3xl bg-card p-7 border border-border hover:border-accent transition" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl grid place-items-center" style={{ background: "var(--gradient-accent)" }}>
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-right">
                  {s.price !== null ? (
                    <>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">ab</div>
                      <div className="text-2xl font-display font-bold text-primary">{s.price},00 €</div>
                    </>
                  ) : (
                    <>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">Preis</div>
                      <div className="text-2xl font-display font-bold text-primary">Individuell</div>
                    </>
                  )}
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
              <a href={`tel:${TEL}`} className="mt-6 inline-flex items-center justify-between gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
                Termin anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground max-w-3xl">
          <strong className="text-foreground">Preishinweis:</strong> Alle Preise beziehen sich auf ein Fahrzeug der Mittelklasse in normal verschmutztem Zustand.
          Größere oder besonders verschmutzte Fahrzeuge werden mit Aufschlag berechnet: Großraumlimousinen und Geländewagen +20 %, Transporter +40 %.
        </p>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="warum" className="py-20 md:py-28 bg-background">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img src={detailing} alt="Professionelle Fahrzeugaufbereitung" width={1280} height={960} loading="lazy" className="rounded-3xl w-full h-auto" style={{ boxShadow: "var(--shadow-elegant)" }} />
          <div className="absolute -bottom-6 -right-6 hidden md:block rounded-2xl bg-card p-5 border border-border max-w-[220px]" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="flex items-center gap-2">
              <Gem className="h-5 w-5 text-accent-foreground" />
              <span className="text-sm font-bold text-primary">Premium Care</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Hochwertige Produkte für langanhaltenden Glanz</p>
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">Warum aufbereiten?</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-primary">
            Warum professionelle Fahrzeugaufbereitung?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ein gepflegtes Fahrzeug fährt nicht nur schöner – es behält auch seinen Wert.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full grid place-items-center mt-0.5 shrink-0" style={{ background: "var(--gradient-accent)" }}>
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
          <a href={`tel:${TEL}`} className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition">
            <Phone className="h-4 w-4" /> Beratungstermin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}

function SalesPrep() {
  return (
    <section id="verkauf" className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-25">
        <img src={wax} alt="" width={1280} height={960} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-[oklch(0.82_0.15_210)]">Verkaufsaufbereitung</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-white">
            Mehr Eindruck beim Fahrzeugverkauf
          </h2>
          <p className="mt-5 text-lg text-white/80 max-w-xl">
            Eine professionelle Verkaufsaufbereitung sorgt dafür, dass Ihr Fahrzeug
            gepflegter wirkt, einen besseren ersten Eindruck macht und sich oft
            leichter – und zu einem besseren Preis – verkaufen lässt.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-primary shadow-[var(--shadow-glow)] hover:scale-[1.02] transition" style={{ background: "var(--gradient-accent)" }}>
              <Phone className="h-5 w-5" /> Verkaufsaufbereitung anfragen
            </a>
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
        <div className="rounded-3xl bg-white/5 backdrop-blur-md p-8 border border-white/15">
          <div className="flex items-baseline gap-3">
            <span className="text-sm uppercase tracking-wider text-white/60">ab</span>
            <span className="text-5xl font-display font-extrabold text-white">179,00 €</span>
          </div>
          <p className="mt-2 text-white/70">Komplette Verkaufsaufbereitung</p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {["Außenreinigung & Lackpflege","Intensive Innenreinigung","Polsterauffrischung","Glanzfinish & Versiegelung"].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4 text-[oklch(0.82_0.15_210)] shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28 bg-background">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">Kontakt</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-primary">So erreichen Sie uns</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Wir freuen uns auf Ihren Anruf und beraten Sie persönlich zu allen Leistungen.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-card p-8 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="space-y-6">
              <ContactRow icon={MapPin} title="Adresse">
                <p>autokosmetik<br />Falkenberger Landstraße 77<br />28865 Lilienthal</p>
                <p className="text-sm text-muted-foreground mt-1">gegenüber von Opel Meyer</p>
              </ContactRow>
              <ContactRow icon={Phone} title="Telefon / Mobil">
                <a href={`tel:${TEL}`} className="text-primary font-bold text-lg hover:underline">{TEL_DISPLAY}</a>
              </ContactRow>
              <ContactRow icon={Clock} title="Öffnungszeiten">
                <p>Montag – Freitag: <strong>8:00 – 17:00 Uhr</strong></p>
                <p>Samstag: <strong>nach Absprache</strong></p>
              </ContactRow>
            </div>
            <a href={`tel:${TEL}`} className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-4 text-base font-semibold hover:opacity-90 transition">
              <Phone className="h-5 w-5" /> Jetzt anrufen
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden border border-border min-h-[400px] relative" style={{ boxShadow: "var(--shadow-card)" }}>
            <iframe
              title="Standort autokosmetik – Falkenberger Landstraße 77, 28865 Lilienthal"
              src="https://www.google.com/maps?q=Falkenberger+Landstra%C3%9Fe+77%2C+28865+Lilienthal&output=embed"
              className="w-full h-full absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="h-11 w-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-accent)" }}>
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-bold text-primary">{title}</h3>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </div>
  );
}

type FaqItem = {
  q: string;
  text: string;
  body?: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    q: "Was ist Autokosmetik – und worin liegt der Unterschied zur Autowäsche?",
    text: "Autokosmetik bedeutet die professionelle Pflege Ihres Fahrzeugs in höchster Qualität – innen wie außen. Anders als bei einer klassischen Waschanlage arbeiten wir in Handarbeit, schonend für Lack, Polster und Materialien. Das Ergebnis: ein sichtbar gepflegtes Auto, ein hygienischer Innenraum und ein spürbar höherer Werterhalt Ihres Fahrzeugs. Typische Leistungen: Hand-Politur und Lackaufbereitung, Carnauba- und Nano-Versiegelung, Innenraum-, Polster- und Lederpflege sowie Ozonbehandlung gegen Gerüche.",
    body: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Autokosmetik bedeutet die professionelle Pflege Ihres Fahrzeugs in höchster
          Qualität – innen wie außen. Anders als bei einer klassischen Waschanlage
          arbeiten wir in Handarbeit, schonend für Lack, Polster und Materialien. Das
          Ergebnis: ein sichtbar gepflegtes Auto, ein hygienischer Innenraum und ein
          spürbar höherer Werterhalt Ihres Fahrzeugs.
        </p>
        <h3 className="mt-4 text-base font-bold text-primary">Typische Leistungen der Autokosmetik</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />Hand-Politur und Lackaufbereitung</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />Carnauba- und Nano-Versiegelung</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />Innenraum-, Polster- und Lederpflege</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />Ozonbehandlung gegen Gerüche</li>
        </ul>
      </>
    ),
  },
  {
    q: "Was umfasst eine professionelle KFZ-Aufbereitung – und wann lohnt sie sich?",
    text: "Eine professionelle KFZ-Aufbereitung folgt klaren Schritten: Vorwäsche, gründliche Reinigung, Politur, Versiegelung sowie eine intensive Innenraumaufbereitung. So entfernen wir hartnäckige Verschmutzungen, kleine Kratzer und matten Lack – und bringen Ihr Fahrzeug zurück in Bestform. Besonders sinnvoll ist eine Aufbereitung vor dem Fahrzeugverkauf für mehr Verkaufswert, vor einer Leasingrückgabe zur Vermeidung von Abzügen, nach dem Winter zur Lack- und Unterbodenpflege sowie bei Jahreswagen, Gebraucht- und Neuwagen.",
    body: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Eine professionelle KFZ-Aufbereitung folgt klaren Schritten: Vorwäsche,
          gründliche Reinigung, Politur, Versiegelung sowie eine intensive
          Innenraumaufbereitung. So entfernen wir hartnäckige Verschmutzungen, kleine
          Kratzer und matten Lack – und bringen Ihr Fahrzeug zurück in Bestform.
        </p>
        <h3 className="mt-4 text-base font-bold text-primary">Wann lohnt sich eine Aufbereitung?</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />Vor dem Fahrzeugverkauf für mehr Verkaufswert</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />Vor Leasingrückgabe zur Vermeidung von Abzügen</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />Nach dem Winter zur Lack- und Unterbodenpflege</li>
          <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />Bei Jahreswagen, Gebraucht- und Neuwagen</li>
        </ul>
      </>
    ),
  },
  {
    q: "In welchen Orten rund um Lilienthal sind Sie tätig?",
    text: "Unser Standort in der Falkenberger Landstraße in Lilienthal liegt direkt im Landkreis Osterholz und ist verkehrsgünstig zwischen Bremen und Osterholz-Scharmbeck erreichbar. Wir betreuen Privatkunden, Geschäftskunden und Autohändler aus Lilienthal, Osterholz-Scharmbeck, Bremen, Worpswede, Ritterhude, Grasberg, Schwanewede und Lemwerder – mit kurzer Anfahrt, fairen Preisen und persönlichem Service.",
    body: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Unser Standort in der Falkenberger Landstraße in <strong>Lilienthal</strong> liegt
          direkt im Landkreis Osterholz und ist verkehrsgünstig zwischen <strong>Bremen</strong>{" "}
          und <strong>Osterholz-Scharmbeck</strong> erreichbar. Wir betreuen Privatkunden,
          Geschäftskunden und Autohändler aus der gesamten Region.
        </p>
        <h3 className="mt-4 text-base font-bold text-primary">Wir sind für Sie da in:</h3>
        <ul className="mt-2 grid grid-cols-2 gap-y-1.5 text-sm text-muted-foreground">
          {["Lilienthal","Osterholz-Scharmbeck","Bremen","Worpswede","Ritterhude","Grasberg","Schwanewede","Lemwerder"].map(o => (
            <li key={o} className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent-foreground shrink-0" />{o}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    q: "Wo finde ich die Autokosmetik in Lilienthal?",
    text: "Sie finden uns in der Falkenberger Landstraße 77, 28865 Lilienthal – verkehrsgünstig zwischen Lilienthal, Bremen und Osterholz-Scharmbeck.",
  },
  {
    q: "Was kostet eine professionelle Autoaufbereitung?",
    text: "Unsere Leistungen starten ab 29 € (Motorwäsche). Eine komplette Verkaufsaufbereitung gibt es ab 179 €, Nano-Versiegelung ab 295 €. Für Ihr Fahrzeug erstellen wir gerne ein individuelles Angebot.",
  },
  {
    q: "Wie lange dauert eine Aufbereitung?",
    text: "Je nach Leistung zwischen 1 Stunde (z. B. Innenreinigung) und einem ganzen Tag bei einer Komplettaufbereitung mit Versiegelung. Termine sprechen wir individuell mit Ihnen ab.",
  },
];


function Reviews() {
  return (
    <section id="bewertungen" className="py-20 md:py-28 bg-background">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">Google Bewertungen</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-primary">Das sagen unsere Kunden</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Überzeugen Sie sich selbst – unsere Kunden aus Lilienthal, Bremen und Osterholz-Scharmbeck bewerten uns auf Google.
          </p>

          <div className="mt-10 inline-flex flex-col items-center gap-4 rounded-3xl bg-card border border-border p-8 md:p-10" style={{ boxShadow: "var(--shadow-card)" }}>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3].map((i) => (
                <Star key={i} className="h-9 w-9 fill-[oklch(0.75_0.14_75)] text-[oklch(0.75_0.14_75)]" />
              ))}
              <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="halfStar" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="80%" stopColor="oklch(0.75 0.14 75)" />
                    <stop offset="80%" stopColor="oklch(0.85 0.01 75)" />
                  </linearGradient>
                </defs>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#halfStar)" stroke="oklch(0.75 0.14 75)" strokeWidth="1" />
              </svg>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-display font-extrabold text-primary">4,8</span>
              <span className="text-lg text-muted-foreground">/ 5</span>
            </div>
            <p className="text-sm text-muted-foreground">Bewertungen auf Google</p>
            <a
              href="https://share.google/4qr3EB8RbXQSR0R7n"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition"
            >
              <Star className="h-4 w-4" /> Alle Bewertungen lesen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-secondary">
      <div className="container-x grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-primary">Häufige Fragen zur Autoaufbereitung</h2>
          <p className="mt-4 text-muted-foreground">
            Antworten zu Leistungen, Preisen und Ablauf – für Kunden aus Lilienthal,
            Osterholz-Scharmbeck, Bremen und Umgebung.
          </p>
        </div>
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl bg-background border border-border p-5 open:shadow-[var(--shadow-card)] transition">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-primary font-semibold list-none">
                <span>{f.q}</span>
                <span className="h-7 w-7 rounded-full grid place-items-center bg-secondary text-primary transition group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3">{f.body ?? <p className="text-muted-foreground leading-relaxed">{f.text}</p>}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.05_258)] text-primary-foreground">
      <div className="container-x py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <FooterLogo />
          <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-sm">
            Inhabergeführte KFZ-Aufbereitung in Lilienthal. Mit Sorgfalt, hochwertigen
            Produkten und ehrlicher Beratung – für Privatkunden und Fahrzeughändler.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">Kontakt</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-foreground" /><span>Falkenberger Landstraße 77<br />28865 Lilienthal</span></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-accent-foreground" /><a href={`tel:${TEL}`} className="hover:text-white transition">{TEL_DISPLAY}</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">Öffnungszeiten</h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            <li className="flex justify-between border-b border-white/10 pb-2"><span>Montag – Freitag</span><span className="text-white font-medium">8:00 – 17:00</span></li>
            <li className="flex justify-between border-b border-white/10 pb-2"><span>Samstag</span><span className="text-white font-medium">nach Absprache</span></li>
            <li className="flex justify-between"><span>Sonntag</span><span className="text-white/50">geschlossen</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} autokosmetik Lilienthal · Alle Rechte vorbehalten</span>
          <div className="flex gap-6">
            <Link to="/galerie" className="hover:text-white transition">Galerie</Link>
            <a href="/impressum" className="hover:text-white transition">Impressum</a>
            <Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="flex flex-col leading-none select-none" aria-label="autokosmetik Lilienthal">
      <svg viewBox="0 0 520 110" className="h-14 md:h-16 w-auto" role="img" aria-hidden="true">
        <text x="0" y="78" fontFamily="'Sora', system-ui, sans-serif" fontWeight="800" fontSize="92" fill="#ffffff" letterSpacing="-2">auto</text>
        <text x="195" y="78" fontFamily="'Sora', system-ui, sans-serif" fontStyle="italic" fontWeight="700" fontSize="92" fill="#ffffff" letterSpacing="-2">kosmetik</text>
      </svg>
      <span className="mt-2 text-[11px] tracking-[0.32em] uppercase text-white/70 font-medium">Lackpflege · Innenreinigung · Versiegelung</span>
    </div>
  );
}

const pairs = [
  { id: "lack", title: "Lackaufbereitung", desc: "Politur, Reinigung und Pflege für tiefen Glanz statt matter, verschmutzter Oberflächen.", before: beforePaint, after: afterPaint },
  { id: "innen", title: "Innenraum", desc: "Aussaugen, Polsterreinigung und Aufbereitung – aus verschmutzt wird gepflegt und hygienisch.", before: beforeInterior, after: interior },
  { id: "siegel", title: "Versiegelung", desc: "Wasser perlt vom Lack ab statt zu verlaufen – sichtbarer Schutz und intensiver Glanz.", before: beforeSeal, after: wax },
];

const galleryShots = [
  { src: galleryTaycan, label: "Porsche Taycan" },
  { src: galleryLambo, label: "Lamborghini Huracán" },
  { src: gallery911, label: "Porsche 911 Turbo" },
  { src: galleryMustang, label: "Ford Mustang GT" },
];

function Gallery() {
  return (
    <section id="galerie" className="py-20 md:py-28 bg-secondary">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">Vorher / Nachher</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-primary">
            Sichtbare Ergebnisse
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Ziehen Sie den Slider, um den Unterschied vor und nach unserer Aufbereitung zu sehen –
            für Lack, Innenraum und Versiegelung.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {pairs.map((p) => (
            <div key={p.id} className="flex flex-col">
              <BeforeAfter before={p.before} after={p.after} alt={p.title} />
              <h3 className="mt-5 text-xl font-bold text-primary">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">Detail-Galerie</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-primary">Aufbereitete Fahrzeuge aus Lilienthal</h3>
            </div>
            <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
              <Phone className="h-4 w-4" /> Ihr Auto anmelden
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {galleryShots.map((g) => (
              <figure key={g.label} className="group relative aspect-[4/3] sm:aspect-square lg:aspect-[3/4] overflow-hidden rounded-2xl bg-card" style={{ boxShadow: "var(--shadow-card)" }}>
                <img src={g.src} alt={g.label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-sm md:text-base font-semibold text-white drop-shadow">{g.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

