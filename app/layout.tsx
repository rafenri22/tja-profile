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
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* Popunder Ad */}
        <script type='text/javascript' src='//pl27406930.profitableratecpm.com/b9/08/f2/b908f25daa11a298783d91c1d75f2d27.js'></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Social Bar Ad */}
        <script type='text/javascript' src='//pl27406938.profitableratecpm.com/8d/2a/1e/8d2a1ecf9340f3448e507a203fd5d4d9.js'></script>
      </body>
    </html>
  )
}