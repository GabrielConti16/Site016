import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Music from './components/Music';
import AIVibeGenerator from './components/AIVibeGenerator';
import Contact from './components/Contact';
import EasterEggOverlay from './components/EasterEggOverlay';
import { Section } from './types';

function App() {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  const cursorWrapperRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  const triggerEasterEgg = () => {
    setShowEasterEgg(true);
  };

  useEffect(() => {
    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Instant movement for center dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      // Smooth lag for outer ring
      if (cursorWrapperRef.current) {
        cursorWrapperRef.current.animate({
          transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        }, {
          duration: 400,
          fill: "forwards"
        });
      }
    };

    // Hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('cursor-help');

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-neon-cyan selection:text-black relative overflow-x-hidden ${showEasterEgg ? 'overflow-hidden' : ''}`}>
      
      {/* EASTER EGG OVERLAY - HORROR ARG */}
      {showEasterEgg && (
        <EasterEggOverlay onComplete={() => setShowEasterEgg(false)} />
      )}

      {/* --- Visual Effects Layer --- */}
      
      {/* 1. Global Animated Noise Overlay */}
      <div className="bg-noise animate-noise"></div>

      {/* 2. Mouse Spotlight (Dynamic Lighting) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 mix-blend-screen"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(20, 20, 30, 0.4), transparent 40%)`
        }}
      />

      {/* 3. Enhanced Custom Cursor */}
      {/* Wrapper tracks mouse with lag */}
      <div 
        ref={cursorWrapperRef} 
        className={`custom-cursor-wrapper hidden md:block ${showEasterEgg ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* Ring shape handles scaling and styling based on hover state */}
        <div 
          className={`cursor-ring rounded-full border border-white transition-all duration-300 ${
            isHovering 
              ? 'w-16 h-16 bg-white/20 border-transparent backdrop-blur-sm' 
              : 'w-8 h-8 bg-transparent'
          }`}
        />
      </div>
      
      {/* Center Dot (always exact position) */}
      <div 
        ref={cursorDotRef} 
        className={`custom-cursor-wrapper w-1 h-1 bg-white rounded-full hidden md:block ${showEasterEgg ? 'opacity-0' : 'opacity-100'}`}
        style={{ pointerEvents: 'none' }}
      ></div>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="relative z-10">
        <div id={Section.HOME}>
          <Hero 
            scrollToSection={scrollToSection} 
            mousePos={mousePos} 
            triggerEasterEgg={triggerEasterEgg} 
          />
        </div>
        
        <div id={Section.ABOUT}>
          <About />
        </div>
        
        <div id={Section.MUSIC}>
          <Music />
        </div>
        
        <div id={Section.AI_VIBE}>
          <AIVibeGenerator />
        </div>
        
        <div id={Section.CONTACT}>
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;