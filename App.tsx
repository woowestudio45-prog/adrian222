import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [archivo, setArchivo] = useState<string>('');

  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También disponibles Compass, Commander, RAM Renegade y la nueva RAM Dakota.\nEn todos los casos, la unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder?",
    mza_base: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada para acceder a tu 0 km sin sorteos ni licitaciones.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota.\nLa unidad se adjudica en la cuota 4.\n¿Querés que te explique cómo funciona?",
    post_venta: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, lanzamos una condición especial para clientes: Plan 4 con adjudicación asegurada + bonificaciones y vouchers de regalo.\n\nPodés renovar por una Jeep Renegade Sport desde $250.000.\n¿Querés que revise tu caso y te diga si te conviene renovar?",
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales en Genco Mendoza.\nTe contacto porque tenés capital activo en Genco y la idea es que no pierda valor. Lanzamos un Plan 4 con adjudicación asegurada desde la cuota 4.\n\nPodés ingresar a una Jeep Renegade Sport desde $250.000 sin empezar de cero.\n¿Querés que revise cuál es la mejor opción?"
  };

  const ejecutarEnvioDirecto = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    if (!lista.length || !msg) return alert("Cargá números y seleccioná un mensaje");

    lista.forEach((num, i) => {
      let fNum = num.startsWith('54') ? num : '549' + num;
      setTimeout(() => {
        // Enlace optimizado para intentar saltar la pantalla de confirmación
        window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, i * 4000); 
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      
      {/* SIDEBAR GRANDE */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col gap-6 shadow-2xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-blue-500 italic tracking-tighter uppercase">JEEMIA PRO</h1>
          <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Genco Sales Console</p>
        </div>
        <button onClick={() => setTab('mensajeria')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'mensajeria' ? 'bg-blue-600 shadow-lg' : 'hover:bg-white/5 text-slate-400'}`}>
          <span className="text-2xl">🚀</span>
          <span className="font-black text-xs uppercase tracking-widest">Mensajería IA</span>
        </button>
        <button onClick={() => setTab('voz')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'voz' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
          <span className="text-2xl">🎙️</span>
          <span className="font-black text-xs uppercase tracking-widest">Voz Inteligente</span>
        </button>
        <button onClick={() => setTab('stats')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'stats' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
          <span className="text-2xl">📈</span>
          <span className="font-black text-xs uppercase tracking-widest">Estadísticas</span>
        </button>
      </nav>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 p-12 bg-slate-950 overflow-y-auto">
        {tab === 'mensajeria' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase">Consola de Envío</h2>
            <div className="bg-slate-900/40 p-10 rounded-[50px] border border-white/5 space-y-8 shadow-2xl backdrop-blur-xl">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-blue-500 uppercase tracking-widest ml-4">1. Lista de Números</label>
                <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-slate-950 border border-white/10 rounded-3xl p-6 text-blue-300 font-mono outline-none" placeholder="2604105595, 2615999995..." />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black text-emerald-500 uppercase tracking-widest ml-4">2. Elegir Guion Genco</label>
                <div className="grid grid-cols-4 gap-3">
                  <button onClick={() => setMsg(plantillas.sr)} className="p-4 bg-orange-600 hover:bg-orange-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg">📍 San Rafael</button>
                  <button onClick={() => setMsg(plantillas.mza_base)} className="p-4 bg-purple-600 hover:bg-purple-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg">🍷 Mza Base</button>
                  <button onClick={() => setMsg(plantillas.post_venta)} className="p-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg">👤 Post Venta</button>
                  <button onClick={() => setMsg(plantillas.capital)} className="p-4 bg-amber-600 hover:bg-amber-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg">💰 Mza Capital</button>
                </div>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-80 bg-slate-950 border border-white/10 rounded-[40px] p-8 text-white text-xl outline-none leading-relaxed" placeholder="El guion completo aparecerá aquí..." />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black text-purple-500 uppercase tracking-widest ml-4">3. Catálogo Adjunto</label>
                <div className="p-6 bg-slate-950 border-2 border-dashed border-slate-800 rounded-[30px] flex justify-between items-center group hover:border-purple-500/50 transition-all">
                  <input type="file" onChange={(e) => setArchivo(e.target.files?.[0].name || '')} className="text-xs text-slate-500 cursor-pointer" />
                  <span className="text-[10px] font-black text-slate-400 uppercase bg-slate-900 px-4 py-2 rounded-full border border-white/5">{archivo || 'Seleccionar Archivo'}</span>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button onClick={ejecutarEnvioDirecto} className="w-full max-w-xl py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[35px] text-3xl shadow-xl transition-all uppercase italic tracking-tighter">
                  Iniciar Envío
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === 'voz' && (
          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-[60vh] text-center space-y-6">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center text-6xl animate-pulse shadow-2xl">🎙️</div>
            <h2 className="text-4xl font-black italic uppercase">Voz Inteligente</h2>
            <p className="text-slate-500 italic max-w-md">Módulo listo para convertir tus textos en audios profesionales.</p>
          </div>
        )}
      </main>
    </div>
  );
}
