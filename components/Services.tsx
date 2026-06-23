import Link from "next/link"

const columns = [
  {
    label: "Neurologie",
    href: "/leistungen",
    items: [
      "Multiple Sklerose",
      "Morbus Parkinson",
      "Epilepsie",
      "Schlaganfall",
      "Kopfschmerzen & Migräne",
      "Polyneuropathie",
      "Demenz",
      "Schwindel",
      "Muskelerkrankungen",
    ],
  },
  {
    label: "Psychiatrie",
    href: "/leistungen",
    items: [
      "Depressionen",
      "Bipolare Störungen",
      "Angststörungen",
      "Psychosen",
      "ADHS im Erwachsenenalter",
      "Zwangsstörungen",
      "Suchtkrankheiten",
      "Persönlichkeitsstörungen",
    ],
  },
  {
    label: "Diagnostik",
    href: "/leistungen",
    items: [
      "EEG — Elektroenzephalographie",
      "ENG — Elektroneurographie",
      "EMG — Elektromyographie",
      "Doppler- & Duplexsonographie",
      "Demenztestung",
      "Liquorpunktion",
      "Labordiagnostik",
    ],
  },
]

export default function Services() {
  return (
    <section className="border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-10">
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand">
            Behandlungsspektrum
          </p>
          <Link
            href="/leistungen"
            className="text-xs text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          >
            Alle Leistungen →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
          {columns.map((col, i) => (
            <div
              key={col.label}
              className={`py-8 md:py-0 ${i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"}`}
            >
              <h3 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-text-primary mb-5">
                {col.label}
              </h3>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-brand mt-[7px] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
