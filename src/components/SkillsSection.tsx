import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    category: 'CORE AI & ML',
    skills: ['Generative AI (LLMs, Prompt Engineering, RAG)', 'Computer Vision (OpenCV, Object Detection, Segmentation)', 'NLP & Model Fine-Tuning', 'Intelligent Agents & Multi-Agent Systems']
  },
  {
    category: 'ENGINEERING & ARCHITECTURE',
    skills: ['Full-Stack Development (Next.js, React)', 'Backend APIs (Node.js, FastAPI)', 'Scalable AI System Design', 'MCP Servers & AI Infrastructure', 'Cloud-Native Development']
  },
  {
    category: 'TOOLS & PLATFORMS',
    skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'Docker', 'Firebase', 'Google Cloud', 'Three.js / Web-based 3D', 'Git', 'CI/CD Pipelines']
  },
  {
    category: 'CURRENT FOCUS',
    skills: ['Advanced Computer Vision Techniques', 'RAG Systems & Knowledge-Grounded AI', 'Building Production-Grade AI Systems', 'Exploring AI + 3D + Web Experiences']
  }
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section ref={ref} className="section-full bg-secondary/20 backdrop-blur-sm py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-4">
          {/* Section indicator */}
          <motion.div
            className="col-span-12 md:col-span-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/50 uppercase">003</span>
            <span className="block text-xs md:text-sm tracking-[0.3em] text-accent uppercase mt-4">CAPABILITIES</span>
          </motion.div>

          {/* Main content */}
          <div className="col-span-12 md:col-span-10 md:col-start-3">
            {/* Large heading */}
            <motion.h2
              className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-primary uppercase tracking-tighter leading-[0.85] mb-20"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              WHAT I<br />
              <span className="text-muted-foreground/20">WORK WITH</span>
            </motion.h2>

            {/* Skills in asymmetric columns */}
            <div className="space-y-20">
              {skillGroups.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  className={`grid grid-cols-12 gap-4 ${groupIndex % 2 === 1 ? 'md:ml-[20%]' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + groupIndex * 0.12,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  {/* Category name */}
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="text-xs md:text-sm font-bold text-accent uppercase tracking-[0.2em] mb-6">
                      {group.category}
                    </h3>
                  </div>
                  
                  {/* Skills list */}
                  <div className="col-span-12 md:col-span-8">
                    <div className="space-y-2">
                      {group.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="group cursor-default"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + groupIndex * 0.1 + skillIndex * 0.04,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                        >
                          <span className="text-sm md:text-base text-muted-foreground/70 group-hover:text-primary transition-colors duration-300 leading-relaxed">
                            {skill}
                          </span>
                        </motion.div>
                      ))}
                    </div>
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

export default SkillsSection;
