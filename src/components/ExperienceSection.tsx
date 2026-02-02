import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const experiences = [
  {
    role: 'AI DEVELOPER',
    company: 'TECHBUS',
    period: 'BANGALORE, INDIA · REMOTE',
    location: 'REMOTE',
    description: 'Worked as an AI Developer, contributing to applied AI solutions. Designed and implemented AI-driven features with real-world constraints.'
  },
  {
    role: 'AI DEVELOPER & TECHNICAL OPERATIONS',
    company: 'HARON INDIA',
    period: 'INDIA',
    location: 'INDIA',
    description: 'Collaborated in fast-paced teams to deliver functional AI prototypes under strict deadlines. Gained hands-on exposure to industry-oriented AI workflows.'
  },
  {
    role: 'B.TECH (AIML)',
    company: 'ORIENTAL GROUP OF INSTITUTES',
    period: '2024 — PRESENT',
    location: 'BHOPAL',
    description: 'Bachelor of Technology in Artificial Intelligence & Machine Learning.'
  }
];



const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section ref={ref} className="section-full bg-secondary/20 backdrop-blur-sm py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Experience Section */}
        <div className="grid grid-cols-12 gap-4 mb-32">
          <motion.div
            className="col-span-12 md:col-span-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/50 uppercase">005</span>
            <span className="block text-xs md:text-sm tracking-[0.3em] text-accent uppercase mt-4">EXPERIENCE</span>
          </motion.div>

          <div className="col-span-12 md:col-span-10 md:col-start-3">
            <motion.h2
              className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-primary uppercase tracking-tighter leading-[0.85] mb-20"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              WHERE I'VE<br />
              <span className="text-muted-foreground/20">WORKED</span>
            </motion.h2>

            {/* Experience entries */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className={`grid grid-cols-12 gap-4 ${index % 2 === 1 ? 'md:ml-[15%]' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <div className="col-span-12 md:col-span-3">
                    <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/40 uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 
                      className="text-xl md:text-3xl lg:text-4xl font-bold text-primary uppercase tracking-tight mb-2"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {exp.role}
                    </h3>
                    <span className="text-sm md:text-base text-accent tracking-[0.15em] uppercase block mb-3">
                      {exp.company}
                    </span>
                    <p className="text-sm md:text-base text-muted-foreground/60 leading-relaxed max-w-md">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ExperienceSection;
