"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const projects = [
  {
    name: "INSIGHT AI DASHBOARD",
    description:
      "AI-driven dashboard for analyzing and visualizing data insights at scale. Built intelligent features for end-to-end technical operations.",
    stack: ["PYTHON", "MACHINE LEARNING", "DATA VISUALIZATION"],
    company: "HARON INDIA",
  },
  {
    name: "BHARATTRIP AI",
    description:
      "AI-powered travel assistance platform combining destination insights with community-based travel partner discovery for solo travelers in India.",
    stack: ["AI", "TRAVEL TECH", "COMMUNITY PLATFORM"],
    achievement: "MANIT HACKATHON",
  },
  {
    name: "WEATHER PREDICTION MODEL",
    description:
      "Data-driven approach using 15 years of historical climate data to generate meaningful weather forecasts. Global nominee at NASA Space Apps.",
    stack: ["MACHINE LEARNING", "CLIMATE DATA", "FORECASTING"],
    achievement: "NASA SPACE APPS REGIONAL WINNER",
  },
  {
    name: "VR TOURISM ENHANCEMENT",
    description:
      "AI-powered VR solution for immersive travel experiences with AI-driven narration and contextual insights for tourist locations.",
    stack: ["VR", "AI NARRATION", "TOURISM TECH"],
    achievement: "JLU HACKATHON 3RD PLACE",
  },
  {
    name: "NEU - SKILLSET ROADMAP",
    description:
      "AI-powered generator creating personalized learning paths based on goals, current skill level, and time availability.",
    stack: ["AI", "EDTECH", "PERSONALIZATION"],
    achievement: "BINARY BATTLE 4TH PLACE",
  },
]

export function ProjectsSection() {
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
            PROJECTS
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div className="border-t border-border pt-8">
                {(project.achievement || project.company) && (
                  <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
                    {project.achievement || project.company}
                  </p>
                )}

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight uppercase mb-6 transition-colors duration-300 group-hover:text-accent">
                  {project.name}
                </h3>

                <p className="text-lg md:text-xl text-silver max-w-3xl leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs tracking-[0.2em] text-silver uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
