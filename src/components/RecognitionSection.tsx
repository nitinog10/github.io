import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const recognitions = [
  { 
    title: 'NASA SPACE APPS CHALLENGE', 
    category: 'WINNER',
    year: '2024',
    image: '/Nasa space apps challenge.jpeg'
  },
  { 
    title: '15+ HACKATHON', 
    category: 'FINALIST',
    year: '2023-24',
    image: '/15+ hackathons.jpeg'
  },
  { 
    title: '3 HACKATHON', 
    category: 'WINS',
    year: '2024',
    image: '/abc.jpeg'
  },
  { 
    title: 'NATIONAL LEVEL IDEATHON', 
    category: 'WINNER',
    year: '2024',
    image: '/national level ideathon.jpeg'
  },
];

const RecognitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24 bg-background/20"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 mb-24">
          <motion.div
            className="col-span-12 md:col-span-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/50 uppercase">
              006
            </span>
            <span className="block text-xs md:text-sm tracking-[0.3em] text-accent uppercase mt-4">
              RECOGNITION
            </span>
          </motion.div>

          <div className="col-span-12 md:col-span-10 md:col-start-3">
            <motion.h2
              className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-primary uppercase tracking-tighter leading-[0.85]"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              RECOGNITION<br />& WINS
            </motion.h2>
          </div>
        </div>

        {/* Recognition cards with images */}
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {recognitions.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {/* Image */}
                  <div className="aspect-[3/2] overflow-hidden mb-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                  </div>
                  
                  {/* Text */}
                  <div className="flex items-baseline justify-between">
                    <h3 
                      className="text-sm md:text-base font-bold text-primary uppercase tracking-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {item.title}
                    </h3>
                    <span className="text-xs text-accent tracking-[0.2em] uppercase">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-24 h-px bg-border/30 origin-left"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </section>
  );
};

export default RecognitionSection;
