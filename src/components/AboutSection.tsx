import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
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
  const rotateY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [5, 0, 0, -5]);

  return (
    <motion.section 
      ref={ref} 
      className="section-full bg-background/20 backdrop-blur-sm py-32 md:py-48 overflow-hidden"
      style={{ opacity, x, scale, rotateY, transformPerspective: 1200 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Left column - Section number */}
          <motion.div
            className="col-span-12 md:col-span-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/50 uppercase">002</span>
            <span className="block text-xs md:text-sm tracking-[0.3em] text-accent uppercase mt-4">ABOUT</span>
          </motion.div>

          {/* Main content - offset right */}
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            {/* Large statement */}
            <motion.p
              className="text-2xl md:text-4xl lg:text-5xl text-primary leading-[1.15] font-light tracking-tight mb-16"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              I design and build intelligent systems at the intersection of{' '}
              <span className="text-accent font-medium">Generative AI</span>,{' '}
              <span className="text-accent font-medium">Computer Vision</span>, and{' '}
              <span className="text-accent font-medium">Scalable Architecture</span>.
            </motion.p>

            {/* Secondary text - offset left */}
            <div className="md:ml-[15%] space-y-8">
              <motion.p
                className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                My work focuses on turning cutting-edge AI research into production-ready systems — not demos.
                B.Tech student in AI & ML from Oriental Group of Institutes, Bhopal.
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-muted-foreground/60 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                I believe great AI should be useful, explainable, and impactful.
              </motion.p>
            </div>

            {/* Location tag - far right */}
            <motion.div
              className="mt-20 md:ml-[50%]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-[10px] tracking-[0.3em] text-muted-foreground/40 uppercase">
                BHOPAL, INDIA
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
