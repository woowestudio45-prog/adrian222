
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const AudioStudio: React.FC = () => {
  const [script, setScript] = useState('Hola {Nombre}, soy Ana de Jeemia Motors. Vi que mostraste interés en el nuevo {Modelo}...');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateScript = async () => {
    setIsGenerating(true);
    try {
      const result = await geminiService.generateSalesScript('SUV Premium', 'Empático');
      if (result) setScript(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
      <div className="lg:col-span-7 space-y-6">
        <div className="bg-background-surface rounded-xl p-6 border border-background-highlight">
          <label className="block text-white text-sm font-bold mb-3">Campaña Destino</label>
          <select className="w-full bg-background-dark border border-background-highlight rounded-lg py-3 px-4 text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none">
            <option>Ventas Agosto - SUV Premium</option>
            <option>Leads Inactivos 2023</option>
          </select>
        </div>

        <div className="bg-background-surface rounded-xl p-6 border border-background-highlight flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <label className="text-white text-sm font-bold">Guion de Ventas</label>
            <button 
              onClick={handleGenerateScript}
              disabled={isGenerating}
              className="text-[10px] font-black text-accent uppercase tracking-widest hover:underline flex items-center gap-1"
            >
              {isGenerating ? 'Generando...' : 'IA SUGGESTIONS ACTIVE'}
            </button>
          </div>
          <textarea 
            value={script}
            onChange={(e) => setScript(e.target.value)}
            className="w-full min-h-[250px] bg-background-dark border border-background-highlight rounded-lg p-4 text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none leading-relaxed" 
          />
          <div className="flex flex-wrap gap-2">
            {['{Nombre}', '{Modelo}', '{Precio}'].map(v => (
              <button key={v} className="px-3 py-1.5 rounded-full bg-background-dark border border-background-highlight text-[10px] font-bold text-white hover:border-primary transition-colors">
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-background-surface rounded-xl p-6 border border-background-highlight space-y-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-accent">tune</span>
            <h3 className="text-white font-bold text-sm">Modulación de Voz</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] text-[#92a4c9] font-black uppercase"><span>Corporativo</span><span>Empático</span></div>
              <input type="range" className="w-full" defaultValue="70" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] text-[#92a4c9] font-black uppercase"><span>Lento</span><span>Rápido</span></div>
              <input type="range" className="w-full" defaultValue="45" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-gradient-to-b from-background-surface to-background-dark rounded-2xl p-8 border border-background-highlight shadow-2xl relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
          
          <div className="flex items-center justify-center h-24 gap-1.5 mb-8">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`w-1 rounded-full bg-primary/40 ${i % 3 === 0 ? 'bar-anim h-16' : 'h-8'}`}></div>
            ))}
          </div>

          <div className="text-4xl font-light text-white mb-2">00:14</div>
          <div className="text-[10px] text-[#92a4c9] font-bold uppercase tracking-widest mb-10">Duración Estimada</div>

          <div className="flex items-center gap-8 mb-10">
            <button className="text-[#92a4c9] hover:text-white"><span className="material-symbols-outlined text-3xl">skip_previous</span></button>
            <button className="size-16 rounded-full bg-white text-primary flex items-center justify-center hover:scale-105 transition shadow-2xl">
              <span className="material-symbols-outlined text-4xl filled">play_arrow</span>
            </button>
            <button className="text-[#92a4c9] hover:text-white"><span className="material-symbols-outlined text-3xl">skip_next</span></button>
          </div>

          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-black text-sm uppercase tracking-widest shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">auto_awesome</span>
            Generar Audio
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button className="p-4 rounded-xl bg-background-surface border border-background-highlight hover:border-primary transition-colors flex flex-col items-center gap-2">
             <span className="material-symbols-outlined text-[#92a4c9]">save</span>
             <span className="text-xs font-bold text-white uppercase">Guardar</span>
           </button>
           <button className="p-4 rounded-xl bg-background-surface border border-background-highlight hover:border-accent transition-colors flex flex-col items-center gap-2">
             <span className="material-symbols-outlined text-[#92a4c9]">download</span>
             <span className="text-xs font-bold text-white uppercase">Descargar</span>
           </button>
        </div>
      </div>
    </div>
  );
};

export default AudioStudio;
