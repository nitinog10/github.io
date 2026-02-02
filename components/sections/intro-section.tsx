"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const roles = ["GENAI ARCHITECT", "ML ENGINEER", "AI DEVELOPER"]

export function IntroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">
            INTRODUCING
          </p>
          
          <h2 className="text-[12vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tight leading-[0.9] text-primary mb-12">
            NITIN
            <br />
            MISHRA
          </h2>

          <div className="space-y-2 mt-16">
            {roles.map((role, index) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="text-xl md:text-2xl lg:text-3xl tracking-[0.15em] text-muted-foreground uppercase block">
                  {role}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
