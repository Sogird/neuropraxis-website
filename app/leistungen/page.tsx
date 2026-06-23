import type { Metadata } from "next"
import Image from "next/image"
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
  { kuerzel: "EEG", name: "Elektroenzephalographie", img: "/images/EEG-01.jpeg" },
  { kuerzel: "ENG", name: "Elektroneurographie", img: null },
  { kuerzel: "EMG", name: "Elektromyographie", img: "/images/EMG-02.jpeg" },
  { kuerzel: "Doppler", name: "Dopplersonographie und Duplexsonographie der hirnversorgenden Gefäße", img: "/images/sono-02.jpg" },
  { kuerzel: "Demenz", name: "Demenztestung", img: null },
  { kuerzel: "LP", name: "Liquorpunktion (Nervenwasseruntersuchung)", img: null },
  { kuerzel: "Labor", name: "Labordiagnostik", img: null },
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
        <h2 className="sr-only">Fachgebiete</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-brand text-white rounded-xl p-9">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-white/65 mb-5">
              Fachgebiet
            </p>
            <h3 className="font-display text-2xl mb-4">Neurologie</h3>
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
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-brand mb-5">
              Fachgebiet
            </p>
            <h3 className="font-display text-2xl text-text-primary mb-4">
              Psychiatrie & Psychotherapie
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-7">
              Im psychiatrischen Fachgebiet beschäftigen wir uns mit der
              Diagnostik, Therapie und Prävention seelischer Erkrankungen.
              Wir begleiten und koordinieren: von der Erstdiagnose bis zur
              ambulanten Langzeitbetreuung.
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
            <h2 className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
              Zusatzleistungen
            </h2>
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
            <h2 className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-6">
              Untersuchungsmethoden
            </h2>
            <div className="flex gap-2 mb-5">
              {["/images/EEG-01.jpeg", "/images/EMG-02.jpeg", "/images/sono-02.jpg"].map((src, i) => (
                <div key={i} className="relative flex-1 h-24 rounded-md overflow-hidden">
                  <Image src={src} alt="" fill className="object-cover" aria-hidden="true" />
                </div>
              ))}
            </div>
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
