'use client'

import { ArrowRight, Linkedin, Mail, Code2, Brain, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Nitin Kumar Mishra
          </div>
          <div className="flex gap-6">
            <Link href="https://linkedin.com/in/nitin-kumar-mishra-520615331" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="mailto:nitiniszod10@gmail.com">
              <Mail className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
                  <p className="text-sm text-blue-300">AI Developer & ML Enthusiast</p>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                  Building <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Intelligent</span> Solutions
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Leveraging AI, Machine Learning, and generative technologies to create impactful solutions. NASA Space Apps Regional Winner & multi-hackathon achiever.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-400">5+</p>
                  <p className="text-sm text-slate-400">Hackathons</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-cyan-400">10+</p>
                  <p className="text-sm text-slate-400">AI Projects</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <p className="text-2xl font-bold text-blue-400">NASA</p>
                  <p className="text-sm text-slate-400">Regional Winner</p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href="#projects">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-6 text-lg rounded-lg font-semibold flex items-center gap-2 group transition-all">
                    Let's Start <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Features */}
            <div className="space-y-4">
              <div className="group bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-lg p-6 transition-all">
                <div className="flex gap-4 items-start">
                  <Brain className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">AI & Machine Learning</h3>
                    <p className="text-sm text-slate-400">Building intelligent agents and ML models with expertise in LangGraph and RAG systems</p>
                  </div>
                </div>
              </div>

              <div className="group bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-lg p-6 transition-all">
                <div className="flex gap-4 items-start">
                  <Code2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Full-Stack Development</h3>
                    <p className="text-sm text-slate-400">Creating end-to-end products with modern tech stacks and scalable architectures</p>
                  </div>
                </div>
              </div>

              <div className="group bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-lg p-6 transition-all">
                <div className="flex gap-4 items-start">
                  <Zap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Generative AI & Agents</h3>
                    <p className="text-sm text-slate-400">Designing AI agents and implementing MCPs for intelligent automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Preview Section */}
          <div id="projects" className="scroll-mt-32 space-y-8">
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project 1 */}
              <div className="group bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-lg overflow-hidden transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                  <div className="text-5xl">🛫</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">BharatTrip AI</h3>
                  <p className="text-slate-400">AI-powered travel assistance platform with community-based travel partner discovery for solo travelers in India</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">AI</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">Travel Tech</span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-lg overflow-hidden transition-all">
                <div className="h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-5xl">🌍</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">Weather Prediction Model</h3>
                  <p className="text-slate-400">Machine learning model trained on 15 years of climate data for future weather forecasting - NASA Space Apps Winner</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">ML</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Climate Tech</span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 rounded-lg overflow-hidden transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center">
                  <div className="text-5xl">🎯</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">Neu - Skillset Roadmap</h3>
                  <p className="text-slate-400">AI-powered learning roadmap generator that creates personalized skill development paths based on goals and availability</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">AI</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">EdTech</span>
                  </div>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 rounded-lg overflow-hidden transition-all">
                <div className="h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-5xl">🏛️</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">VR Tourism Enhancement</h3>
                  <p className="text-slate-400">AI-powered VR solution for immersive travel experiences with intelligent narration and contextual insights</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">VR</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">Tourism</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-20 pt-12 border-t border-slate-800">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Let's Build Something Together</h2>
              <p className="text-slate-400 text-lg">Interested in collaborating on AI-powered solutions? Reach out!</p>
              <div className="flex gap-4 justify-center">
                <Link href="mailto:nitiniszod10@gmail.com">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
                    <Mail className="w-5 h-5" /> Email Me
                  </button>
                </Link>
                <Link href="https://linkedin.com/in/nitin-kumar-mishra-520615331" target="_blank" rel="noopener noreferrer">
                  <button className="border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all">
                    <Linkedin className="w-5 h-5" /> LinkedIn
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500 text-sm">
          <p>© 2026 Nitin Kumar Mishra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
