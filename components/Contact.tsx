export default function Contact() {
  return (
    <section id="kontakt" className="bg-bg-dark py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-[10px] font-medium tracking-[0.14em] uppercase text-white/65 mb-5">
              Kontakt & Anfahrt
            </p>
            <h2 className="font-display text-3xl text-white mb-6">
              Wir freuen uns auf Sie
            </h2>
            <p className="text-white/65 leading-relaxed mb-9 max-w-[360px] text-sm">
              Vereinbaren Sie einen Termin telefonisch während unserer
              Sprechzeiten. Für Notfälle wenden Sie sich bitte direkt an
              die Praxis oder den ärztlichen Bereitschaftsdienst.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:051184300090"
                className="inline-flex items-center justify-center gap-2 bg-white text-text-primary text-sm px-6 py-3 rounded-md hover:bg-white/90 active:bg-white/80 transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                0511 8430090 anrufen
              </a>
              <a
                href="mailto:info@neuropraxis-hannover.eu"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white text-sm px-6 py-3 rounded-md hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>

          <div className="space-y-7">
            <div>
              <p className="text-[10px] text-white/65 uppercase tracking-[0.12em] mb-2">
                Adresse
              </p>
              <address className="not-italic font-display text-xl text-white leading-snug">
                Ricklinger Straße 5B<br />
                30449 Hannover
              </address>
            </div>

            <div className="w-10 h-px bg-white/15" />

            <div>
              <p className="text-[10px] text-white/65 uppercase tracking-[0.12em] mb-2">
                Telefon & Fax
              </p>
              <a
                href="tel:051184300090"
                className="text-white text-base hover:text-white/75 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm block"
              >
                0511 8430090
              </a>
              <p className="text-white/65 text-sm mt-1">Fax: 0511 84300999</p>
            </div>

            <div className="w-10 h-px bg-white/15" />

            <div>
              <p className="text-[10px] text-white/65 uppercase tracking-[0.12em] mb-2">
                Sprechzeiten
              </p>
              <div className="text-white/90 text-sm space-y-1 leading-relaxed">
                <p>Mo, Di, Do: 09:00–16:00 Uhr</p>
                <p>Mi, Fr: 09:00–13:00 Uhr</p>
                <p className="text-white/60 text-xs pt-1">und nach Vereinbarung</p>
              </div>
            </div>

            <div className="w-10 h-px bg-white/15" />

            <div>
              <p className="text-[10px] text-white/65 uppercase tracking-[0.12em] mb-2">
                E-Rezept & E-AU
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Verfügbar. Bitte legen Sie beim Besuch
                Ihre Versichertenkarte vor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
