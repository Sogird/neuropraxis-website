export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-bg-primary border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-8">
        <a
          href="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          aria-label="Neuropraxis an der Ihme – Startseite"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect x="0" y="0" width="10" height="10" rx="2" fill="oklch(0.40 0.12 152)" />
            <rect x="13" y="0" width="10" height="10" rx="2" fill="oklch(0.26 0.09 152)" />
            <rect x="6.5" y="13" width="10" height="10" rx="2" fill="oklch(0.26 0.09 152)" />
          </svg>
          <div>
            <p className="font-display text-[15px] leading-tight text-text-primary">
              Neuropraxis an der Ihme
            </p>
            <p className="text-[11px] text-text-muted leading-tight tracking-wide">
              Neurologie · Psychiatrie · Hannover
            </p>
          </div>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-7">
          {[
            { label: "Praxis", href: "#praxis" },
            { label: "Leistungen", href: "#leistungen" },
            { label: "Team", href: "#team" },
            { label: "Kontakt", href: "#kontakt" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href="tel:051184300090"
            className="hidden lg:block text-sm text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          >
            0511 8430090
          </a>
          <a
            href="#kontakt"
            className="bg-brand text-white text-sm px-4 py-2.5 rounded-md hover:bg-brand-hover active:bg-brand-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 font-medium"
          >
            Termin anfragen
          </a>
        </div>
      </div>
    </header>
  )
}
