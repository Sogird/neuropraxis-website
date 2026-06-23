const doctors = [
  {
    initials: "CK",
    name: "Dr. C. Klemm",
    specialty: "Fachärztin für Neurologie",
  },
  {
    initials: "MB",
    name: "Dr. M. Brünner",
    specialty: "Neurologie, Psychiatrie & Psychotherapie",
  },
  {
    initials: "SS",
    name: "Dr. S. Siggelkow",
    specialty: "Fachärztin für Neurologie",
  },
  {
    initials: "MG",
    name: "Dr. M. Gottschalk",
    specialty: "Neurologie & Nervenheilkunde",
  },
  {
    initials: "SM",
    name: "Dr. St. Mohr",
    specialty: "Psychiatrie, Psychotherapie & Neurologie",
  },
  {
    initials: "KU",
    name: "Dr. K. Urbanski",
    specialty: "Psychiatrie & Psychotherapie",
  },
  {
    initials: "TS",
    name: "Fr. T. Saul",
    specialty: "Psychiatrie & Psychotherapie",
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
              Sieben Fachärzte für Ihre Gesundheit
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              Unsere neurologisch-psychiatrische Gemeinschaftspraxis vereint
              breite Fachkompetenz unter einem Dach. Jede Patientin und jeder
              Patient wird individuell begleitet. Wir nehmen uns die Zeit für
              ein gründliches Gespräch.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {doctors.map((doc) => (
              <div
                key={doc.initials}
                className="bg-bg-primary p-5 rounded-lg border border-border-subtle hover:border-border-strong transition-colors"
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
