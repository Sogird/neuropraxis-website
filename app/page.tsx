import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import Team from "@/components/Team"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Team />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
