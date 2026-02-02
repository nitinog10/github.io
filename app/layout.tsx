import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nitin Kumar Mishra - AI Developer & ML Expert',
  description: 'Portfolio of Nitin Kumar Mishra - AI Developer, Machine Learning Expert, and NASA Space Apps Regional Winner. Building intelligent solutions with AI agents, generative AI, and RAG systems.',
  keywords: ['AI Developer', 'Machine Learning', 'Generative AI', 'AI Agents', 'MCPs', 'RAG Systems'],
  authors: [{ name: 'Nitin Kumar Mishra' }],
  openGraph: {
    title: 'Nitin Kumar Mishra - AI Developer & ML Expert',
    description: 'Portfolio showcasing AI-powered projects, hackathon wins, and expertise in machine learning and generative AI.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  )
}
