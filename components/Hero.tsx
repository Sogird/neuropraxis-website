export default function Hero() {
  return (
    <section
      id="praxis"
      className="max-w-6xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start"
    >
      <div>
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-brand mb-7">
          Gemeinschaftspraxis · Hannover-Linden
        </p>

        <h1 className="font-display text-[2.6rem] lg:text-[3.2rem] text-text-primary leading-[1.1] mb-7 max-w-[560px]">
          Ihre Praxis für Neurologie und Psychiatrie in Hannover.
        </h1>

        <p className="text-lg text-text-secondary leading-[1.65] mb-9 max-w-[480px]">
          Sieben Fachärztinnen und Fachärzte bieten moderne Diagnostik,
          individuelle Therapie und eine ganzheitliche Begleitung für
          Erkrankungen des Nervensystems und der Psyche.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center bg-brand text-white text-sm px-6 py-3 rounded-md hover:bg-brand-hover active:bg-brand-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 font-medium"
          >
            Termin anfragen
          </a>
          <a
            href="tel:051184300090"
            className="inline-flex items-center justify-center border border-border-strong text-text-primary text-sm px-6 py-3 rounded-md hover:bg-bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong focus-visible:ring-offset-2"
          >
            0511 8430090
          </a>
        </div>

        <div className="mt-12 pt-10 border-t border-border-subtle flex flex-wrap gap-8">
          <div>
            <p className="font-display text-2xl text-text-primary">7</p>
            <p className="text-xs text-text-muted mt-1 tracking-wide">Fachärztinnen & Fachärzte</p>
          </div>
          <div>
            <p className="font-display text-2xl text-text-primary">2</p>
            <p className="text-xs text-text-muted mt-1 tracking-wide">Fachgebiete</p>
          </div>
          <div>
            <p className="font-display text-2xl text-text-primary">E-Rezept</p>
            <p className="text-xs text-text-muted mt-1 tracking-wide">verfügbar</p>
          </div>
        </div>
      </div>

      <div className="bg-bg-dark rounded-xl p-8 text-white">
        <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/40 mb-7">
          So finden Sie uns
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-xs text-white/50 mb-2">Adresse</p>
            <p className="font-display text-xl leading-snug">
              Ricklinger Straße 5B
            </p>
            <p className="font-display text-xl leading-snug">
              30449 Hannover
            </p>
          </div>

          <div className="w-10 h-px bg-white/15" />

          <div>
            <p className="text-xs text-white/50 mb-2">Telefon</p>
            <a
              href="tel:051184300090"
              className="font-display text-xl hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
            >
              0511 8430090
            </a>
          </div>

          <div className="w-10 h-px bg-white/15" />

          <div>
            <p className="text-xs text-white/50 mb-2">Stadtteil</p>
            <p className="text-base text-white">Hannover-Linden</p>
          </div>

          <div className="w-10 h-px bg-white/15" />

          <div>
            <p className="text-xs text-white/50 mb-2">Sprechzeiten</p>
            <p className="text-sm text-white/80 leading-relaxed">
              Montag bis Freitag.<br />
              Termine nach Vereinbarung.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
