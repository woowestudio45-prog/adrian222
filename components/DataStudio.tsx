
import React, { useState } from 'react';

const DataStudio: React.FC = () => {
  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
           <h1 className="text-3xl font-black text-white">Carga y Análisis de Datos</h1>
           <p className="text-[#92a4c9] text-base mt-1">Optimiza tus listas de prospectos con análisis predictivo.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-5 py-2.5 rounded-xl border border-background-highlight text-white text-sm font-bold flex items-center gap-2 hover:bg-background-highlight transition-colors">
              <span className="material-symbols-outlined text-[20px]">history</span> Historial
           </button>
           <button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/20 flex items-center gap-2 hover:scale-105 transition-all">
              <span className="material-symbols-outlined text-[20px]">rocket_launch</span> Iniciar Campaña
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
         <div className="lg:col-span-4 bg-background-surface rounded-2xl border border-background-highlight p-6 flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
               <span className="material-symbols-outlined text-primary">cloud_upload</span> Carga de Archivo
            </h3>
            <div className="flex-1 border-2 border-dashed border-background-highlight rounded-2xl bg-background-dark/50 flex flex-col items-center justify-center p-8 text-center group cursor-pointer hover:border-primary transition-all">
               <div className="size-16 rounded-full bg-background-highlight flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl text-[#92a4c9]">upload_file</span>
               </div>
               <p className="text-white font-bold text-sm mb-1">Arrastra tu archivo aquí</p>
               <p className="text-[#92a4c9] text-[10px] font-bold uppercase tracking-widest">Excel (.xlsx) o Word (.docx)</p>
               <button className="mt-6 px-6 py-2 bg-background-highlight rounded-lg text-white text-xs font-bold uppercase tracking-widest">Seleccionar Archivo</button>
            </div>
            
            <div className="space-y-4">
               <div className="flex justify-between items-center"><span className="text-[10px] font-bold text-[#92a4c9] uppercase tracking-widest">Procesando Base</span><span className="text-accent font-black text-xs">85%</span></div>
               <div className="h-2 w-full bg-background-highlight rounded-full overflow-hidden"><div className="h-full w-[85%] bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div></div>
               <div className="p-3 bg-background-dark rounded-xl border border-background-highlight text-[10px] font-medium text-[#92a4c9] space-y-2">
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-500">check_circle</span> Nombre del Prospecto</div>
                  <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px] text-green-500">check_circle</span> Teléfono (WhatsApp)</div>
                  <div className="flex items-center gap-2 animate-pulse"><span className="material-symbols-outlined text-[14px] text-primary">radio_button_checked</span> Reconociendo columnas...</div>
               </div>
            </div>
         </div>

         <div className="lg:col-span-8 bg-background-surface rounded-2xl border border-background-highlight p-6 space-y-6">
            <div className="flex items-center gap-3">
               <div className="size-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent"><span className="material-symbols-outlined">psychology</span></div>
               <h3 className="text-white font-bold text-lg">Recomendaciones Estratégicas IA</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {[
                 { label: 'CANTIDAD ÓPTIMA', val: '120', sub: 'mensajes/día', icon: 'mark_chat_unread', color: 'primary' },
                 { label: 'HORARIOS SUGERIDOS', val: '10:00 - 13:00', sub: 'Nivel: ALTO', icon: 'schedule_send', color: 'accent' },
                 { label: 'FLUJO IDEAL', val: 'Reactivación 2024', sub: 'Enfoque leads fríos', icon: 'alt_route', color: 'blue-400' }
               ].map((rec, i) => (
                 <div key={i} className="bg-background-dark p-5 rounded-xl border border-background-highlight relative group overflow-hidden">
                    <span className={`material-symbols-outlined absolute top-2 right-2 text-4xl text-${rec.color} opacity-10`}>{rec.icon}</span>
                    <p className="text-[9px] font-black text-[#92a4c9] uppercase tracking-widest mb-3">{rec.label}</p>
                    <p className="text-xl font-black text-white">{rec.val}</p>
                    <p className="text-[10px] text-[#92a4c9] font-bold mt-1 uppercase">{rec.sub}</p>
                 </div>
               ))}
            </div>
            <div className="bg-primary/5 p-5 rounded-xl border border-primary/20 flex flex-col sm:flex-row justify-between items-center gap-4">
               <div className="flex gap-4">
                 <span className="material-symbols-outlined text-primary">auto_awesome</span>
                 <div><p className="text-sm font-bold text-white">¿Aplicar configuración inteligente?</p><p className="text-xs text-[#92a4c9]">La IA ajustará automáticamente los parámetros.</p></div>
               </div>
               <div className="flex gap-2 w-full sm:w-auto">
                 <button className="flex-1 px-4 py-2 bg-background-highlight rounded-lg text-white text-[10px] font-black uppercase">Ajustar Manual</button>
                 <button className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-lg text-white text-[10px] font-black uppercase shadow-lg">Aceptar</button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DataStudio;
