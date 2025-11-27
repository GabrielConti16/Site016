import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Section } from '../types';

interface HeroProps {
  scrollToSection: (section: Section) => void;
  mousePos?: { x: number; y: number };
  triggerEasterEgg: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, mousePos = { x: 0, y: 0 }, triggerEasterEgg }) => {
  const [clickCount, setClickCount] = useState(0);

  // Reset click count if inactive for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setClickCount(0), 2000);
    return () => clearTimeout(timer);
  }, [clickCount]);

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // Trigger on 5th click
    if (newCount === 5) {
      triggerEasterEgg();
      setClickCount(0);
    }
  };

  // Calculate parallax offset (movement opposite to mouse for depth)
  const calculateParallax = (factor: number) => {
    // Default to center if no mouse movement yet
    const x = (window.innerWidth / 2 - mousePos.x) * factor;
    const y = (window.innerHeight / 2 - mousePos.y) * factor;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-deep-black">
      {/* Abstract Background with Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Static grainy background */}
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        
        {/* Moving Neon Blobs - Depth Layer 1 (Far) */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-pulse-slow transition-transform duration-75 ease-out will-change-transform"
          style={calculateParallax(0.04)}
        ></div>
        
        {/* Moving Neon Blobs - Depth Layer 2 (Mid) */}
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-1000 transition-transform duration-75 ease-out will-change-transform"
          style={calculateParallax(0.06)}
        ></div>
        
        {/* Moving Neon Blobs - Depth Layer 3 (Close/Accent) */}
        <div 
          className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full hidden md:block backdrop-blur-sm"
          style={calculateParallax(-0.02)}
        ></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-neon-cyan font-sans tracking-[0.3em] text-sm md:text-base mb-4 animate-fade-in-up">
          DUO ELETRÔNICO // BRASIL
        </h2>
        
        <h1 
          className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white mb-6 glitch-text leading-tight mix-blend-lighten"
          data-text="ARTIGO 016"
        >
          ARTIGO <span 
            onClick={handleSecretClick}
            className="cursor-help hover:text-horror-red transition-colors duration-100 selection:bg-red-900"
          >
            016
          </span>
        </h1>

        <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Arquitetura sonora para mentes distópicas. Techno, Industrial e a beleza do caos.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection(Section.MUSIC)}
            className="group relative px-8 py-3 bg-transparent border border-neon-cyan text-neon-cyan overflow-hidden transition-all duration-300 font-display tracking-wider uppercase text-sm w-full md:w-auto cursor-pointer"
          >
            <div className="absolute inset-0 w-0 bg-neon-cyan transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
            <span className="relative group-hover:text-white transition-colors">Ouvir Tracks</span>
          </button>
          
          <button 
            onClick={() => scrollToSection(Section.CONTACT)}
            className="group relative px-8 py-3 bg-white text-black overflow-hidden transition-all duration-300 font-display tracking-wider uppercase text-sm w-full md:w-auto cursor-pointer"
          >
             <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             <span className="relative z-10">Book Now</span>
          </button>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection(Section.ABOUT)}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce cursor-pointer"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;