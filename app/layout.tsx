import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ansiedad Caramelizada - Blog Post-Punk",
  description: "El blog personal de una banda post-punk de los 80.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col border-2 border-retro-black bg-retro-white shadow-[8px_8px_0px_0px_#000000] m-4 md:m-8 lg:m-12">
          <Header />
          <main className="flex-1 p-0 relative">{children}</main>{" "}
        </div>
      </body>
    </html>
  )
}
