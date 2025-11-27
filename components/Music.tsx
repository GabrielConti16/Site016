import React, { useState } from 'react';
import { Play, Pause, ExternalLink } from 'lucide-react';
import { Track } from '../types';

const tracks: Track[] = [
  { id: '1', title: 'Concrete Jungle (Original Mix)', duration: '6:42', genre: 'Industrial Techno', bpm: 132 },
  { id: '2', title: 'Neon Shadows', duration: '5:15', genre: 'Acid House', bpm: 128 },
  { id: '3', title: 'System Failure', duration: '7:01', genre: 'Dark Techno', bpm: 135 },
  { id: '4', title: 'Protocol 016', duration: '6:20', genre: 'Hypnotic', bpm: 130 },
];

const Music: React.FC = () => {
  const [playing, setPlaying] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
    }
  };

  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            FREQUÊNCIAS
          </h2>
          <p className="text-gray-500 uppercase tracking-widest text-sm">
            Últimos Lançamentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Featured Release Art */}
          <div className="relative aspect-square group overflow-hidden border border-white/10 bg-zinc-900">
             <img 
               src="https://picsum.photos/800/800?grayscale&blur=1" 
               alt="Latest Album" 
               className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-8 border border-white/10 m-4">
                <h3 className="font-display text-4xl text-white font-bold mb-2 text-center">DISTOPIA VOL. 1</h3>
                <span className="text-neon-cyan tracking-widest text-sm mb-8">EP JÁ DISPONÍVEL</span>
                <button className="px-6 py-2 bg-white text-black font-bold uppercase hover:bg-neon-cyan transition-colors">
                  Spotify
                </button>
             </div>
          </div>

          {/* Tracklist */}
          <div className="flex flex-col justify-center space-y-2">
            {tracks.map((track) => (
              <div 
                key={track.id}
                className={`group flex items-center justify-between p-4 border border-white/5 hover:border-neon-cyan/50 hover:bg-white/5 transition-all duration-300 ${
                  playing === track.id ? 'border-neon-cyan bg-white/5' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => togglePlay(track.id)}
                    className={`w-10 h-10 flex items-center justify-center rounded-full border ${
                      playing === track.id ? 'border-neon-cyan text-neon-cyan' : 'border-white/20 text-white group-hover:border-white'
                    } transition-colors`}
                  >
                    {playing === track.id ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                  </button>
                  
                  <div>
                    <h4 className={`font-display font-bold text-lg ${playing === track.id ? 'text-neon-cyan' : 'text-white'}`}>
                      {track.title}
                    </h4>
                    <div className="flex gap-3 text-xs text-gray-500 uppercase tracking-wider">
                      <span>{track.genre}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full self-center"></span>
                      <span>{track.bpm} BPM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <span className="font-mono text-sm text-gray-400 hidden sm:block">{track.duration}</span>
                   <a href="#" className="text-gray-500 hover:text-white transition-colors">
                     <ExternalLink size={18} />
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;