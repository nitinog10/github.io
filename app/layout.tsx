import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Nitin Mishra | AI Developer',
  description: 'AI Developer & GenAI Architect. Building the future with AI agents and generative intelligence.',
  openGraph: {
    title: 'Nitin Mishra | AI Developer',
    description: 'AI Developer & GenAI Architect. Building the future with AI agents and generative intelligence.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}
