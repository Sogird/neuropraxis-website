export default function Services() {
  return (
    <section id="leistungen" className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-4">
          Leistungen
        </p>
        <h2 className="font-display text-3xl text-text-primary max-w-sm">
          Was wir für Sie tun
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-brand text-white rounded-xl p-9 flex flex-col justify-between min-h-[300px]">
          <div>
            <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/40 mb-5">
              Fachgebiet
            </p>
            <h3 className="font-display text-2xl mb-5">Neurologie</h3>
            <p className="text-sm text-white/75 leading-relaxed">
              Von Kopfschmerzen und Schwindel bis zu Erkrankungen der Muskeln
              und Nerven. Wir diagnostizieren genau und begleiten Ihre Therapie
              von Anfang an. Neurologische Erkrankungen sind vielfältig — wir
              nehmen uns die Zeit, sie richtig einzuordnen.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-white/15">
            <p className="text-xs text-white/50 leading-relaxed">
              Epilepsie · Schlaganfall · Multiple Sklerose · Parkinson ·
              Polyneuropathie · Kopfschmerzen
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-bg-secondary rounded-xl p-8 flex-1">
            <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-brand mb-4">
              Fachgebiet
            </p>
            <h3 className="font-display text-xl text-text-primary mb-3">
              Psychiatrie & Psychotherapie
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Psychische Gesundheit braucht Raum und Zeit. Wir bieten
              umfassende Unterstützung bei Depressionen, Angsterkrankungen und
              weiteren psychischen Erkrankungen — ganzheitlich und persönlich.
            </p>
          </div>

          <div className="bg-bg-secondary rounded-xl p-8 flex-1">
            <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-brand mb-4">
              Fachgebiet
            </p>
            <h3 className="font-display text-xl text-text-primary mb-3">
              Moderne Diagnostik
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              Aktuelle Diagnostikverfahren und eine individuelle
              Therapieplanung. Wir setzen auf evidenzbasierte Medizin und
              klare Kommunikation — von der ersten Untersuchung bis zur
              Nachsorge.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
