import Link from "next/link"

const doctors = [
  {
    initials: "CK",
    name: "Dr. med. Claudia Klemm",
    specialty: "Fachärztin für Neurologie",
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

export default function Team() {
  return (
    <section id="team" className="bg-bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-20">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-4">
              Unser Team
            </p>
            <h2 className="font-display text-3xl text-text-primary mb-5">
              Sieben Fachärztinnen und Fachärzte für Ihre Gesundheit
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm mb-6">
              Unsere neurologisch-psychiatrische Gemeinschaftspraxis vereint
              breite Fachkompetenz unter einem Dach. Jede Patientin und jeder
              Patient wird individuell begleitet.
            </p>
            <Link
              href="/praxis"
              className="text-sm text-brand hover:text-brand-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
            >
              Alle Informationen zum Team →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {doctors.map((doc) => (
              <div
                key={doc.initials}
                className="bg-bg-primary p-5 rounded-lg border border-border-subtle"
              >
                <div className="w-9 h-9 rounded-full bg-brand-light flex items-center justify-center text-xs font-medium text-brand mb-4">
                  {doc.initials}
                </div>
                <p className="text-sm font-medium text-text-primary leading-snug">
                  {doc.name}
                </p>
                <p className="text-xs text-text-muted mt-1.5 leading-snug">
                  {doc.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
