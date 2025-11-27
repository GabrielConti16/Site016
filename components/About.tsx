import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/2 relative group">
             {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-neon-purple/30 group-hover:border-neon-purple/60 transition-colors duration-500 rounded-sm"></div>
            <div className="relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
               <img 
                 src="https://picsum.photos/800/1000?grayscale" 
                 alt="Artigo 016 Duo" 
                 className="w-full h-auto object-cover shadow-2xl"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
              O MANIFESTO
            </h2>
            
            <div className="space-y-6 text-gray-400 font-light text-lg leading-relaxed text-justify">
              <p>
                <strong className="text-white font-bold">Artigo 016</strong> não é apenas um código penal, é uma sentença sonora. Nascidos no concreto e moldados pela noite, trazemos a fusão entre o orgânico e o sintético.
              </p>
              <p>
                Nossa jornada começou nos warehouses abandonados, onde a acústica imperfeita criou nossa identidade: graves sujos, sintetizadores ácidos e uma atmosfera que flerta com o suspense cinematográfico.
              </p>
              <p>
                Buscamos a transcendência através da repetição e da textura. Cada set é uma narrativa, uma viagem do sombrio ao eufórico, projetada para desconectar o público da realidade e conectá-lo ao ritmo fundamental.
              </p>
            </div>

            <div className="mt-12 flex gap-8">
              <div className="text-center">
                <span className="block font-display text-3xl text-neon-cyan font-bold">5+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Anos de Atividade</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-3xl text-neon-purple font-bold">150+</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Gigs Realizadas</span>
              </div>
              <div className="text-center">
                <span className="block font-display text-3xl text-white font-bold">12</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">Releases</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;