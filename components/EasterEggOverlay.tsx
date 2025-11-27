import React, { useEffect, useState } from 'react';

interface EasterEggOverlayProps {
  onComplete: () => void;
}

const EasterEggOverlay: React.FC<EasterEggOverlayProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequência de eventos de terror
    const sequence = async () => {
      // Stage 1: Flash inicial
      await new Promise(r => setTimeout(r, 200));
      setStage(1);

      // Stage 2: Mensagem
      await new Promise(r => setTimeout(r, 1500));
      setStage(2);
      
      // Stage 3: Imagem Assustadora
      await new Promise(r => setTimeout(r, 2500));
      setStage(3);

      // Fim
      await new Promise(r => setTimeout(r, 400));
      onComplete();
    };

    sequence();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden cursor-none">
      {/* Scanlines agressivas */}
      <div className="absolute inset-0 scanlines opacity-50 pointer-events-none"></div>
      
      {/* Vinheta Vermelha Pulsante */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_0%,rgba(255,0,0,0.4)_100%)] animate-pulse"></div>

      {/* Conteúdo baseado no estágio */}
      <div className="relative z-10 text-center">
        
        {stage === 1 && (
           <h1 className="text-horror-red font-mono text-xl md:text-3xl tracking-widest animate-crt-flicker">
             SYSTEM_BREACH_DETECTED // <br/> 
             ERROR: 0x16_SOUL_NOT_FOUND
           </h1>
        )}

        {stage === 2 && (
          <div className="animate-shake">
            <h1 className="text-white font-display font-black text-6xl md:text-9xl horror-text mix-blend-difference mb-4">
              NÃO OLHE
            </h1>
            <h2 className="text-horror-red font-sans tracking-[1em] text-sm uppercase">
              Para trás
            </h2>
            <p className="mt-12 font-mono text-gray-500 text-xs">
              -23.5505° S, 46.6333° W <br/>
              31.10.2025
            </p>
          </div>
        )}

        {stage === 3 && (
          <div className="absolute inset-0 flex items-center justify-center scale-150">
             {/* Rosto abstrato distorcido com CSS filters */}
             <img 
               src="https://picsum.photos/1000/1000?grayscale" 
               alt="Corrupted Entity" 
               className="w-full h-full object-cover mix-blend-hard-light filter contrast-[200%] brightness-50 invert"
             />
          </div>
        )}
      </div>

      {/* Ruído estático exagerado */}
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none mix-blend-color-dodge"></div>
    </div>
  );
};

export default EasterEggOverlay;