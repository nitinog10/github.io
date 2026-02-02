"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const links = [
  {
    label: "EMAIL",
    value: "nitiniszod10@gmail.com",
    href: "mailto:nitiniszod10@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "NITIN KUMAR MISHRA",
    href: "https://www.linkedin.com/in/nitin-kumar-mishra-520615331",
  },
  {
    label: "PHONE",
    value: "+91 7489078947",
    href: "tel:+917489078947",
  },
]

export function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">
            CONTACT
          </p>

          <h2 className="text-[10vw] md:text-[8vw] lg:text-[6vw] font-bold uppercase tracking-tight leading-[0.9] text-primary mb-16">
            {"LET'S BUILD"}
            <br />
            <span className="text-accent">SOMETHING</span>
            <br />
            GREAT
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === "LINKEDIN" ? "_blank" : undefined}
              rel={link.label === "LINKEDIN" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-4 border-b border-border hover:border-accent transition-colors duration-500"
            >
              <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase w-24">
                {link.label}
              </span>
              <span className="text-xl md:text-2xl text-primary group-hover:text-accent transition-colors duration-300 tracking-wide">
                {link.value}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-32 text-center"
        >
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            DESIGNED AND BUILT BY NITIN MISHRA
          </p>
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase mt-2">
            2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}
