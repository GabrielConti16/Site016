import React from 'react';
import { Mail, Instagram, Twitter, Disc } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 justify-between items-center md:items-start">
          
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              BOOKING & CONTATO
            </h2>
            <p className="text-gray-400 mb-10 max-w-md">
              Para contratações, remixes ou colaborações, entre em contato com nossa equipe de management.
            </p>

            <div className="space-y-6">
              <a href="mailto:booking@artigo016.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:border-neon-cyan group-hover:bg-neon-cyan/10 transition-colors">
                  <Mail className="text-white group-hover:text-neon-cyan transition-colors" />
                </div>
                <span className="text-lg text-white group-hover:text-neon-cyan transition-colors">booking@artigo016.com</span>
              </a>
              
              <div className="pt-8 flex gap-6">
                <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
                  <Instagram size={28} />
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
                  <Twitter size={28} />
                </a>
                <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
                  <Disc size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-5/12">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Seu Nome / Agência" 
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-white focus:outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email para Contato" 
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-white focus:outline-none transition-colors"
              />
              <textarea 
                rows={4}
                placeholder="Detalhes do Evento" 
                className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white focus:border-white focus:outline-none transition-colors"
              ></textarea>
              <button className="w-full py-4 bg-white text-black font-display font-bold uppercase tracking-widest hover:bg-neon-cyan hover:text-black transition-all duration-300">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-white/5 text-center">
        <p className="text-gray-600 text-sm font-mono">
          © {new Date().getFullYear()} Artigo 016. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;