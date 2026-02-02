import type { Metadata, Viewport } from "next"
import { Space_Mono } from "next/font/google"
import "./globals.css"

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "NITIN MISHRA | AI Developer",
  description: "NASA SAC'25 Winner, GenAI Architect, Machine Learning Expert. Building the future of AI.",
  keywords: ["AI Developer", "Machine Learning", "GenAI", "NASA Space Apps", "Portfolio"],
  authors: [{ name: "Nitin Kumar Mishra" }],
  openGraph: {
    title: "NITIN MISHRA | AI Developer",
    description: "NASA SAC'25 Winner, GenAI Architect, Machine Learning Expert",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceMono.variable} font-mono antialiased`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
