import Hero from "@/components/Hero"
import Team from "@/components/Team"
import Services from "@/components/Services"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main>
      <div role="alert" className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-start sm:items-center gap-3">
          <svg
            className="shrink-0 mt-0.5 sm:mt-0 text-amber-600"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm text-amber-900 leading-snug">
            <strong className="font-medium">Hinweis:</strong>{" "}
            Die Neuropraxis an der Ihme nimmt derzeit keine neuen Patienten an.
          </p>
        </div>
      </div>
      <Hero />
      <Team />
      <Services />
      <Contact />
    </main>
  )
}
