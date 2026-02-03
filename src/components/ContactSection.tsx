import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Enter from RIGHT, exit to LEFT
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [100, 0, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const rotateY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [8, 0, 0, -8]);

  return (
    <motion.section 
      ref={ref} 
      className="section-full bg-background/20 backdrop-blur-sm py-32 md:py-48 min-h-screen flex items-center overflow-hidden"
      style={{ opacity, x, scale, rotateY, transformPerspective: 1200 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-12 gap-4">
          {/* Section indicator */}
          <motion.div
            className="col-span-12 md:col-span-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/50 uppercase">007</span>
            <span className="block text-xs md:text-sm tracking-[0.3em] text-accent uppercase mt-4">CONTACT</span>
          </motion.div>

          {/* Main content */}
          <div className="col-span-12 md:col-span-10 md:col-start-3">
            {/* Large CTA */}
            <motion.h2
              className="text-[clamp(3rem,12vw,10rem)] font-bold text-primary uppercase tracking-tighter leading-[0.85] mb-16"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              LET'S BUILD
              <br />
              <span className="text-accent">THE FUTURE</span>
            </motion.h2>

            {/* Contact details - asymmetric */}
            <motion.div
              className="md:ml-[20%] space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Email */}
              <div>
                <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/40 uppercase block mb-3">EMAIL</span>
                <a
                  href="mailto:nitiniszod10@gmail.com"
                  className="text-xl md:text-3xl lg:text-4xl text-primary hover:text-accent transition-colors duration-300 tracking-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  nitiniszod10@gmail.com
                </a>
              </div>

              {/* Links */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div>
                  <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/40 uppercase block mb-3">LINKEDIN</span>
                  <a
                    href="https://www.linkedin.com/in/nitin-kumar-mishra-520615331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-muted-foreground hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span>Connect</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>

                <div>
                  <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/40 uppercase block mb-3">GITHUB</span>
                  <a
                    href="https://github.com/nitinog10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-muted-foreground hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span>@nitinog10</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>

                <div>
                  <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/40 uppercase block mb-3">RESUME</span>
                  <a
                    href="/Nitin_Kumar_Mishra_AI_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base md:text-lg text-muted-foreground hover:text-accent transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span>Download</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
                
                <div>
                  <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/40 uppercase block mb-3">PHONE</span>
                  <a
                    href="tel:+917489078947"
                    className="text-base md:text-lg text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    +91 7489078947
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Footer - at the bottom */}
            <motion.div
              className="mt-32 md:mt-48 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.3em]">
                © 2026 NITIN MISHRA
              </span>
              <span className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.3em]">
                BHOPAL, INDIA
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
