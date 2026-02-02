"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const experiences = [
  {
    period: "2025 - PRESENT",
    role: "HEAD ALUMNI",
    company: "ORIENTAL GROUP OF INSTITUTES",
    description:
      "Fostering collaboration and innovation within the academic community.",
  },
  {
    period: "OCT 2025 - JAN 2026",
    role: "AI DEVELOPER",
    company: "HARON INDIA",
    description:
      "Built Insight AI Dashboard with intelligent features for data analysis and visualization. Collaborated with technical teams on backend operations and production environments.",
  },
  {
    period: "SEP 2025 - DEC 2025",
    role: "AI DEVELOPER",
    company: "THETECHBUS",
    description:
      "Contributed to AI development initiatives leveraging Machine Learning and MCP expertise.",
  },
]

const achievements = [
  {
    year: "2025",
    title: "NASA SPACE APPS CHALLENGE",
    result: "REGIONAL WINNER & GLOBAL NOMINEE",
  },
  {
    year: "2025",
    title: "JLU LAKECITY HACK 2.0",
    result: "3RD POSITION",
  },
  {
    year: "2025",
    title: "BINARY BATTLE HACKATHON",
    result: "4TH POSITION",
  },
  {
    year: "2025",
    title: "MANIT VERSION BETA 8.0",
    result: "BHARATTRIP AI",
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-silver text-sm tracking-[0.3em] uppercase mb-16">
            EXPERIENCE
          </p>
        </motion.div>

        <div className="space-y-16 mb-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-l-2 border-border pl-8 hover:border-accent transition-colors duration-500"
            >
              <p className="text-xs tracking-[0.3em] text-silver uppercase mb-2">
                {exp.period}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase tracking-tight mb-2">
                {exp.role}
              </h3>
              <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
                {exp.company}
              </p>
              <p className="text-silver leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-silver text-sm tracking-[0.3em] uppercase mb-16">
            ACHIEVEMENTS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group p-6 border border-border hover:border-accent transition-colors duration-500"
            >
              <p className="text-xs tracking-[0.3em] text-silver uppercase mb-2">
                {achievement.year}
              </p>
              <h3 className="text-lg font-bold text-primary uppercase tracking-tight mb-2 group-hover:text-accent transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-accent text-sm tracking-[0.2em] uppercase">
                {achievement.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
