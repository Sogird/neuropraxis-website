import type { Metadata } from "next"
import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Leistungen – Neuropraxis an der Ihme",
}

const neurologie = [
  "Multiple Sklerose und andere entzündliche Hirnerkrankungen",
  "Morbus Parkinson",
  "Epilepsie",
  "Demenzerkrankungen",
  "Muskelerkrankungen",
  "Schwindel",
  "Rückenbeschwerden und Bandscheibenvorfälle",
  "Erkrankungen der peripheren Nerven",
  "Kopfschmerzen und Migräne",
  "Schlaganfall",
  "Tumore des Gehirns und Rückenmarks",
  "Integrierte Versorgung von MS-Patienten (Kooperation SIDA)",
]

const psychiatrie = [
  "Depressionen",
  "Bipolare Störung",
  "Psychosen",
  "Angststörung",
  "Zwangsstörung",
  "Suchtkrankheiten",
  "Persönlichkeitsstörung",
  "ADHS im Erwachsenenalter",
  "Integrierte Versorgung in Zusammenarbeit mit ambulanten psychiatrischen Pflegediensten",
  "Heimvisiten in Altenheimen und gerontopsychiatrischen Einrichtungen",
]

const zusatz = [
  "Risikoabklärung für Schlaganfälle und Demenzerkrankungen",
  "Neurologische und psychiatrische Gutachten für Rentenversicherungen, Sozialgerichte, Amtsgerichte und Versicherungen",
  "Verkehrsmedizinische Gutachten Neurologie (Dr. Klemm, Dr. Siggelkow)",
]

const methoden = [
  { kuerzel: "EEG", name: "Elektroenzephalographie" },
  { kuerzel: "ENG", name: "Elektroneurographie" },
  { kuerzel: "EMG", name: "Elektromyographie" },
  { kuerzel: "Doppler", name: "Dopplersonographie und Duplexsonographie der hirnversorgenden Gefäße" },
  { kuerzel: "Demenz", name: "Demenztestung" },
  { kuerzel: "LP", name: "Liquorpunktion (Nervenwasseruntersuchung)" },
  { kuerzel: "Labor", name: "Labordiagnostik" },
]

export default function LeistungenPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Leistungen"
        title="Was wir für Sie tun"
        description="Neurologie und Psychiatrie unter einem Dach. Wir diagnostizieren genau und begleiten Ihre Therapie von Anfang bis Ende."
      />

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-brand text-white rounded-xl p-9">
            <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/65 mb-5">
              Fachgebiet
            </p>
            <h2 className="font-display text-2xl mb-4">Neurologie</h2>
            <p className="text-sm text-white/75 leading-relaxed mb-7">
              Die Neurologie befasst sich mit Krankheiten des Gehirns, des
              Rückenmarks, der peripheren Nerven und der Muskulatur. Wir
              diagnostizieren präzise und begleiten Ihre Therapie persönlich.
            </p>
            <ul className="space-y-2.5">
              {neurologie.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="w-1 h-1 rounded-full bg-white/50 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bg-secondary rounded-xl p-9">
            <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-brand mb-5">
              Fachgebiet
            </p>
            <h2 className="font-display text-2xl text-text-primary mb-4">
              Psychiatrie & Psychotherapie
            </h2>
            <p className="text-sm text-text-secondary leading-relaxed mb-7">
              Im psychiatrischen Fachgebiet beschäftigen wir uns mit der
              Diagnostik, Therapie und Prävention seelischer Erkrankungen.
              Ein ganzheitlicher Ansatz, der Körper, Seele und soziales
              Umfeld einbezieht, leitet uns dabei.
            </p>
            <ul className="space-y-2.5">
              {psychiatrie.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
              Zusatzleistungen
            </p>
            <ul className="space-y-4">
              {zusatz.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="w-1 h-1 rounded-full bg-brand mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
              Untersuchungsmethoden
            </p>
            <div className="space-y-3">
              {methoden.map((m) => (
                <div key={m.kuerzel} className="flex items-start gap-4 py-3 border-b border-border-subtle last:border-0">
                  <span className="text-xs font-medium text-brand bg-brand-light px-2 py-1 rounded shrink-0 min-w-[54px] text-center">
                    {m.kuerzel}
                  </span>
                  <p className="text-sm text-text-secondary leading-snug">{m.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
