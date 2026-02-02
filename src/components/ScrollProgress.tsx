import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Vertical progress bar */}
      <motion.div
        className="fixed right-6 top-1/2 -translate-y-1/2 w-px h-32 bg-border z-50 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-full bg-accent origin-top"
          style={{ scaleY, height: '100%' }}
        />
      </motion.div>

      {/* Section indicators */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
        {['HERO', 'INTRO', 'ABOUT', 'SKILLS', 'WORK', 'EXP', 'CONTACT'].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 rounded-full bg-muted-foreground/30"
            whileHover={{ scale: 2, backgroundColor: 'hsl(180, 100%, 50%)' }}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollProgress;
