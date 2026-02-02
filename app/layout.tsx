import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nitin Ogo - Full Stack Developer & AI Enthusiast',
  description: 'Portfolio of Nitin Ogo - Building innovative AI solutions and full-stack applications',
  openGraph: {
    title: 'Nitin Ogo - Full Stack Developer & AI Enthusiast',
    description: 'Portfolio of Nitin Ogo - Building innovative AI solutions and full-stack applications',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0e27',
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
