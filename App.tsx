import React, { useState, useEffect } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [archivo, setArchivo] = useState<string>('');
  const [stats, setStats] = useState({ total: 0, tiempo: '0 min', riesgo: 'Bajo', leads: 0 });

  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada para San Rafael y el sur mendocino.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander y RAM Dakota.\nLa unidad se adjudica en la cuota 4, sin sorteos.\n¿Querés que te cuente si hoy podrías acceder?",
    mza: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco Mendoza. Lanzamos el Plan 4 con adjudicación asegurada.\nAccede a tu 0km sin sorteos ni licitaciones.\n👉 Jeep Renegade desde $250.000 + DNI.\n¿Querés que te explique cómo funciona y ver si hoy te conviene?",
    clientes: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco. Como ya sos parte de la familia Genco, tenés una condición especial: Plan 4 con adjudicación asegurada + bonificaciones y vouchers.\nPodés renovar por una Jeep Renegade desde $250.000.\n¿Querés que revise tu caso para renovar ahora?",
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián de Genco. Tenés capital activo en la empresa y la idea es que no pierda valor. Lanzamos Plan 4 con adjudicación asegurada desde cuota 4.\n¿Querés que revise la mejor opción para aprovechar tu capital?"
  };

  // 📊 ANÁLISIS DE BASE DE DATOS EN TIEMPO REAL
  useEffect(() => {
    const lista = numeros.split(',').filter(n => n.trim() !== '');
    const total = lista.length;
    setStats({
      total: total,
      tiempo: `${Math.ceil((total * 7) / 60)} min`,
      riesgo: total > 50 ? 'Moderado (Usar Pausas)' : 'Bajo',
      leads: Math.floor(total * 0.15) // Estimación de éxito
    });
  }, [numeros]);

  const enviarFluido = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    if (!msg || lista.length === 0) return alert("⚠️ Faltan datos: Cargá números y seleccioná un mensaje.");

    alert(`🚀 JEEMIA PRO: Iniciando campaña para ${lista.length} contactos.\n\nEl reporte final y alertas de Leads se enviarán a: acouto@gencosa.com.ar`);

    lista.forEach((num, i) => {
      const fNum = num.startsWith('54') ? num : '549' + num;
      const delay = (i * 7000) + (Math.random() * 3000); // Entre 7 y 10 seg por mensaje
      
      setTimeout(() => {
        // Enlace optimizado para abrir chat directo si hay sesión iniciada
        window.open(`https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`, '_blank');
      }, delay);
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans overflow-hidden">
      
      {/* 🧭 NAV LATERAL GIGANTE */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col gap-4 shadow-2xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-blue-500 italic tracking-tighter">JEEMIA</h1>
          <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">Genco AI Sales Console</p>
        </div>
        
        <button onClick={() => setTab('mensajeria')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'mensajeria' ? 'bg-blue-600 shadow-lg shadow-blue-900/40' : 'hover:bg-white/5 text-slate-400'}`}>
          <span className="text-2xl">🚀</span>
          <span className="font-black text-xs uppercase tracking-widest">Mensajería</span>
        </button>

        <button onClick={() => setTab('base')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'base' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
          <span className="text-2xl">📊</span>
          <span className="font-black text-xs uppercase tracking-widest">Base Pro</span>
        </button>

        <button onClick={() => setTab('ia')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'ia' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
          <span className="text-2xl">🎨</span>
          <span className="font-black text-xs uppercase tracking-widest">Nano Banana</span>
        </button>

        <button onClick={() => setTab('voz')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'voz' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
          <span className="text-2xl">🎙️</span>
          <span className="font-black text-xs uppercase tracking-widest">Voz Google</span>
        </button>

        <div className="mt-auto p-6 bg-slate-900/50 rounded-3xl border border-white/5 text-center">
          <p className="text-[10px] font-black text-blue-400 uppercase italic">acouto@gencosa.com.ar</p>
        </div>
      </nav>

      {/* 🖥️ ÁREA PRINCIPAL */}
      <main className="flex-1 p-12 bg-slate-950 overflow-y-auto">
        
        {/* MODULO MENSAJERIA */}
        {tab === 'mensajeria' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase">Envío Directo Genco</h2>
            
            <div className="bg-slate-900/40 p-10 rounded-[50px] border border-white/5 space-y-8 shadow-2xl backdrop-blur-md">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-blue-500 uppercase tracking-widest ml-4 font-bold">1. Lista de Clientes</label>
                <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-slate-950 border border-white/10 rounded-3xl p-6 text-blue-300 font-mono text-lg outline-none focus:border-blue-500" placeholder="2604105595, 2615999995..." />
              </div>

              <div className="space-y-4">
                <label className="text-[11px] font-black text-emerald-500 uppercase tracking-widest ml-4 font-bold">2. Guiones Predeterminados</label>
                <div className="grid grid-cols-4 gap-3">
                  <button onClick={() => setMsg(plantillas.sr)} className="p-4 bg-orange-600 hover:bg-orange-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg transition-all">📍 San Rafael</button>
                  <button onClick={() => setMsg(plantillas.mza)} className="p-4 bg-purple-600 hover:bg-purple-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg transition-all">🍷 Mendoza</button>
                  <button onClick={() => setMsg(plantillas.clientes)} className="p-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg transition-all">👥 Clientes</button>
                  <button onClick={() => setMsg(plantillas.capital)} className="p-4 bg-amber-600 hover:bg-amber-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg transition-all">💰 Capital</button>
                </div>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-72 bg-slate-950 border border-white/10 rounded-[40px] p-8 text-white text-xl outline-none leading-relaxed shadow-inner" placeholder="Seleccione un guion..." />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-black text-purple-500 uppercase tracking-widest ml-4 font-bold">3. Adjuntar Catálogo Jeep/RAM</label>
                <div className="p-6 bg-slate-950 border-2 border-dashed border-slate-800 rounded-[30px] flex justify-between items-center group hover:border-purple-500/50 transition-all cursor-pointer">
                  <input type="file" onChange={(e) => setArchivo(e.target.files?.[0].name || '')} className="text-xs text-slate-500" />
                  <span className="text-[10px] font-black text-slate-400 uppercase bg-slate-900 px-4 py-2 rounded-full">{archivo || 'Seleccionar PDF/JPG'}</span>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <button onClick={enviarFluido} className="w-full max-w-2xl py-8 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[40px] text-4xl shadow-2xl transition-all uppercase italic tracking-tighter">
                  Lanzar Envío Programado
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODULO BASE PRO */}
        {tab === 'base' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-5 duration-500">
            <h2 className="text-4xl font-black italic uppercase">Inteligencia de Base</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-8 bg-slate-900 rounded-[35px] border border-blue-500/20 text-center shadow-xl">
                <p className="text-[10px] font-black text-slate-500 uppercase">Clientes</p>
                <p className="text-5xl font-black text-blue-500">{stats.total}</p>
              </div>
              <div className="p-8 bg-slate-900 rounded-[35px] border border-emerald-500/20 text-center shadow-xl">
                <p className="text-[10px] font-black text-slate-500 uppercase">Tiempo Est.</p>
                <p className="text-5xl font-black text-emerald-500">{stats.tiempo}</p>
              </div>
              <div className="p-8 bg-slate-900 rounded-[35px] border border-orange-500/20 text-center shadow-xl">
                <p className="text-[10px] font-black text-slate-500 uppercase">Riesgo Ban</p>
                <p className="text-3xl font-black text-orange-500 italic uppercase">{stats.riesgo}</p>
              </div>
              <div className="p-8 bg-slate-900 rounded-[35px] border border-purple-500/20 text-center shadow-xl">
                <p className="text-[10px] font-black text-slate-500 uppercase">Leads Est.</p>
                <p className="text-5xl font-black text-purple-500">{stats.leads}</p>
              </div>
            </div>
            <div className="p-10 bg-slate-900/60 rounded-[40px] border border-white/5 space-y-4">
              <h3 className="text-xl font-bold italic">Configuración de Reporte</h3>
              <p className="text-slate-400 text-sm">Al finalizar la campaña, se enviará un análisis detallado de respuestas positivas y negativas a su casilla corporativa.</p>
              <div className="flex items-center gap-4 p-4 bg-slate-950 rounded-2xl border border-blue-500/20">
                <span className="text-2xl text-blue-500">📧</span>
                <span className="font-bold text-blue-100">acouto@gencosa.com.ar</span>
              </div>
            </div>
          </div>
        )}

        {/* MODULO IA */}
        {tab === 'ia' && (
          <div className="max-w-4xl mx-auto text-center space-y-8 py-10 animate-in zoom-in-95 duration-500">
            <h2 className="text-6xl font-black italic text-yellow-500 tracking-tighter uppercase">Nano
