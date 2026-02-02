"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface HeroSectionProps {
  onZoomComplete: () => void
}

export function HeroSection({ onZoomComplete }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasTriggered, setHasTriggered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 50])
  const opacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0])
  const bgOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1])

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      if (value >= 0.75 && !hasTriggered) {
        setHasTriggered(true)
        onZoomComplete()
      }
    })
    return () => unsubscribe()
  }, [scrollYProgress, hasTriggered, onZoomComplete])

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-background">
        <motion.div
          style={{ scale, opacity }}
          className="text-center select-none"
        >
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-bold tracking-[0.2em] uppercase text-primary leading-none">
            AI DEVELOPER
          </h1>
        </motion.div>

        {/* White flash transition */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-primary pointer-events-none"
        />
      </div>
    </div>
  )
}
