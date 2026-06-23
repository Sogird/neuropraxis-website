import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Impressum & Datenschutz – Neuropraxis an der Ihme",
}

export default function ImpressumPage() {
  return (
    <main>
      <PageHeader eyebrow="Rechtliches" title="Impressum & Datenschutz" />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
        <section id="impressum">
          <h2 className="font-display text-2xl text-text-primary mb-8">Impressum</h2>

          <div className="space-y-6 text-sm text-text-secondary leading-relaxed">
            <div>
              <p className="font-medium text-text-primary mb-2">Angaben gemäß § 5 TMG</p>
              <p>Neuropraxis an der Ihme</p>
              <p>Gemeinschaftspraxis für Neurologie und Psychiatrie</p>
              <p>Dr. C. Klemm, Dr. M. Brünner, Dr. M. Gottschalk, Dr. St. Mohr, Dr. K. Urbanski</p>
            </div>

            <address className="not-italic space-y-1">
              <p>Ricklinger Straße 5B</p>
              <p>30449 Hannover</p>
              <p className="pt-2">
                Telefon:{" "}
                <a href="tel:051184300090" className="text-text-primary hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm">
                  0511 8430090
                </a>
              </p>
              <p>Telefax: 0511 84300999</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@neuropraxis-hannover.eu" className="text-text-primary hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm">
                  info@neuropraxis-hannover.eu
                </a>
              </p>
            </address>

            <div>
              <p className="font-medium text-text-primary mb-2">Berufsbezeichnung</p>
              <p>Ärzte, Bundesrepublik Deutschland</p>
            </div>

            <div>
              <p className="font-medium text-text-primary mb-2">Zuständige Aufsichtsbehörde</p>
              <p>Kassenärztliche Vereinigung Niedersachsen (KVN)</p>
              <p>Berliner Allee 22, 30175 Hannover</p>
            </div>

            <div>
              <p className="font-medium text-text-primary mb-2">Zuständige Kammer</p>
              <p>Ärztekammer Niedersachsen</p>
              <p>Berliner Allee 20, 30175 Hannover</p>
            </div>

            <div>
              <p className="font-medium text-text-primary mb-2">Berufsrechtliche Regelungen</p>
              <p>Berufsordnung der Landesärztekammer Niedersachsen</p>
            </div>
          </div>
        </section>

        <div className="border-t border-border-subtle" />

        <section id="datenschutz">
          <h2 className="font-display text-2xl text-text-primary mb-8">Datenschutzerklärung</h2>

          <div className="space-y-8 text-sm text-text-secondary leading-relaxed">
            <p>
              Die Betreiber dieser Seite nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der aktuellen gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <div>
              <h3 className="font-medium text-text-primary mb-3">Datenerfassung auf dieser Website</h3>
              <p>
                Die Nutzung unserer Webseite ist in der Regel ohne Angabe
                personenbezogener Daten möglich. Soweit auf unseren Seiten
                personenbezogene Daten erhoben werden, erfolgt dies stets auf
                freiwilliger Basis und wird nicht ohne Ihre ausdrückliche
                Zustimmung an Dritte weitergegeben.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-3">Cookies</h3>
              <p>
                Diese Website verwendet keine Marketing-Cookies. Technische
                Session-Cookies, die für den Betrieb der Seite erforderlich
                sind, werden nach Ende Ihres Besuchs automatisch gelöscht.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-3">Ihre Rechte</h3>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über
                Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger sowie den Zweck der Datenverarbeitung. Sie haben
                zudem ein Recht auf Berichtigung, Sperrung oder Löschung dieser
                Daten.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-3">Datenschutzbeauftragte</h3>
              <p className="mb-2">
                Dr. Sabine Siggelkow · Tel. 0511 8430090 · Fax 0511 84300999
              </p>
              <a
                href="mailto:datenschutz@neuropraxis-hannover.eu"
                className="text-text-primary hover:text-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
              >
                datenschutz@neuropraxis-hannover.eu
              </a>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-3">Aufsichtsbehörde</h3>
              <p>Landesbeauftragte für den Datenschutz Niedersachsen</p>
              <p>Prinzenstraße 5, 30159 Hannover</p>
            </div>

            <div>
              <h3 className="font-medium text-text-primary mb-3">Bewerberdaten</h3>
              <p>
                Bewerbungsdaten werden ausschließlich zur Besetzung von Stellen
                in unserer Praxis verwendet und grundsätzlich drei Monate nach
                Abschluss des Bewerbungsverfahrens gelöscht, sofern keine
                gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
