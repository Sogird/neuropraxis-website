import type { Metadata } from "next"
import { DM_Serif_Display, DM_Sans } from "next/font/google"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import "./globals.css"

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
})

const dmSans = DM_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Neuropraxis an der Ihme – Neurologie und Psychiatrie Hannover",
  description:
    "Gemeinschaftspraxis für Neurologie und Psychiatrie in Hannover-Linden. Sieben Fachärztinnen und Fachärzte für umfassende neurologische und psychiatrische Versorgung.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="bg-bg-primary text-text-primary antialiased font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
