import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone, MapPin, ArrowLeft, X, ChevronLeft, ChevronRight,
} from "lucide-react";

import galleryTaycan from "@/assets/gallery-porsche-taycan.jpg";
import galleryLambo from "@/assets/gallery-lambo.jpg";
import gallery911 from "@/assets/gallery-porsche-911.jpg";
import galleryMustang from "@/assets/gallery-mustang.webp";
import beforePaint from "@/assets/before-paint.jpg";
import afterPaint from "@/assets/after-paint.jpg";
import beforeInterior from "@/assets/before-interior.jpg";
import interior from "@/assets/interior.jpg";
import beforeSeal from "@/assets/before-seal.jpg";
import wax from "@/assets/wax.jpg";
import detailing from "@/assets/detailing.jpg";
import heroCar from "@/assets/hero-car.jpg";
import logoLight from "@/assets/logo-light.png";

import porscheBoxster from "@/assets/porsche-boxster-schwarz.jpg.asset.json";
import g63Front from "@/assets/g63-amg-weiss-front.jpg.asset.json";
import porsche997 from "@/assets/porsche-997-turbo-front.jpg.asset.json";
import porsche924 from "@/assets/porsche-924-rot.jpg.asset.json";
import porsche911CarreraS from "@/assets/porsche-911-carrera-s-schwarz.jpg.asset.json";
import bmwM850Heck from "@/assets/bmw-m850i-cabrio-heck.jpg.asset.json";
import bmwM850Front from "@/assets/bmw-m850i-cabrio-front.jpg.asset.json";
import porsche991Seite from "@/assets/porsche-991-schwarz-seite.jpg.asset.json";
import bmwM850Seite from "@/assets/bmw-m850i-cabrio-seite.jpg.asset.json";
import g63Heck from "@/assets/g63-amg-weiss-heck.jpg.asset.json";
import mercedesCCabrio from "@/assets/mercedes-c-cabrio-grau.jpg.asset.json";
import bmwX6M40iHeck from "@/assets/bmw-x6-m40i-heck.jpg.asset.json";
import porsche924Seite from "@/assets/porsche-924-rot-seite.jpg.asset.json";
import amgGtSchwarzShop from "@/assets/amg-gt-schwarz-shop.jpg.asset.json";
import bmwX6SchwarzHeck from "@/assets/bmw-x6-schwarz-heck.jpg.asset.json";
import g63HeckShop from "@/assets/g63-amg-weiss-heck-shop.jpg.asset.json";
import amgGtSchwarzFront from "@/assets/amg-gt-schwarz-front.jpg.asset.json";
import porsche997Heck from "@/assets/porsche-997-turbo-heck.jpg.asset.json";
import rangeRoverSport from "@/assets/range-rover-sport-grau.jpg.asset.json";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — autokosmetik Lilienthal | KFZ-Aufbereitung Bilder" },
      { name: "description", content: "Bildergalerie der Autokosmetik Lilienthal. Vorher-Nachher Aufnahmen von Lackaufbereitung, Innenraumreinigung, Versiegelung und Fahrzeugpflege in Lilienthal, Osterholz-Scharmbeck und Bremen." },
      { name: "keywords", content: "Autokosmetik Galerie Lilienthal, KFZ-Aufbereitung Bilder, Autoaufbereitung Vorher Nachher, Lackaufbereitung Fotos, Innenraumreinigung Bilder, Fahrzeugversiegelung Galerie, Autopflege Lilienthal Bilder, Car Detailing Bremen Galerie, Fahrzeugaufbereitung Osterholz Fotos" },
      { property: "og:title", content: "Galerie — autokosmetik Lilienthal | KFZ-Aufbereitung Bilder" },
      { property: "og:description", content: "Vorher-Nachher Aufnahmen von Lackaufbereitung, Innenraumreinigung und Versiegelung aus Lilienthal." },
      { property: "og:url", content: "https://autokosmetik-lilienthal.de/galerie" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Galerie — autokosmetik Lilienthal" },
      { name: "twitter:description", content: "Vorher-Nachher Aufnahmen von Lackaufbereitung, Innenraumreinigung und Versiegelung aus Lilienthal." },
    ],
    links: [
      { rel: "canonical", href: "https://autokosmetik-lilienthal.de/galerie" },
    ],
  }),
  component: GaleriePage,
});

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

