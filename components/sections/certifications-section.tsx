"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const certifications = [
  "DETECT, ANALYZE, AND RECOGNIZE FACES USING AI MODELS",
  "LANGGRAPH ESSENTIALS - PYTHON",
  "INNOVWAR HACKATHON PARTICIPATION",
  "HACKATRON OF INFOTSAV'25 PARTICIPATION",
  "INTRODUCTION TO GENERATIVE AI CONCEPTS",
]

export function CertificationsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-silver text-sm tracking-[0.3em] uppercase mb-16">
            CERTIFICATIONS
          </p>
        </motion.div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-l-2 border-border pl-6 py-2 hover:border-accent transition-colors duration-500"
            >
              <span className="text-lg md:text-xl text-silver tracking-wide group-hover:text-primary transition-colors duration-300">
                {cert}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
