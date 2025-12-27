import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('envio');
  const [msg, setMsg] = useState('');

  const predefinidos = {
    sr: "📍 *SAN RAFAEL:* Hola! Te contacto desde JEEMIA para informarte sobre...",
    mz: "🍷 *MENDOZA:* ¡Hola! Estamos recorriendo la ciudad con nuevas propuestas...",
    cl: "👤 *CLIENTES:* Estimado cliente, un gusto saludarte. Tenemos novedades..."
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      {/* SIDEBAR PRO */}
      <nav className="w-72 bg-[#070e1e] border-r border-white/5 p-6 flex flex-col">
        <h1 className="text-3xl font-black text-blue-500 italic mb-10">JEEMIA PRO</h1>
        <div className="space-y-3 flex-1">
          <button onClick={() => setTab('envio')} className={`w-full p-4 rounded-2xl text-left text-xs font-bold transition-all ${tab === 'envio' ? 'bg-blue-600 shadow-lg' : 'hover:bg-white/5 text-slate-500'}`}>🚀 ENVIAR MENSAJES</button>
          <button onClick={() => setTab('base')} className={`w-full p-4 rounded-2xl text-left text-xs font-bold transition-all ${tab === 'base' ? 'bg-blue-600 shadow-lg' : 'hover:bg-white/5 text-slate-500'}`}>📊 BASE DE DATOS PRO</button>
          <button onClick={() => setTab('multimedia')} className={`w-full p-4 rounded-2xl text-left text-xs font-bold transition-all ${tab === 'multimedia' ? 'bg-blue-600 shadow-lg' : 'hover:bg-white/5 text-slate-500'}`}>🎨 ARTE E IMÁGENES</button>
          <button onClick={() => setTab('voz')} className={`w-full p-4 rounded-2xl text-left text-xs font-bold transition-all ${tab === 'voz' ? 'bg-blue-600 shadow-lg' : 'hover:bg-white/5 text-slate-500'}`}>🎙️ VOZ INTELIGENTE</button>
          <button onClick={() => setTab('metricas')} className={`w-full p-4 rounded-2xl text-left text-xs font-bold transition-all ${tab === 'metricas' ? 'bg-blue-600 shadow-lg' : 'hover:bg-white/5 text-slate-500'}`}>📈 ESTADÍSTICAS ELITE</button>
        </div>
      </nav>

      <main className="flex-1 p-10 bg-slate-950">
        {tab === 'envio' && (
          <div className="max-w-5xl animate-in fade-in duration-500">
            <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tighter">Consola de Envío</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-[30px] border border-white/5">
                <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3 block">1. Lista de Números</label>
                <textarea className="w-full h-32 bg-slate-950 border border-white/10 rounded-2xl p-4 text-blue-400 font-mono" placeholder="2615999995, 261XXXXXXX..." />
              </div>

              <div className="bg-slate-900 p-6 rounded-[30px] border border-white/5">
                <div className="flex justify-between mb-4">
                  <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">2. Escribir Mensaje (Campo Gigante)</label>
                  <div className="flex gap-2">
                    <button onClick={() => setMsg(predefinidos.sr)} className="px-3 py-1 bg-blue-600 rounded-lg text-[9px] font-bold uppercase">San Rafael</button>
                    <button onClick={() => setMsg(predefinidos.mz)} className="px-3 py-1 bg-blue-600 rounded-lg text-[9px] font-bold uppercase">Mendoza</button>
                    <button onClick={() => setMsg(predefinidos.cl)} className="px-3 py-1 bg-blue-600 rounded-lg text-[9px] font-bold uppercase">Clientes</button>
                  </div>
                </div>
                <textarea 
                  value={msg} 
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full h-80 bg-slate-950 border border-white/10 rounded-2xl p-6 text-lg text-white resize-none outline-none focus:border-emerald-500 transition-all" 
                  placeholder="Redacta tu mensaje comercial aquí..." 
                />
              </div>

              <button className="w-full py-8 bg-emerald-600 hover:bg-emerald-500 rounded-[30px] text-3xl font-black uppercase tracking-tighter shadow-2xl transition-all active:scale-95">
                ENVIAR SOLO
              </button>
            </div>
          </div>
        )}

        {/* MODULOS PRO ACTUALIZADOS */}
        {(tab === 'base' || tab === 'multimedia' || tab === 'voz') && (
          <div className="max-w-4xl mx-auto text-center space-y-8 mt-10">
            <div className="bg-slate-900 p-16 rounded-[50px] border border-white/5 shadow-2xl">
              <h3 className="text-4xl font-black italic mb-6">Módulo {tab.toUpperCase()} PRO</h3>
              <textarea className="w-full h-48 bg-slate-950 border border-white/10 rounded-3xl p-6 text-xl mb-6" placeholder="Ingrese los datos para procesar con IA..." />
              <button className="w-full py-5 bg-blue-600 rounded-3xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all">Ejecutar Proceso Inteligente</button>
            </div>
          </div>
        )}

        {tab === 'metricas' && (
          <div className="space-y-8">
            <h2 className="text-4xl font-black italic italic">Estadísticas de Impacto</h2>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-slate-900 p-8 rounded-[40px] border-l-4 border-red-500">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Calientes</p>
                <p className="text-5xl font-black text-red-500">42</p>
              </div>
              <div className="bg-slate-900 p-8 rounded-[40px] border-l-4 border-orange-500">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Tibios</p>
                <p className="text-5xl font-black text-orange-500">128</p>
              </div>
              <div className="bg-slate-900 p-8 rounded-[40px] border-l-4 border-blue-500">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Fríos</p>
                <p className="text-5xl font-black text-blue-500">850</p>
              </div>
              <div className="bg-slate-900 p-8 rounded-[40px] border-l-4 border-emerald-500">
                <p className="text-[10px] font-bold text-slate-500 uppercase">Efectividad</p>
                <p className="text-5xl font-black text-emerald-500">14%</p>
              </div>
            </div>
            <div className="bg-slate-900 p-8 rounded-[40px] border border-white/5">
              <h4 className="font-black mb-4 uppercase text-xs text-blue-400">Registro de Envíos Diarios</h4>
              <div className="bg-slate-950 p-6 rounded-2xl flex justify-between items-center border border-white/5">
                <span className="font-bold">26/12/2025</span>
                <span className="text-emerald-500 font-black">1,185 ENTREGADOS</span>
                <span className="text-red-500 font-black">15 ERRORES</span>
                <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-[9px] font-black">COMPLETADO</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
