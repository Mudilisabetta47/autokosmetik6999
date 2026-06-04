import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Mail } from "lucide-react";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — autokosmetik Lilienthal" },
      { name: "description", content: "Datenschutzerklärung von autokosmetik Lilienthal. Informationen zur Verarbeitung personenbezogener Daten." },
      { property: "og:title", content: "Datenschutzerklärung — autokosmetik Lilienthal" },
      { property: "og:description", content: "Datenschutzerklärung von autokosmetik Lilienthal. Informationen zur Verarbeitung personenbezogener Daten." },
      { property: "og:url", content: "https://autokosmetik-lilienthal.de/datenschutz" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://autokosmetik-lilienthal.de/datenschutz" },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>
        <p className="mt-2 text-muted-foreground">
          Informationen zur Verarbeitung Ihrer Daten
        </p>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              1. Verantwortlicher
            </h2>
            <div className="mt-4 space-y-1 text-foreground leading-relaxed">
              <p className="font-semibold">autokosmetik (Einzelunternehmer)</p>
              <p>Inhaber: Izzeddin AK</p>
              <p>Falkenberger Landstraße 75</p>
              <p>28865 Lilienthal</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              2. Kontakt für rechtliche Fragen
            </h2>
            <p className="flex items-center gap-2 mt-3">
              <Mail className="h-4 w-4 shrink-0 text-accent-foreground" />
              <a href="mailto:mudi@mep-agentur.de" className="hover:text-accent-foreground transition">
                mudi@mep-agentur.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              3. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed text-sm">
              <p>
                Personenbezogene Daten werden nur erhoben, wenn Sie diese im Rahmen einer Kontaktaufnahme
                (z. B. per Telefon oder E-Mail) freiwillig mitteilen. Wir verwenden die von Ihnen mitgeteilten
                Daten ausschließlich zur Bearbeitung Ihres Anliegens.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              4. Speicherdauer
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Ihre personenbezogenen Daten werden nur so lange gespeichert, wie dies für die Erfüllung
              der Zwecke erforderlich ist, für die sie erhoben wurden, oder wie gesetzliche
              Aufbewahrungspflichten dies vorsehen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              5. Ihre Rechte
            </h2>
            <div className="mt-3 space-y-3 text-muted-foreground leading-relaxed text-sm">
              <p>
                Sie haben das Recht auf Auskunft über die bei uns gespeicherten personenbezogenen Daten,
                sowie auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Außerdem steht Ihnen
                ein Widerspruchsrecht gegen die Verarbeitung sowie das Recht auf Datenübertragbarkeit zu.
              </p>
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an den oben genannten Verantwortlichen
                oder an{" "}
                <a href="mailto:mudi@mep-agentur.de" className="text-accent-foreground hover:underline">
                  mudi@mep-agentur.de
                </a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              6. Hosting &amp; technische Daten
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Diese Website wird gehostet. Beim Zugriff auf die Website werden automatisch technische
              Daten (z. B. IP-Adresse, Datum und Uhrzeit der Anfrage) durch den Hosting-Anbieter
              verarbeitet. Diese Daten sind für die technische Bereitstellung der Website erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-semibold text-primary">
              7. Änderungen dieser Erklärung
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte
              rechtliche Rahmenbedingungen oder bei Änderungen unserer Datenverarbeitung anzupassen.
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
