"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-silver text-sm tracking-[0.3em] uppercase mb-16">
            ABOUT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-primary">
              Currently contributing as an{" "}
              <span className="text-accent">AI Developer</span>, leveraging deep
              expertise in Machine Learning and Model Context Protocols to
              deliver impactful solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="text-lg text-silver leading-relaxed">
              Pursuing a Bachelor of Technology in Artificial Intelligence at
              Oriental Group of Institutes, while serving as Head Alumni to
              foster collaboration and innovation within the academic community.
            </p>

            <p className="text-lg text-silver leading-relaxed">
              My goal is to continuously grow in the AI domain while enabling
              meaningful advancements in technology that shape the future of
              human-computer interaction.
            </p>

            <div className="pt-8 border-t border-border">
              <p className="text-sm text-silver tracking-[0.2em] uppercase">
                BASED IN
              </p>
              <p className="text-xl text-primary mt-2">
                BHOPAL, MADHYA PRADESH, INDIA
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
