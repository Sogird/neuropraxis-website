import type { Metadata } from "next"
import Image from "next/image"
import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Praxis & Team – Neuropraxis an der Ihme",
}

const doctors = [
  {
    initials: "CK",
    name: "Dr. med. Claudia Klemm",
    specialty: "Fachärztin für Neurologie",
    note: "Verkehrsmedizinische Gutachten Neurologie",
  },
  {
    initials: "MB",
    name: "Dr. med. Manfred Brünner",
    specialty: "Facharzt für Neurologie, Psychiatrie und Psychotherapie",
  },
  {
    initials: "SS",
    name: "Dr. med. Sabine Siggelkow",
    specialty: "Fachärztin für Neurologie",
    note: "Datenschutzbeauftragte · Verkehrsmedizinische Gutachten Neurologie",
  },
  {
    initials: "MG",
    name: "Dr. med. Mehri Gottschalk",
    specialty: "Fachärztin für Neurologie und Nervenheilkunde",
  },
  {
    initials: "SM",
    name: "Dr. med. Stefan Mohr",
    specialty: "Facharzt für Psychiatrie, Psychotherapie und Neurologie",
  },
  {
    initials: "KU",
    name: "Dr. Katharina Urbanski",
    specialty: "Fachärztin für Psychiatrie und Psychotherapie",
  },
  {
    initials: "TS",
    name: "Tamara Saul",
    specialty: "Fachärztin für Psychiatrie und Psychotherapie",
  },
]

const memberships = [
  "Deutsche Gesellschaft für Neurologie",
  "Deutsche Gesellschaft für Psychiatrie und Psychotherapie",
  "Qualitätszirkel NeuroN",
  "Ärztekammer Niedersachsen",
]

const cooperations = [
  { name: "NeuroConcept", description: "Neurologische Praxis", logo: "/images/Logo-DiePraxis-Neuroconcept.png" },
  { name: "diesportstrategen", description: "Orthopädie und Unfallchirurgie", logo: "/images/PRAXIS-diesportstrategen.png" },
]

export default function PraxisPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Unsere Praxis"
        title="Kompetenz, die sich auf sieben Schultern verteilt"
        description="Ein freundliches und kompetentes Team erwartet Sie in unseren neuen und modernen Räumen in Hannover-Linden."
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-4">
              Über uns
            </p>
            <h2 className="font-display text-2xl text-text-primary mb-5">
              Seit vielen Jahren in Linden
            </h2>
          </div>
          <div className="space-y-6 max-w-2xl">
            <div className="relative h-56 rounded-xl overflow-hidden">
              <Image
                src="/images/Praxis-003.jpg"
                alt="Praxisräume der Neuropraxis an der Ihme"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-text-secondary leading-relaxed text-[15px] space-y-4">
              <p>
                Unsere neurologisch-psychiatrische Gemeinschaftspraxis ist seit
                vielen Jahren am Standort Linden verwurzelt. Nach vielen Jahren in
                der Deisterstraße 13 begrüßen wir Sie nun in unseren neuen und
                modernen Räumen in der Ricklinger Straße 5B.
              </p>
              <p>
                Neben einer eingehenden Anamnese gehören moderne
                Diagnostikverfahren und eine individuell abgestimmte Therapie zu
                unserem Leistungsumfang. Uns ist es wichtig, Patientinnen und
                Patienten sowie deren Angehörige umfassend zu informieren und
                aufzuklären. Ein ganzheitlicher Ansatz, der Körper, Seele und
                soziales Umfeld einbezieht, leitet uns dabei.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-16">
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-10">
            Ärzteteam
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {doctors.map((doc) => (
              <div
                key={doc.initials}
                className="bg-bg-secondary p-6 rounded-lg border border-border-subtle"
              >
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-xs font-medium text-brand mb-5">
                  {doc.initials}
                </div>
                <p className="font-medium text-text-primary text-[15px] leading-snug mb-1">
                  {doc.name}
                </p>
                <p className="text-sm text-text-secondary leading-snug">
                  {doc.specialty}
                </p>
                {doc.note && (
                  <p className="text-xs text-text-muted mt-3 leading-snug border-t border-border-subtle pt-3">
                    {doc.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border-subtle pt-16 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
              Mitgliedschaften
            </p>
            <ul className="space-y-3">
              {memberships.map((m) => (
                <li key={m} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
              Kooperationen
            </p>
            <div className="space-y-4">
              {cooperations.map((c) => (
                <div key={c.name} className="flex items-center gap-4 border border-border-subtle rounded-lg p-4">
                  <div className="relative w-20 h-10 shrink-0">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">{c.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{c.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-16 mt-16">
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
            Jobs
          </p>
          <div className="bg-bg-secondary rounded-xl p-8 max-w-2xl">
            <h3 className="font-display text-xl text-text-primary mb-4">
              MFA / Ausbildung 2026
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              Wir suchen eine engagierte Kollegin oder einen engagierten
              Kollegen mit Teamgeist ab sofort. Vollzeit, auch Teilzeit
              möglich.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm mb-6">
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Was Sie erwartet</p>
                <ul className="space-y-2 text-text-secondary">
                  {[
                    "Kollegiale, respektvolle Zusammenarbeit",
                    "Abwechslungsreiche Tätigkeiten",
                    "Flexible Arbeits- und Urlaubsregelung",
                    "Leistungsgerechte Bezahlung",
                    "Jobticket",
                    "Langfristige Beschäftigungsperspektive",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs text-text-muted uppercase tracking-wider mb-3">Das bringen Sie mit</p>
                <ul className="space-y-2 text-text-secondary">
                  {[
                    "Abgeschlossene Ausbildung als MFA",
                    "Teamgeist",
                    "Zuverlässigkeit",
                    "Empathie",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              href="mailto:jobs@neuropraxis-hannover.eu"
              className="inline-flex items-center bg-brand text-white text-sm px-5 py-2.5 rounded-md hover:bg-brand-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Jetzt bewerben
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
