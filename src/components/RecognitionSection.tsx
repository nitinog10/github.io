import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const recognitions = [
  { 
    title: 'NASA SPACE APPS CHALLENGE', 
    category: 'WINNER',
    year: '2025',
    description: 'Global hackathon winner with innovative weather prediction solution using NASA\'s Earth observation data and machine learning.',
    image: '/Nasa space apps challenge.jpeg'
  },
  { 
    title: '15+ HACKATHON', 
    category: 'FINALIST',
    year: '2024-25',
    description: 'Consistently recognized across 15+ hackathons for innovative AI solutions and technical excellence.',
    image: '/15+ hackathons.jpeg'
  },
  { 
    title: '3 HACKATHON WINS', 
    category: 'WINS',
    year: '2024-25',
    description: 'Multiple hackathon victories showcasing expertise in AI, full-stack development, and problem-solving.',
    image: '/abc.jpeg'
  },
  { 
    title: 'NATIONAL LEVEL IDEATHON', 
    category: 'WINNER',
    year: '2024',
    description: 'First place at national ideathon for developing innovative tech solutions addressing real-world challenges.',
    image: '/national level ideathon.jpeg'
  },
];

// Individual recognition card with scroll animation
const RecognitionCard = ({ item, index }: { item: typeof recognitions[0]; index: number }) => {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });
  
  // Alternate left/right entry based on index
  const isFromLeft = index % 2 === 0;
  const xOffset = isFromLeft ? -100 : 100;
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [xOffset, 0, 0, -xOffset]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [25, 0, 0, -25]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const rotateY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [isFromLeft ? -6 : 6, 0, 0, isFromLeft ? 6 : -6]);

  return (
    <motion.article
      ref={cardRef}
      className="group relative overflow-visible"
      style={{ opacity, x, y, scale, rotateY, transformPerspective: 1200 }}
    >
      <div className={`grid grid-cols-12 gap-4 md:gap-8 items-center`}>
        {/* Image - smaller size */}
        <motion.div 
          className={`col-span-12 md:col-span-5 ${index % 2 === 1 ? 'md:col-start-8' : ''} relative overflow-hidden`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative aspect-[4/3] max-h-[280px]">
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg transition-all duration-700"
            />
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
          </div>
        </motion.div>

        {/* Content - offset opposite to image */}
        <div className={`col-span-12 md:col-span-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:text-right' : ''} pt-6 md:pt-0`}>
          {/* Index number */}
          <span className="text-[clamp(2rem,5vw,4rem)] font-bold text-muted-foreground/10 leading-none block mb-2">
            0{index + 1}
          </span>
          
          {/* Category tag */}
          <span className="text-xs uppercase tracking-[0.2em] text-accent mb-2 block">
            {item.category}
          </span>
          
          {/* Title */}
          <h3 
            className="text-xl md:text-2xl lg:text-3xl font-bold text-primary uppercase tracking-tight mb-3 group-hover:text-accent transition-colors duration-500"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {item.title}
          </h3>
          
          {/* Description */}
          <p className={`text-sm text-muted-foreground/70 leading-relaxed mb-4 ${index % 2 === 1 ? 'md:ml-auto' : ''} max-w-sm`}>
            {item.description}
          </p>
          
          {/* Year */}
          <span className="text-xs text-muted-foreground/40 uppercase tracking-[0.15em] block">
            {item.year}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

const RecognitionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="section-full bg-background/20 backdrop-blur-sm py-32 md:py-48"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
              RECOGNITION<br />
              <span className="text-muted-foreground/20">& WINS</span>
            </motion.h2>
          </div>
        </div>

        {/* Recognition items - Projects style */}
        <div className="space-y-20 md:space-y-32">
          {recognitions.map((item, index) => (
            <RecognitionCard key={item.title} item={item} index={index} />
          ))}
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
