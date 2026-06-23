import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="0" y="0" width="10" height="10" rx="2" fill="oklch(0.40 0.12 152)" />
            <rect x="13" y="0" width="10" height="10" rx="2" fill="oklch(0.26 0.09 152)" />
            <rect x="6.5" y="13" width="10" height="10" rx="2" fill="oklch(0.26 0.09 152)" />
          </svg>
          <p className="text-sm text-text-muted">
            Neuropraxis an der Ihme · Ricklinger Straße 5B · 30449 Hannover
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            href="/impressum#impressum"
            className="text-sm text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          >
            Impressum
          </Link>
          <Link
            href="/impressum#datenschutz"
            className="text-sm text-text-muted hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}
