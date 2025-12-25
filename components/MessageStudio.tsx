
import React, { useState } from 'react';

const MessageStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'massive'>('individual');

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2">
         <h1 className="text-3xl font-black text-white">Módulo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Mensajería Inteligente</span></h1>
         <p className="text-[#92a4c9] text-base">Gestiona conversaciones masivas o individuales con el respaldo de JEEMIA AI.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-background-surface rounded-2xl border border-background-highlight p-6 flex flex-col gap-6">
             <label className="block space-y-2">
                <span className="text-white text-sm font-bold">Destinatario</span>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-3 text-primary">person_check</span>
                  <input className="w-full bg-background-dark border border-background-highlight rounded-xl pl-12 pr-4 py-3 text-white text-lg font-bold focus:ring-2 focus:ring-primary outline-none" defaultValue="Juan Pérez" />
                </div>
             </label>

             <div className="grid grid-cols-2 gap-3">
                {['Base San Rafael', 'Base Genérica', 'Ofertas Locales', 'Clientes VIP'].map(p => (
                  <button key={p} className="p-4 bg-background-dark border border-background-highlight rounded-xl text-left hover:border-primary transition-all group">
                    <p className="text-white font-bold text-sm group-hover:text-primary transition-colors">{p}</p>
                    <p className="text-[10px] text-[#92a4c9] mt-1 font-medium">Plantilla rápida disponible</p>
                  </button>
                ))}
             </div>
          </div>

          <div className="bg-background-surface rounded-2xl border border-accent/30 p-1 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-primary"></div>
             <div className="p-5 space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-background-highlight">
                   <div className="flex items-center gap-3">
                     <div className="size-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <span className="material-symbols-outlined">smart_toy</span>
                     </div>
                     <div>
                        <h3 className="text-white font-bold text-sm">Chatbot Inteligente Activado</h3>
                        <p className="text-[9px] text-accent font-black uppercase tracking-widest">Modo Automático</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-2 bg-background-dark px-3 py-1 rounded-full border border-green-500/20">
                      <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-[10px] font-black text-green-500">LIVE</span>
                   </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                   <div className="bg-background-dark p-3 rounded-lg border border-background-highlight text-center">
                      <p className="text-[9px] text-[#92a4c9] font-black uppercase mb-1">Lead Detectado</p>
                      <p className="text-white text-xs font-bold">Juan Pérez</p>
                   </div>
                   <div className="bg-background-dark p-3 rounded-lg border border-background-highlight text-center">
                      <p className="text-[9px] text-[#92a4c9] font-black uppercase mb-1">Acción IA</p>
                      <p className="text-white text-xs font-bold">Agendar Cita</p>
                   </div>
                   <div className="bg-background-dark p-3 rounded-lg border border-background-highlight text-center">
                      <p className="text-[9px] text-[#92a4c9] font-black uppercase mb-1">Dato Requerido</p>
                      <p className="text-white text-xs font-bold">N° Teléfono</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-background-surface rounded-2xl border border-background-highlight p-6 space-y-4">
             <div className="flex justify-between">
                <h3 className="text-white font-bold text-xs uppercase tracking-widest">Mensaje Inicial (Disparador)</h3>
                <span className="text-[10px] text-[#92a4c9] font-bold">MODELO: GPT-4o-AUTO</span>
             </div>
             <textarea className="w-full bg-background-dark border-0 rounded-xl p-4 text-white text-sm focus:ring-1 focus:ring-primary h-32 resize-none" placeholder="Escribe tu mensaje..." defaultValue="Hola Juan, un gusto saludarte. Soy Adrián de Ventas de JEEMIA Motors..." />
             <div className="flex justify-end">
                <button className="px-10 py-3 rounded-xl bg-primary text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">Enviar y Activar Bot</button>
             </div>
          </div>
        </div>

        <div className="lg:col-span-5">
           <div className="bg-[#0b141a] rounded-[2.5rem] border-[10px] border-[#232f48] h-[700px] flex flex-col overflow-hidden shadow-2xl relative">
              <div className="bg-[#075e54] p-4 flex items-center gap-3 text-white">
                 <span className="material-symbols-outlined text-lg">arrow_back</span>
                 <div className="size-10 rounded-full bg-slate-300"></div>
                 <div className="flex flex-col flex-1">
                    <p className="text-sm font-bold">Juan Pérez</p>
                    <p className="text-[10px] text-green-100">en línea</p>
                 </div>
                 <div className="flex gap-4"><span className="material-symbols-outlined text-xl">videocam</span><span className="material-symbols-outlined text-xl">call</span></div>
              </div>

              <div className="flex-1 p-4 space-y-4 overflow-y-auto" style={{backgroundImage: 'url("https://w0.peakpx.com/wallpaper/580/650/wallpaper-wa-chat-background-dark-pattern.jpg")'}}>
                 <div className="self-center bg-[#1f2c34] px-3 py-1 rounded-lg text-[10px] text-[#8696a0] font-bold mx-auto w-fit">HOY</div>
                 <div className="max-w-[80%] bg-[#1f2c34] rounded-lg p-3 text-white text-sm relative">
                    Hola, vi la publicidad del nuevo SUV en Instagram. ¿Sigue disponible?
                    <span className="text-[9px] text-[#8696a0] block text-right mt-1">10:42</span>
                 </div>
                 <div className="max-w-[80%] bg-[#005c4b] rounded-lg p-3 text-white text-sm self-end ml-auto relative">
                    Hola Juan, un gusto saludarte. Soy Adrián de Ventas de JEEMIA Motors. Sí, tenemos stock disponible.
                    <span className="text-[9px] text-[#8696a0] block text-right mt-1">10:44 ✓✓</span>
                 </div>
                 <div className="max-w-[90%] bg-background-surface border border-accent/40 rounded-lg p-3 text-white text-sm self-end ml-auto animate-pulse">
                    <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                      <span className="material-symbols-outlined text-xs text-accent">smart_toy</span>
                      <span className="text-[9px] font-bold text-accent uppercase">Asistente JEEMIA</span>
                    </div>
                    Juan, para coordinar una entrevista necesito registrar tu contacto. ¿Podrías indicarme tu número?
                    <span className="text-[9px] text-[#8696a0] block text-right mt-1">10:44 ⏲</span>
                 </div>
              </div>

              <div className="bg-[#1f2c34] p-3 flex items-center gap-3 text-[#8696a0]">
                 <span className="material-symbols-outlined">add</span>
                 <div className="flex-1 bg-[#2a3942] h-10 rounded-full flex items-center px-4"><span className="text-sm">Escribe un mensaje...</span></div>
                 <span className="material-symbols-outlined">mic</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MessageStudio;
