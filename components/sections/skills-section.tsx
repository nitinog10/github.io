"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: ["PYTHON", "JAVASCRIPT", "TYPESCRIPT", "SQL"],
  },
  {
    title: "AI / ML",
    skills: ["MACHINE LEARNING", "DEEP LEARNING", "LANGCHAIN", "RAG SYSTEMS", "MCP SERVERS", "GENERATIVE AI"],
  },
  {
    title: "FRAMEWORKS",
    skills: ["NEXT.JS", "REACT", "FASTAPI", "TENSORFLOW", "PYTORCH"],
  },
  {
    title: "TOOLS",
    skills: ["GIT", "DOCKER", "VS CODE", "JUPYTER", "VERCEL"],
  },
]

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="min-h-screen px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <p className="text-silver text-sm tracking-[0.3em] uppercase mb-16">
            SKILLS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className="text-accent text-sm tracking-[0.3em] mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.15 + skillIndex * 0.05,
                    }}
                    className="group"
                  >
                    <span className="text-lg md:text-xl text-silver tracking-[0.1em] transition-colors duration-300 group-hover:text-primary">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