const images: GalleryImage[] = [
  { src: porsche911CarreraS.url, alt: "Porsche 911 Carrera S schwarz – Aufbereitung vor dem Studio in Lilienthal", category: "Kundenfahrzeuge" },
  { src: porsche991Seite.url, alt: "Porsche 991 schwarz – Hochglanz nach Lackaufbereitung", category: "Kundenfahrzeuge" },
  { src: g63Front.url, alt: "Mercedes-AMG G 63 weiß – Frontansicht nach Komplettaufbereitung", category: "Kundenfahrzeuge" },
  { src: g63Heck.url, alt: "Mercedes-AMG G 63 weiß – Heckansicht nach Aufbereitung", category: "Kundenfahrzeuge" },
  { src: bmwM850Front.url, alt: "BMW M850i Cabrio weiß – Frontansicht nach Aufbereitung", category: "Kundenfahrzeuge" },
  { src: bmwM850Seite.url, alt: "BMW M850i Cabrio weiß – Seitenansicht vor dem Studio", category: "Kundenfahrzeuge" },
  { src: bmwM850Heck.url, alt: "BMW M850i Cabrio weiß – Heckansicht", category: "Kundenfahrzeuge" },
  { src: porsche997.url, alt: "Porsche 911 (997) Turbo schwarz – Frontansicht nach Politur", category: "Kundenfahrzeuge" },
  { src: porscheBoxster.url, alt: "Porsche Boxster schwarz – Hochglanz Lackaufbereitung", category: "Kundenfahrzeuge" },
  { src: porsche924.url, alt: "Porsche 924 rot – Oldtimer-Aufbereitung", category: "Kundenfahrzeuge" },
  { src: mercedesCCabrio.url, alt: "Mercedes-Benz C-Klasse Cabrio grau – Aufbereitung vor dem Studio in Lilienthal", category: "Kundenfahrzeuge" },
  { src: bmwX6M40iHeck.url, alt: "BMW X6 M40i schwarz – Heckansicht nach Hochglanzaufbereitung", category: "Kundenfahrzeuge" },
  { src: bmwX6SchwarzHeck.url, alt: "BMW X6 schwarz – Heckansicht nach Politur und Versiegelung", category: "Kundenfahrzeuge" },
  { src: porsche924Seite.url, alt: "Porsche 924 rot – Seitenansicht Oldtimer-Aufbereitung", category: "Kundenfahrzeuge" },
  { src: amgGtSchwarzShop.url, alt: "Mercedes-AMG GT schwarz – Hochglanz vor dem Studio in Lilienthal", category: "Kundenfahrzeuge" },
  { src: amgGtSchwarzFront.url, alt: "Mercedes-AMG GT schwarz – Frontansicht nach Komplettaufbereitung", category: "Kundenfahrzeuge" },
  { src: g63HeckShop.url, alt: "Mercedes-AMG G 63 weiß – Heckansicht vor dem Autokosmetik Studio", category: "Kundenfahrzeuge" },
  { src: porsche997Heck.url, alt: "Porsche 911 (997) Turbo schwarz – Heckansicht nach Aufbereitung", category: "Kundenfahrzeuge" },
  { src: rangeRoverSport.url, alt: "Range Rover Sport grau – Frontansicht nach Lackaufbereitung", category: "Kundenfahrzeuge" },
  { src: afterPaint, alt: "Lackaufbereitung — tiefen Glanz und Spiegelglanz", category: "Lackaufbereitung" },
  { src: interior, alt: "Innenraum — gereinigt und aufbereitet", category: "Innenraum" },
  { src: wax, alt: "Versiegelung — Wasser perlt ab", category: "Versiegelung" },
  { src: detailing, alt: "Professionelle Detailing-Aufbereitung", category: "Detailing" },
  { src: heroCar, alt: "Hochglanz Fahrzeug nach Aufbereitung", category: "Ergebnisse" },
  { src: galleryTaycan, alt: "Porsche Taycan — aufbereitet in Lilienthal", category: "Ergebnisse" },
  { src: galleryLambo, alt: "Lamborghini Huracán — Detailing Ergebnis", category: "Ergebnisse" },
  { src: gallery911, alt: "Porsche 911 Turbo — Lackaufbereitung", category: "Ergebnisse" },
  { src: galleryMustang, alt: "Ford Mustang GT — Hochglanzversiegelung", category: "Ergebnisse" },
];

const categories = ["Alle", ...Array.from(new Set(images.map((i) => i.category)))];

