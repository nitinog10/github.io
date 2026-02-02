"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollProgress(progress)
      setScrollY(scrollTop)

      if (scrollTop > 300) {
        setShowContent(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const zoomScale = Math.max(1, 1 + scrollY * 0.002)
  const opacity = Math.max(0, 1 - scrollY / 500)

  return (
    <main className="bg-background text-foreground relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 text-center">
          <motion.div
            style={{ scale: zoomScale, opacity }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-white mb-4">
              AI
            </h1>
            <h1 className="text-8xl md:text-9xl font-bold tracking-tighter text-white">
              DEVELOPER
            </h1>
          </motion.div>

          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-12 text-muted-foreground text-lg tracking-widest"
            >
              <p>SCROLL TO EXPLORE</p>
            </motion.div>
          )}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-xs tracking-widest"
        >
          ↓
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-12">
              Building the Future with AI
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Full-stack AI Engineer passionate about creating intelligent systems that solve real-world problems. Currently exploring generative AI, machine learning, and large language models.
                </p>
              </div>
              <div className="space-y-4 border-l-2 border-accent pl-8">
                <div className="text-sm text-accent font-mono tracking-widest">EXPERTISE</div>
                <p className="text-white font-bold">Generative AI • Machine Learning • Web Development</p>
                <p className="text-muted-foreground">Python • TypeScript • React • Next.js • TensorFlow</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-bold text-white">About</h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              I'm an AI Developer with a passion for leveraging artificial intelligence to create scalable solutions. My journey started with a fascination for how machines learn and has evolved into a career focused on building practical AI applications.
            </p>

            <p>
              Currently, I'm working on cutting-edge AI projects and exploring how generative AI can be integrated into web applications. My background spans full-stack development, data science, and machine learning engineering.
            </p>

            <div className="pt-8 space-y-4">
              <h3 className="text-white font-bold text-xl">Key Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-accent">▪</span>
                  <span>Winner of NASA Space Apps Hackathon - Developed AI-powered solutions for space challenges</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent">▪</span>
                  <span>JLU Hackathon Winner - Created innovative applications in limited timeframes</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-accent">▪</span>
                  <span>Binary Battle Champion - Demonstrated advanced problem-solving and coding skills</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-5xl font-bold text-white">Skills & Expertise</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              { category: "AI & ML", skills: ["LLMs", "Generative AI", "TensorFlow", "PyTorch", "scikit-learn"] },
              { category: "Languages", skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java"] },
              { category: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS"] },
              { category: "Tools & Platforms", skills: ["Git", "Docker", "AWS", "Google Cloud", "Hugging Face"] },
            ].map((group) => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-lg font-bold text-white tracking-wide">{group.category.toUpperCase()}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-card border border-border text-muted-foreground text-sm hover:bg-secondary hover:text-white transition-all duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-5xl font-bold text-white">Projects & Achievements</h2>

          <div className="space-y-8">
            {[
              {
                title: "NASA Space Apps Hackathon Winner",
                description: "Developed an AI-powered solution for analyzing satellite imagery and providing real-time environmental insights. Implemented deep learning models for image classification.",
                tags: ["Python", "TensorFlow", "Earth Data"],
              },
              {
                title: "AI-Powered Chat Application",
                description: "Built a full-stack chat application with AI assistant capabilities using LLMs. Features real-time messaging, conversation history, and intelligent responses.",
                tags: ["Next.js", "TypeScript", "OpenAI API"],
              },
              {
                title: "Machine Learning Pipeline",
                description: "Created an end-to-end ML pipeline for predictive analytics with automated data preprocessing, feature engineering, and model optimization.",
                tags: ["Python", "scikit-learn", "Pandas"],
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 20 }}
                className="border-l-2 border-accent pl-8 py-4 cursor-pointer hover:bg-card/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto border-t border-border">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-5xl font-bold text-white">Experience</h2>

          <div className="space-y-12">
            {[
              {
                company: "Haron India",
                role: "AI Developer",
                period: "2023 - Present",
                description: "Working on AI solutions for enterprise clients. Developed NLP models and implemented machine learning pipelines.",
              },
              {
                company: "TheTechBus",
                role: "Full Stack Developer",
                period: "2022 - 2023",
                description: "Built web applications and led frontend development. Collaborated on AI integration projects.",
              },
              {
                company: "University",
                role: "Head Alumni, Tech Lead",
                period: "2021 - 2023",
                description: "Led technical initiatives and mentored junior developers. Organized hackathons and coding competitions.",
              },
            ].map((exp, idx) => (
              <div key={idx} className="border-l-2 border-muted-foreground pl-8 pb-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-accent font-mono text-sm">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-8 md:px-16 max-w-6xl mx-auto border-t border-border mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-8">
            <h2 className="text-6xl font-bold text-white">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities in AI and web development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { label: "Email", value: "contact@example.com", icon: "✉" },
              { label: "LinkedIn", value: "/in/yourprofile", icon: "💼" },
              { label: "GitHub", value: "/yourprofile", icon: "⚙" },
            ].map((contact) => (
              <motion.a
                key={contact.label}
                href="#"
                whileHover={{ y: -5 }}
                className="p-8 border border-border bg-card hover:bg-secondary hover:border-accent transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4">{contact.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {contact.label}
                </h3>
                <p className="text-muted-foreground text-sm">{contact.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-8 text-center text-muted-foreground text-sm">
        <p>© 2024 AI Developer Portfolio. All rights reserved.</p>
      </footer>
    </main>
  )
}
