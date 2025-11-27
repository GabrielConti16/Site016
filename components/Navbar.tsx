import React, { useState, useEffect } from 'react';
import { Menu, X, Disc } from 'lucide-react';
import { Section } from '../types';

interface NavbarProps {
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: Section.HOME, label: 'Início' },
    { id: Section.ABOUT, label: 'Manifesto' },
    { id: Section.MUSIC, label: 'Sons' },
    { id: Section.AI_VIBE, label: 'Oráculo AI' },
    { id: Section.CONTACT, label: 'Booking' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
        isScrolled ? 'bg-deep-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection(Section.HOME)}
          className="cursor-pointer group flex items-center gap-2"
        >
          <Disc className={`w-8 h-8 text-white group-hover:text-neon-cyan transition-colors duration-500 ${isScrolled ? 'animate-spin-slow' : ''}`} />
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            ARTIGO <span className="text-neon-cyan group-hover:text-white transition-colors duration-300">016</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-sans text-sm tracking-widest uppercase hover:text-neon-cyan transition-colors duration-300 ${
                activeSection === link.id ? 'text-neon-cyan' : 'text-gray-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-neon-cyan transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-deep-black border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-down">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left font-display text-xl uppercase ${
                activeSection === link.id ? 'text-neon-cyan' : 'text-gray-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;