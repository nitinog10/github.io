'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Home() {
  const [isZoomComplete, setIsZoomComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Hero zoom effect: scales text as user scrolls
  const heroScale = useTransform(scrollY, [0, 800], [1, 15])
  const heroOpacity = useTransform(scrollY, [0, 600, 800], [1, 1, 0])
  
  // White overlay appears at peak zoom
  const whiteOverlayOpacity = useTransform(scrollY, [600, 800], [0, 1])
  
  // Main content fades in after zoom
  const contentOpacity = useTransform(scrollY, [800, 1000], [0, 1])

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest >= 800) {
        setIsZoomComplete(true)
      } else {
        setIsZoomComplete(false)
      }
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      {/* Hero Section - Zoom on Scroll */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Zoom Text */}
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="text-center pointer-events-none"
        >
          <h1 className="font-bold text-white whitespace-nowrap">
            AI DEVELOPER
          </h1>
        </motion.div>

        {/* White overlay at peak zoom */}
        <motion.div
          style={{ opacity: whiteOverlayOpacity }}
          className="fixed inset-0 bg-white pointer-events-none z-50"
        />
      </section>

      {/* Spacer for scroll interaction */}
      <div className="h-96" />

      {/* Main Portfolio Content */}
      <motion.div style={{ opacity: contentOpacity }}>
        {/* Introduction Section */}
        <section className="relative min-h-screen bg-black pt-32 pb-32 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-100px' }}
            >
              <h2 className="text-accent mb-12">NITIN MISHRA</h2>
              <div className="space-y-8">
                <h1 className="text-white">
                  GENAI<br />ARCHITECT
                </h1>
                <h1 className="text-white">
                  FULL STACK<br />ENGINEER
                </h1>
                <h1 className="text-white">
                  AI DEVELOPER
                </h1>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative min-h-screen bg-black pt-32 pb-32 px-8 md:px-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-100px' }}
              className="space-y-8"
            >
              <h2 className="text-accent">ABOUT</h2>
              <p className="text-lg leading-relaxed max-w-3xl">
                Building intelligent systems that push the boundaries of what AI can do. Specialized in generative AI architectures, multi-agent systems, and full-stack development. NASA Space Apps Regional Winner. Passionate about creating experiences that feel seamless.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative min-h-screen bg-black pt-32 pb-32 px-8 md:px-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-100px' }}
            >
              <h2 className="text-accent mb-16">SKILLS</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Languages */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <h3 className="text-white mb-6">LANGUAGES</h3>
                  <div className="space-y-2 text-foreground-muted">
                    <p>PYTHON</p>
                    <p>TYPESCRIPT</p>
                    <p>JAVASCRIPT</p>
                    <p>SQL</p>
                  </div>
                </motion.div>

                {/* Frameworks */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <h3 className="text-white mb-6">FRAMEWORKS</h3>
                  <div className="space-y-2 text-foreground-muted">
                    <p>NEXT.JS</p>
                    <p>REACT</p>
                    <p>FASTAPI</p>
                    <p>FLASK</p>
                  </div>
                </motion.div>

                {/* AI/ML */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: false }}
                >
                  <h3 className="text-white mb-6">AI / ML</h3>
                  <div className="space-y-2 text-foreground-muted">
                    <p>GENAI AGENTS</p>
                    <p>RAG SYSTEMS</p>
                    <p>LLM FINE-TUNING</p>
                    <p>MULTIMODAL AI</p>
                  </div>
                </motion.div>

                {/* Tools */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: false }}
                >
                  <h3 className="text-white mb-6">TOOLS</h3>
                  <div className="space-y-2 text-foreground-muted">
                    <p>SUPABASE</p>
                    <p>VERCEL</p>
                    <p>DOCKER</p>
                    <p>GIT</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative min-h-screen bg-black pt-32 pb-32 px-8 md:px-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-100px' }}
            >
              <h2 className="text-accent mb-24">PROJECTS</h2>

              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
                className="mb-20 pb-20 border-b border-gray-800"
              >
                <h3 className="text-white mb-4">BHARATTRIP AI</h3>
                <p className="text-foreground-muted mb-4 max-w-2xl">
                  AI-powered travel planning platform with multi-agent architecture for personalized itineraries.
                </p>
                <p className="text-accent text-sm">PYTHON • FASTAPI • GENAI • VECTOR DB</p>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
                className="mb-20 pb-20 border-b border-gray-800"
              >
                <h3 className="text-white mb-4">WEATHER PREDICTION ENGINE</h3>
                <p className="text-foreground-muted mb-4 max-w-2xl">
                  ML model for accurate weather forecasting using real-time data streams and pattern recognition.
                </p>
                <p className="text-accent text-sm">PYTHON • TENSORFLOW • DATA SCIENCE</p>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                className="mb-20 pb-20 border-b border-gray-800"
              >
                <h3 className="text-white mb-4">NEU SKILLSET ROADMAP</h3>
                <p className="text-foreground-muted mb-4 max-w-2xl">
                  Full-stack learning platform with AI-generated personalized skill development paths.
                </p>
                <p className="text-accent text-sm">NEXT.JS • TYPESCRIPT • SUPABASE • GENAI</p>
              </motion.div>

              {/* Project 4 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                <h3 className="text-white mb-4">VR TOURISM EXPERIENCE</h3>
                <p className="text-foreground-muted mb-4 max-w-2xl">
                  Immersive virtual reality tourism platform with AI-guided experiences and spatial computing.
                </p>
                <p className="text-accent text-sm">REACT • THREE.JS • WEBXR • AI NARRATION</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="relative min-h-screen bg-black pt-32 pb-32 px-8 md:px-16 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-100px' }}
            >
              <h2 className="text-accent mb-24">ACHIEVEMENTS</h2>

              <div className="space-y-16">
                {/* Achievement 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: false }}
                >
                  <h3 className="text-white mb-2">NASA SPACE APPS REGIONAL WINNER</h3>
                  <p className="text-foreground-muted">Building solutions for space challenges using cutting-edge technology</p>
                </motion.div>

                {/* Achievement 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: false }}
                >
                  <h3 className="text-white mb-2">GENAI ARCHITECT</h3>
                  <p className="text-foreground-muted">Designed and deployed multiple production-grade AI agent systems</p>
                </motion.div>

                {/* Achievement 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: false }}
                >
                  <h3 className="text-white mb-2">FULL STACK EXPERT</h3>
                  <p className="text-foreground-muted">End-to-end development across frontend, backend, and infrastructure</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative min-h-screen bg-black pt-32 pb-32 px-8 md:px-16 border-t border-gray-800 flex items-center">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-100px' }}
            >
              <h2 className="text-accent mb-12">GET IN TOUCH</h2>
              <h1 className="text-white mb-12">LET'S BUILD SOMETHING EXTRAORDINARY</h1>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:nitiniszod10@gmail.com"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="block text-lg text-foreground-muted hover:text-accent transition-smooth"
                >
                  nitiniszod10@gmail.com
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/nitin-kumar-mishra-520615331"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="block text-lg text-foreground-muted hover:text-accent transition-smooth"
                >
                  LINKEDIN
                </motion.a>

                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                  className="block text-lg text-foreground-muted hover:text-accent transition-smooth"
                >
                  GITHUB
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-12 px-8 md:px-16 text-center text-foreground-muted text-sm">
          <p>NITIN MISHRA © 2025 | DESIGNED AND BUILT WITH NEXTJS & FRAMER MOTION</p>
        </footer>
      </motion.div>
    </div>
  )
}
