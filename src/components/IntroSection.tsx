import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiDocumentText } from 'react-icons/hi';

const roles = [
  'GENAI ARCHITECT',
  'ML ENGINEER', 
  'AI DEVELOPER',
];

const IntroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-80, 0, 0, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.section 
      ref={ref} 
      className="section-full bg-background/20 backdrop-blur-sm py-32 md:py-48 overflow-hidden"
      style={{ opacity, x, scale }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Creative overlapping layout */}
        <div className="relative">
          {/* Section number */}
          <motion.span 
            className="absolute -left-2 md:left-0 top-0 text-[10px] tracking-[0.3em] text-muted-foreground/50 uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            001
          </motion.span>

          {/* Main content wrapper */}
          <div className="pt-8">
            <motion.span 
              className="text-xs md:text-sm tracking-[0.3em] text-accent uppercase block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              INTRODUCTION
            </motion.span>

            {/* Name and Image overlapping container */}
            <div className="relative">
              {/* Large name - first part */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 
                  className="text-[clamp(5rem,18vw,14rem)] font-bold text-primary uppercase tracking-tighter leading-[0.8] relative z-10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  NITIN
                </h2>
              </motion.div>

              {/* Image positioned to overlap between name parts */}
              <motion.div
                className="absolute right-0 md:right-[5%] top-1/2 -translate-y-1/3 z-20"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 3 } : { opacity: 0, scale: 0.8, rotate: -10 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="relative group">
                  {/* Animated border ring */}
                  <motion.div 
                    className="absolute -inset-3 rounded-full border-2 border-accent/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ borderStyle: 'dashed' }}
                  />
                  {/* Glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 via-purple-500/20 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                  {/* Image with creative shape */}
                  <div className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                    <img 
                      src="/Nitin.png" 
                      alt="Nitin Mishra" 
                      className="w-full h-full object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-700"
                    />
                  </div>
                  {/* Floating accent dots */}
                  <motion.div 
                    className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div 
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-500 rounded-full"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Large name - second part */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h2 
                  className="text-[clamp(5rem,18vw,14rem)] font-bold text-muted-foreground/20 uppercase tracking-tighter leading-[0.8] -mt-4 md:-mt-8"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  MISHRA
                </h2>
              </motion.div>
            </div>

            {/* Roles - creative diagonal arrangement */}
            <div className="mt-16 md:mt-20 ml-auto md:w-2/3 lg:w-1/2">
              <div className="space-y-4">
                {roles.map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="flex items-center gap-4 justify-end"
                    style={{ paddingRight: `${index * 15}%` }}
                  >
                    <span className="text-sm md:text-base text-muted-foreground tracking-[0.15em] font-light">
                      {role}
                    </span>
                    <span className="w-8 h-px bg-accent/50"></span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* About paragraph */}
            <motion.p
              className="mt-16 text-sm md:text-base text-muted-foreground/60 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I design and build intelligent systems at the intersection of{' '}
              <span className="text-accent">Generative AI</span>,{' '}
              <span className="text-accent">Computer Vision</span>, and{' '}
              <span className="text-accent">Scalable Architecture</span>.
            </motion.p>

            {/* Social Links - horizontal line design */}
            <motion.div
              className="flex items-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="w-12 h-px bg-gradient-to-r from-accent to-transparent"></div>
              <a
                href="https://www.linkedin.com/in/nitin-kumar-mishra-520615331"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-muted-foreground/60 hover:text-accent transition-colors duration-300 uppercase flex items-center gap-2 group"
              >
                <SiLinkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                LINKEDIN
              </a>
              <a
                href="https://github.com/nitinog10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-muted-foreground/60 hover:text-accent transition-colors duration-300 uppercase flex items-center gap-2 group"
              >
                <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                GITHUB
              </a>
              <a
                href="/Nitin_Kumar_Mishra_AI_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.2em] text-muted-foreground/60 hover:text-accent transition-colors duration-300 uppercase flex items-center gap-2 group"
              >
                <HiDocumentText className="w-4 h-4 group-hover:scale-110 transition-transform" />
                RESUME
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default IntroSection;
