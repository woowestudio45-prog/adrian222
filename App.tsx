import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [archivo, setArchivo] = useState<string>('');

  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada para San Rafael...",
    mza_base: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada...",
    post_venta: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, lanzamos una condición especial...",
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales en Genco Mendoza.\nTe contacto porque tenés capital activo en Genco..."
  };

  const ejecutarEnvio = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    lista.forEach((num, i) => {
      let fNum = num.startsWith('54') ? num : '549' + num;
      setTimeout(() => {
        // Enlace optimizado para abrir chat directo en WhatsApp Web
        window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 4000);
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      
      {/* SIDEBAR GRANDE Y MEJORADA */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col gap-6 shadow-2xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-blue-500 italic tracking-tighter">JEEMIA</h1>
          <span className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">Pro Sales Edition</span>
        </div>
        
        <div className="flex flex-col gap-3">
          <button onClick={() => setTab('mensajeria')} className={`group flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'mensajeria' ? 'bg-blue-600 shadow-lg shadow-blue-900/40' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">🚀</span>
            <span className="font-black text-xs tracking-widest uppercase">Mensajería</span>
          </button>
          
          <button onClick={() => setTab('voz')} className={`group flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'voz' ? 'bg-blue-600 shadow-lg shadow-blue-900/40' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">🎙️</span>
            <span className="font-black text-xs tracking-widest uppercase">Voz Inteligente</span>
          </button>

          <button onClick={() => setTab('ia')} className={`group flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'ia' ? 'bg-blue-600 shadow-lg shadow-blue-900/40' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">🎨</span>
            <span className="font-black text-xs tracking-widest uppercase">Nano Banana</span>
          </button>

          <button onClick={() => setTab('stats')} className={`group flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'stats' ? 'bg-blue-600 shadow-lg shadow-blue-900/40' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">📈</span>
            <span className="font-black text-xs tracking-widest uppercase">Estadísticas</span>
          </button>
        </div>

        <div className="mt-auto p-6 bg-blue-500/10 border border-blue-500/20 rounded-[30px] text-center">
          <p className="text-[10px] font-black text-blue-400 uppercase italic">Asesor: Adrián Genco</p>
        </div>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-12 bg-slate-950 overflow-y-auto">
        {tab === 'mensajeria' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase">Consola de Envío</h2>
            
            <div className="bg-slate-900/40 p-10 rounded-[50px] border border-white/5 space-y-8 shadow-2xl backdrop-blur-xl">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] ml-4">1. Base de Datos (Números)</label>
                <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-28 bg-slate-950 border border-white/10 rounded-3xl p-6 text-blue-300 font-mono text-lg outline-none focus:border-blue-500/50 transition-all shadow-inner" placeholder="2604105595, 2615999995..." />
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <button onClick={() => setMsg(plantillas.sr)} className="px-6 py-3 bg-slate-800 rounded-xl text-[10px] font-black hover:bg-blue-600 transition-all uppercase tracking-tighter border border-white/5 shadow-md">📍 San Rafael</button>
                  <button onClick={() => setMsg(plantillas.mza_base)} className="px-6 py-3 bg-slate-800 rounded-xl text-[10px] font-black hover:bg-blue-600 transition-all uppercase tracking-tighter border border-white/5 shadow-md">🍷 Mendoza Base</button>
                  <button onClick={() => setMsg(plantillas.post_venta)} className="px-6 py-3 bg-slate-800 rounded-xl text-[10px] font-black hover:bg-blue-600 transition-all uppercase tracking-tighter border border-white/5 shadow-md">👥 Post Venta</button>
                  <button onClick={() => setMsg(plantillas.capital)} className="px-6 py-3 bg-slate-800 rounded-xl text-[10px] font-black hover:bg-blue-600 transition-all uppercase tracking-tighter border border-white/5 shadow-md">💰 Mza Capital</button>
                </div>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-80 bg-slate-950 border border-white/10 rounded-[40px] p-8 text-white text-xl outline-none leading-relaxed shadow-inner" placeholder="Escribe o selecciona un guion..." />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black text-purple-500 uppercase tracking-[0.2em] ml-4">2. Adjuntar Catálogo Jeep/RAM</label>
                <div className="p-8 bg-slate-950 border-2 border-dashed border-slate-800 rounded-[35px] flex items-center justify-between hover:border-purple-500/50 transition-all cursor-pointer group">
                  <input type="file" onChange={(e) => setArchivo(e.target.files?.[0].name || '')} className="text-sm text-slate-500 cursor-pointer" />
                  <span className="text-[10px] font-black text-slate-400 uppercase bg-slate-900 px-4 py-2 rounded-full border border-white/5">{archivo || 'Sin Archivo'}</span>
                </div>
              </div>

              <button onClick={ejecutarEnvio} className="w-full py-10 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[45px] text-4xl shadow-2xl shadow-emerald-900/20 transition-all active:scale-95 uppercase italic tracking-tighter">
                Lanzar Campaña Directa
              </button>
            </div>
          </div>
        )}

        {tab === 'voz' && (
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-[70vh] text-center space-y-6">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-6xl animate-pulse shadow-2xl shadow-blue-500/20">🎙️</div>
            <h2 className="text-4xl font-black italic uppercase">Generador de Voz Genco</h2>
            <p className="text-slate-500 italic max-w-md">Convierte tus guiones en audios profesionales con IA para enviar por WhatsApp.</p>
            <button className="px-10 py-5 bg-blue-600 rounded-full font-black uppercase text-xs tracking-widest shadow-xl">Activar Micrófono</button>
          </div>
        )}

        {/* OTROS MÓDULOS */}
        {(tab === 'ia' || tab === 'stats') && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-600 italic">
            <p>Módulo de {tab} cargando desde Google Studio...</p>
          </div>
        )}
      </main>
    </div>
  );
}
