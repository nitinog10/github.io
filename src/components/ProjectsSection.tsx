import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    name: 'BHARATTRIPAI',
    description: 'Smart AI-based travel companion for India. An intelligent platform that helps travelers explore India with personalized recommendations and insights.',
    stack: 'AI · Travel · Python · NLP',
    company: 'AI TRAVEL',
    image: '/Bharattripai.png',
    github: 'https://github.com/nitinog10/Beta-20-.git'
  },
  {
    name: 'LEARNING MANAGEMENT SYSTEM',
    description: 'A comprehensive platform for managing courses, students, and educational content with modern features.',
    stack: 'Full Stack · Education · React',
    company: 'EDTECH',
    image: '/learning management system.png',
    github: 'https://github.com/nitinog10/Learning-management-system.git'
  },
  {
    name: 'CAMPUS MITRA',
    description: 'RAG-powered AI chat platform for campus assistance. Helps students with queries using retrieval-augmented generation.',
    stack: 'RAG · LLM · AI Chat · Python',
    company: 'AI ASSISTANT',
    image: '/campusmitra.png',
    github: 'https://github.com/nitinog10/Campus-mitra.git'
  },
  {
    name: 'AIRPULSE',
    description: 'A Streamlit app to analyze the current AQI of different areas over the country and provide insights and future predictions.',
    stack: 'Streamlit · Python · ML · Data Analytics',
    company: 'ENVIRONMENT',
    image: '/airpulse.png',
    github: 'https://github.com/nitinog10/air-pulse.git'
  },
  {
    name: 'ATMOPREDICT',
    description: 'NASA Space Apps Challenge winning project. Weather prediction model using historical climate data for accurate forecasting and environmental analysis.',
    stack: 'Machine Learning · Python · Earth Observation Data',
    company: 'NASA SPACE APPS — WINNER',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
    github: 'https://github.com/nitinog10/AtmoPredict.git'
  }
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  return (
    <section ref={ref} className="section-full bg-background/20 backdrop-blur-sm py-32 md:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-4 mb-24">
          <motion.div
            className="col-span-12 md:col-span-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs md:text-sm tracking-[0.2em] text-muted-foreground/50 uppercase">004</span>
            <span className="block text-xs md:text-sm tracking-[0.3em] text-accent uppercase mt-4">WORK</span>
          </motion.div>
          
          <div className="col-span-12 md:col-span-10 md:col-start-3">
            <motion.h2
              className="text-[clamp(2.5rem,8vw,6rem)] font-bold text-primary uppercase tracking-tighter leading-[0.85]"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              SELECTED<br />
              <span className="text-muted-foreground/20">PROJECTS</span>
            </motion.h2>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-32 md:space-y-48">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className={`grid grid-cols-12 gap-4 md:gap-8 items-start ${index % 2 === 1 ? '' : ''}`}>
                {/* Image - large and offset */}
                <motion.div 
                  className={`col-span-12 md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''} relative overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative">
                      <motion.img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.2 }}
                      />
                      <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </a>
                </motion.div>

                {/* Content - offset opposite to image */}
                <div className={`col-span-12 md:col-span-5 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1 md:text-right' : ''} pt-8 md:pt-0`}>
                  {/* Index number */}
                  <span className="text-[clamp(3rem,8vw,6rem)] font-bold text-muted-foreground/10 leading-none block mb-4">
                    0{index + 1}
                  </span>
                  
                  {/* Company tag */}
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-accent mb-4 block">
                    {project.company}
                  </span>
                  
                  {/* Project name */}
                  <h3 
                    className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary uppercase tracking-tight mb-4 group-hover:text-accent transition-colors duration-500"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {project.name}
                  </h3>
                  
                  {/* Description */}
                  <p className={`text-sm md:text-base text-muted-foreground/70 leading-relaxed mb-6 ${index % 2 === 1 ? 'md:ml-auto' : ''} max-w-sm`}>
                    {project.description}
                  </p>
                  
                  {/* Stack */}
                  <span className="text-xs md:text-sm text-muted-foreground/40 uppercase tracking-[0.15em] block mb-4">
                    {project.stack}
                  </span>

                  {/* GitHub link */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors duration-300"
                  >
                    <span>VIEW ON GITHUB</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
