import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — autokosmetik Lilienthal" },
      { name: "description", content: "Impressum von autokosmetik Lilienthal. Angaben gemäß § 5 TMG." },
      { property: "og:title", content: "Impressum — autokosmetik Lilienthal" },
      { property: "og:description", content: "Impressum von autokosmetik Lilienthal. Angaben gemäß § 5 TMG." },
      { property: "og:url", content: "https://autokosmetik-lilienthal.de/impressum" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://autokosmetik-lilienthal.de/impressum" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-[oklch(0.16_0.05_258)]">
        <div className="container-x py-6 flex items-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      <main className="container-x py-16 md:py-24 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-display font-extrabold text-primary">
          Impressum
        </h1>
        <p className="mt-2 text-muted-foreground">
          Angaben gemäß § 5 TMG
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              Betreiber der Website
            </h2>
            <div className="mt-4 space-y-1 text-foreground leading-relaxed">
              <p className="font-semibold">autokosmetik (Einzelunternehmer)</p>
              <p>Inhaber: Izzeddin AK</p>
              <p className="flex items-start gap-2 mt-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-accent-foreground" />
                <span>
                  Falkenberger Landstraße 75
                  <br />
                  28865 Lilienthal
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent-foreground" />
                <a href="tel:+4915234551063" className="hover:text-accent-foreground transition">
                  0152 / 345 510 63
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              Steuernummer
            </h2>
            <p className="mt-3 text-foreground leading-relaxed">
              36 101 11064
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              Haftungsausschluss
            </h2>
            <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed text-sm">
              <p>
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen.
              </p>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
                diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen,
                die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
                den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
                ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              Streitschlichtung
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-foreground hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="container-x py-6 flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} autokosmetik Lilienthal</span>
          <Link to="/" className="hover:text-foreground transition">
            Startseite
          </Link>
        </div>
      </footer>
    </div>
  );
}
