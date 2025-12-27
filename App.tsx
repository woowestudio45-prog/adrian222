import React, { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('mensajeria');
  const [numeros, setNumeros] = useState('');
  const [msg, setMsg] = useState('');
  const [archivo, setArchivo] = useState<string>('');

  // TEXTOS PREDETERMINADOS RECUPERADOS Y COMPLETOS
  const plantillas = {
    sr: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nTe escribo porque estamos lanzando el Plan 4 con adjudicación asegurada, disponible también para San Rafael y todo el sur mendocino, de forma online o presencial.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También disponibles Compass, Commander, RAM Renegade y la nueva RAM Dakota\nEn todos los casos, la unidad se adjudica en la cuota 4, sin sorteos ni licitaciones.\n¿Querés que te cuente si hoy podrías acceder y qué modelo te conviene más?",
    
    mza_base: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM en Genco Automotores Mendoza.\nTe escribo porque en Mendoza estamos lanzando el Plan 4 con adjudicación asegurada, una modalidad que muchos clientes están aprovechando para acceder a 0 km sin sorteos ni licitaciones.\n\n👉 Jeep Renegade desde $250.000 + DNI\n👉 También Compass, Commander, RAM Renegade y la nueva RAM Dakota\nLa unidad se adjudica en la cuota 4 en todos los casos.\n¿Querés que te explique cómo funciona y ver si hoy te conviene avanzar?",
    
    post_venta: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de Jeep y RAM – Genco Automotores Mendoza.\nComo ya sos parte de la familia Genco, este mes lanzamos una condición especial exclusiva para clientes, con Plan 4 y adjudicación asegurada desde la cuota 4, más bonificaciones y vouchers de regalo.\n\nHoy incluso podés ingresar a una Jeep Renegade Sport desde $250.000, y también hay opciones en Compass, Commander y RAM.\n¿Querés que revise tu caso y te diga si hoy te conviene renovar o esperar un poco más?",
    
    capital: "Hola, ¿cómo estás?\n\nSoy Adrián, asesor comercial de ventas especiales de Jeep y RAM en Genco Automotores Mendoza.\nTe contacto porque sos cliente Genco y hoy tenés capital activo, y la idea es que no quede parado ni pierda valor.\nJustamente por eso lanzamos una alternativa especial para clientes, que permite reaprovechar ese capital e ingresar en un Plan 4 con adjudicación asegurada desde la cuota 4, sumando bonificaciones y vouchers de regalo.\n\nIncluso hoy se puede ingresar a una Jeep Renegade Sport desde $250.000, sin empezar de cero.\n¿Querés que revise tu situación y te diga cuál es la mejor opción hoy para vos?"
  };

  const ejecutarEnvioDirecto = () => {
    const lista = numeros.split(',').map(n => n.trim().replace(/\D/g, ''));
    if (!lista.length || !msg) return alert("⚠️ Cargá números y seleccioná un mensaje");

    lista.forEach((num, i) => {
      let fNum = num.startsWith('54') ? num : '549' + num;
      setTimeout(() => {
        // Enlace directo a WhatsApp Web
        const url = `https://web.whatsapp.com/send?phone=${fNum}&text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
      }, i * 4000); 
    });
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      
      {/* SIDEBAR PROFESIONAL */}
      <nav className="w-80 bg-[#070e1e] border-r border-white/5 p-8 flex flex-col gap-6 shadow-2xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black text-blue-500 italic tracking-tighter">JEEMIA</h1>
          <span className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">Genco Edition</span>
        </div>
        
        <div className="flex flex-col gap-3">
          <button onClick={() => setTab('mensajeria')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'mensajeria' ? 'bg-blue-600 shadow-lg shadow-blue-900/40' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">🚀</span>
            <span className="font-black text-xs tracking-widest uppercase">Mensajería</span>
          </button>
          <button onClick={() => setTab('voz')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'voz' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">🎙️</span>
            <span className="font-black text-xs tracking-widest uppercase">Texto a Voz</span>
          </button>
          <button onClick={() => setTab('stats')} className={`flex items-center gap-4 p-5 rounded-2xl transition-all ${tab === 'stats' ? 'bg-blue-600' : 'hover:bg-white/5 text-slate-400'}`}>
            <span className="text-2xl">📈</span>
            <span className="font-black text-xs tracking-widest uppercase">Estadísticas</span>
          </button>
        </div>
        <div className="mt-auto p-4 bg-slate-900/50 rounded-2xl border border-white/5 text-center">
          <p className="text-[9px] text-blue-400 font-bold uppercase tracking-widest italic">Adrián Genco</p>
        </div>
      </nav>

      {/* CONTENIDO */}
      <main className="flex-1 p-12 bg-slate-950 overflow-y-auto">
        {tab === 'mensajeria' && (
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase">Consola de Envío</h2>
            
            <div className="bg-slate-900/40 p-10 rounded-[50px] border border-white/5 space-y-8 shadow-2xl backdrop-blur-md">
              
              {/* 1. NÚMEROS */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-blue-500 uppercase tracking-[0.2em] ml-4">1. Lista de Contactos (Separados por coma)</label>
                <textarea value={numeros} onChange={(e) => setNumeros(e.target.value)} className="w-full h-24 bg-slate-950 border border-white/10 rounded-3xl p-6 text-blue-300 font-mono text-lg outline-none focus:border-blue-500/50 transition-all shadow-inner" placeholder="Ej: 2604105595, 2615999995..." />
              </div>

              {/* 2. BOTONES COLORIDOS Y MENSAJE */}
              <div className="space-y-4">
                <label className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em] ml-4 block font-bold">2. Elegir Guion de Venta</label>
                <div className="grid grid-cols-4 gap-3">
                  <button onClick={() => setMsg(plantillas.sr)} className="p-4 bg-orange-600 hover:bg-orange-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg transition-all border border-white/10">📍 San Rafael</button>
                  <button onClick={() => setMsg(plantillas.mza_base)} className="p-4 bg-purple-600 hover:bg-purple-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg transition-all border border-white/10">🍷 Mza Base</button>
                  <button onClick={() => setMsg(plantillas.post_venta)} className="p-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg transition-all border border-white/10">👤 Post Venta</button>
                  <button onClick={() => setMsg(plantillas.capital)} className="p-4 bg-amber-600 hover:bg-amber-500 rounded-2xl text-[10px] font-black uppercase italic shadow-lg transition-all border border-white/10">💰 Mza Capital</button>
                </div>
                <textarea value={msg} onChange={(e) => setMsg(e.target.value)} className="w-full h-80 bg-slate-950 border border-white/10 rounded-[40px] p-8 text-white text-xl outline-none leading-relaxed shadow-inner focus:border-emerald-500/50 transition-all resize-none" placeholder="El guion aparecerá aquí..." />
              </div>

              {/* 3. ADJUNTOS */}
              <div className="space-y-3">
                <label className="text-[11px] font-black text-purple-500 uppercase tracking-[0.2em] ml-4 font-bold">3. Adjuntar Catálogo o JPG</label>
                <div className="p-6 bg-slate-950 border-2 border-dashed border-slate-800 rounded-[30px] flex justify-between items-center group hover:border-purple-500/50 transition-all">
                  <input type="file" onChange={(e) => setArchivo(e.target.files?.[0].name || '')} className="text-xs text-slate-500 cursor-pointer" />
                  <span className="text-[10px] font-black text-slate-400 uppercase bg-slate-900 px-4 py-2 rounded-full">{archivo || 'Seleccionar Archivo'}</span>
                </div>
              </div>

              {/* BOTÓN ENVIAR (AJUSTADO A TAMAÑO NORMAL) */}
              <div className="flex justify-center pt-4">
                <button onClick={ejecutarEnvioDirecto} className="w-full max-w-2xl py-6 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-[30px] text-2xl shadow-xl shadow-emerald-900/30 transition-all active:scale-95 uppercase italic tracking-tighter">
                  Iniciar Envío Directo
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VISTA PREVIA TEXTO A VOZ */}
