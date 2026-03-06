import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Anton } from 'next/font/google'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const _anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

export const metadata: Metadata = {
  title: "MaryJoP10's Portfolio",
  description: 'Portalio de Desrrolladora y Analista',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_geistMono.variable} ${_anton.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
