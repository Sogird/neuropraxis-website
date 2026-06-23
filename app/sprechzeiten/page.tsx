import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Sprechzeiten – Neuropraxis an der Ihme",
}

const sprechzeiten = [
  { tag: "Montag", zeiten: "09:00–16:00 Uhr" },
  { tag: "Dienstag", zeiten: "09:00–16:00 Uhr" },
  { tag: "Mittwoch", zeiten: "09:00–13:00 Uhr" },
  { tag: "Donnerstag", zeiten: "09:00–16:00 Uhr" },
  { tag: "Freitag", zeiten: "09:00–13:00 Uhr" },
]

const telefon = [
  { tage: "Montag bis Freitag", zeiten: "09:00–12:00 Uhr" },
  { tage: "Montag, Dienstag und Donnerstag", zeiten: "14:00–16:00 Uhr" },
]

export default function SprechzeitenPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Sprechzeiten"
        title="Wann Sie uns erreichen"
        description="Termine nach Vereinbarung. Bitte rufen Sie uns während unserer Telefonzeiten an."
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
                Sprechstunden
              </p>
              <div className="rounded-lg overflow-hidden border border-border-subtle">
                <table className="w-full border-collapse">
                  <caption className="sr-only">Sprechstunden der Neuropraxis an der Ihme</caption>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Tag</th>
                      <th scope="col">Uhrzeit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sprechzeiten.map((s) => (
                      <tr key={s.tag} className="border-b border-border-subtle bg-bg-primary">
                        <td className="px-6 py-4 text-sm font-medium text-text-primary">{s.tag}</td>
                        <td className="px-6 py-4 text-sm text-text-secondary text-right">{s.zeiten}</td>
                      </tr>
                    ))}
                    <tr className="bg-bg-secondary">
                      <td colSpan={2} className="px-6 py-4 text-sm text-text-muted">und nach Vereinbarung</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
                Telefonische Erreichbarkeit
              </p>
              <div className="rounded-lg overflow-hidden border border-border-subtle">
                <table className="w-full border-collapse">
                  <caption className="sr-only">Telefonische Erreichbarkeit</caption>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Tage</th>
                      <th scope="col">Uhrzeit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {telefon.map((t) => (
                      <tr key={t.tage} className="border-b border-border-subtle last:border-0 bg-bg-primary">
                        <td className="px-6 py-4 text-sm text-text-secondary">{t.tage}</td>
                        <td className="px-6 py-4 text-sm font-medium text-text-primary text-right whitespace-nowrap">{t.zeiten}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
                Rezept-Hotline
              </p>
              <div className="border border-border-subtle rounded-lg px-6 py-5 bg-bg-primary">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <a
                      href="tel:051184300966"
                      className="font-display text-xl text-text-primary hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
                    >
                      0511 84300966
                    </a>
                    <p className="text-xs text-text-muted mt-1">Montag bis Freitag · 07:00–20:00 Uhr</p>
                  </div>
                  <span className="text-xs text-text-muted bg-bg-secondary px-3 py-1.5 rounded-md border border-border-subtle">
                    Nur für Rezepte
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-bg-dark rounded-xl p-7 text-white">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-white/65 mb-5">
                Jetzt anrufen
              </p>
              <a
                href="tel:051184300090"
                className="font-display text-2xl text-white hover:text-white/80 transition-colors block mb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
              >
                0511 8430090
              </a>
              <p className="text-xs text-white/60 mb-6">Hauptnummer der Praxis</p>
              <a
                href="tel:051184300090"
                className="inline-flex items-center bg-white text-text-primary text-sm px-5 py-2.5 rounded-md hover:bg-white/90 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                Jetzt anrufen
              </a>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6 border border-border-subtle">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-4">
                Termin per E-Mail
              </p>
              <a
                href="mailto:info@neuropraxis-hannover.eu"
                className="text-sm text-brand hover:text-brand-hover underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
              >
                info@neuropraxis-hannover.eu
              </a>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6 border border-border-subtle">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-4">
                E-Rezept & E-AU
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                Vor dem Ausstellen eines E-Rezeptes muss Ihre
                Versichertenkarte in der Praxis vorgelegt werden.
                Eine Ausstellung ohne Vorlage ist nicht möglich.
              </p>
            </div>

            <div className="bg-bg-secondary rounded-xl p-6 border border-border-subtle">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-4">
                Adresse
              </p>
              <address className="not-italic text-sm text-text-secondary leading-relaxed">
                Ricklinger Straße 5B<br />
                30449 Hannover
              </address>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
