import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://rickdev8.vercel.app'),
  title: { default: 'Rick — Desenvolvedor Full Stack', template: '%s | Rick' },
  description: 'Portfólio de Henrique Abade Lemos (Rick), desenvolvedor full stack de Barra do Mendes, Bahia. Projetos reais, experiências e tecnologias.',
  openGraph: { title: 'Rick — Desenvolvedor Full Stack', description: 'Software útil, do primeiro commit à produção.', url: 'https://rickdev8.vercel.app', siteName: 'Rick — Portfólio', locale: 'pt_BR', type: 'website', images: [{ url: '/rick-portrait.png', width: 1024, height: 1280, alt: 'Retrato de Rick' }] },
  twitter: { card: 'summary_large_image', title: 'Rick — Desenvolvedor Full Stack', description: 'Software útil, do primeiro commit à produção.', images: ['/rick-portrait.png'] },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = { themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0d0d0f' }, { media: '(prefers-color-scheme: light)', color: '#f7f5f8' }], colorScheme: 'dark light' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${geist.variable} ${geistMono.variable} antialiased`}>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
