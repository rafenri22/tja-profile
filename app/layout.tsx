import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Trijaya Agung - Premium Bus Service | PT Trijaya Agung Lestari",
  description:
    "Solusi terpercaya untuk perjalanan wisata Anda dengan armada bus premium dan pelayanan terbaik. Melayani wisata keluarga, corporate trip, dan antar jemput.",
  keywords: "bus pariwisata, sewa bus, wisata keluarga, corporate trip, transportasi jakarta, bus premium",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
