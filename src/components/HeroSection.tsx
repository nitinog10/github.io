import { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isTransitioned, setIsTransitioned] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Transform values based on scroll
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 8, 20]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.5, 0.8], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.75 && !isTransitioned) {
        setIsTransitioned(true);
      } else if (latest < 0.75 && isTransitioned) {
        setIsTransitioned(false);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isTransitioned]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Fixed hero that scales */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background/20 backdrop-blur-sm flex items-center justify-center">
        {/* White flash overlay */}
        <motion.div
          className="absolute inset-0 bg-primary z-10"
          style={{ opacity: bgOpacity }}
        />
        
        {/* Main text that zooms */}
        <motion.div
          className="relative z-20 px-8 md:px-16 text-center"
          style={{ scale, opacity }}
        >
          <motion.span
            className="block text-sm md:text-base tracking-[0.3em] text-muted-foreground/60 uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            NITIN MISHRA
          </motion.span>
          <motion.p
            className="text-base md:text-xl tracking-[0.15em] text-muted-foreground/80 uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            What are you looking at?
          </motion.p>
          <motion.h1
            className="text-[clamp(3rem,15vw,12rem)] leading-[0.9] text-primary font-bold select-none uppercase tracking-tight font-heading"
            style={{ fontFamily: 'var(--font-heading)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            LET'S BUILD
            <br />
            <span className="text-accent">TOGETHER</span>
          </motion.h1>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ opacity }}
        >
          <span className="text-label text-muted-foreground">SCROLL</span>
          <motion.div
            className="w-px h-12 bg-muted-foreground origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
