import React, { useState } from 'react';

const App = () => {
  const [tab, setTab] = useState('mensajeria');
  const [msg, setMsg] = useState('');
  const [ratio, setRatio] = useState('1:1');
  const [voz, setVoz] = useState('Fem 1');

  const plantillas = {
    sr: "Hola San Rafael! 👋 Propuesta de JEEMIA para tu zona...",
    mz: "¡Hola Mendoza! 🍷 Tenemos una oferta exclusiva...",
    cl: "Estimado cliente, un gusto saludarte nuevamente..."
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* SIDEBAR ELITE */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col shadow-2xl">
        <h1 className="text-4xl font-black text-blue-500 tracking-tighter italic mb-12">JEEMIA PRO</h1>
        <div className="space-y-4 flex-1">
          {[
            {id: 'mensajeria', n: 'ENVIAR MENSAJES', i: '🚀'},
            {id: 'masivo', n: 'ENVÍO MASIVO + IA', i: '📊'},
            {id: 'arte', n: 'NANO BANANA PRO', i: '🎨'},
            {id: 'voz', n: 'GOOGLE AI STUDIO', i: '🎙️'},
            {id: 'analisis', n: 'DASHBOARD ÉLITE', i: '📈'}
          ].map(item => (
            <button key={item.id} onClick={() => setTab(item.id)}
              className={`w-full text-left p-5 rounded-3xl transition-all flex items-center gap-4 border ${
                tab === item.id ? 'bg-blue-600 border-blue-400 shadow-xl text-white' : 'hover:bg-white/5 border-transparent text-slate-500'
              }`}>
              <span className="text-2xl">{item.i}</span>
              <span className="text-xs font-black tracking-widest">{item.n}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 p-12 overflow-y-auto">
        
        {/* 1. ENVIAR SOLO + ADJUNTOS */}
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
            <h2 className="text-5xl font-black italic tracking-tighter text-white">Consola de Envío Directo</h2>
            <div className="bg-[#0f172a] p-8 rounded-[40px] border border-white/5 shadow-2xl space-y-6">
              <div className="flex gap-2">
                <button onClick={() => setMsg(plantillas.sr)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-[10px] font-bold transition-all uppercase">San Rafael</button>
                <button onClick={() => setMsg(plantillas.mz)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-[10px] font-bold transition-all uppercase">Mendoza</button>
                <button onClick={() => setMsg(plantillas.cl)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-[10px] font-bold transition-all uppercase">Clientes</button>
              </div>
              <textarea 
                value={msg} onChange={(e) => setMsg(e.target.value)}
                className="w-full h-80 bg-slate-950 border border-white/5 p-8 rounded-[32px] text-white text-xl outline-none focus:border-blue-500 transition-all" 
                placeholder="Redacte su mensaje aquí..." 
              />
              <div className="p-6 border-2 border-dashed border-slate-800 rounded-3xl flex items-center justify-between bg-slate-950/30">
                <p className="text-sm font-bold text-slate-400 italic">📎 ADJUNTAR ARCHIVOS (FOTOS, PDF, VIDEOS)</p>
                <input type="file" className="text-xs text-slate-500 file:bg-blue-600 file:border-0 file:rounded-full file:px-4 file:py-2 file:text-white file:font-bold" />
              </div>
              <button className="w-full py-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[40px] text-4xl shadow-2xl transition-all active:scale-95 uppercase tracking-tighter">
                ENVIAR
              </button>
            </div>
          </div>
        )}

        {/* 2. MASIVO + MODERADOR IA */}
        {tab === 'masivo' && (
          <div className="max-w-6xl space-y-8">
            <h2 className="text-5xl font-black italic tracking-tighter text-white">Envío Masivo Inteligente</h2>
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8 space-y-6">
                <div className="bg-[#0f172a] p-8 rounded-[40px] border border-white/5 shadow-2xl">
                  <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 block">Base de Números</label>
                  <textarea className="w-full h-32 bg-slate-950 border border-white/5 p-4 rounded-2xl text-blue-400 font-mono mb-6" placeholder="2615999995, 261XXXXXXX..." />
                  <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4 block">Mensaje
