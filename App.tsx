import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('mensajeria');
  const [mensaje, setMensaje] = useState('');
  
  const plantillas = {
    san_rafael: "Hola San Rafael! 👋 Te escribo de JEEMIA para comentarte que...",
    mendoza: "¡Hola Mendoza! 🍷 Tenemos una propuesta exclusiva para la zona...",
    clientes: "Estimado cliente de JEEMIA, te contacto para darte seguimiento..."
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-sans">
      {/* SIDEBAR ELITE */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col shadow-2xl">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-blue-500 tracking-tighter italic">JEEMIA PRO</h1>
          <div className="h-1 w-12 bg-blue-600 mt-2 rounded-full"></div>
        </div>
        
        <div className="space-y-4 flex-1">
          {[
            {id: 'mensajeria', n: 'CONSOLA DE ENVÍO', i: '🚀'},
            {id: 'base', n: 'BASE DE DATOS AI', i: '📊'},
            {id: 'arte', n: 'GENERADOR DE ARTE', i: '🎨'},
            {id: 'voz', n: 'VOZ INTELIGENTE', i: '🎙️'},
            {id: 'metricas', n: 'MÉTRICAS ÉLITE', i: '📈'}
          ].map(item => (
            <button key={item.id} onClick={() => setActiveTab(item.id)}
              className={`w-full text-left p-5 rounded-3xl transition-all flex items-center gap-4 border ${
                activeTab === item.id ? 'bg-blue-600 border-blue-400 shadow-lg shadow-blue-900/40 text-white' : 'hover:bg-white/5 border-transparent text-slate-500'
              }`}>
              <span className="text-2xl">{item.i}</span>
              <span className="text-xs font-black tracking-widest">{item.n}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* CUERPO PRINCIPAL */}
      <main className="flex-1 p-12 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950">
        
        {activeTab === 'mensajeria' && (
          <div className="max-w-6xl space-y-8">
            <h2 className="text-5xl font-black italic tracking-tighter text-white">Consola de Envío Directo</h2>
            
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-8 space-y-8">
                {/* NUMEROS */}
                <div className="bg-[#0f172a] p-8 rounded-[40px] border border-white/5 shadow-2xl">
                  <label className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-4 block">1. Lista de Destinos (Mendoza / Argentina)</label>
                  <textarea className="w-full h-32 bg-slate-950/50 border border-white/5 p-6 rounded-3xl text-blue-400 font-mono text-lg focus:border-blue-500 transition-all outline-none" placeholder="2615999995, 261XXXXXXX..." />
                </div>

                {/* MENSAJE GIGANTE */}
                <div className="bg-[#0f172a] p-8 rounded-[40px] border border-white/5 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <label className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">2. Redacción del Mensaje Profesional</label>
                    <div className="flex gap-2">
                      <button onClick={() => setMensaje(plantillas.san_rafael)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-[10px] font-bold transition-all">SAN RAFAEL</button>
                      <button onClick={() => setMensaje(plantillas.mendoza)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-[10px] font-bold transition-all">MENDOZA</button>
                      <button onClick={() => setMensaje(plantillas.clientes)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-[10px] font-bold transition-all">CLIENTES</button>
                    </div>
                  </div>
                  <textarea 
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    className="w-full h-96 bg-slate-950/50 border border-white/5 p-8 rounded-[32px] text-white text-xl focus:border-emerald-500 transition-all outline-none resize-none" 
                    placeholder="Escribe aquí tu propuesta comercial..." 
                  />
                </div>

                <button className="w-full py-10 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[45px] text-4xl shadow-2xl shadow-emerald-900/40 transition-all transform hover:scale-[1.01] uppercase tracking-tighter">
                  ENVIAR SOLO
                </button>
              </div>

              {/* BARRA LATERAL IA */}
              <div className="col-span-4 space-y-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[40px] shadow-xl text-white">
                  <h3 className="font-black text-xl mb-6 italic uppercase">Estrategia IA</h3>
                  <div className="space-y-4">
                    <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md transition-all">Optimizar para Mendoza</button>
                    <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md transition-all">Evitar Filtro Spam</button>
                    <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md transition-all">Mejorar Tono de Voz</button>
                  </div>
                </div>
                
                <div className="bg-[#0f172a] p-8 rounded-[40px] border border-white/5">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Adjunto Activo</p>
                   <div className="p-6 border-2 border-dashed border-slate-800 rounded-3xl text-center cursor-pointer hover:border-blue-500 transition-all">
                      <span className="text-3xl block mb-2">📄</span>
                      <span className="text-[10px] font-bold text-slate-400">CARGAR PDF COMERCIAL</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODULO ARTE / VOZ / BASE CON DISEÑO PRO */}
        {(activeTab === 'arte' || activeTab === 'voz' || activeTab === 'base') && (
          <div className="max-w-4xl mx-auto mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-[#0f172a] p-16 rounded-[60px] border border-white/5 shadow-2xl relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 p-12 opacity-5 text-[200px] font-black italic">
                {activeTab === 'arte' ? 'ART' : activeTab === 'voz' ? 'VOX' : 'DATA'}
              </div>
              <h2 className="text-5xl font-black mb-8 italic text-white uppercase tracking-tighter">
                {activeTab === 'arte' ? 'Generador de Imágenes' : activeTab === 'voz' ? 'Texto a Voz Humana' : 'Gestor de Base de Datos'}
              </h2>
              <textarea 
                className="w-full h-56 bg-slate-950 border border-white/5 p-10 rounded-[40px] text-2xl text-blue-100 mb-10 focus:border-blue-500 outline-none transition-all shadow-inner" 
                placeholder={activeTab === 'arte' ? "Describe la imagen publicitaria que deseas..." : activeTab === 'voz' ? "Escribe el guion para convertirlo en audio..." : "Pega aquí tu lista de clientes para depurar..."} 
              />
              <button className="px-20 py-8 bg-blue-600 hover:bg-blue-500 rounded-full font-black text-xl uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-900/40">
                PROCESAR CON INTELIGENCIA ARTIFICIAL
              </button>
            </div>
          </div>
        )}

        {/* METRICAS AVANZADAS */}
        {activeTab === 'metricas' && (
          <div className="space-y-12 animate-in fade-in duration-700">
            <div className="flex justify-between items-end">
              <h2 className="text-6xl font-black italic tracking-tighter text-white">Análisis de Impacto</h2>
              <button className="px-8 py-4 bg-white text-black font-black text-xs rounded-2xl uppercase hover:bg-blue-600 hover:text-white transition-all">Descargar Informe Global</button>
            </div>
            
            <div className="grid grid-cols-4 gap-8">
              {[{l:'INTERÉS CRÍTICO', v:'42', c:'text-red-500', s:'CALIENTES'}, {l:'POTENCIALES', v:'128', c:'text-orange-500', s:'TIBIOS'}, {l:'ALCANCE TOTAL', v:'850', c:'text-blue-500', s:'FRÍOS'}, {l:'EFECTIVIDAD', v:'14.2%', c:'text-emerald-500', s:'CONVERSIÓN'}].map(s => (
                <div key={s.l} className="bg-[#0f172a] p-10 rounded-[50px] border border-white/5
