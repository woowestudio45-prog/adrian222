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
                  <label className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-4 block">Mensaje Masivo</label>
                  <textarea className="w-full h-64 bg-slate-950 border border-white/5 p-6 rounded-3xl text-white text-lg mb-6" placeholder="Mensaje de campaña..." />
                  <div className="p-4 bg-blue-600/10 border border-blue-500/20 rounded-2xl mb-6 flex justify-between items-center">
                    <span className="text-xs font-bold italic">📂 Adjuntar Catálogo Pro</span>
                    <input type="file" className="text-[10px]" />
                  </div>
                  <button className="w-full py-6 bg-emerald-600 rounded-[30px] font-black text-2xl uppercase tracking-tighter">LANZAR CAMPAÑA MASIVA</button>
                </div>
              </div>
              <div className="col-span-4 bg-slate-900/50 p-8 rounded-[40px] border border-white/5 border-dashed">
                <h3 className="text-blue-400 font-black text-xs mb-6 uppercase tracking-widest">🛡️ Moderador de IA</h3>
                <div className="space-y-6 text-xs italic text-slate-400">
                  <div className="p-4 bg-slate-950 rounded-2xl border-l-4 border-emerald-500">
                    <p className="font-bold text-white mb-1">FRECUENCIA ÓPTIMA</p>
                    <p>IA sugiere: 1 envío cada 45 seg. para evitar bloqueos.</p>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-2xl border-l-4 border-blue-500">
                    <p className="font-bold text-white mb-1">HORARIO LOCAL</p>
                    <p>Tráfico alto en Mendoza. El envío es efectivo AHORA.</p>
                  </div>
                  <div className="p-4 bg-slate-950 rounded-2xl border-l-4 border-orange-500">
                    <p className="font-bold text-white mb-1">CALIDAD DE TEXTO</p>
                    <p>Análisis: 98% de legibilidad. Tono persuasivo detectado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. NANO BANANA PRO */}
        {tab === 'arte' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in slide-in-from-bottom-5">
            <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter text-center">Nano Banana Pro AI</h2>
            <div className="bg-[#0f172a] p-12 rounded-[60px] border border-white/5 shadow-2xl">
              <textarea className="w-full h-40 bg-slate-950 border border-white/5 p-8 rounded-[35px] text-xl mb-8 focus:border-purple-500 outline-none" placeholder="Describe tu imagen publicitaria perfecta..." />
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-slate-950 p-6 rounded-3xl border border-white/5">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-3">Aspect Ratio</p>
                  <div className="flex gap-2">
                    {['1:1', '16:9', '9:16'].map(r => (
                      <button key={r} onClick={() => setRatio(r)} className={`px-4 py-2 rounded-lg text-[10px] font-bold ${ratio === r ? 'bg-blue-600' : 'bg-slate-800'}`}>{r}</button>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-950 p-6 rounded-3xl border border-white/5">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-3">Referencia</p>
                  <input type="file" className="text-[10px]" />
                </div>
                <div className="bg-slate-950 p-6 rounded-3xl border border-white/5 flex items-center justify-center">
                   <p className="text-blue-500 font-black text-xs italic tracking-widest">GEMINI ENGINE ON</p>
                </div>
              </div>
              <button className="w-full py-8 bg-purple-600 hover:bg-purple-500 rounded-[35px] font-black text-2xl uppercase tracking-widest transition-all">GENERAR Y DESCARGAR</button>
            </div>
          </div>
        )}

        {/* 4. GOOGLE AI STUDIO (VOZ) */}
        {tab === 'voz' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in slide-in-from-bottom-5">
            <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter text-center">Google AI Voice Studio</h2>
            <div className="bg-[#0f172a] p-12 rounded-[60px] border border-white/5 shadow-2xl">
              <textarea className="w-full h-40 bg-slate-950 border border-white/5 p-8 rounded-[35px] text-xl mb-8 focus:border-blue-500 outline-none" placeholder="Escribe el texto para el audio publicitario..." />
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-slate-950 p-8 rounded-3xl border border-white/5">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Seleccionar Voz</p>
                  <div className="grid grid-cols-2 gap-3">
                    {['Fem 1', 'Fem 2', 'Masc 1', 'Masc 2'].map(v => (
                      <button key={v} onClick={() => setVoz(v)} className={`py-3 rounded-xl text-xs font-black ${voz === v ? 'bg-blue-600' : 'bg-slate-800'}`}>{v}</button>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-950 p-8 rounded-3xl border border-white/5">
                  <p className="text-[10px] font-black text-slate-500 uppercase mb-4">Tono / Estilo</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="py-3 bg-slate-800 rounded-xl text-[10px] font-bold uppercase hover:bg-blue-600">Institucional</button>
                    <button className="py-3 bg-slate-800 rounded-xl text-[10px] font-bold uppercase hover:bg-blue-600">Expresivo</button>
                    <button className="py-3 bg-slate-800 rounded-xl text-[10px] font-bold uppercase hover:bg-blue-600">Amigable</button>
                    <button className="py-3 bg-slate-800 rounded-xl text-[10px] font-bold uppercase hover:bg-blue-600">Urgente</button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 py-6 bg-slate-800 rounded-full font-black uppercase text-xs tracking-widest border border-blue-500/20">Escuchar Previa</button>
                <button className="flex-1 py-6 bg-blue-600 rounded-full font-black uppercase text-xs tracking-widest shadow-xl">Generar y Descargar</button>
              </div>
            </div>
          </div>
        )}

        {/* 5. DASHBOARD ELITE */}
        {tab === 'analisis' && (
          <div className="space-y-10 animate-in fade-in">
            <h2 className="text-6xl font-black italic tracking-tighter text-white">Impacto de Campaña</h2>
            <div className="grid grid-cols-4 gap-8">
              {[{l:'INTERÉS CRÍTICO', v:'42', c:'text-red-500'}, {l:'RETENCIALES', v:'128', c:'text-orange-500'}, {l:'ALCANCE TOTAL', v:'850', c:'text-blue-500'}, {l:'CONVERSIÓN', v:'14%', c:'text-emerald-500'}].map(s => (
                <div key={s.l} className="bg-[#0f172a] p-10 rounded-[50px] border border-white/5 shadow-xl text-center">
                  <p className="text-[10px] font-black text-slate-500 tracking-[0.3em] mb-4 uppercase">{s.l}</p>
                  <p className={`text-7xl font-black ${s.c} tracking-tighter`}>{s.v}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-[#0f172a] p-12 rounded-[60px] border border-white/5">
               <h3 className="text-2xl font-black mb-10 italic uppercase tracking-tighter">Rendimiento Mensual</h3>
               <div className="flex items-end gap-4 h-64 mb-10">
                  {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-600/20 rounded-t-2xl relative group cursor-pointer transition-all hover:bg-blue-600">
                       <div style={{height: `${h}%`}} className="w-full bg-blue-600 absolute bottom-0 rounded-t-2xl shadow-lg transition-all group-hover:bg-blue-400"></div>
                       <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-all">{h}%</span>
                    </div>
                  ))}
               </div>
               <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest px-4">
                  <span>Lun</span><span>Mar</span><span>Mie</span><span>Jue</span><span>Vie</span><span>Sab</span><span>Dom</span>
               </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default App;