function GaleriePage() {
  const [filter, setFilter] = useState("Alle");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "Alle" ? images : images.filter((i) => i.category === filter);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((i) => (i === null ? null : i === 0 ? filtered.length - 1 : i - 1));
  const nextImage = () => setLightbox((i) => (i === null ? null : i === filtered.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40">
        <div className="bg-primary text-white/85 text-xs">
          <div className="container-x flex items-center justify-between gap-x-4 py-2 font-medium tracking-wide">
            <div className="flex items-center gap-x-4 overflow-hidden">
              <span className="hidden sm:inline-flex items-center gap-2 shrink-0">
                <MapPin className="h-3.5 w-3.5 text-accent-foreground shrink-0" />
                <span className="truncate">FALKENBERGER LANDSTR. 77, LILIENTHAL</span>
              </span>
              <span className="inline-flex items-center gap-2 shrink-0">
                TERMINE NACH VEREINBARUNG
              </span>
            </div>
            <span className="hidden md:inline-flex items-center gap-2 shrink-0">
              FACHBETRIEB FÜR FAHRZEUGAUFBEREITUNG
            </span>
          </div>
        </div>
        <div className="bg-background border-b border-border shadow-sm">
          <div className="container-x flex items-center justify-between gap-4 py-3">
            <Link to="/" className="flex items-center shrink-0" aria-label="autokosmetik Lilienthal Startseite">
              <img src={logoLight} alt="autokosmetik Lilienthal" className="h-14 md:h-20 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-6 font-display text-[15px] font-semibold tracking-tight text-primary">
              <Link to="/" className="hover:text-accent-foreground transition">Startseite</Link>
              <span className="text-accent-foreground">Galerie</span>
              <Link to="/impressum" className="hover:text-accent-foreground transition">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-accent-foreground transition">Datenschutz</Link>
            </nav>
            <a href="tel:+4915234551063" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2.5 text-sm font-display font-bold tracking-wide hover:bg-[oklch(0.2_0.06_255)] transition shadow-md">
              <Phone className="h-4 w-4 shrink-0" />
              0152 / 345 510 63
            </a>
          </div>
        </div>
      </header>

      {/* Back link mobile */}
      <div className="bg-[oklch(0.16_0.05_258)]">
        <div className="container-x py-4 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      <main className="container-x py-12 md:py-20">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-foreground/80">Bildergalerie</span>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-primary">
            Unsere Arbeit in Bildern
          </h1>
          <p className="mt-4 text-muted-foreground text-lg">
            Vorher-Nachher Aufnahmen, Detail-Shots und Ergebnisse unserer KFZ-Aufbereitung in Lilienthal.
            Klicken Sie auf ein Bild, um es vergrößert anzusehen.
          </p>
        </div>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-primary hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((img, idx) => (
            <figure
              key={`${img.src}-${idx}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-card cursor-pointer"
              style={{ boxShadow: "var(--shadow-card)" }}
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <figcaption className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white drop-shadow opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">
                {img.alt}
              </figcaption>
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/50 text-white text-xs font-medium backdrop-blur">
                {img.category}
              </span>
            </figure>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">Keine Bilder in dieser Kategorie vorhanden.</p>
        )}
      </main>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            onClick={closeLightbox}
            aria-label="Schließen"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white/90 text-sm font-medium">{filtered[lightbox].alt}</p>
            <p className="text-white/50 text-xs mt-1">{lightbox + 1} / {filtered.length}</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[oklch(0.16_0.05_258)] text-primary-foreground">
        <div className="container-x py-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex flex-col leading-none select-none" aria-label="autokosmetik Lilienthal">
              <svg viewBox="0 0 520 110" className="h-14 md:h-16 w-auto" role="img" aria-hidden="true">
                <text x="0" y="78" fontFamily="'Sora', system-ui, sans-serif" fontWeight="800" fontSize="92" fill="#ffffff" letterSpacing="-2">auto</text>
                <text x="195" y="78" fontFamily="'Sora', system-ui, sans-serif" fontStyle="italic" fontWeight="700" fontSize="92" fill="#ffffff" letterSpacing="-2">kosmetik</text>
              </svg>
              <span className="mt-2 text-[11px] tracking-[0.32em] uppercase text-white/70 font-medium">Lackpflege · Innenreinigung · Versiegelung</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-sm">
              Inhabergeführte KFZ-Aufbereitung in Lilienthal. Mit Sorgfalt, hochwertigen
              Produkten und ehrlicher Beratung – für Privatkunden und Fahrzeughändler.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">Kontakt</h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent-foreground" /><span>Falkenberger Landstraße 77<br />28865 Lilienthal</span></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0 text-accent-foreground" /><a href="tel:+4915234551063" className="hover:text-white transition">0152 / 345 510 63</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/90 mb-4">Seiten</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition">Startseite</Link></li>
              <li><Link to="/galerie" className="hover:text-white transition">Galerie</Link></li>
              <li><Link to="/impressum" className="hover:text-white transition">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-x py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
            <span>© {new Date().getFullYear()} autokosmetik Lilienthal · Alle Rechte vorbehalten</span>
            <div className="flex gap-6">
              <Link to="/impressum" className="hover:text-white transition">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
