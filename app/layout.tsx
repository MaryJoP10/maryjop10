import type { Metadata } from 'next'
import { Inter, Geist_Mono, Anton } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });

export const metadata: Metadata = {
  title: "Shana | Desarrolladora & Analista de Datos",
  description: 'Portfolio de María José Peña Ruiz - Desarrolladora de Software y Analista de Datos. Transformando ideas en experiencias digitales extraordinarias.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${geistMono.variable} ${anton.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
