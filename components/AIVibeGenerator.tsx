import React, { useState } from 'react';
import { Sparkles, Loader2, Music2 } from 'lucide-react';
import { generateVibeResponse } from '../services/geminiService';

const AIVibeGenerator: React.FC = () => {
  const [mood, setMood] = useState('');
  const [setting, setSetting] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!mood || !setting) return;
    
    setLoading(true);
    setResult(null);
    
    const response = await generateVibeResponse(mood, setting);
    
    setResult(response);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-purple/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-cyan/30 text-neon-cyan text-xs tracking-widest uppercase mb-4">
              <Sparkles size={12} />
              <span>Powered by Gemini 2.5</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              ORÁCULO DO RITMO
            </h2>
            <p className="text-gray-400 font-light">
              Descreva seu ambiente e seu estado mental. A IA irá decodificar a frequência ideal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-500 ml-1">Onde você está?</label>
              <input
                type="text"
                value={setting}
                onChange={(e) => setSetting(e.target.value)}
                placeholder="Ex: Armazém abandonado, Rooftop, Subsolo..."
                className="w-full bg-black/50 border border-white/10 rounded-none p-4 text-white focus:border-neon-cyan focus:outline-none transition-colors font-sans placeholder-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-gray-500 ml-1">Como você se sente?</label>
              <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="Ex: Elétrico, Melancólico, Hipnotizado..."
                className="w-full bg-black/50 border border-white/10 rounded-none p-4 text-white focus:border-neon-purple focus:outline-none transition-colors font-sans placeholder-gray-700"
              />
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <button
              onClick={handleGenerate}
              disabled={loading || !mood || !setting}
              className={`
                px-8 py-4 font-display font-bold uppercase tracking-widest text-sm transition-all duration-300 flex items-center gap-3
                ${loading || !mood || !setting 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black hover:scale-105 shadow-[0_0_20px_rgba(188,19,254,0.3)]'}
              `}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sintonizando...
                </>
              ) : (
                <>
                  <Music2 size={18} />
                  Gerar Vibe
                </>
              )}
            </button>
          </div>

          {result && (
            <div className="animate-fade-in-up bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-purple"></div>
              
              <div className="relative z-10">
                 <h3 className="text-neon-cyan font-mono text-xs mb-4 uppercase tracking-widest">
                   Resultado da Análise
                 </h3>
                 <p className="text-white font-light text-lg md:text-2xl leading-relaxed italic mb-8">
                   "{result.split('Track ID')[0].replace(/"/g, '')}"
                 </p>
                 
                 {result.includes('Track ID') && (
                    <div className="flex items-center gap-4 p-4 bg-black/40 border border-white/5">
                      <div className="w-12 h-12 bg-gray-800 flex items-center justify-center text-white">
                        <Music2 size={24} />
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500 uppercase tracking-widest">Track Sugerida</span>
                        <span className="block font-display text-neon-purple font-bold text-lg">
                          {result.split('Track ID')[1].replace(/[:|-]/g, '').trim()}
                        </span>
                      </div>
                    </div>
                 )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIVibeGenerator;