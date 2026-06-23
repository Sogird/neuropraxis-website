"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "Praxis", href: "/praxis" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Sprechzeiten", href: "/sprechzeiten" },
  { label: "Anfahrt", href: "/anfahrt" },
]

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false) }
    document.addEventListener("keydown", onEsc)
    return () => document.removeEventListener("keydown", onEsc)
  }, [])

  const linkClass = (href: string) =>
    `text-sm px-3 py-2.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
      pathname === href
        ? "bg-brand-light text-brand font-medium"
        : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
    }`

  return (
    <header className="sticky top-0 z-50 bg-bg-primary border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between gap-4">

        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          aria-label="Neuropraxis an der Ihme – Startseite"
        >
          <Image src="/images/logo-gr.png" alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
          <div>
            <p className="font-display text-[15px] leading-tight text-text-primary">Neuropraxis an der Ihme</p>
            <p className="text-[11px] text-text-muted leading-tight tracking-wide">Neurologie · Psychiatrie · Hannover</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hauptnavigation" className="hidden md:flex items-center gap-1">
          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} className={linkClass(href)}>{label}</Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="tel:051184300090"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded-sm"
          >
            0511 8430090
          </a>
          <Link
            href="/sprechzeiten"
            className="bg-brand text-white text-sm px-4 py-2.5 rounded hover:bg-brand-hover active:bg-brand-active transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 font-medium"
          >
            Termin anfragen
          </Link>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-1 shrink-0">
          <a
            href="tel:051184300090"
            aria-label="Praxis anrufen: 0511 8430090"
            className="p-2.5 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            className="p-2.5 text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 rounded"
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border-subtle bg-bg-primary">
          <nav aria-label="Mobile Navigation" className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map(({ label, href }) => (
              <Link key={label} href={href} className={linkClass(href)}>{label}</Link>
            ))}
            <div className="pt-3 mt-2 border-t border-border-subtle">
              <Link
                href="/sprechzeiten"
                className="flex justify-center bg-brand text-white text-sm px-4 py-3 rounded hover:bg-brand-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 font-medium"
              >
                Termin anfragen
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
