import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.irf.com.mx"),
  title: "IRF | Servicios industriales, ductería, HVAC y mantenimiento en Monterrey",
  description:
    "Empresa mexicana especializada en ductería HVAC e industrial, aislamiento térmico, recubrimientos, refrigeración, fabricación, montaje, mantenimiento industrial, corte industrial CNC y soluciones técnicas con cobertura en Monterrey, Nuevo León y México.",
  generator: "v0.app",
  keywords: [
    "IRF",
    "servicios industriales",
    "servicios industriales en Monterrey",
    "ductería HVAC",
    "ductería industrial",
    "ductería en Monterrey",
    "aislamiento térmico",
    "recubrimientos industriales",
    "refrigeración industrial",
    "mantenimiento industrial",
    "mantenimiento industrial en Monterrey",
    "corte industrial CNC",
    "plasma CNC",
    "oxicorte",
    "fabricación y montaje",
    "Monterrey",
    "Nuevo León",
    "México",
  ],
  authors: [{ name: "IRF" }],
  icons: {
    icon: "/logo-irf.png",
    apple: "/logo-irf.png",
  },
  openGraph: {
    title: "IRF | Servicios industriales, ductería, HVAC y mantenimiento en Monterrey",
    description:
      "Ductería HVAC e industrial, aislamiento térmico, recubrimientos, refrigeración, fabricación, montaje, mantenimiento industrial y corte industrial CNC en Monterrey, Nuevo León y México.",
    url: "https://www.irf.com.mx",
    siteName: "IRF",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo-irf.png",
        width: 1200,
        height: 1200,
        alt: "IRF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IRF | Servicios industriales, ductería, HVAC y mantenimiento en Monterrey",
    description:
      "Soluciones industriales en ductería, HVAC, aislamiento, refrigeración, fabricación, montaje y mantenimiento en Monterrey, Nuevo León y México.",
    images: ["/logo-irf.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}