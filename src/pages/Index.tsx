import { useEffect } from 'react';
import useLenis from '@/hooks/useLenis';
import NoiseOverlay from '@/components/NoiseOverlay';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollProgress from '@/components/ScrollProgress';
import MagneticCursor from '@/components/MagneticCursor';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TechStackSection from '@/components/TechStackSection';
import RecognitionSection from '@/components/RecognitionSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useLenis();

  useEffect(() => {
    document.title = 'NITIN MISHRA — AI DEVELOPER';
  }, []);

  return (
    <main className="relative text-foreground font-mono scrollbar-hide cursor-none md:cursor-none">
      {/* Custom magnetic cursor */}
      <MagneticCursor />
      
      {/* Animated abstract background */}
      <AnimatedBackground />
      
      {/* Noise texture overlay */}
      <NoiseOverlay />
      
      {/* Scroll progress indicator */}
      <ScrollProgress />
      
      {/* Hero with zoom effect */}
      <HeroSection />
      
      {/* Main content after hero transition */}
      <div className="relative z-10">
        <IntroSection />
        <SkillsSection />
        <TechStackSection />
        <RecognitionSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </main>
  );
};

export default Index;
