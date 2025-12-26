import React, { useState } from 'react';
import { geminiService } from './services/geminiService';

const App = () => {
  const [activeTab, setActiveTab] = useState('mensajeria-ia');
  const [promptImagen, setPromptImagen] = useState('');
  const MI_WHATSAPP = "549261599995"; // Tu número configurado

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-sans">
      {/* SIDEBAR PROFESIONAL */}
      <nav className="w-72 bg-[#0f172a] border-r border-slate-800 p-6 flex flex-col">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black text-blue-500 tracking-tighter">JEEMIA PRO</h1>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">AI Business Suite</p>
        </div>
        
        <div className="space-y-2 flex-1">
          {[
            { id: 'mensajeria-ia', label: '1. Mensajería IA (Directo)', icon: '🚀' },
            { id: 'base-datos', label: '2. Mensajería (Base Datos)', icon: '📊' },
            { id: 'imagenes', label: '3. Nano Banana Pro (Imágenes)', icon: '🎨' },
            { id: 'audios', label: '4. Google AI (Texto a Voz)', icon: '🎙️' },
            { id: 'analisis', label: '5. Dashboard de Analítica', icon: '📈' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-4 rounded-xl transition-all flex items-center gap-3 ${
                activeTab === item.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </div>
        
        <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 mt-auto">
          <p className="text-[10px] text-slate-500 mb-1">CUENTA ACTIVA</p>
          <p className="text-sm font-bold text-blue-400">+{MI_WHATSAPP}</p>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-10 overflow-y-auto">
        
        {/* MODULO 1: MENSAJERÍA IA DIRECTA */}
        {activeTab === 'mensajeria-ia' && (
          <div className="max-w-4xl animate-in fade-in duration-500">
            <header className="mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">Mensajería Inteligente</h2>
              <p className="text-slate-400 text-lg">Envío masivo directo con optimización de frecuencia por IA.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="md:col-span-2 space-y-4">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <label className="block text-sm font-medium text-slate-400 mb-2">Base de Números (Separados por coma)</label>
                  <textarea className="w-full h-40 bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm font-mono text-blue-300" placeholder="Ej: 5491100000, 5491122222..."></textarea>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <label className="block text-sm font-medium text-slate-400 mb-2">Mensaje de Campaña</label>
                  <textarea className="w-full h-24 bg-slate-950 border border-slate-800 rounded-xl p-4" placeholder="Escribe el mensaje que enviará Ana..."></textarea>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-2xl">
                  <h3 className="font-bold text-blue-400 mb-4 flex items-center gap-2">🤖 Soporte Estratégico</h3>
                  <div className="space-y-3">
                    <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-sm font-bold transition-colors">Analizar Frecuencia</button>
                    <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-bold transition-colors">Sugerir Horarios</button>
                  </div>
                </div>
                <button className="w-full py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xl font-black shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-1">
                  🚀 INICIAR ENVÍO
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODULO 3: NANO BANANA PRO (IMÁGENES) */}
        {activeTab === 'imagenes' && (
          <div className="max-w-5xl space-y-8 animate-in slide-in-from-bottom duration-500">
            <h2 className="text-4xl font-bold text-white">Nano Banana Pro Image Gen</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6 bg-slate-900 p-6 rounded-3xl border border-slate-800">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-3">Prompt de Creación</label>
                  <textarea className="w-full h-32 bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm" placeholder="Un showroom de autos futurista con iluminación neon azul..."></textarea>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-3">Formato / Ratio</label>
                  <select className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg">
                    <option>1:1 (Post Instagram)</option>
                    <option>9:16 (Stories/TikTok)</option>
                    <option>16:9 (Presentación)</option>
                  </select>
                </div>
                <button className="w-full py-4 bg-purple-600 font-black rounded-xl hover:bg-purple-500 transition-all">GENERAR IMAGEN</button>
              </div>
              <div className="lg:col-span-2 bg-slate-950 border-2 border-dashed border-slate-800 rounded-3xl flex flex-col items-center justify-center p-4">
                 <div className="text-slate-600 text-center py-20">
                    <p className="text-5xl mb-4">🖼️</p>
                    <p>La imagen generada aparecerá aquí</p>
                 </div>
                 <div className="w-full flex justify-between gap-4 mt-auto">
                    <button className="flex-1 py-3 bg-slate-800 rounded-lg text-sm font-bold">Descargar JPG</button>
                    <button className="flex-1 py-3 bg-slate-800 rounded-lg text-sm font-bold">Descargar PNG</button>
                 </div>
              </div>
            </div>
          </div>
        )}

        {/* MODULO 5: DASHBOARD ANALITICA */}
        {activeTab === 'analisis' && (
          <div className="space-y-8 animate-in zoom-in duration-500">
             <div className="flex justify-between items-end">
               <h2 className="text-4xl font-bold text-white">Panel de Resultados Reales</h2>
               <button className="bg-blue-600/10 text-blue-400 border border-blue-500/50 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all">DESCARGAR INFORME MENSUAL (PDF)</button>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { label: 'CALIENTES', val: '42', color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30' },
                  { label: 'TIBIOS', val: '128', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
                  { label: 'FRÍOS', val: '850', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/30' },
                  { label: 'EFECTIVIDAD', val: '14%', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' }
                ].map(stat => (
                  <div key={stat.label} className={`${stat.bg} ${stat.border} border p-6 rounded-3xl`}>
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    <p className={`text-4xl font-black mt-2 ${stat.color}`}>{stat.val}</p>
                  </div>
                ))}
             </div>

             <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                  <h3 className="font-bold">Registro de Envíos Diarios</h3>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                    <span className="text-[10px] text-slate-500 uppercase">En Tiempo Real</span>
                  </div>
                </div>
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-slate-500 uppercase text-[10px] font-bold">
                    <tr>
                      <th className="p-4">Fecha</th>
                      <th className="p-4">Enviados</th>
                      <th className="p-4">Entregados</th>
                      <th className="p-4">Erróneos</th>
                      <th className="p-4">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    <tr className="hover:bg-slate-800/50 transition-colors">
                      <td className="p-4 font-mono">26/12/2025</td>
                      <td className="p-4 font-bold">1,200</td>
                      <td className="p-4 text-emerald-400">1,185</td>
                      <td className="p-4 text-red-400">15</td>
                      <td className="p-4"><span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-[10px] font-bold">COMPLETADO</span></td>
                    </tr>
                  </tbody>
                </table>
             </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
