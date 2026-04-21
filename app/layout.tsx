import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import RevealObserver from '@/components/RevealObserver'
import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dessefy — Inteligência Operacional Sob Medida para Escritórios de Advocacia',
  description: 'Dessefy entrega inteligência operacional sob medida para escritórios de advocacia — combinando automação por IA com profundidade técnica e visão estratégica de negócio.',
  keywords: [
    'legaltech',
    'lawtech',
    'IA para advocacia',
    'automação jurídica',
    'inteligência artificial',
    'escritório de advocacia',
    'dashboards jurídicos',
    'agentes de IA',
    'otimização operacional',
  ],
  authors: [{ name: 'Dessefy' }],
  robots: 'index, follow',
  alternates: { canonical: 'https://dessefy.com.br/' },
  openGraph: {
    type: 'website',
    url: 'https://dessefy.com.br/',
    title: 'Dessefy — Inteligência Operacional Sob Medida',
    description: 'Automação por IA e inteligência de dados para escritórios de advocacia que querem crescer com eficiência, controle e visão estratégica.',
    images: [{
      url: 'https://dessefy.com.br/images/logotipo-social.png',
      width: 1200,
      height: 630,
      type: 'image/png',
      alt: 'Dessefy — Inteligência Operacional Sob Medida',
    }],
    locale: 'pt_BR',
    siteName: 'Dessefy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dessefy — Inteligência Operacional Sob Medida',
    description: 'Automação por IA e inteligência de dados para escritórios de advocacia.',
    images: [{
      url: 'https://dessefy.com.br/images/logotipo-social.png',
      alt: 'Dessefy — Inteligência Operacional Sob Medida',
    }],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dessefy',
  url: 'https://dessefy.com.br',
  logo: 'https://dessefy.com.br/images/logotipo-social.png',
  description: 'Inteligência operacional sob medida para escritórios de advocacia — combinando automação por IA com profundidade técnica e visão estratégica de negócio.',
  email: 'contato@dessefy.com.br',
  foundingDate: '2024',
  knowsAbout: ['LegalTech', 'Inteligência Artificial', 'Automação Jurídica', 'Dashboards'],
  parentOrganization: { '@type': 'Organization', name: 'DMS Estratégia e Gestão' },
  memberOf: { '@type': 'Organization', name: 'Salum Duque Advogados' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <Navbar />
        <RevealObserver />
        {children}
        <Footer />
      </body>
    </html>
  )
}
