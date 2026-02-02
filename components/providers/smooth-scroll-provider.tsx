"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface ScrollContextType {
  scrollProgress: number
  scrollY: number
}

const ScrollContext = createContext<ScrollContextType>({
  scrollProgress: 0,
  scrollY: 0,
})

export function useSmoothScroll() {
  return useContext(ScrollContext)
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
      setScrollY(scrollTop)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollProgress, scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}
