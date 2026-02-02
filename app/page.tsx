'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'

const Background3D = dynamic(() => import('@/components/Background3D'), { ssr: false })

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // HERO ZOOM SEQUENCE
  const heroScale = useTransform(scrollY, [0, 1200], [1, 15])
  const heroOpacity = useTransform(scrollY, [0, 1000, 1200], [1, 1, 0])
  const whiteOverlay = useTransform(scrollY, [1000, 1200], [0, 1])
  const whiteOverlayReverse = useTransform(scrollY, [1200, 1400], [1, 0])
  const contentFadeIn = useTransform(scrollY, [1200, 1600], [0, 1])

  // PARALLAX & 3D EFFECTS
  const parallax1 = useTransform(scrollY, [3200, 4000], [100, -100])
  const parallax2 = useTransform(scrollY, [4400, 5200], [100, -100])
  const parallax3 = useTransform(scrollY, [5600, 6400], [100, -100])

  return (
    <div ref={containerRef} className="relative bg-black text-white">
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Zoom Text */}
        <motion.div
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
          className="text-center pointer-events-none will-change-transform"
        >
          <h1 style={{ fontSize: 'clamp(4rem, 20vw, 40rem)' }} className="font-bold text-white tracking-widest">
            AI<br />DEVELOPER
          </h1>
        </motion.div>

        {/* White Transition Overlay */}
        <motion.div
          style={{ opacity: whiteOverlay }}
          className="fixed inset-0 bg-white pointer-events-none z-40"
        />
      </section>

      {/* Scroll Spacer */}
      <div className="h-screen" />

      {/* ==================== CONTENT CONTAINER ==================== */}
      <motion.div style={{ opacity: contentFadeIn }} className="relative z-0">
        {/* 3D Background Layer - Subtly behind content */}
        <div className="fixed inset-0 top-[100vh] h-screen pointer-events-none">
          <Background3D />
        </div>

        {/* ==================== INTRO SECTION ==================== */}
        <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-8 py-32">
          <div className="w-full max-w-7xl mx-auto">
            <div className="space-y-16">
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                viewport={{ once: false, margin: '-100px' }}
              >
                <p className="text-accent-cyan tracking-widest text-sm mb-8">NITIN MISHRA</p>
                <h1 className="text-white mb-4">GENAI ARCHITECT</h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: false, margin: '-100px' }}
              >
                <h1 className="text-white mb-4">FULL STACK</h1>
                <h1 className="text-text-silver">ENGINEER</h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: false, margin: '-100px' }}
              >
                <h1 className="text-accent-cyan">AI DEVELOPER</h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT SECTION ==================== */}
        <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-8 py-32 border-t border-gray-900">
          <div className="w-full max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, margin: '-100px' }}
              className="space-y-16"
            >
              <h2 className="text-accent-cyan tracking-widest">ABOUT</h2>
              <p className="text-text-silver text-xl leading-loose tracking-wide max-w-3xl">
                Building intelligent systems at the frontier of generative AI. Specialized in multi-agent architectures, RAG systems, and full-stack engineering. NASA Space Apps Regional Winner.
              </p>
              <p className="text-text-silver text-lg leading-loose opacity-70">
                Focused on creating seamless experiences where technology disappears and intention remains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ==================== SKILLS SECTION ==================== */}
        <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-8 py-32 border-t border-gray-900">
          <div className="w-full max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-100px' }}
              className="text-accent-cyan tracking-widest mb-24"
            >
              SKILLS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Languages */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: false }}
                className="space-y-4"
              >
                <h3 className="text-white tracking-widest text-sm uppercase">Languages</h3>
                <div className="space-y-3 text-text-silver text-lg tracking-wider">
                  <p>PYTHON</p>
                  <p>TYPESCRIPT</p>
                  <p>JAVASCRIPT</p>
                  <p>SQL</p>
                </div>
              </motion.div>

              {/* Frameworks */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: false }}
                className="space-y-4"
              >
                <h3 className="text-white tracking-widest text-sm uppercase">Frameworks</h3>
                <div className="space-y-3 text-text-silver text-lg tracking-wider">
                  <p>NEXT.JS</p>
                  <p>REACT</p>
                  <p>FASTAPI</p>
                  <p>FLASK</p>
                </div>
              </motion.div>

              {/* AI/ML */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: false }}
                className="space-y-4"
              >
                <h3 className="text-white tracking-widest text-sm uppercase">AI / ML</h3>
                <div className="space-y-3 text-text-silver text-lg tracking-wider">
                  <p>GENAI AGENTS</p>
                  <p>RAG SYSTEMS</p>
                  <p>LLM FINE-TUNING</p>
                  <p>MULTIMODAL AI</p>
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false }}
                className="space-y-4"
              >
                <h3 className="text-white tracking-widest text-sm uppercase">Tools</h3>
                <div className="space-y-3 text-text-silver text-lg tracking-wider">
                  <p>SUPABASE</p>
                  <p>VERCEL</p>
                  <p>DOCKER</p>
                  <p>THREE.JS</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== PROJECTS SECTION ==================== */}
        <section className="relative w-full bg-black py-40 border-t border-gray-900">
          {/* Project 1: BHARATTRIP AI */}
          <div className="min-h-screen relative flex items-center justify-center px-8">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, margin: '-100px' }}
              >
                <h2 className="text-white mb-6 tracking-widest">BHARATTRIP AI</h2>
                <p className="text-text-silver text-lg leading-loose mb-6">
                  AI-powered travel platform with multi-agent architecture. Personalized itineraries powered by generative AI.
                </p>
                <p className="text-accent-cyan text-sm tracking-widest">
                  PYTHON • FASTAPI • GENAI • VECTOR DB • LANGCHAIN
                </p>
              </motion.div>

              <motion.div
                style={{ y: parallax1 }}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="h-96 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm flex items-center justify-center"
              >
                <div className="text-6xl">✈️</div>
              </motion.div>
            </div>
          </div>

          {/* Project 2: WEATHER PREDICTION */}
          <div className="min-h-screen relative flex items-center justify-center px-8">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                style={{ y: parallax2 }}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="h-96 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm flex items-center justify-center order-2 md:order-1"
              >
                <div className="text-6xl">🌍</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, margin: '-100px' }}
                className="order-1 md:order-2"
              >
                <h2 className="text-white mb-6 tracking-widest">WEATHER PREDICTION</h2>
                <p className="text-text-silver text-lg leading-loose mb-6">
                  ML model trained on 15 years of climate data. NASA Space Apps Regional Winner for climate innovation.
                </p>
                <p className="text-accent-cyan text-sm tracking-widest">
                  PYTHON • TENSORFLOW • DATA SCIENCE • CLIMATE TECH
                </p>
              </motion.div>
            </div>
          </div>

          {/* Project 3: NEU SKILLSET */}
          <div className="min-h-screen relative flex items-center justify-center px-8">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false, margin: '-100px' }}
              >
                <h2 className="text-white mb-6 tracking-widest">NEU SKILLSET</h2>
                <p className="text-text-silver text-lg leading-loose mb-6">
                  AI-powered learning platform generating personalized skill development paths. Full-stack product with real-time AI processing.
                </p>
                <p className="text-accent-cyan text-sm tracking-widest">
                  NEXT.JS • TYPESCRIPT • SUPABASE • GENAI • TAILWIND
                </p>
              </motion.div>

              <motion.div
                style={{ y: parallax3 }}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="h-96 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-sm flex items-center justify-center"
              >
                <div className="text-6xl">🎯</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================== ACHIEVEMENTS SECTION ==================== */}
        <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-8 py-32 border-t border-gray-900">
          <div className="w-full max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, margin: '-100px' }}
              className="text-accent-cyan tracking-widest mb-24"
            >
              ACHIEVEMENTS
            </motion.h2>

            <div className="space-y-20">
              {[
                { title: 'NASA SPACE APPS REGIONAL WINNER', desc: 'Built climate-focused solution recognized at regional level' },
                { title: 'GENAI ARCHITECT', desc: 'Designed and deployed production-grade multi-agent systems' },
                { title: 'FULL STACK EXPERT', desc: 'End-to-end development across frontend, backend, and infrastructure' },
              ].map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  viewport={{ once: false }}
                >
                  <h3 className="text-white mb-3 tracking-widest text-lg">{achievement.title}</h3>
                  <p className="text-text-silver opacity-75">{achievement.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CONTACT SECTION ==================== */}
        <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-8 py-32 border-t border-gray-900">
          <div className="w-full max-w-4xl mx-auto text-center space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, margin: '-100px' }}
            >
              <h1 className="text-white mb-8">LET'S BUILD</h1>
              <h1 className="text-accent-cyan">SOMETHING EXTRAORDINARY</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false }}
              className="space-y-6 pt-16"
            >
              <a
                href="mailto:nitiniszod10@gmail.com"
                className="block text-text-silver hover:text-accent-cyan transition-colors text-lg tracking-wider"
              >
                EMAIL
              </a>
              <a
                href="https://linkedin.com/in/nitin-kumar-mishra-520615331"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-silver hover:text-accent-cyan transition-colors text-lg tracking-wider"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-text-silver hover:text-accent-cyan transition-colors text-lg tracking-wider"
              >
                GITHUB
              </a>
            </motion.div>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="relative w-full bg-black border-t border-gray-900 py-12 px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-gray-600 text-sm tracking-widest"
          >
            NITIN MISHRA © 2025 | NEXT.JS + FRAMER MOTION + THREE.JS
          </motion.p>
        </footer>
      </motion.div>
    </div>
  )
}
