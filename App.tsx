import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [status, setStatus] = useState('');
  const [promptIA, setPromptIA] = useState('');
  const [ratio, setRatio] = useState('1:1');
  const [voz, setVoz] = useState('Fem 1');

  const plantillas = {
    sr: "📍 *SAN RAFAEL:* Hola! Te contacto desde JEEMIA para informarte sobre...",
    mz: "🍷 *MENDOZA:* ¡Hola! Estamos recorriendo la ciudad con nuevas propuestas...",
    cl: "👤 *CLIENTES:* Estimado cliente, un gusto saludarte. Tenemos novedades..."
  };

  const ejecutarEnvio = () => {
    if (!numeros || !msg) {
      alert("⚠️ Por favor ingresa números y un mensaje");
      return;
    }
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    setStatus('🚀 Iniciando secuencia de envío...');
    
    lista.forEach((num, i) => {
      let limpio = num;
      if (!limpio.startsWith('549')) limpio = '549' + limpio;
      
      setTimeout(() => {
        const url = `https://web.whatsapp.com/send?phone=${limpio}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        if (i === lista.length - 1) setStatus('✅ Ciclo de apertura completado');
      }, i * 4000);
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-500/30">
      
      {/* SIDEBAR PRO */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col shadow-2xl">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-blue-500 tracking-tighter italic">JEEMIA PRO</h1>
          <p className="text-[10px] text-slate-500 tracking-[0.3em] uppercase mt-1 font-bold italic">Sales Intelligence</p>
        </div>
        
        <div className="space-y-3 flex-1">
          {[
            {id: 'mensajeria', n: 'CONSOLA DE ENVÍO', i: '🚀'},
            {id: 'masivo', n: 'MASIVO + MODERADOR', i: '📊'},
            {id: 'arte', n: 'NANO BANANA PRO', i: '🎨'},
            {id: 'voz', n: 'GOOGLE AI STUDIO', i: '🎙️'},
            {id: 'analisis', n: 'DASHBOARD ÉLITE', i: '📈'}
          ].map(item => (
            <button key={item.id} onClick={() => setTab(item.id)}
              className={`w-full text-left p-5 rounded-[28px] transition-all flex items-center gap-4 border ${
                tab === item.id ? 'bg-blue-600 border-blue-400 shadow-xl text-white' : 'hover:bg-white/5 border-transparent text-slate-500'
              }`}>
              <span className="text-2xl">{item.i}</span>
              <span className="text-xs font-black tracking-widest">{item.n}</span>
            </button>
          ))}
        </div>
        <div className="mt-auto p-4 bg-slate-900/50 rounded-2xl border border-white/5 text-center">
          <p className="text-[9px] text-blue-400 font-black tracking-[0.2em] uppercase">Mendoza Business Center</p>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-12 overflow-y-auto bg-slate-950">
        
        {/* PESTAÑA 1: ENVÍO DIRECTO */}
        {tab === 'mensajeria' && (
          <div className="max-w-5xl space-y-8 animate-in fade-in duration-500">
            <h2 className="text-5xl font-black italic tracking-tighter">Consola de Envío</h2>
            
            <div className="bg-[#0f172a] p-10 rounded-[50px] border border-white/5 shadow-2xl space-y-8">
              {/* CAMPO DE NÚMEROS */}
              <div className="bg-slate-950/50 p-6 rounded-[35px] border border-white/5">
                <label className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-4 block italic">1. Destinatarios (Separados por coma)</label>
                <textarea 
                  value={numeros} onChange={(e) => setNumeros(e.target.value)}
                  className="w-full h-24 bg-transparent text-blue-300 font-mono text-lg outline-none" 
                  placeholder="Ej: 2615999995, 261000111..." 
                />
              </div>

              {/* CAMPO DE MENSAJE GIGANTE */}
              <div className="bg-slate-950/50 p-6 rounded-[35px] border border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest italic">2. Redacción Profesional del Mensaje</label>
                  <div className="flex gap-2">
                    <button onClick={() => setMsg(plantillas.sr)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-[9px] font-black uppercase transition-all">San Rafael</button>
                    <button onClick={() => setMsg(plantillas.mz)} className="px-4 py-2 bg-slate-800 hover:bg-blue-600 rounded-xl text-[9px] font-black uppercase transition-all">Mendoza</button>
                    <button onClick={() => setMsg(plantillas.cl)}
