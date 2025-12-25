
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const ImageStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('SUV azul medianoche en ciudad moderna');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const img = await geminiService.generateMarketingImage(prompt, '4:5');
      if (img) setGeneratedImage(img);
    } catch (e) {
      console.error(e);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 animate-fade-in">
      <div className="w-full lg:w-96 space-y-6 flex-shrink-0">
        <div className="bg-background-surface rounded-xl p-5 border border-background-highlight space-y-4">
           <div className="flex justify-between items-center">
             <label className="text-white text-sm font-bold">Prompt de IA</label>
             <button className="text-[10px] text-accent font-black uppercase tracking-widest">Mejorar Prompt</button>
           </div>
           <textarea 
             value={prompt}
             onChange={(e) => setPrompt(e.target.value)}
             className="w-full h-32 bg-background-dark border border-background-highlight rounded-lg p-3 text-white text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" 
             placeholder="Describe el vehículo, fondo e iluminación..."
           />
           
           <div className="space-y-4">
              <div>
                <label className="text-[10px] text-[#92a4c9] font-black uppercase mb-2 block">Estilo Visual</label>
                <div className="grid grid-cols-2 gap-2">
                   <button className="px-3 py-2 rounded-lg bg-primary/20 border border-primary text-white text-xs font-bold">Realista</button>
                   <button className="px-3 py-2 rounded-lg bg-background-dark border border-background-highlight text-[#92a4c9] text-xs font-bold">Estudio</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                 <div>
                    <label className="text-[10px] text-[#92a4c9] font-black uppercase mb-2 block">Formato</label>
                    <select className="w-full bg-background-dark border border-background-highlight rounded-lg p-2 text-white text-xs outline-none">
                      <option>1:1 Cuadrado</option>
                      <option selected>4:5 Vertical</option>
                    </select>
                 </div>
                 <div>
                    <label className="text-[10px] text-[#92a4c9] font-black uppercase mb-2 block">Iluminación</label>
                    <select className="w-full bg-background-dark border border-background-highlight rounded-lg p-2 text-white text-xs outline-none">
                      <option>Natural</option>
                      <option>Neón</option>
                    </select>
                 </div>
              </div>
           </div>

           <button 
             onClick={handleGenerate}
             disabled={isGenerating}
             className="w-full py-3 bg-gradient-to-r from-primary to-accent rounded-lg text-white font-black text-sm uppercase tracking-widest shadow-lg hover:brightness-110 transition-all disabled:opacity-50"
           >
             {isGenerating ? 'GENERANDO...' : 'GENERAR IMAGEN'}
           </button>
        </div>

        <div className="space-y-3">
          <h3 className="text-white font-bold text-xs uppercase tracking-widest">Historial Reciente</h3>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2].map(i => (
              <div key={i} className="aspect-[4/5] rounded-lg bg-background-surface border border-background-highlight overflow-hidden relative group">
                <img src={`https://picsum.photos/300/400?random=${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 bg-background-surface rounded-2xl border border-background-highlight overflow-hidden flex flex-col relative min-h-[600px]">
        <div className="h-14 border-b border-background-highlight flex items-center justify-between px-4 bg-background-surface/80 backdrop-blur-sm z-10">
           <div className="flex gap-1">
             <button className="size-8 rounded hover:bg-background-highlight flex items-center justify-center text-[#92a4c9] hover:text-white"><span className="material-symbols-outlined text-[18px]">undo</span></button>
             <button className="size-8 rounded hover:bg-background-highlight flex items-center justify-center text-[#92a4c9] hover:text-white"><span className="material-symbols-outlined text-[18px]">redo</span></button>
           </div>
           <div className="flex items-center gap-2 bg-background-dark rounded-lg p-1 border border-background-highlight">
             <button className="size-6 rounded hover:bg-background-highlight text-[#92a4c9] flex items-center justify-center"><span className="material-symbols-outlined text-[16px]">remove</span></button>
             <span className="text-[10px] font-bold text-white px-2">85%</span>
             <button className="size-6 rounded hover:bg-background-highlight text-[#92a4c9] flex items-center justify-center"><span className="material-symbols-outlined text-[16px]">add</span></button>
           </div>
        </div>

        <div className="flex-1 bg-[#0d1017] flex items-center justify-center relative overflow-hidden">
           {generatedImage ? (
             <img src={generatedImage} className="max-h-[80%] max-w-[80%] rounded shadow-2xl animate-fade-in" />
           ) : (
             <div className="flex flex-col items-center gap-4 text-[#92a4c9]">
                <span className="material-symbols-outlined text-6xl">image_search</span>
                <p className="text-xs font-bold uppercase tracking-widest">El resultado aparecerá aquí</p>
             </div>
           )}
        </div>

        <div className="h-20 border-t border-background-highlight bg-background-surface px-6 flex items-center justify-between shrink-0">
           <div className="flex items-center gap-4">
              <div className="size-10 rounded bg-background-dark border border-background-highlight flex items-center justify-center text-[#92a4c9]">
                 <span className="material-symbols-outlined">image</span>
              </div>
              <div>
                <p className="text-white text-xs font-bold">jeemia_gen_v2.png</p>
                <p className="text-[10px] text-[#92a4c9]">4:5 Vertical • 2.4 MB</p>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 rounded-lg border border-background-highlight text-white text-xs font-bold hover:bg-background-highlight transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">save</span> Guardar
              </button>
              <button className="px-6 py-2.5 rounded-lg bg-[#25d366] text-white text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-2 transition-all hover:scale-105">
                <span className="material-symbols-outlined text-[20px]">chat</span> Descargar para WhatsApp
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ImageStudio;
