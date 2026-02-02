"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SmoothScrollProvider } from "./providers/smooth-scroll-provider"
import { HeroSection } from "./sections/hero-section"
import { IntroSection } from "./sections/intro-section"
import { AboutSection } from "./sections/about-section"
import { SkillsSection } from "./sections/skills-section"
import { ProjectsSection } from "./sections/projects-section"
import { ExperienceSection } from "./sections/experience-section"
import { CertificationsSection } from "./sections/certifications-section"
import { ContactSection } from "./sections/contact-section"
import { AnimatedBackground } from "./ui/animated-background"

export function PortfolioClient() {
  const [showMainContent, setShowMainContent] = useState(false)

  return (
    <SmoothScrollProvider>
      <main className="relative bg-background min-h-screen">
        {/* Hero with zoom effect */}
        <HeroSection onZoomComplete={() => setShowMainContent(true)} />

        {/* Main portfolio content */}
        <AnimatePresence>
          {showMainContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <AnimatedBackground />
              
              <div className="relative z-10">
                <IntroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ExperienceSection />
                <CertificationsSection />
                <ContactSection />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-muted-foreground text-xs tracking-[0.3em] uppercase"
          >
            {!showMainContent && "SCROLL"}
          </motion.div>
        </motion.div>
      </main>
    </SmoothScrollProvider>
  )
}
