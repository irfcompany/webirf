import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'IRF | Soluciones Industriales',
  description: 'Empresa mexicana especializada en ductería, aislamiento, HVAC, refrigeración, fabricación, montaje y mantenimiento industrial. Cobertura nacional desde Nuevo León.',
  generator: 'v0.app',
  keywords: ['ductería', 'HVAC', 'aislamiento térmico', 'refrigeración industrial', 'mantenimiento industrial', 'México', 'Nuevo León'],
  authors: [{ name: 'IRF' }],
    icons: {
      icon: '/logo-irf.png',
      apple: '/logo-irf.png',
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
      </body>
    </html>
  )
}
