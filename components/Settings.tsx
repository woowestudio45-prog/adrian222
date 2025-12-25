
import React from 'react';

const Settings: React.FC = () => {
  const techStack = [
    { name: 'Frontend Core', tech: 'React 18 + TypeScript', icon: 'code', status: 'Optimal' },
    { name: 'AI Engine', tech: 'Google Gemini 3 Pro/Flash', icon: 'psychology', status: 'Active' },
    { name: 'Neural Voice', tech: 'Gemini TTS Engine', icon: 'record_voice_over', status: 'Online' },
    { name: 'Image Processing', tech: 'Gemini 2.5 Flash Image', icon: 'auto_fix_high', status: 'Active' },
    { name: 'Database', tech: 'PostgreSQL + Vector DB', icon: 'database', status: 'Synced' },
    { name: 'Infrastructure', tech: 'Vercel Edge Network', icon: 'cloud', status: 'Deployed' },
  ];

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto space-y-10 animate-fade-in">
      <div className="flex flex-col gap-2">
         <h1 className="text-3xl font-black text-white">Configuración del <span className="text-primary">Sistema</span></h1>
         <p className="text-[#92a4c9] text-base">Administra la conexión con el dominio jeemia.online y los servicios de IA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Domain Section */}
        <div className="bg-background-surface rounded-2xl border border-background-highlight p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-primary">language</span>
            <h3 className="text-white font-bold text-lg">Dominio y Hosting</h3>
          </div>
          <div className="p-4 bg-background-dark rounded-xl border border-primary/20 flex justify-between items-center">
             <div>
                <p className="text-white font-bold text-sm">jeemia.online</p>
                <p className="text-[10px] text-green-500 font-bold uppercase tracking-widest">SSL Certificado • Activo</p>
             </div>
             <button className="text-primary text-[10px] font-black hover:underline">RE-CONFIGURAR</button>
          </div>
          <p className="text-[#92a4c9] text-xs">Tu aplicación está lista para ser desplegada en Vercel apuntando a este dominio vía CNAME o registros A.</p>
        </div>

        {/* API Status Section */}
        <div className="bg-background-surface rounded-2xl border border-background-highlight p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-accent">api</span>
            <h3 className="text-white font-bold text-lg">Estado de API Gemini</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm text-[#92a4c9]">Uso de cuota mensual</p>
            <p className="text-sm text-white font-bold">12%</p>
          </div>
          <div className="h-2 w-full bg-background-dark rounded-full overflow-hidden">
            <div className="h-full w-[12%] bg-accent"></div>
          </div>
          <div className="pt-2">
             <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-black rounded-full border border-green-500/20">SISTEMA OPERATIVO</span>
          </div>
        </div>
      </div>

      {/* Tech Stack Visualizer */}
      <div className="space-y-6">
        <h3 className="text-white font-bold text-xl">Arquitectura de Aplicación</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           {techStack.map((item, i) => (
             <div key={i} className="p-5 bg-background-surface rounded-2xl border border-background-highlight hover:border-primary/50 transition-all group">
                <div className="size-12 rounded-xl bg-background-dark flex items-center justify-center text-[#92a4c9] group-hover:text-primary transition-colors mb-4">
                   <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <p className="text-[10px] font-black text-[#92a4c9] uppercase tracking-widest mb-1">{item.name}</p>
                <p className="text-white font-bold text-sm">{item.tech}</p>
                <div className="mt-4 flex items-center gap-2">
                   <span className="size-2 bg-green-500 rounded-full"></span>
                   <span className="text-[9px] font-bold text-green-500 uppercase">{item.status}</span>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Deploy Actions */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center gap-6">
         <div className="space-y-2">
            <h2 className="text-2xl font-black text-white">¿Listo para subir online?</h2>
            <p className="text-[#92a4c9] text-sm max-w-md">Puedes desplegar esta aplicación gratis usando Vercel. Solo necesitas conectar tu repositorio de GitHub.</p>
         </div>
         <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-black font-black text-xs rounded-xl uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-white/10">Desplegar en Vercel</button>
            <button className="px-8 py-3 bg-background-dark text-white font-black text-xs rounded-xl border border-white/10 uppercase tracking-widest hover:bg-background-highlight transition-all">Ver Documentación</button>
         </div>
      </div>
    </div>
  );
};

export default Settings;
