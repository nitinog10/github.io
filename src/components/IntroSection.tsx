import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiDocumentText } from 'react-icons/hi';

const roles = [
  'GENAI ARCHITECT',
  'FULL STACK ENGINEER', 
  'AI DEVELOPER'
];

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <section ref={ref} className="section-full bg-background/20 backdrop-blur-sm py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial asymmetric layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left side - Label */}
          <motion.div
            className="col-span-12 md:col-span-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase">001</span>
          </motion.div>
          
          {/* Right side - Main content */}
          <div className="col-span-12 md:col-span-10 md:col-start-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-xs md:text-sm tracking-[0.3em] text-accent uppercase block mb-8">INTRODUCTION</span>
              <h2 
                className="text-[clamp(4rem,12vw,10rem)] font-bold text-primary uppercase tracking-tighter leading-[0.85] mb-12"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                NITIN
                <br />
                <span className="text-muted-foreground/30">MISHRA</span>
              </h2>
            </motion.div>

            {/* Roles - offset to the right */}
            <div className="md:ml-[20%] space-y-3 mt-16">
              {roles.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="flex items-center gap-4"
                >
                  <span className="w-8 h-px bg-accent/50"></span>
                  <span className="text-sm md:text-base text-muted-foreground tracking-[0.15em] font-light">
                    {role}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="md:ml-[20%] flex items-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://www.linkedin.com/in/nitin-kumar-mishra-520615331"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-muted-foreground/60 hover:text-accent transition-colors duration-300 uppercase flex items-center gap-2"
              >
                <SiLinkedin className="w-4 h-4" />
                LINKEDIN
              </a>
              <span className="text-muted-foreground/20">|</span>
              <a
                href="https://github.com/nitinog10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-muted-foreground/60 hover:text-accent transition-colors duration-300 uppercase flex items-center gap-2"
              >
                <SiGithub className="w-4 h-4" />
                GITHUB
              </a>
              <span className="text-muted-foreground/20">|</span>
              <a
                href="/Nitin_Kumar_Mishra_AI_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-muted-foreground/60 hover:text-accent transition-colors duration-300 uppercase flex items-center gap-2"
              >
                <HiDocumentText className="w-4 h-4" />
                RESUME
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
