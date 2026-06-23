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

      {/* Map */}
      <div className="max-w-6xl mx-auto px-6 pt-10">
        <div className="relative overflow-hidden rounded-lg border border-border-subtle h-72 md:h-[420px]">
          <iframe
            title="Standort Neuropraxis an der Ihme"
            src="https://www.openstreetmap.org/export/embed.html?bbox=9.688%2C52.357%2C9.716%2C52.375&layer=mapnik&marker=52.3665%2C9.7028"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-text-muted mt-2 text-right">
          Karte:{" "}
          <a
            href="https://www.openstreetmap.org/?mlat=52.3665&mlon=9.7028#map=17/52.3665/9.7028"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text-secondary transition-colors"
          >
            OpenStreetMap
          </a>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-5">
                Mit öffentlichen Verkehrsmitteln
              </p>
              <div className="divide-y divide-border-subtle border border-border-subtle rounded-lg overflow-hidden">
                {oeffentlich.map((h) => (
                  <div
                    key={h.haltestelle}
                    className="flex items-center gap-4 px-5 py-4 bg-bg-primary flex-wrap"
                  >
                    <div className="flex items-center justify-between gap-4 w-full">
                      <p className="font-medium text-text-primary text-sm">{h.haltestelle}</p>
                      <span className="text-xs text-brand bg-brand-light px-2.5 py-1 rounded shrink-0">
                        {h.entfernung}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary w-full">{h.linien}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-muted mt-3">
                Fahrplanauskunft: ÜSTRA Hannoversche Verkehrsbetriebe
              </p>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-5">
                Mit dem Auto
              </p>
              <div className="border border-border-subtle rounded-lg overflow-hidden">
                <div className="px-5 py-4 bg-bg-primary">
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Die Praxis verfügt über eigene Parkplätze direkt hinter dem Gebäude.
                  </p>
                </div>
                <div className="px-5 py-3 bg-amber-50 border-t border-amber-200">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Die Parkplätze werden am besten von Süden angefahren — Einfahrt über
                    Ricklinger Straße 7. Aktuell laufen Bauarbeiten, die Einfahrt ist
                    schlecht einsehbar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-bg-dark rounded-lg p-6 text-white">
              <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/65 mb-5">
                Praxisadresse
              </p>
              <address className="not-italic font-display text-xl text-white leading-snug mb-1">
                Ricklinger Straße 5B<br />
                30449 Hannover
              </address>
              <p className="text-xs text-white/55 mb-6">Hannover-Linden</p>
              <a
                href="https://www.openstreetmap.org/?mlat=52.3614&mlon=9.7095#map=17/52.3614/9.7095"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-text-primary text-sm px-4 py-2 rounded hover:bg-white/90 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                In Karte öffnen
              </a>
            </div>

            <div className="border border-border-subtle rounded-lg px-5 py-4">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-3">
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
