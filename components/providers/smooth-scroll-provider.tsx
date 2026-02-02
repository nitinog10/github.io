"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import Lenis from "lenis"

interface ScrollContextType {
  lenis: Lenis | null
  scrollProgress: number
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  scrollProgress: 0,
})

export function useSmoothScroll() {
  return useContext(ScrollContext)
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    setLenis(lenisInstance)

    function raf(time: number) {
      lenisInstance.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    lenisInstance.on("scroll", ({ progress }: { progress: number }) => {
      setScrollProgress(progress)
    })

    return () => {
      lenisInstance.destroy()
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ lenis, scrollProgress }}>
      {children}
    </ScrollContext.Provider>
  )
}
