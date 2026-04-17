import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
})

const theSeasons = localFont({
  src: [
    { path: '../../public/fonts/TheSeasons-reg.woff2', weight: '400' },
    { path: '../../public/fonts/TheSeasons-it.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-seasons',
  display: 'swap',
})

const soria = localFont({
  src: '../../public/fonts/Soria.woff2',
  variable: '--font-soria',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Lucas & Ana Luiza',
  description: 'Chá de Panela — 11 de Julho 2026 · Casamento — 26 de Setembro 2026',
  openGraph: {
    title: 'Lucas & Ana Luiza',
    description: 'Celebre conosco!',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${josefin.variable} ${theSeasons.variable} ${soria.variable}`}>
      <body className="bg-[#FFFDF7] text-[#2D2D2D] font-josefin antialiased">
        {children}
      </body>
    </html>
  )
}