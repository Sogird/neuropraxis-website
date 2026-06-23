import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Anfahrt – Neuropraxis an der Ihme",
}

const oeffentlich = [
  {
    haltestelle: "Schwarzer Bär",
    linien: "Stadtbahnlinien 9 und 17 · Buslinien 120, 300 und 500",
    entfernung: "ca. 350 m",
  },
  {
    haltestelle: "Allerweg",
    linien: "Stadtbahnlinien 3, 7 und 17 · Buslinie 100",
    entfernung: "ca. 450 m",
  },
]

export default function AnfahrtPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Anfahrt"
        title="So kommen Sie zu uns"
        description="Wir empfehlen die Anfahrt mit öffentlichen Verkehrsmitteln. Die Praxis befindet sich im Stadtteil Hannover-Linden."
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
                Mit öffentlichen Verkehrsmitteln
              </p>
              <div className="space-y-4">
                {oeffentlich.map((h) => (
                  <div
                    key={h.haltestelle}
                    className="bg-bg-secondary rounded-lg p-6 border border-border-subtle"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <p className="font-medium text-text-primary">{h.haltestelle}</p>
                      <span className="text-xs text-brand bg-brand-light px-2.5 py-1 rounded-md shrink-0">
                        {h.entfernung}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{h.linien}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted mt-4">
                Den persönlichen Fahrplan finden Sie über die elektronische
                Fahrplanauskunft der ÜSTRA.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
                Mit dem Auto
              </p>
              <div className="bg-bg-secondary rounded-lg p-6 border border-border-subtle">
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Nutzen Sie Ihr bevorzugtes Navigationsgerät. Die Praxis
                  verfügt über eigene Parkplätze direkt hinter dem Gebäude.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-md px-4 py-3">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Hinweis: Die Parkplätze werden am besten von Süden her
                    angefahren. Zieladresse für die Einfahrt: Ricklinger
                    Straße 7. Aktuell finden dort noch Bauarbeiten statt —
                    die Einfahrt ist daher schlecht einsehbar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-bg-dark rounded-xl p-7 text-white">
              <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/65 mb-5">
                Praxisadresse
              </p>
              <address className="not-italic font-display text-xl text-white leading-snug mb-4">
                Ricklinger Straße 5B<br />
                30449 Hannover
              </address>
              <p className="text-xs text-white/60 mb-6">Stadtteil Linden</p>
              <a
                href="https://maps.google.com/?q=Ricklinger+Stra%C3%9Fe+5B+30449+Hannover"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-text-primary text-sm px-5 py-2.5 rounded-md hover:bg-white/90 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                In Google Maps öffnen
              </a>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6 border border-border-subtle">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-4">
                Telefon
              </p>
              <a
                href="tel:051184300090"
                className="font-display text-lg text-text-primary hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
              >
                0511 8430090
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
