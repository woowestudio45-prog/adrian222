import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [archivo, setArchivo] = useState<string>('');

  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco. Te escribo por el Plan 4 en San Rafael con adjudicación asegurada...",
    mza_base: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco Mendoza. Estamos lanzando el Plan 4 con adjudicación asegurada...",
    post_venta: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco. Como ya sos cliente, tenés una condición especial para renovar...",
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco. Te contacto para que no pierdas el valor de tu capital activo..."
  };

  const ejecutarEnvioDirecto = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    if (!lista.length || !msg) return alert("Cargá números y mensaje");

    lista.forEach((num, i) => {
      let fNum = num.startsWith('54') ? num : '549' + num;
      setTimeout(() => {
        // Enlace optimizado para saltar la pantalla de "Abrir aplicación"
        const url = `https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
      }, i * 4000); 
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      
      {/* SIDEBAR PREMIUM */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col gap-6 shadow-2xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-blue-500 italic tracking-tighter">JEEMIA</h1>
          <span className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">Pro Sales Edition</span>
        </div>
        
        <div className="flex flex-col gap-3">
          <button onClick={() => setTab('mensajeria')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'mensajeria' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">🚀</span>
            <span className="font-black text-xs tracking-widest uppercase">Mensajería</span>
          </button>
          <button onClick={() => setTab('voz')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'voz' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">🎙️</span>
            <span className="font-black text-xs tracking-widest uppercase">Voz Inteligente</span>
          </button>
          <button onClick={() => setTab('stats')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'stats' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">📈</span>
            <span className="font-black text-xs tracking-widest uppercase">Estadísticas</span>
          </button>
        </div>
      </nav>

      <main className="flex-1 p-12 bg-slate-950 overflow-y-auto">
        {tab === 'mensajeria' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase">Consola de Envío Directo</h2>
            
            <div className="bg-slate-900/40 p-10 rounded-[50px] border border-white/5 space-y-8 shadow-2xl">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] ml-4">1. Números (Ej: 2604105595)</label>
                <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-slate-950 border border-white/10 rounded-3xl p-6 text-blue-300 font-mono text-lg outline-none" placeholder="Pega los números aquí..." />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em] ml-4 block">2. Seleccioná Guion (Botones Gigantes)</label>
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => setMsg(plantillas.sr)} className="p-6 bg-orange-600 hover:bg-orange-500 rounded-2xl text-sm font-black uppercase italic shadow-lg transition-all">📍 San Rafael</button>
                  <button onClick={() => setMsg(plantillas.mza_base)} className="p-6 bg-purple-600 hover:bg-purple-500 rounded-2xl text-sm font-black uppercase italic shadow-lg transition-all">🍷 Mendoza Base</button>
                  <button onClick={() => setMsg(plantillas.post_venta)} className="p-6 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-black uppercase italic shadow-lg transition-all">👤 Post Venta</button>
                  <button onClick={() => setMsg(plantillas.capital)} className="p-6 bg-amber-600 hover:bg-amber-500 rounded-2xl text-sm font-black uppercase italic shadow-lg transition-all">💰 Mza Capital</button>
                </div>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-80 bg-slate-950 border border-white/10 rounded-[40px] p-8 text-white text-xl outline-none" placeholder="El mensaje aparecerá aquí..." />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black text-purple-500 uppercase tracking-[0.2em] ml-4">3. Archivo Adjunto</label>
                <div className="p-6 bg-slate-950 border-2 border-dashed border-slate-800 rounded-[30px] flex justify-between items-center">
                  <input type="file" onChange={(e) => setArchivo(e.target.files?.[0].name || '')} className="text-xs text-slate-500" />
                  <span className="text-[10px] font-black text-slate-400 uppercase">{archivo || 'Sin Archivo'}</span>
                </div>
              </div>

              <button onClick={ejecutarEnvioDirecto} className="w-full py-12 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[50px] text-5xl shadow-2xl transition-all uppercase italic tracking-tighter">
                ENVIAR AHORA
              </button>
            </div>
          </div>
        )}

        {tab === 'voz' && (
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-[70vh] text-center space-y-6">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-6xl animate-pulse">🎙️</div>
            <h2 className="text-4xl font-black italic uppercase">Voz Inteligente</h2>
            <p className="text-slate-500">Módulo listo para generar audios de venta.</p>
          </div>
        )}
      </main>
    </div>
  );
}
